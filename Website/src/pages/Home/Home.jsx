import { useState, useEffect, useRef, useCallback } from 'react'
import Navbar from "../../components/Navbar.jsx";
import { Link } from 'react-router-dom'

const HERO_SLIDES = [
  {
    alt: 'Banner 1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZexvwBj0eZwaHiSdhvnfx105Bmyl3hRUVVqaTBP77put3w7NMtIPyA9WMnJKBW-IGfNOLIldRlw2YdhBzBVf-J5h6kjsAmRd54i06KXpVOdYlrrw5u56DesRPPBcwOqvfL65pREGLxQEFfw7sJvmofPgTR3qKxB1ZPnEmhTTaTQNVrHWRPJ-SC0kQ9s0YyJzRrTYwhP8dDN0T7TZkWtwvbeTSlFkbED6KiU6qdFmVvjtjkuCWhyg9A25fp_pyx8YpMg',
  },
  {
    alt: 'Banner 2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5NETyvdSuL-FhpzbDzjb7KO7g9HlrDIG8aIxSOeUDDoUm-cVnpXpySd65kdS56GEKIqLxFsA_zFNPMrufEUbJJkwWOBGO51mvPYyni8tLbEYaqYPlJ3Ui4jKyOXcbYdg6cZVyIx9k9evmTYHEVJnKQOxQAVK_DfdyKhFMxB7zZ2yCICShqprMuEJzPoUo6uxUz8gb8URfcD3UTaC5Oqml7n5n9xHCGQoMv9iROF0FJpU1eN-YZuQfveMegRH-cQO5Lg',
  },
  {
    alt: 'Banner 3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu6jBAW5g4Wx6EP5QFgu-_fIvUMvtbnTlHST1cCNb7Sspy9jlBu2vgGn8OnwFUW-B64zQhf1018kmpItqSZuHinzfWjy1VuEBmTJZFGUzxEbTddMkpklOF2_c2weZiDPjTV5TuWVtKjnReeQZvuuKf1jVCSZPkUt54E0aDMak5vo9T0J3tFmBQh0eVQdI2wIKIAGadDcE6fmbpep9kqcwYn2MajIbXFvK3o3WmeKD-iDC4gFnfIoLRYHUettjfK2ZbEg',
  },
  {
    alt: 'Banner 4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClhMefATQHp1B67cTXt3PuVpQV7c9XazmCAfblPmQaYJqF1lUyAv1wYCoACoLy5JPM-g-7CNSW8EAkR_SKiRJA2pTFhPeeV1CfRTdzqC9z9cBs7Zs7fdu6gezyAYp9r2umcMPdpdDpffJwlXC_jBujxnnuNb4TiDostAejEQG-hEpjiDgtJAgkiG8zaTVyrDG4184NUsD-71odbHaQa_LUAtKFt9hN4WjeluvMgAPbQE2xHlHPJKeuZW5MlUDToMRb9w',
  },
  {
    alt: 'Banner 5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpDiC2xp8_haaqhUXlH4ubYMCP_3aml9uzBOqfvqfyUbv5HxZtho-CygjKZrvdet2zWwuWei8mQeJiXmmAC5DD-F7aOxyuQM6oZWZZrCgvxu_5T5HyxVPOMlb71t7q0gYHXuoV3b9RJpSb5_by3SijonrpKuCokQPhMv2V0ZU5YmkLHM3ixmCzmJ6popql6IrErqO_968SLFoRFied4Jo2_3lqHDrtVElQQzsphRyXyN46aTzHqN9bybWx7fLb7q-LTQ',
  },
]

