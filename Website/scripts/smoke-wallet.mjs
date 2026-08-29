/**
 * Routing smoke test for Cafe Q.
 *
 * Renders the real routed page components under MemoryRouter via Vite SSR
 * and asserts expected content appears. Also asserts App.jsx registers the
 * routes and navbars link to them.
 *
 * Run: node scripts/smoke-wallet.mjs
 */
import { createServer } from "vite";
import { readFile } from "node:fs/promises";
import { MemoryRouter } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import React from "react";

const server = await createServer({
  root: process.cwd(),
  server: { middlewareMode: true },
  logLevel: "error",
  appType: "custom",
});

async function renderPage(modulePath, url, needles) {
  const [{ default: Page }, { CartProvider }] = await Promise.all([
    server.ssrLoadModule(modulePath),
    server.ssrLoadModule("/src/context/CartContext.jsx"),
  ]);
  const html = ReactDOMServer.renderToString(
    React.createElement(
      MemoryRouter,
      { initialEntries: [url] },
      React.createElement(CartProvider, null, React.createElement(Page))
    )
  );
  const missing = needles.filter((n) => !html.includes(n));
  console.log(`${missing.length === 0 ? "PASS" : "FAIL"} ${url} (${modulePath})`);
  if (missing.length > 0) {
    console.log("  missing:", missing.join(", "));
    process.exitCode = 1;
  }
}

try {
  // Functional check of the real walletStore (Test 5): addMoney must update
  // balance and create a matching transaction.
  const store = await server.ssrLoadModule("/src/data/walletStore.js");
  const result = store.addMoney(100);
  const okAdd =
    result.balance === 100 &&
    result.transaction.type === "added" &&
    result.transaction.amount === 100 &&
    result.transaction.balanceAfter === 100;
  console.log(`${okAdd ? "PASS" : "FAIL"} walletStore.addMoney(100) updates balance + transaction`);
  if (!okAdd) process.exitCode = 1;

  await renderPage("/src/pages/Wallet/Wallet.jsx", "/wallet", [
    "Wallet Balance",
    "Add Money to Wallet",
    "Transaction History",
    "Search transactions",
    "Need help?",
  ]);
  await renderPage("/src/pages/Orders/MyOrders.jsx", "/my-orders", [
    "Search by Order ID",
    "Upcoming",
    "Preparing",
    "Cancelled",
  ]);
  await renderPage("/src/pages/aboutus.jsx", "/about-us", [
    "About Cafe Q",
    "Good Food.",
    "Our Story",
    "Why Choose Cafe Q?",
    "Happy Students",
    "make every meal a great experience",
    "hello@cafeq.in",
  ]);
  await renderPage("/src/pages/Auth/Login.jsx", "/login", [
    "Welcome Back",
    "Login to continue to Cafe Q",
    "Email or Phone",
    "Remember me",
    "Forgot Password?",
    "or continue with",
    "have an account?",
  ]);

  // Static assertions on routing wiring.
  const appSource = await readFile("src/App.jsx", "utf8");
  const walletRouteOk =
    appSource.includes('path="/wallet"') &&
    appSource.includes("pages/Wallet/Wallet.jsx");
  console.log(`${walletRouteOk ? "PASS" : "FAIL"} App.jsx registers <Route path="/wallet"> → Wallet.jsx`);
  if (!walletRouteOk) process.exitCode = 1;

  const pagesWithNav = [
    "src/pages/Home/Home.jsx",
    "src/pages/Menu/MealDetails.jsx",
    "src/pages/Menu/fooddetails.jsx",
    "src/pages/Cart/Cart.jsx",
    "src/pages/Checkout/Checkout.jsx",
    "src/pages/Payment/Payment.jsx",
    "src/pages/Orders/OrderSuccess.jsx",
    "src/pages/ticketdetails.tsx",
    "src/pages/Orders/MyOrders.jsx",
    "src/pages/Orders/OrderDetails.jsx",
  ];
  // The shared Navbar must own every internal link.
  const navSrc = await readFile("src/components/Navbar.jsx", "utf8");
  const navLinksOk =
    ['"/"', '"/menu"', '"/my-orders"', '"/wallet"', '"/about-us"'].every(
      (t) => navSrc.includes(t)
    ) && navSrc.includes("NavLink");
  console.log(
    `${navLinksOk ? "PASS" : "FAIL"} components/Navbar.jsx uses NavLink for / /menu /my-orders /wallet /about-us`
  );
  if (!navLinksOk) process.exitCode = 1;

  for (const file of pagesWithNav) {
    const src = await readFile(file, "utf8");
    const usesNavbar = src.includes("<Navbar");
    const noInlineHeader = !src.includes("<header");
    const ok = usesNavbar && noInlineHeader;
    console.log(
      `${ok ? "PASS" : "FAIL"} ${file} uses shared Navbar (uses=${usesNavbar}, inline-header-removed=${noInlineHeader})`
    );
    if (!ok) process.exitCode = 1;
  }
} finally {
  await server.close();
}
