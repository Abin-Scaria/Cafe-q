import Navbar from "../components/Navbar.jsx";
// Attached Cafe Q images (verified location: src/assets/). Vite handles the
// space in these filenames (same pattern as "q r code.png").
import canteenImage from "../assets/about us 1.png";
import studentsImage from "../assets/about us 2.png";

/* Cafe Q blue accent used for highlighted words in headings. */
const ACCENT = "#1455FF";

const HERO_FEATURES = [
  { icon: "bolt", label: "Smart Ordering" },
  { icon: "contactless", label: "Cashless Payments" },
  { icon: "clean_hands", label: "Quick & Hygienic" },
];

const WHY_CARDS = [
  { icon: "bolt", title: "Easy & Fast", text: "Order your favorite meals in seconds." },
  { icon: "sanitizer", title: "Hygienic", text: "Fresh, safely prepared meals daily." },
  { icon: "payments", title: "Affordable", text: "Student-friendly pricing on all items." },
  { icon: "schedule", title: "Time-Slots", text: "Choose when you want to pick up." },
  { icon: "school", title: "For Campus", text: "Designed specifically for student life." },
];

/* Design/content values from the Stitch design (no stats API exists yet). */
const STATS = [
  { icon: "groups", value: "10K+", label: "Happy Students" },
  { icon: "receipt_long", value: "50K+", label: "Orders Served" },
  { icon: "storefront", value: "15+", label: "Canteens" },
  { icon: "mood", value: "99%", label: "Satisfaction" },
];

