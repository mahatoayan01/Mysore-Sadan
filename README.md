# Mysore Sadan Pure Veg Restaurant - Official Website

A production-quality, responsive single-page web application for **Mysore Sadan Pure Veg Restaurant**, located near Nagnath Par & Perugate in Sadashiv Peth, Pune.

Built with **React, Vite, React Router, and Tailwind CSS v3**. Configured for zero-error static hosting on **Netlify**.

---

## 🚀 Features

- **100% Pure Vegetarian Branding**: Clean green veg indicators, authentic South Indian aesthetic, warm terracotta, golden turmeric, and crisp banana-leaf palette.
- **Real Google Maps Data**: Authentic business name, verified phone number (`+91 86002 02030`), address, 7-day operating hours (`7:30 AM – 11:30 PM`), and customer reviews.
- **Complete Route Architecture**:
  1. **Home (`/`)**: Hero with CTAs, About story, Popular dishes, Promotional offers, Gallery, Hours, Table booking form, FAQ accordion, Instagram posts, and Customer reviews.
  2. **Menu (`/menu`)**: Live search, category tabs, dietary filters, price badges, and full cart quantity controls.
  3. **Location (`/location`)**: Interactive Google Map embed, full address, landmark & parking guide, and direct "Get Directions" link.
  4. **Contact (`/contact`)**: Instant WhatsApp inquiry generator (no backend needed), phone call triggers, and address info.
  5. **Cart & Checkout (`/cart`)**: Delivery vs. pickup selector, contact form, item breakdown, and simulated demo payment (UPI, Card, Cash on Delivery) with real-time `localStorage` persistence.
  6. **Owner Login (`/owner-login`)**: Client-side authentication with displayed demo credentials (`mysoreowner` / `pureveg2026`).
  7. **Owner Dashboard (`/owner`)**: Summary metrics (total orders, estimated revenue, pending kitchen orders), searchable & filterable order table with status controls, payment audit trail, and live order merge.
  8. **Not Found (`*`)**: Custom 404 page with quick navigation back to home.
- **Global Actions**: Floating WhatsApp & Call button on every page, sticky header with mobile drawer, and cart badge counter.
- **Netlify Ready**: Pre-configured `netlify.toml` and `public/_redirects` for single-page routing without 404 on page refreshes.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router 6 (Code-split with `React.lazy` & `Suspense`)
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Storage**: Browser `localStorage` with fail-safe error handling

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or v20+ recommended)
- npm or pnpm

### Installation & Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```
The application will run locally at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build
```bash
# Build optimized static bundle for Netlify
npm run build

# Preview production build locally
npm run preview
```
The output is generated into the `dist/` directory.

---

## 🌐 Netlify Deployment

1. **Deploy via Netlify CLI**:
   ```bash
   npx netlify deploy --prod --dir=dist
   ```
2. **Deploy via Git**:
   - Push repository to GitHub/GitLab.
   - Link project in Netlify dashboard.
   - Build settings are pre-configured in `netlify.toml`:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
     - **Node Version**: `20`
     - **SPA Redirect**: `/*` to `/index.html` (200 status)

---

## 📂 Where to Edit Data and Images

All data is decoupled into structured JavaScript files in `src/data/`:

| Data / Content | File Location | Description |
| :--- | :--- | :--- |
| **Restaurant Profile & Hours** | `src/data/restaurant.js` | Official address, phone number, opening hours, missing info list, and owner credentials. |
| **Menu Items & Pricing** | `src/data/menu.js` | Dishes, categories, descriptions, prices, sample item flags, and image paths. |
| **Customer Reviews** | `src/data/reviews.js` | Verified reviews from Google Maps, overall ratings, and review placeholders. |
| **Instagram Posts** | `src/data/instagram.js` | 6 social tiles, captions, likes, and profile handle. |
| **Frequently Asked Questions** | `src/data/faqs.js` | Accordion questions covering pure veg guarantee, parking, timings, and payments. |
| **Promotional Offers** | `src/data/offers.js` | Active or sample promotional discounts and coupon codes. |
| **Photo Gallery** | `src/data/gallery.js` | Categorized photos (Food, Ambiance, Live Kitchen). |
| **Sample Orders & Payments** | `src/data/orders.js` | Pre-seeded sample order history for the Owner Dashboard. |

### Images Directory: `public/images/`
All imagery is stored locally (no external hotlinks):
- `public/images/hero/hero-mysore-sadan.webp`: Main homepage hero banner.
- `public/images/food/*.webp`: Dish photos (`ghee-garlic-roast-dosa.webp`, `mysore-masala-dosa.webp`, `steamed-idli-sambar.webp`, `medu-vada.webp`, `onion-uttappa.webp`, `upma.webp`, `pineapple-shira.webp`, `filter-coffee.webp`).
- `public/images/interior/dining-hall.webp`: Dining hall photo.
- `public/images/exterior/restaurant-exterior.webp`: Twilight restaurant storefront.
- `public/images/gallery/live-dosa-counter.webp`: Live kitchen dosa griddle shot.
- `public/images/instagram/insta-*.webp`: 6 social feed tiles.

---

## 🔒 Owner Portal Credentials

- **Route**: `/owner-login`
- **Username**: `mysoreowner`
- **Password**: `pureveg2026`
*(Note: These are demo credentials stored in `src/data/restaurant.js` for demonstration purposes).*
