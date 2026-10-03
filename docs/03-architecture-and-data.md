# Architecture & Data Model

## 1. Project Structure
The project is split into two top-level folders: `client/` and `server/`. Currently, only the `client/` is being built.

```text
<project-root>/
  netlify.toml
  client/
    package.json, vite.config.ts, tsconfig, Tailwind config, index.html
    .env.example
    src/
      assets/           (logo, placeholder images)
      components/
        layout/         (Header, Footer, AnnouncementBar, MobileMenu, CategoryMenu, PageShell)
        ui/             (Button, Input, Modal, Drawer, Badge, Skeleton, Toast, etc.)
        product/        (ProductCard, ProductGrid, Gallery, SizeSelector, SizeGuide, PairsWith)
        cart/           (CartDrawer, CartItem, FreeShippingBar)
        capsule/        (CapsuleBuilder)
      pages/
      data/             (categories with subcategories, placeholder products, store config)
      services/         (mock service layer)
      store/            (Zustand stores)
      hooks/
      lib/              (formatting, shipping helpers, motion tokens)
      styles/           (tokens, global styles)
      types/
  server/               (reserved for backend, empty with README)
```

## 2. Pages and Routes
- `/` - Home
- `/shop` - All products
- `/shop/tops` - Tops
- `/shop/bottoms` - Bottoms
- `/shop/tops/:subcategory` - Tops subcategory
- `/shop/bottoms/:subcategory` - Bottoms subcategory
- `/product/:slug` - Product detail
- `/capsule` - Build your capsule
- `/cart` - Cart
- `/checkout` - Checkout
- `/account` - Account (login, register, profile)
- `/wishlist` - Wishlist
- `/search` - Search results
- `/about` - About
- `/contact` - Contact
- `/shipping-returns` - Shipping & Returns
- `/garment-care` - Garment Care
- `/privacy` - Privacy Policy
- `*` - 404

## 3. Data Model

### Product
- `id`, `slug` (Unique)
- `name`
- `category` ('tops' or 'bottoms')
- `subcategory` (e.g., Henleys, Joggers)
- `price` (Whole naira ₦)
- `colours` (List of name and swatch value)
- `fabric`, `fitNotes` (Text)
- `images` (List, per colour where possible)
- `pairsWith` (List of product IDs from the opposite category)
- `variants` (Purchasable combinations of size and colour)
- `isNew`, `createdAt` (For sorting)

### Variant
- `id` (Unique)
- `size`
- `colour`
- `stockStatus` ('in_stock', 'low_stock', 'sold_out')

### Store Config
Contains the free-shipping threshold (₦75,000), shipping zones/fees, announcements, and contact details.

## 4. Mock Service Layer
All data fetching in the front-end phase must be routed through `client/src/services` (e.g., `getProducts`). Components must never read the placeholder data files directly. The services must return promises with simulated delays to mimic real API calls.
