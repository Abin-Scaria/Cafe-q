import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

/**
 * The ONE shared Cafe Q navigation bar.
 *
 * Used by every routed page (Home, Menu, Food Details, Cart, Checkout,
 * Payment, Order Success, Ticket Details, My Orders, Order Details, Wallet).
 * Internal navigation uses React Router NavLink so the active item is
 * highlighted automatically and no page reloads happen.
 */

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/my-orders", label: "My Orders" },
  { to: "/wallet", label: "Wallet" },
  { to: "/about-us", label: "About Us" },
];

/**
 * Offers / Contact pages/routes do not exist yet, so these stay
 * non-navigating labels instead of dead href="#" links. When a route is
 * added, move the item into NAV_ITEMS above and it just works.
 */
const UPCOMING_ITEMS = ["Offers", "Contact"];

function desktopLinkClass({ isActive }) {
  return [
    "text-label-md font-label-md transition-colors h-full flex items-center",
    isActive
      ? "text-primary font-bold border-b-2 border-primary"
      : "text-on-surface hover:text-primary",
  ].join(" ");
}

function mobileLinkClass({ isActive }) {
  return [
    "block px-4 py-3 rounded-xl text-label-md font-label-md transition-colors",
    isActive
      ? "text-primary font-bold bg-primary/5"
      : "text-on-surface hover:bg-surface-container-low hover:text-primary",
  ].join(" ");
}

export default function Navbar({ showCart = false }) {
  const { cartItemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-surface-variant sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1240px] mx-auto px-container-padding h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-4xl text-primary">coffee</span>
          <div className="flex flex-col">
            <span className="text-headline-md font-headline-md font-bold text-primary leading-tight">Cafe Q</span>
            <span className="text-caption font-caption text-on-surface-variant">Good Food. Great Campus Life.</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6 h-full">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={desktopLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
          {UPCOMING_ITEMS.map((label) => (
            <span
              key={label}
              className="text-label-md font-label-md text-on-surface-variant h-full flex items-center cursor-default"
              title="Coming soon"
            >
              {label}
            </span>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant cursor-pointer" aria-label="Notifications">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1 right-1 w-4 h-4 bg-error text-on-error rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">2</span>
          </button>
          {showCart && (
            <Link
              to="/cart"
              aria-label={`Cart (${cartItemCount} items)`}
              className="relative p-2 rounded-full hover:bg-surface-container-high transition-all text-primary"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartItemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 min-w-4 h-4 px-0.5 bg-error text-on-error rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
          )}
          <button className="w-10 h-10 rounded-full bg-primary text-on-primary hidden sm:flex items-center justify-center font-label-md font-bold cursor-pointer" aria-label="Profile">
            AS
          </button>
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="p-2 rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant lg:hidden cursor-pointer"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-outline-variant/50 px-container-padding py-3 flex flex-col gap-1 shadow-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={mobileLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {UPCOMING_ITEMS.map((label) => (
            <span
              key={label}
              className="block px-4 py-3 rounded-xl text-label-md font-label-md text-on-surface-variant/70 cursor-default"
            >
              {label} — Coming soon
            </span>
          ))}
        </nav>
      )}
    </header>
  );
}
