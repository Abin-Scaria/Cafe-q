import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MENU_ITEMS } from "../../data/menuData.js";
import { useCart } from "../../context/CartContext.jsx";


const EXTRAS = [
  { id: "chicken", label: "Extra Chicken Piece", price: 30 },
  { id: "raita", label: "Extra Raita", price: 15 },
  { id: "rice", label: "Extra Biryani Rice", price: 20 }
];

const RECOMMENDATIONS = [
  {
    id: "mutton-biryani",
    name: "Mutton Biryani",
    outlet: "Campus Bites",
    price: 140,
    veg: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTc89a2WyNcTHfwVZAo1AdvTqv_YAn89DYBCpQRrEM7bjCJn5OsMem_CP2yevRvskQjyZKkkLtlYCh68dm1WROcapBpqmagODgs6JIZo4HFW3r7an1e539HwWISHW7OlEi35YnvoM7VOJsqVVAPK59r8pJtT7bpxvmKjmlLBhSJT0C0iGH6BS7O5J1B4HroadSYUShKCM_-bNRSR0SHCL0XmryU1QTIpoaXuCQtNYnnHWi3tRvXcZMuq1hKyn9-Y9aIA"
  },
  {
    id: "chicken-65",
    name: "Chicken 65",
    outlet: "Campus Bites",
    price: 80,
    veg: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgjqREMB-ZuFze1H-GmdrKmMy5_OOfOh1viItRj8X58wKeItTAhyZwlH448DlSp-wEF5tX39_5kegSnKtPGBgMLVBgl0W_ER4uSSkE-2L8vhHbWtE-GYFBDd4MdZMlOjFvVX6H-_RFdoXdZpYGxosFbzA6qggjPBGV3DPYhmXBA_-VjDh3tW6V5jZBAUgteHjD32yxzETPHAEMz50SZ8QITG0lCcBmsf4xnp-erDYhx1iwXYzOs_7mxZhrciLTUJJUxQ"
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    outlet: "Lumina Foods",
    price: 85,
    veg: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDxP3uiY4f-qX-qwrBOCCec_SDp0jqRvIgUGAhkAXijfrSR98xipdB56slf-JsvJiw2C9-eksejPPzzN6tquEf6QS2jIpXOEud8NbF8R9YTpuQExmKmTzodBpYyYeRHgdtHyOOSmpZppvmzsc0nB_WlT28OF73LnKCIrlouR8xkCYOFwg1sbp6vc8gkwMFMH6DHQaPggfUypXhODHAutYsD3WpYx4SOFBZ7rrEELqyVqfVpyYQI7aNz8aopAlgFuYlfA"
  },
  {
    id: "veg-pulao",
    name: "Veg Pulao",
    outlet: "Annapoorna",
    price: 60,
    veg: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkS0_L5RwWk4qOq6vxvMYCNvqH0UMPzQi4Yp3vSaQWy71Hfxw0L1WMDsUlEJ5NZgBNM5i9yZx8wRc_zx6OsWs8mwOQhPrP7EWq7_bGRy0HYqQ_2Y5VQ0HqX8sKR8Qh9xY1NqQ3w0L5M7Y8sKR9Qq"
  }
];

