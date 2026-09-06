# The Shopping Cart

A React shopping cart app that fetches products from the [Fake Store API](https://fakestoreapi.com/), lets users browse items, view details, adjust quantities, and manage a cart — all with client-side routing.

## Features

- **Home page** — landing page with a hero-style background image.
- **Shop page** — browse all products in a responsive grid of mini cards.
- **Item details** — click any product to view its image, description, price, rating, and adjust quantity before adding it to the cart.
- **Cart page** — view all added items, increment/decrement quantities, remove items, and see a running total.
- **Client-side routing** — navigation between Home, Shop, and Cart without full page reloads, powered by React Router.

## Tech Stack

- **React** (functional components + hooks)
- **React Router (`react-router-dom`)** for client-side routing
- **Fake Store API** as the product data source
- Custom hooks for data fetching (`useAPI`)

## Project Structure

```
src/
├── api/
│   ├── fetchItemApi.jsx        # useAPI hook — fetches products from Fake Store API
│   └── fetchImageApi.jsx       # useImageURL hook — fetches the homepage background image
├── assets/                      # Static assets
├── components/
│   ├── Homepage.jsx             # Landing page
│   ├── Shop.jsx                  # Shop page — toggles between item list and item details
│   ├── ItemList.jsx              # Renders the grid of ItemMiniCard components
│   ├── ItemMiniCard.jsx          # Individual clickable product tile
│   ├── ItemDetails.jsx           # Detailed view of a selected product
│   └── Cart.jsx                  # Cart page — view/edit/remove cart items, shows total
├── style/
│   ├── app.css                   # Global layout, nav bar, resets
│   ├── homepage.css              # Home page styling
│   ├── itemList.css              # Product grid layout
│   ├── itemMiniCard.css          # Product tile styling
│   ├── itemDetails.css           # Item detail card styling
│   └── cart.css                  # Cart page styling
├── App.jsx                      # Root component — owns items/cart state, defines routes
├── App.test.jsx                 # Tests for App
├── index.css                    # Base/reset styles
└── main.jsx                     # Entry point — wraps App in BrowserRouter
```

## State Management

State is kept as close as possible to where it's needed, and lifted only when multiple components need to share it:

| State | Owned by | Why |
|---|---|---|
| `items` (product list + count) | `App` | Needed by both `Shop` (browsing) and passed down for `addToCart` |
| `selectedItem` / `selectedItemId` | `Shop` | Only `Shop`'s subtree cares which item is being viewed in detail |
| `cartItems` | `App` | Needed by both `Shop` (to add items) and `Cart` (to display/edit them) |
| Cart quantity edit logic (increment/decrement/remove) | `Cart` | Only the cart page needs to modify cart quantities directly |

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
npm install
```

### Running the app

```bash
npm run dev
```

The app will be available at the local address shown in your terminal (typically `http://localhost:5173` for Vite-based projects).

## Key Implementation Notes

- **Immutability**: all state updates create new objects/arrays (via spread syntax, `.map()`, `.filter()`) rather than mutating existing state directly, so React can correctly detect and re-render changes.
- **Derived state over duplicated state**: rather than storing a full copy of a "selected item," the app stores just its `id` and looks up the current version from the source array on each render — this avoids stale data when quantities change.
- **Controlled inputs**: quantity inputs are controlled by React state, not the DOM, keeping a single source of truth for each item's count.

## Possible Future Improvements

- Persist cart contents to `localStorage` so it survives a page refresh
- Add search/filter/sort functionality to the shop page
- Add a loading skeleton instead of a plain "Loading..." message
- Extract shared increment/decrement logic into a reusable helper to avoid duplication between `Shop` and `Cart`