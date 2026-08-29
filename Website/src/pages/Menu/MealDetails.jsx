import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";


import { MENU_ITEMS } from '../../data/menuData.js';

const CATEGORIES = [
  { name: "All Items", count: "120+" },
  { name: "Breakfast", count: "24+" },
  { name: "Lunch", count: "38+" },
  { name: "Snacks", count: "45+" },
  { name: "Beverages", count: "18+" },
];

const OUTLETS = [
  {
    name: "All Outlets",
    subtitle: null,
    icon: "grid_view",
    img: null,
  },
  {
    name: "Campus Bites",
    subtitle: "Non Veg",
    icon: null,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGQvoqyN3N3ZLHu8X2-C05SBv7ye1_DKAU0HCEROSgLTbzinHiFQoKgplQ7Y42Z1qwUV6It5U4R4tNgp7ZUJZeEx9e8fRVsX53jt8q8baBfCbsAD3hA4aCP1v5xkc0PioXHO8QobWqxIQL6jkSnq_tZEig7A6R1WJYgWvwxZPop0mso-GlmwnWOxuF92gvURBJ9MVxWU4r10fb1GPOBnf8hjYnBCqSzZvsKIOqq9MxrfH2dZJXCKI--IoiKDX444-Lmw",
  },
  {
    name: "Delhi Bites",
    subtitle: "North Indian",
    icon: null,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHIr31xZ1Kbzexu4BUO3zQOpZVqih1kWEhkjA37xxsF7irxzAW0-0K_eDg8eQqr4w-JC1e_V9JY9-sMx7kFRy3N0cqVDNPtTku-qVaw-htLH5YHb7trSZp-at2avkFoENYxTF2nRiqxMr0sXQ8k8Q6Wsh-g-r8RbjfzqprsPmCCj7vAtsO_7SB37tpqlXZb8pDLJAWyZnM02aEm-R-LYXcVKYTOvNw01hnKxd2_mCzqpLK9MtHX-VUpsmxy93b0Hj0IQ",
  },
  {
    name: "Lumina Foods",
    subtitle: "Healthy & Café",
    icon: null,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAlsqexLkNXmTRzTcvx3H7s3puFB5ZPb3wEAhIMgGoEj_1AAgDJZ_Da9pRJfjw75wMRqQDArrlZVr1n1OQUovqOzynAdJQUHqG3FszUjaxVIH4v0Dj4wdX3wT79FUFaTYrQItG4DQVADgHlyGV_1GXzIyTJ1rwIYQmeRCd3izFn8jkONYbKxgbg92686_mSide8ez_AUeSQT1Fd42-3AAVZ5jenwtbXcKWTBifC_msHte0P2slc6x8iai8x2cdRit-xg",
  },
  {
    name: "Annapoorna",
    subtitle: "South Indian",
    icon: null,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBujSKd3pfcvikJ54eVHHqephW-uWeCRVCd8a78F8Q9bnkeAr49DdwnmeGd_0bZdLeTu6ZnMyWfZ6HTCim7XCNzcEprIeWo0Hkbkkv8BX1HtVEhqQQXiJyEPZ2ukohBKt5wzfzVGx0GBt6oRK7Ietvhkh5jELu_ystgKhWDZVhxLTPwn1cSClGcNtsz3L1P1lQd-i8csPls9ddhB_T22yghLBcraqAkbh_7AcJic0EvmVOeSrc7jcvKrftUJsPUZMJmtw",
  },
  {
    name: "Zamorine Café",
    subtitle: "Café",
    icon: null,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGbwjNm6Sli5Pg-TWT6U2fcCYy4ICHc2w1vtNEzNMiM5weG6lW1UfZs6KhhuNu20OjtY9PdXbl_cF2p3qITDOaPtA3sYLiHzcTsvaqkj3lTlktqY3aYfHWfpWfGGmGASrckG2xWI4v92c32MC6DWfagWuLGNFGgmhRpufo7QWcJaN5rvbJQ6e1vothWtmkClkoRM4EamlZAn-gd3B6Do33ATVy-OlGXm_R7G8oxPs2Rnq1kiH_XUoAFJAVKB0l0oqnwA",
  },
];

function MealDetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [showVeg, setShowVeg] = useState(false);
  const [showNonVeg, setShowNonVeg] = useState(false);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet =
      (showVeg && showNonVeg) ||
      (!showVeg && !showNonVeg) ||
      (showVeg && item.veg) ||
      (showNonVeg && !item.veg);
    return matchesSearch && matchesDiet;
  });

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* TopNavBar - Matching Home page */}
            {/* Shared Cafe Q Navbar */}
            <Navbar showCart />

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-padding py-6">
        {/* Search Area */}
        <div className="w-full max-w-3xl mx-auto mb-6">
          <div className="relative flex items-center w-full h-12 rounded-2xl bg-surface shadow-sm border border-outline-variant overflow-hidden focus-within:border-primary transition-colors">
            <div className="pl-4 pr-3 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input
              className="w-full h-full bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-outline outline-none"
              placeholder="Search for meals, cafés, items..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Row - Veg/NonVeg/Filters only */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface"
              type="checkbox"
              checked={showVeg}
              onChange={(e) => setShowVeg(e.target.checked)}
            />
            <span className="flex items-center gap-1.5 text-sm font-medium text-on-surface">
              <span className="w-3 h-3 rounded-full bg-green-600 border border-green-800"></span>
              Veg
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface"
              type="checkbox"
              checked={showNonVeg}
              onChange={(e) => setShowNonVeg(e.target.checked)}
            />
            <span className="flex items-center gap-1.5 text-sm font-medium text-on-surface">
              <span className="w-3 h-3 rounded-full bg-red-600 border border-red-800"></span>
              Non Veg
            </span>
          </label>
          <div className="h-5 w-px bg-outline-variant"></div>
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-outline-variant bg-surface hover:bg-surface-container-high text-sm font-medium text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Filters
          </button>
        </div>

        {/* Main Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[220px] flex-shrink-0 flex flex-col gap-6">
            {/* Categories List */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3 pb-2 border-b border-outline-variant" style={{ color: '#003e6f' }}>
                <span className="material-symbols-outlined text-[16px]">restaurant_menu</span>
                Categories
              </h3>
              <ul className="flex flex-col gap-1.5">
                {CATEGORIES.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setSelectedCategory(cat.name)}
                      className={
                        selectedCategory === cat.name
                          ? "w-full flex justify-between items-center py-1.5 px-3 rounded-lg bg-primary-fixed text-primary font-semibold text-sm"
                          : "w-full flex justify-between items-center py-1.5 px-3 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors text-sm"
                      }
                    >
                      <span>{cat.name}</span>
                      <span
                        className={
                          selectedCategory === cat.name
                            ? "text-[11px] font-semibold bg-primary/10 px-1.5 py-0.5 rounded-full"
                            : "text-[11px] font-semibold bg-surface-variant px-1.5 py-0.5 rounded-full"
                        }
                      >
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Canteen Outlets */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-3 pb-2 border-b border-outline-variant" style={{ color: '#003e6f' }}>
                <span className="material-symbols-outlined text-[16px]">storefront</span>
                Canteen Outlets
              </h3>
              <ul className="flex flex-col gap-2">
                {OUTLETS.map((outlet) => (
                  <li key={outlet.name}>
                    <a
                      href="#"
                      className={
                        outlet.name === "All Outlets"
                          ? "flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-surface-container-low transition-colors text-primary font-semibold text-sm"
                          : "flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-surface-container-low transition-colors text-on-surface text-sm"
                      }
                    >
                      {outlet.icon ? (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary flex-shrink-0">
                          <span className="material-symbols-outlined text-[18px]">
                            {outlet.icon}
                          </span>
                        </div>
                      ) : (
                        <img
                          className="w-8 h-8 rounded-full object-cover border border-outline-variant flex-shrink-0"
                          alt={outlet.name}
                          src={outlet.img}
                        />
                      )}
                      <div className="flex flex-col leading-tight">
                        <span className="text-[13px] font-medium">{outlet.name}</span>
                        {outlet.subtitle && (
                          <span className="text-[10px] text-outline">
                            {outlet.subtitle}
                          </span>
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Outlet Timing Info Card */}
            <div className="hero-gradient border border-primary-fixed rounded-xl p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <h4 className="text-sm font-bold">Outlet Timing</h4>
              </div>
              <p className="text-[11px] text-outline">
                Timings may vary by outlet.
              </p>
              <a
                className="text-[12px] font-semibold text-primary hover:underline mt-1 inline-flex items-center gap-1"
                href="#"
              >
                View all outlets{" "}
                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
              </a>
            </div>
          </aside>

          {/* Right Side Food Grid */}
          <div className="flex-grow w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/menu/${item.id}`}
                  className="bg-surface border border-outline-variant rounded-xl overflow-hidden card-shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-surface-container-low">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={item.name}
                      src={item.img}
                    />
                    {item.badge && (
                      <div
                        className={
                          item.badge === "Bestseller"
                            ? "absolute top-2 left-2 bg-secondary text-on-secondary text-[9px] px-2 py-0.5 rounded shadow-sm font-semibold uppercase tracking-wide"
                            : "absolute top-2 left-2 bg-primary-fixed text-primary text-[9px] px-2 py-0.5 rounded shadow-sm font-semibold uppercase tracking-wide"
                        }
                      >
                        {item.badge}
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur rounded p-0.5 shadow-sm">
                      <span
                        className={
                          item.veg
                            ? "w-4 h-4 rounded-full bg-green-600 border-2 border-green-800 block"
                            : "w-4 h-4 rounded-full bg-red-600 border-2 border-red-800 block"
                        }
                        title={item.veg ? "Veg" : "Non Veg"}
                      ></span>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-primary mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[13px] text-outline mb-2 line-clamp-2 leading-snug">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-1">
                      <span className="text-xl font-bold text-primary">
                        {item.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Add to cart:", item.name);
                        }}
                        className="px-3 py-1 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors text-[13px] font-semibold flex items-center gap-1"
                      >
                        Add{" "}
                        <span className="material-symbols-outlined text-[15px]">add</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MealDetails;