function FoodDetailsContent({ id }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const item =
    MENU_ITEMS.find((i) => String(i.id) === String(id)) ||
    RECOMMENDATIONS.find((i) => i.id === id);

  const basePrice = item
    ? Number(String(item.price).replace(/[^\d.-]/g, "")) || 0
    : 0;
  const portions = {
    regular: { label: "Regular (Serves 1)", price: basePrice },
    large: { label: "Large (Serves 1-2)", price: Math.round(basePrice * 1.45) },
  };

  const [selectedPortion, setSelectedPortion] = useState("regular");
  const [selectedExtras, setSelectedExtras] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const totalPrice = useMemo(() => {
    const portionPrices = {
      regular: basePrice,
      large: Math.round(basePrice * 1.45),
    };
    let total = portionPrices[selectedPortion];
    Object.keys(selectedExtras).forEach(extraId => {
      if (selectedExtras[extraId]) {
        const extra = EXTRAS.find(e => e.id === extraId);
        if (extra) total += extra.price;
      }
    });
    return total;
  }, [selectedPortion, selectedExtras, basePrice]);

  const handleReset = () => {
    setSelectedPortion("regular");
    setSelectedExtras({});
  };

  const handleExtraChange = (extraId) => {
    setSelectedExtras(prev => ({
      ...prev,
      [extraId]: !prev[extraId]
    }));
  };

  const buildCartConfig = () => {
    if (!item) return null;
    const activeExtras = EXTRAS.filter((extra) => selectedExtras[extra.id]).map(
      (extra) => ({ id: extra.id, label: extra.label, price: extra.price })
    );
    return {
      itemId: item.id,
      name: item.name,
      image: item.img || null,
      portion: selectedPortion === "large" ? "Large" : "Regular",
      extras: activeExtras,
      unitPrice: totalPrice,
    };
  };

  const handleAddToCart = () => {
    const config = buildCartConfig();
    if (!config) return;
    addToCart(config);
    navigate("/cart");
  };

  const handleBuyNow = () => {
    const config = buildCartConfig();
    if (!config) return;
    addToCart(config);
    alert("Proceeding to checkout... (Checkout not yet implemented)");
  };

  if (!item) {
    return (
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased items-center justify-center gap-3 px-4 text-center">
        <span className="material-symbols-outlined text-[64px] text-outline">restaurant</span>
        <h1 className="text-2xl font-bold" style={{ color: '#003e6f' }}>Item not found</h1>
        <p className="text-on-surface-variant">The dish you are looking for isn't on the menu right now.</p>
        <Link
          to="/menu"
          className="mt-3 px-6 py-2.5 rounded-full bg-primary text-on-primary text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Browse Full Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* TopNavBar */}
            {/* Shared Cafe Q Navbar */}
            <Navbar showCart />

      <main className="w-full max-w-[1440px] mx-auto px-container-padding py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-on-surface-variant mb-4 gap-2">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span> Home
          </Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface-variant">{item.veg ? "Veg" : "Non-Veg"}</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-primary font-semibold">{item.name}</span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-8 mb-10">
          {/* Left: Image Gallery */}
          <div className="bg-surface rounded-3xl shadow-sm border border-outline-variant p-2 h-fit">
            <div className="relative w-full rounded-[20px] overflow-hidden h-[320px] lg:h-[450px]">
              <img
                alt={item.name}
                className="w-full h-full object-cover"
                src={item.img}
              />
              <div className="absolute top-4 left-4 bg-secondary/80 backdrop-blur-sm text-on-secondary px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{item.badge ? "stars" : "restaurant"}</span>
                {item.badge || (item.veg ? "Veg" : "Non-Veg")}
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 w-10 h-10 bg-white shadow-sm hover:text-error rounded-full flex items-center justify-center transition-colors"
                style={{ color: isFavorite ? '#ba1a1a' : '#727780' }}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}>
                  favorite
                </span>
              </button>
            </div>
            <div className="flex justify-center gap-1.5 mt-3 pb-3">
              <div className="w-2 h-2 rounded-full bg-primary cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-surface-variant cursor-pointer transition-colors"></div>
              <div className="w-2 h-2 rounded-full bg-surface-variant cursor-pointer transition-colors"></div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-3">
              <h1 className="text-4xl font-bold mb-1" style={{ color: '#003e6f' }}>{item.name}</h1>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="flex items-center text-[#f59e0b]">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.6
                </span>
                <span>(128 reviews)</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-secondary mb-3">₹{portions[selectedPortion].price}</div>

            <p className="text-base text-on-surface-variant mb-4 leading-snug">
              {item.description ||
                item.desc ||
                `Freshly prepared ${item.name}, served hot from the campus outlet.`}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6 p-3 bg-surface-container-low rounded-2xl border border-outline-variant">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[16px]">storefront</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline">Available at</span>
                  <span className="text-sm font-semibold text-on-surface">{item.outlet || "Campus Bites"}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline">Available</span>
                  <span className="text-sm font-semibold text-on-surface">11:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[16px]">restaurant</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline">Category</span>
                  <span className="text-sm font-semibold text-on-surface">{item.veg ? "Veg" : "Non-Veg"}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-surface-variant flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-[16px]">whatshot</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline">Spice Level</span>
                  <span className="text-sm font-semibold text-on-surface">Medium</span>
                </div>
              </div>
            </div>

            {/* Customize Your Order */}
            <div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant mb-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#003e6f' }}>Customize Your Order</h2>
                <button
                  onClick={handleReset}
                  className="text-sm text-outline hover:text-primary transition-colors"
                >
                  Reset
                </button>
              </div>

              {/* Portion Size */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-on-surface mb-2">Portion Size</h3>
                <div className="flex flex-col gap-2">
                  {Object.entries(portions).map(([key, portion]) => (
                    <label
                      key={key}
                      className={`flex items-center justify-between p-2.5 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedPortion === key
                          ? "border-primary bg-primary-fixed/20"
                          : "border-surface-variant bg-surface hover:bg-surface-container-low"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="portion"
                          checked={selectedPortion === key}
                          onChange={() => setSelectedPortion(key)}
                          className="w-4 h-4 text-primary bg-surface border-outline focus:ring-primary focus:ring-2"
                        />
                        <span className={`text-base ${selectedPortion === key ? "font-medium" : ""}`}>
                          {portion.label}
                        </span>
                      </div>
                      <span className={`text-sm font-bold ${selectedPortion === key ? "text-primary" : "text-on-surface-variant"}`}>
                        ₹{portion.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Add Extras */}
              <div>
                <h3 className="text-sm font-semibold text-on-surface mb-2">Add Extras</h3>
                <div className="flex flex-col gap-0.5">
                  {EXTRAS.map((extra) => (
                    <label
                      key={extra.id}
                      className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedExtras[extra.id] || false}
                          onChange={() => handleExtraChange(extra.id)}
                          className="w-4 h-4 rounded text-primary bg-surface border-outline focus:ring-primary focus:ring-2"
                        />
                        <span className="text-base text-on-surface">{extra.label}</span>
                      </div>
                      <span className="text-sm text-on-surface-variant">+₹{extra.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-surface p-3 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 border border-outline-variant shadow-sm mt-auto">
              <div className="flex flex-col">
                <span className="text-[10px] text-outline">Total Amount</span>
                <span className="text-xl font-bold text-primary">₹{totalPrice}</span>
              </div>
              <div className="flex w-full sm:w-auto gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">shopping_cart</span> Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-bold transition-all"
                >
                  <span className="material-symbols-outlined text-sm">bolt</span> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#003e6f' }}>You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOMMENDATIONS.map((item) => (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                className="group bg-surface rounded-2xl shadow-sm border border-outline-variant overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative h-36 overflow-hidden">
                  <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                  <div className="absolute top-2 right-2 w-5 h-5 rounded bg-white shadow-sm flex items-center justify-center">
                    {item.veg ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                    ) : (
                      <span className="material-symbols-outlined text-error text-[14px]">kebab_dining</span>
                    )}
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="text-base font-semibold text-on-surface mb-0.5">{item.name}</h3>
                  <p className="text-xs text-outline mb-3">{item.outlet}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-base font-bold text-secondary">₹{item.price}</span>
                    <button className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function FoodDetails() {
  const { id } = useParams();
  return <FoodDetailsContent key={id || "default"} id={id} />;
}

export default FoodDetails;
