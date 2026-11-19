import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

// Simple static server with SPA fallback to test Netlify behavior
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  
  let filePath = path.join(distDir, reqPath);
  
  // If file doesn't exist or is a directory, fallback to index.html (SPA redirect)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.webp': 'image/webp',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
  };

  const contentType = contentTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error: ' + err.code);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const PORT = 4173;

server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Test server running on http://127.0.0.1:${PORT}`);

  const routesToTest = [
    '/',
    '/menu',
    '/location',
    '/contact',
    '/cart',
    '/owner-login',
    '/owner',
    '/non-existent-page-test'
  ];

  let hasError = false;

  for (const route of routesToTest) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}${route}`);
      const text = await response.text();
      const status = response.status;
      
      const containsRoot = text.includes('<div id="root">');
      const containsAppScript = text.includes('/assets/index-');
      
      if (status === 200 && containsRoot && containsAppScript) {
        console.log(`[PASS] Route ${route} -> Status ${status}, SPA fallback verified, root div present`);
      } else {
        console.error(`[FAIL] Route ${route} -> Status ${status}, root=${containsRoot}, script=${containsAppScript}`);
        hasError = true;
      }
    } catch (err) {
      console.error(`[ERROR] Route ${route} failed:`, err.message);
      hasError = true;
    }
  }

  // Also verify all images in dist
  console.log('\n--- Verifying Public Asset Files in dist/ ---');
  const checkAssets = [
    'images/hero/hero-mysore-sadan.webp',
    'images/food/ghee-garlic-roast-dosa.webp',
    'images/food/mysore-masala-dosa.webp',
    'images/food/steamed-idli-sambar.webp',
    'images/food/medu-vada.webp',
    'images/food/onion-uttappa.webp',
    'images/food/upma.webp',
    'images/food/pineapple-shira.webp',
    'images/food/filter-coffee.webp',
    'images/interior/dining-hall.webp',
    'images/exterior/restaurant-exterior.webp',
    'images/gallery/live-dosa-counter.webp',
    '_redirects'
  ];

  for (const asset of checkAssets) {
    const fullPath = path.join(distDir, asset);
    if (fs.existsSync(fullPath)) {
      const size = fs.statSync(fullPath).size;
      console.log(`[PASS] Asset dist/${asset} exists (${(size / 1024).toFixed(1)} KB)`);
    } else {
      console.error(`[FAIL] Asset dist/${asset} NOT FOUND`);
      hasError = true;
    }
  }

  server.close(() => {
    console.log(`\nTest server closed. Overall result: ${hasError ? 'FAILED' : 'ALL TESTS PASSED'}`);
    process.exit(hasError ? 1 : 0);
  });
});