const QUICK_ACTIONS = [
  {
    title: 'Order Meals',
    subtitle: 'Breakfast & Lunch',
    to: '/menu',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtCh5swLtqod3evPh7eNWVPBMvL1f290yXnI-qVwLCOsVlypC-xV7lCvIrdgjdXXO1ITPIinHiIED3DNhiISudBmhCfGuPwiDm9JxWuCvn1ptMUCekeAPWCBiTq6w7QmJxi1DeRE3_VLr9o4DA4t8EoFxvya-T1MT4XJZNd6JWRBNGXipdl25YrEie4Ka32w8NvzVmWkUb6-WIFZGq6r5Tgn1G6ytc_-K-OAMv_5yy3cES3eKhMVqS',
  },
  {
    title: 'Scan & Eat',
    subtitle: 'Show QR at Counter',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQUahV0RzqHYs31W6dWfxObkRHYMNLAUq9kKJegdlIC-yOL0wvkCVhzudons0iBEp-bmfMuXDiZ8nPcH_p9yeHFMroYXWaQTzoGB3bviomkTiDdnhEzCG0QkyLkAYqacVVHO9hBQPaa2vgv56uUlamMfkeaEh_FnVgoReQ9UmD2VQH_E1nN1TlsN3seEJt_VgDXhwyt_CJ5wsCGlffg13abRH1zwhHoFti32N4N9mWhTGN7biQSYBS',
  },
  {
    title: 'Make Payment',
    subtitle: 'UPI / Cards / Wallet',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4OybajE7xPuw4pQdObD1igJNDPK_g9JV_3KZ9XpZxGGb8PipMlxDKTtL4hyK62ENmJycEcKG_NMCBuziMGx4QOK3vB9WNdGVkbtVNHzPMm4sw4nPLD6ImmeE4kOFwLnQYVHJ6RLN2Zeo1wb0NjbB2sTuHvwQH47drtKBk0NuI46fnW07Jz9AKMmAIhknVBDAXi-7S-hnLpjbaQxW7KGONZZ9ujy50H3Uto3hZ_44QF6AXNysxzTeJ',
  },
  {
    title: 'Digital Bill',
    subtitle: 'Download Anytime',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDyt7eFTTabld-a5tiAWffTJsWjvPMywf4S1h2xFAcA0mUuJMNldLRjF_k1mKrZpN1KMOUT6yTuduzT64gJ9hROnA1vL8310003pgDvY32hLWc2Ohi-z0vhpmpWJFOywOl2Cq6TlVOQL32STWtx3zozxwbU3CtU9UdPqJ1_D6ch0Pc8VgVlx5wEZYTZrUhkfEIaQycMsMHDDXHOY2S0mWzHQfUnVZwIr99d0DkmUYzX6RYw_nMhaSX',
  },
  {
    title: 'Order History',
    subtitle: 'View Past Orders',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdDyR4yt5y-QahfggIeyBltgl_x8ZoXk4QS0wX-KxqZS72jaVjvtpdwgQ7pqzLCOG8uNc5BcOV2afoEam37CjfKcCm54IMrLz0OJ07J9YTEYWv2F6GisENK7iVMwnr3xZVfmDozDSG__4DhEhyh7TMEBxK9Zerycq3Da0spqdoiDA33IySUCaFV7DVzU1aqrsrw5fNxy-iggaRcLUmT8GuqGrd1NlHBftSC_O8QJXSOLJKvDIZ79XJ',
  },
]

import { MENU_ITEMS } from '../../data/menuData.js'