function AboutUs() {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Shared Cafe Q Navbar (About Us becomes active automatically) */}
      <Navbar />

      <main className="flex-grow w-full">
        {/* ------------------------------ HERO ------------------------------ */}
        {/* Compact, balanced hero: ~64px vertical padding, two ~50% columns. */}
        <section className="w-full max-w-[1240px] mx-auto px-container-padding pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: copy (left aligned on all breakpoints) */}
          <div className="flex flex-col gap-4 text-left">
            <span className="self-start inline-flex items-center gap-2 bg-[#e6f3ff] text-primary text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full">
              About Cafe Q
            </span>
            <h1 className="font-headline-lg font-bold text-on-surface text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.1]">
              Good Food.
              <br />
              Great{" "}
              <span style={{ color: ACCENT }}>Campus</span> Life.
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-[540px]">
              Cafe Q is your smart campus companion, bridging the gap between
              busy academic schedules and the need for fresh, accessible meals.
              We're rethinking how students eat, connect, and recharge.
            </p>

            {/* Compact feature row */}
            <ul className="flex flex-wrap gap-x-7 gap-y-2.5 mt-1">
              {HERO_FEATURES.map((f) => (
                <li key={f.label} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    {f.icon}
                  </span>
                  <span className="text-sm font-semibold text-on-surface whitespace-nowrap">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: canteen image (~500-520 × 330-350 on desktop) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative blue dots (CSS, from the Stitch design) */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-70 pointer-events-none hidden md:block"
              style={{
                backgroundImage:
                  "radial-gradient(#a9c7ff 2.5px, transparent 2.5px)",
                backgroundSize: "16px 16px",
              }}
              aria-hidden="true"
            ></div>
            <img
              src={canteenImage}
              alt="Cafe Q campus canteen"
              loading="eager"
              className="w-full max-w-[520px] h-[300px] lg:h-[340px] object-cover rounded-[28px] shadow-md relative z-10"
            />
          </div>
        </section>


        {/* ---------------------------- OUR STORY ---------------------------- */}
        {/* IMAGE LEFT / TEXT RIGHT, both left aligned, py-16/20 per Stitch. */}
        <section className="w-full bg-[#f0f7ff] py-16 md:py-20">
          <div className="max-w-[1240px] mx-auto px-container-padding grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Students image (~520 × 310) */}
            <img
              src={studentsImage}
              alt="Students enjoying food together at Cafe Q"
              loading="lazy"
              className="w-full max-w-[520px] h-[260px] lg:h-[310px] object-cover rounded-[24px] shadow-md order-1 mx-auto lg:mx-0"
            />

            {/* Copy (left aligned) */}
            <div className="flex flex-col gap-4 text-left order-2 max-w-[560px]">
              <span className="text-primary text-xs font-bold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-headline-lg text-[28px] md:text-[34px] leading-[1.15] font-bold text-on-surface">
                Built for Campus.
                <br />
                Inspired by{" "}
                <span style={{ color: ACCENT }}>You.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-on-surface-variant">
                Cafe Q was born from a simple observation: students spend too
                much time waiting in lines and dealing with cash, and not
                enough time actually enjoying their breaks. We envisioned a
                dining experience that was as smart and efficient as the
                students it serves.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-on-surface-variant">
                By integrating technology with high-quality, campus-centric
                food service, we've created a platform that empowers you to
                order ahead, pay seamlessly, and collect your meals without the
                hassle. It's more than just a canteen; it's a seamless part of
                your daily campus life.
              </p>
            </div>
          </div>
        </section>

        {/* --------------------- WHY CHOOSE CAFE Q? ---------------------- */}
        {/* Left-aligned heading with short blue underline; compact cards. */}
        <section className="w-full max-w-[1240px] mx-auto px-container-padding py-12 md:py-16">
          <div className="flex flex-col gap-3 mb-8 md:mb-10">
            <h2 className="font-headline-lg text-[26px] md:text-[32px] font-bold text-on-surface text-left">
              Why Choose Cafe Q?
            </h2>
            <div className="w-14 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-outline-variant/60 card-shadow p-5 min-h-[180px] flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <span className="material-symbols-outlined text-primary bg-[#e6f3ff] rounded-full w-16 h-16 flex items-center justify-center text-[34px] shrink-0">
                  {card.icon}
                </span>
                <h3 className="font-bold text-on-surface">{card.title}</h3>
                <p className="text-sm leading-snug text-on-surface-variant">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------- STATISTICS --------------------------- */}
        {/* Compact banner (~130px tall on desktop), 4 equal columns. */}
        <section className="w-full max-w-[1100px] mx-auto px-container-padding pb-12 md:pb-14">
          <div
            className="rounded-[30px] shadow-md grid grid-cols-2 lg:grid-cols-4 py-7 lg:py-8 text-white"
            style={{ backgroundColor: ACCENT }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center gap-1 lg:border-l border-white/25 first:border-l-0 px-2"
              >
                <span className="material-symbols-outlined text-[24px] opacity-90">{s.icon}</span>
                <span className="text-[30px] md:text-[34px] font-bold leading-none">{s.value}</span>
                <span className="text-xs md:text-sm opacity-90 whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------- CTA / CONTACT ------------------------ */}
        <section className="w-full bg-[#e6f3ff] py-12 md:py-16">
          <div className="max-w-[1240px] mx-auto px-container-padding grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Cup illustration (existing icon system, no external image) */}
            <div className="flex flex-col gap-3 order-2 lg:order-1">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "88px" }}
                aria-hidden="true"
              >
                coffee
              </span>
              <h2 className="font-headline-lg text-[26px] md:text-[32px] font-bold text-on-surface leading-tight max-w-lg">
                Let's make every meal a great experience!
              </h2>
              <p className="text-body-md text-on-surface-variant max-w-md">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            {/* Compact contact card */}
            <div className="bg-white rounded-2xl card-shadow border border-outline-variant/60 p-6 flex flex-col gap-4 max-w-md w-full order-1 lg:order-2 lg:ml-auto">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary bg-[#e6f3ff] rounded-full w-11 h-11 flex items-center justify-center shrink-0 text-[22px]">
                  location_on
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-outline font-semibold">Visit Us</p>
                  <p className="text-on-surface font-semibold">Main Campus</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary bg-[#e6f3ff] rounded-full w-11 h-11 flex items-center justify-center shrink-0 text-[22px]">
                  mail
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-outline font-semibold">Email</p>
                  <a href="mailto:hello@cafeq.in" className="text-on-surface font-semibold hover:text-primary transition-colors">
                    hello@cafeq.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary bg-[#e6f3ff] rounded-full w-11 h-11 flex items-center justify-center shrink-0 text-[22px]">
                  call
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-outline font-semibold">Call</p>
                  <a href="tel:+919876543210" className="text-on-surface font-semibold hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
