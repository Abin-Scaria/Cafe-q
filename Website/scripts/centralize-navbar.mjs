/**
 * One-time codemod: replaces each page's inline <header>...</header> navbar
 * with the shared <Navbar /> component and adds the import. Also strips the
 * now-unused Google-hosted LOGO_URL consts from pages whose only use was the
 * removed navbar. Run once from Website/: node scripts/centralize-navbar.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const files = [
  ["src/pages/Home/Home.jsx", true],
  ["src/pages/Menu/MealDetails.jsx", true],
  ["src/pages/Menu/fooddetails.jsx", true],
  ["src/pages/Cart/Cart.jsx", false],
  ["src/pages/Checkout/Checkout.jsx", false],
  ["src/pages/Payment/Payment.jsx", false],
  ["src/pages/Orders/OrderSuccess.jsx", false],
  ["src/pages/ticketdetails.tsx", false],
  ["src/pages/Orders/MyOrders.jsx", false],
  ["src/pages/Orders/OrderDetails.jsx", false],
  ["src/pages/Wallet/Wallet.jsx", false],
];

const headerRx = /<header[\s\S]*?<\/header>/;
const logoRx = /const LOGO_URL =\s*['"][^'"]*['"];?\r?\n?/;
const importRx = /^import .*$/m;

for (const [file, showCart] of files) {
  let src = readFileSync(file, "utf8");
  if (src.includes("<Navbar")) {
    console.log("SKIP (already uses Navbar):", file);
    continue;
  }
  const matches = src.match(new RegExp(headerRx.source, "g")) || [];
  if (matches.length !== 1) {
    console.log(`ABORT ${file}: expected exactly 1 <header>, found ${matches.length}`);
    process.exitCode = 1;
    continue;
  }
  const tag = showCart ? "<Navbar showCart />" : "<Navbar />";
  const replacement = `{/* Shared Cafe Q Navbar */}\n      ${tag}`;
  // Preserve leading indentation of the original <header> line.
  src = src.replace(headerRx, (match) => {
    const indent = match.startsWith("<header") ? "      " : "";
    return indent + replacement.replace(/\n/g, "\n      ");
  });
  if (logoRx.test(src)) {
    src = src.replace(logoRx, "");
  }
  src = src.replace(
    importRx,
    (m) => `${m}\nimport Navbar from "../../components/Navbar.jsx";`
  );
  writeFileSync(file, src, "utf8");
  console.log("DONE:", file);
}