const OUTLETS = [
  {
    name: 'Campus Bites',
    tag: 'Non Veg',
    hours: '7:00 AM – 9:00 PM',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVWubJtBSrNYKDurdXhh-yjJMq-uUncIwRhZuc-oKSoiS4Ylvs1x9xZZxlOf57Q_TqfzUxTQxFIH-TFFAq9mIOYZ2W0R0daJpAVbGBIXqVVGR2Rre4O9Y7sLtvW3g-5GNLJwfFcQ85Xtm3xTVnC97LUz6hKMJi5Cd1_YE5jjch5TlYxQ_UrfIJMfFSK3nLiKWUqTlsCObXg1T0AZidN4_GW70XZLmLZYUC1-sdk_7sihoLHd1Tw57GF58QsEibl1yqtg',
  },
  {
    name: 'Delhi Bites',
    tag: 'North Indian',
    hours: '8:00 AM – 8:00 PM',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCREA6y2ayt8NnjcDvUlVqFaIDeMoP25aPJwVNyjZYVcIGVJlT1gd_HpLLxIvctfqd50MQoB0yccnLADtAbXt9Gf6QR8NAPVryP37lg46p5TlF9lhABe-mqlyrayQ-NzflayoABO9LClXjUgmARJ318-jsXOM_PEpUoQf-6ug2CNQDaGhdky0UbVnEWi7Voi86bf4cBW2vQgiBEAXokGDvizia5bTindIBay-b9tzJJZ80v1eJkBNDJv4h0AeFGGHf3sA',
  },
  {
    name: 'Lumina Foods',
    tag: 'Healthy & Café',
    hours: '7:30 AM – 7:30 PM',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy2_EkbT2HLBHa39EsB7X7fYIrVVMkG509Dia_n_abxJnTGhQgECPZgbTUIYfzc5dBeHMrJv7UdaRHztlNsKiN8Oqmx1Pe2hp8jil-G3L9PE9381klkj-zxTXyN_7v6NVpSAuMoLknuYBWcVSF4DJQhI1Y7QVr-mzFjZZvKbFoMDoTGKtGF8D3qHVUuiyOSkK4Lo0UC2G9vSgkXoGZb9TdCTUwzgx4pAux525D2NsknL2MIaOpe_HD_aEORSFNgW-fmg',
  },
  {
    name: 'Annapoorna',
    tag: 'South Indian',
    hours: '7:00 AM – 9:00 PM',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdhfx4fyT4WAZnSD5ui1a7iOr0qoGnRAAnpo3RFKkDUGDo4RYcdzD4-HiN9E5Tdc9khyPVqyu6ntmlVf31aEB_zmo6SQR_Vonq3sdZ77bfqUQF9xUWlcXQelG5KwISlklhp2czll40zWf2R1pUWWoCKFajIInARvNbvrppShewo--eLtFUYL_etsbxMbWrCzYHrbIbs9dHqhYuD-1SEBl09BZsijsRmBKPPjoAdLdbD44_0gV_qejC5itQVZ_4S5WhEg',
  },
  {
    name: 'Zamorine Café',
    tag: 'Café',
    hours: '9:00 AM – 10:00 PM',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI4XOee8V8HgQS_8XmUL9xDjVHFKmFiWbtZAhP1GyuLsM9uJb276NnWLkQuyPxHUf2PKeBcO9dW4567nERwaEt4AFZDY-7KufK21NaNWZNRFbpqH8Lrg8JRYo9vbZUkofuRxzCcup2yNfpwX46tJD4fZb19ib7MSLwO9P5-iM7OFM4E2lhqXiqRoIBv5QYddFzGYGuacqhnNKx0HxodQWTMhkkR8y-xXYYUQ-g23kyjXtXtyUEvEIV_2R60fyAGIHHFg',
  },
]

/**
 * Infinite auto-scrolling carousel.
 * - Renders the track translated by card-width steps.
 * - Auto-advances on an interval, snapping back to the start seamlessly
 *   once it has scrolled past the original item count (the track renders
 *   the items twice to make the wrap-around invisible).
 */
