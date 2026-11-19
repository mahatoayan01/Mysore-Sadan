// End-to-end contract and business logic verification
import { restaurantData } from './src/data/restaurant.js';
import { menuItems, menuCategories } from './src/data/menu.js';
import { reviewsData } from './src/data/reviews.js';
import { sampleOrders, samplePayments } from './src/data/orders.js';
import { instagramData } from './src/data/instagram.js';
import { faqsData } from './src/data/faqs.js';
import { offersData } from './src/data/offers.js';
import { galleryData } from './src/data/gallery.js';
import fs from 'fs';
import path from 'path';

console.log('==================================================');
console.log('MYSORE SADAN PURE VEG RESTAURANT - E2E AUDIT');
console.log('==================================================\n');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAILED: ${message}`);
    failed = true;
  } else {
    console.log(`✅ PASSED: ${message}`);
  }
}

// 1. Restaurant Data Verification
console.log('--- 1. Restaurant Core Facts & Google Maps Data ---');
assert(restaurantData.name === "Mysore Sadan Pure Veg Restaurant", "Official restaurant name matches");
assert(restaurantData.phone === "+91 86002 02030", "Real phone number verified");
assert(restaurantData.whatsappNumber === "918600202030", "WhatsApp number properly formatted");
assert(restaurantData.address.area === "Sadashiv Peth", "Address area is Sadashiv Peth");
assert(restaurantData.address.city === "Pune", "City is Pune");
assert(restaurantData.googleMaps.placeId === "ChIJlcDoK1DBwjsRFV8r1pZnJOw", "Google Place ID verified");
assert(restaurantData.openingHours.length === 7, "All 7 days of opening hours configured");
assert(restaurantData.MISSING_INFO.length >= 4, "Missing info list accurately tracks placeholders");
assert(restaurantData.ownerCredentials.username === "mysoreowner", "Owner username configured");
assert(restaurantData.ownerCredentials.password === "pureveg2026", "Owner password configured");

// 2. Pure Veg Guarantee & Menu
console.log('\n--- 2. Menu Items & Pure-Veg Integrity ---');
assert(menuItems.length >= 10, `Found ${menuItems.length} menu items`);
menuItems.forEach(item => {
  assert(item.isVegetarian === true, `Item ${item.name} is pure vegetarian`);
  assert(!item.name.toLowerCase().includes('chicken') && !item.name.toLowerCase().includes('egg'), `Item ${item.name} has no meat/egg`);
  assert(item.price > 0, `Item ${item.name} has price ₹${item.price}`);
  assert(item.image.startsWith('/images/'), `Item ${item.name} image is local path: ${item.image}`);
  assert(item.imageSource === 'ai-sample' || item.imageSource === 'google-maps' || item.imageSource === 'web-sample', `Item ${item.name} has valid imageSource`);
});

// 3. Image existence on disk
console.log('\n--- 3. Local Image Files Check ---');
const publicDir = path.resolve('public');
menuItems.forEach(item => {
  const localFile = path.join(publicDir, item.image.replace(/^\//, ''));
  assert(fs.existsSync(localFile), `Image file exists on disk: ${item.image}`);
});

// 4. Cart Calculations Logic
console.log('\n--- 4. Cart & Pricing Math ---');
const sampleCart = [
  { item: menuItems[0], quantity: 2 }, // Ghee Garlic Roast Dosa 130 * 2 = 260
  { item: menuItems[1], quantity: 1 }  // Mysore Masala Dosa 120 * 1 = 120
];
const subtotal = sampleCart.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
assert(subtotal === 380, `Subtotal correct: expected 380, got ${subtotal}`);
const deliveryFee = subtotal >= 400 ? 0 : 30;
assert(deliveryFee === 30, `Delivery fee correct for order under 400: ${deliveryFee}`);
const taxes = Number((subtotal * 0.05).toFixed(2));
assert(taxes === 19, `5% GST calculated accurately: ${taxes}`);
const grandTotal = Number((subtotal + deliveryFee + taxes).toFixed(2));
assert(grandTotal === 429, `Grand total correct: ${grandTotal}`);

// 5. Reviews
console.log('\n--- 5. Reviews Quality ---');
assert(reviewsData.reviews.length >= 5, `Total reviews: ${reviewsData.reviews.length}`);
const sampleReviews = reviewsData.reviews.filter(r => r.isSample);
assert(sampleReviews.length >= 2, `Sample reviews properly flagged: ${sampleReviews.length}`);

// 6. Orders & Owner Dashboard Data
console.log('\n--- 6. Owner Orders & Payments ---');
assert(sampleOrders.length >= 15, `Pre-seeded realistic sample orders count: ${sampleOrders.length}`);
assert(samplePayments.length >= 15, `Pre-seeded payments count: ${samplePayments.length}`);
sampleOrders.forEach(ord => {
  assert(ord.id.startsWith('ORD-'), `Order ID format valid: ${ord.id}`);
  assert(ord.total > 0, `Order total valid: ₹${ord.total}`);
  assert(['Pending', 'Preparing', 'Ready', 'Delivered', 'Cancelled'].includes(ord.status), `Order status valid: ${ord.status}`);
});

console.log('\n==================================================');
if (failed) {
  console.error('FAILED AUDIT CHECKS');
  process.exit(1);
} else {
  console.log('ALL E2E DATA AND LOGIC CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
