# Cart UI Library

Small React + TypeScript component library that provides standardized UI components and a Cart (add/edit/delete) implementation.

## Features

- Components: `Button`, `Input`, `Modal`, `Card`
- Cart logic: `CartProvider`, `useCart`, `CartView` (UI for add/edit/delete)
- Buildable with `vite build` for use in other projects

## Install (for consuming project)

If published to a registry, install as a peer dependency consumer:

```
npm install cart-ui-library
npm install react react-dom
```

Or use the built `dist` folder directly (local linking or copying).

## Usage

Wrap your app with `CartProvider` and use `CartView` or `useCart`:

```tsx
import React from "react";
import { CartProvider, CartView } from "cart-ui-library";

function App() {
  return (
    <CartProvider>
      <CartView />
    </CartProvider>
  );
}

export default App;
```

## Build

Install dev deps then run:

```powershell
npm install
npm run build
```