function useInfiniteCarousel(itemCount, intervalMs) {
  const [pos, setPos] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)
  const transitioningRef = useRef(false)

  const moveNext = useCallback(() => {
    if (transitioningRef.current) return
    transitioningRef.current = true
    setTransitioning(true)
    setPos((p) => p + 1)
  }, [])

  const handleTransitionEnd = useCallback(() => {
    transitioningRef.current = false
    setTransitioning(false)
    setPos((p) => (p >= itemCount ? 0 : p))
  }, [itemCount])

  // Auto-play
  useEffect(() => {
    const id = setInterval(moveNext, intervalMs)
    return () => clearInterval(id)
  }, [moveNext, intervalMs])

  // Measure card width (card + gap-6 = 24px) so translation matches the
  // original implementation; recalculate on resize.
  useEffect(() => {
    const measure = () => {
      const el = trackRef.current
      if (el && el.firstElementChild) {
        setCardWidth(el.firstElementChild.offsetWidth + 24)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const transition = transitioning ? 'transform 0.5s ease-in-out' : 'none'
  const transform = `translateX(-${pos * cardWidth}px)`

  return { trackRef, transform, transition, onTransitionEnd: handleTransitionEnd }
}

function Home() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    canteen: 'All Canteens',
    foodType: 'All',
    category: 'All',
    price: 'Any Price',
    availability: 'All',
  })

  // Hero (banner) carousel
  const [heroIndex, setHeroIndex] = useState(0)
  const heroTotal = HERO_SLIDES.length

  const moveHero = useCallback(
    (direction) => {
      setHeroIndex((i) => (i + direction + heroTotal) % heroTotal)
    },
    [heroTotal],
  )

  const goToHero = useCallback((index) => setHeroIndex(index), [])

  useEffect(() => {
    const id = setInterval(() => moveHero(1), 3000)
    return () => clearInterval(id)
  }, [moveHero])

  // Infinite carousels for menu and outlets
  const menuCarousel = useInfiniteCarousel(MENU_ITEMS.length, 4000)
  const outletsCarousel = useInfiniteCarousel(OUTLETS.length, 5000)

  const updateFilter = (key) => (e) =>
    setFilters((f) => ({ ...f, [key]: e.target.value }))

  const clearFilters = () =>
    setFilters({
      canteen: 'All Canteens',
      foodType: 'All',
      category: 'All',
      price: 'Any Price',
      availability: 'All',
    })

  const applyFilters = () => setFilterOpen(false)

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* TopNavBar */}
            {/* Shared Cafe Q Navbar */}
            <Navbar showCart />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-padding py-8 overflow-hidden">
        {/* Search Bar */}
        <div className="w-full max-w-[800px] mx-auto mb-6 relative flex gap-3 flex-grow">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-primary">search</span>
          </div>
          <input
            className="w-full pl-12 pr-4 py-4 rounded-[16px] border-none shadow-sm card-shadow text-body-md focus:ring-2 focus:ring-primary outline-none bg-surface-container-lowest"
            placeholder="Search meals, cafés, outlets or offers..."
            type="text"
          />
          <div className="relative flex-shrink-0">
            <button
              className="h-full px-6 flex items-center gap-2 bg-white border-2 border-primary text-primary rounded-[12px] font-bold hover:bg-primary/5 transition-colors"
              onClick={() => setFilterOpen((o) => !o)}
            >
              <span className="material-symbols-outlined">filter_list</span>
              <span className="">Filter</span>
            </button>
            {/* Filter Dropdown Panel */}
            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 w-[320px] bg-white rounded-2xl shadow-lg border border-outline-variant/30 z-50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-on-surface">Filter</h3>
                  <button className="text-primary text-label-sm font-bold hover:underline" onClick={clearFilters}>
                    Clear All
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1">Canteen</label>
                    <select
                      className="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary"
                      value={filters.canteen}
                      onChange={updateFilter('canteen')}
                    >
                      <option>All Canteens</option>
                      <option>Campus Bites</option>
                      <option>Delhi Bites</option>
                      <option>Lumina Foods</option>
                      <option>Annapoorna</option>
                      <option>Zamorine Café</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1">Food Type</label>
                    <select
                      className="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary"
                      value={filters.foodType}
                      onChange={updateFilter('foodType')}
                    >
                      <option>All</option>
                      <option>Vegetarian</option>
                      <option>Non-Vegetarian</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1">Category</label>
                    <select
                      className="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary"
                      value={filters.category}
                      onChange={updateFilter('category')}
                    >
                      <option>All</option>
                      <option>Breakfast</option>
                      <option>Lunch</option>
                      <option>Snacks</option>
                      <option>Beverages</option>
                      <option>Desserts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1">Price</label>
                    <select
                      className="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary"
                      value={filters.price}
                      onChange={updateFilter('price')}
                    >
                      <option>Any Price</option>
                      <option>Under ₹50</option>
                      <option>₹50–₹100</option>
                      <option>₹100–₹200</option>
                      <option>₹200+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-sm text-on-surface-variant mb-1">Availability</label>
                    <select
                      className="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary"
                      value={filters.availability}
                      onChange={updateFilter('availability')}
                    >
                      <option>All</option>
                      <option>Open Now</option>
                      <option>Available for Ordering</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button
                    className="flex-1 py-2 rounded-xl border border-primary text-primary font-bold text-label-md hover:bg-primary/5 transition-colors"
                    onClick={clearFilters}
                  >
                    Clear All
                  </button>
                  <button
                    className="flex-1 py-2 rounded-xl bg-primary text-white font-bold text-label-md hover:opacity-90 transition-opacity"
                    onClick={applyFilters}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Section (Carousel) */}
        <section className="relative w-full flex flex-col mb-6">
          <div className="relative w-full h-[280px] md:h-[320px]">
            {/* Left Arrow */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
              onClick={() => moveHero(-1)}
            >
              <span className="material-symbols-outlined text-primary">chevron_left</span>
            </button>
            {/* Carousel Container */}
            <div className="w-full overflow-hidden relative rounded-[16px] h-full">
              <div
                className="flex transition-transform duration-500 w-full h-full"
                style={{ transform: `translateX(-${heroIndex * 100}%)` }}
              >
                {HERO_SLIDES.map((slide) => (
                  <div className="w-full flex-shrink-0 h-full relative" key={slide.alt}>
                    <img alt={slide.alt} className="w-full h-full object-cover" src={slide.src} />
                  </div>
                ))}
              </div>
            </div>
            {/* Right Arrow */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
              onClick={() => moveHero(1)}
            >
              <span className="material-symbols-outlined text-primary">chevron_right</span>
            </button>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.alt}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === heroIndex ? 'bg-primary' : 'bg-outline-variant'
                }`}
                onClick={() => goToHero(index)}
              />
            ))}
          </div>
        </section>

        {/* Quick Action Bar */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {QUICK_ACTIONS.map((action, index) => {
            const cardClass = `bg-surface-container-lowest rounded-2xl overflow-hidden flex items-center card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group ${
              index === QUICK_ACTIONS.length - 1 ? 'md:col-span-1 col-span-2' : ''
            }`;
            const card = (
              <>
                <div className="w-[40%] h-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
                  <img
                    alt={action.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={action.img}
                  />
                </div>
                <div className="p-3 flex-1">
                  <h4 className="font-label-md text-label-md text-primary">{action.title}</h4>
                  <p className="text-[10px] text-on-surface-variant">{action.subtitle}</p>
                </div>
              </>
            );
            return action.to ? (
              <Link to={action.to} key={action.title} className={cardClass}>
                {card}
              </Link>
            ) : (
              <div key={action.title} className={cardClass}>
                {card}
              </div>
            );
          })}
        </section>

        {/* Today's Menu Highlights */}
<section className="mt-10 w-full relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[28px] text-primary">stars</span>
              <h2 className="text-headline-md font-headline-md font-bold" style={{ color: '#003e6f' }}>Today's Menu Highlights</h2>
            </div>
            <Link to="/menu" className="text-primary hover:text-primary-fixed-variant font-label-md text-label-md flex items-center gap-1 transition-colors">
              View Full Menu <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="relative w-full overflow-hidden">
            <div
              ref={menuCarousel.trackRef}
              className="flex gap-6 carousel-track py-2"
              style={{ transition: menuCarousel.transition, transform: menuCarousel.transform }}
              onTransitionEnd={menuCarousel.onTransitionEnd}
            >
              {[...MENU_ITEMS, ...MENU_ITEMS].map((item, index) => (
                <Link
                  key={`${item.name}-${index}`}
                  to={`/menu/${item.id}`}
                  className="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      src={item.img}
                    />
                    <div className="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
                      <div
                        className={`w-3 h-3 border-2 flex items-center justify-center ${
                          item.veg ? 'border-green-600' : 'border-red-600'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.veg ? 'bg-green-600' : 'bg-red-600'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow min-h-[140px]">
                    <h3 className="font-bold text-on-surface mb-1">{item.name}</h3>
                    <p className="text-[12px] text-on-surface-variant line-clamp-2 mb-auto flex-1">{item.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-primary">{item.price}</span>
                      <span className="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold transition-colors">
                        Add +
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Canteen Outlets Section */}
        <section className="mt-10 w-full relative">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[28px] text-primary">storefront</span>
              <h2 className="text-headline-md font-headline-md font-bold" style={{ color: '#003e6f' }}>Our Canteen Outlets</h2>
            </div>
            <a className="text-primary hover:text-primary-fixed-variant font-label-md text-label-md flex items-center gap-1 transition-colors" href="#">
              View All Outlets <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
          {/* Outlets Carousel */}
          <div className="relative w-full overflow-hidden">
            <div
              ref={outletsCarousel.trackRef}
              className="flex gap-6 carousel-track py-2"
              style={{ transition: outletsCarousel.transition, transform: outletsCarousel.transform }}
              onTransitionEnd={outletsCarousel.onTransitionEnd}
            >
              {[...OUTLETS, ...OUTLETS].map((outlet, index) => (
                <div
                  key={`${outlet.name}-${index}`}
                  className="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer"
                >
                  <div className="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
                    <img alt={outlet.name} className="w-full h-full object-cover" src={outlet.img} />
                    <div className="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {outlet.tag}
                    </div>
                  </div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">{outlet.name}</h3>
                  <div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
                    <span className="text-[12px] font-bold text-primary flex items-center gap-1">
                      <span className="text-[8px]">●</span> Open
                    </span>
                    <span className="text-[12px] text-on-surface-variant font-medium">{outlet.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
