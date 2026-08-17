<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Cafe Q - Kristu Jayanti College</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "on-tertiary-fixed-variant": "#3b4951",
                      "secondary": "#77574d",
                      "on-error": "#ffffff",
                      "on-surface": "#191c1e",
                      "primary-container": "#005696",
                      "on-tertiary-fixed": "#0f1d25",
                      "surface-container-highest": "#e0e3e5",
                      "on-secondary-fixed-variant": "#5d4037",
                      "on-surface-variant": "#414750",
                      "outline": "#727781",
                      "surface-dim": "#d8dadc",
                      "surface": "#f7f9fb",
                      "on-tertiary": "#ffffff",
                      "surface-variant": "#e0e3e5",
                      "outline-variant": "#c1c7d2",
                      "on-secondary": "#ffffff",
                      "inverse-primary": "#a1c9ff",
                      "inverse-on-surface": "#eff1f3",
                      "background": "#f7f9fb",
                      "on-primary": "#ffffff",
                      "tertiary": "#313f47",
                      "error": "#ba1a1a",
                      "on-secondary-fixed": "#2c160e",
                      "tertiary-container": "#48565f",
                      "on-primary-container": "#a5cbff",
                      "inverse-surface": "#2d3133",
                      "error-container": "#ffdad6",
                      "primary-fixed-dim": "#a1c9ff",
                      "secondary-fixed-dim": "#e7bdb1",
                      "on-secondary-container": "#795950",
                      "secondary-fixed": "#ffdbd0",
                      "surface-container-low": "#f2f4f6",
                      "surface-container-lowest": "#ffffff",
                      "on-background": "#191c1e",
                      "on-error-container": "#93000a",
                      "primary": "#003e6f",
                      "surface-tint": "#1961a1",
                      "tertiary-fixed-dim": "#bac9d3",
                      "tertiary-fixed": "#d6e5ef",
                      "surface-container": "#eceef0",
                      "secondary-container": "#fed3c7",
                      "surface-container-high": "#e6e8ea",
                      "on-primary-fixed": "#001c37",
                      "primary-fixed": "#d2e4ff",
                      "on-tertiary-container": "#bccbd5",
                      "on-primary-fixed-variant": "#004880",
                      "surface-bright": "#f7f9fb"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "2xl": "1rem",
                      "full": "9999px"
              },
              "spacing": {
                      "unit": "4px",
                      "container-padding": "24px",
                      "stack-md": "16px",
                      "section-gap": "64px",
                      "stack-sm": "8px",
                      "stack-lg": "32px",
                      "gutter": "16px"
              },
              "fontFamily": {
                      "headline-lg-mobile": [
                              "Plus Jakarta Sans"
                      ],
                      "headline-md": [
                              "Plus Jakarta Sans"
                      ],
                      "headline-sm": [
                              "Plus Jakarta Sans"
                      ],
                      "headline-lg": [
                              "Plus Jakarta Sans"
                      ],
                      "label-md": [
                              "Inter"
                      ],
                      "display-lg": [
                              "Plus Jakarta Sans"
                      ],
                      "body-lg": [
                              "Inter"
                      ],
                      "body-md": [
                              "Inter"
                      ]
              },
              "fontSize": {
                      "headline-lg-mobile": [
                              "28px",
                              {
                                      "lineHeight": "1.2",
                                      "fontWeight": "700"
                              }
                      ],
                      "headline-md": [
                              "24px",
                              {
                                      "lineHeight": "1.3",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-sm": [
                              "20px",
                              {
                                      "lineHeight": "1.4",
                                      "fontWeight": "600"
                              }
                      ],
                      "headline-lg": [
                              "32px",
                              {
                                      "lineHeight": "1.2",
                                      "fontWeight": "700"
                              }
                      ],
                      "label-md": [
                              "14px",
                              {
                                      "lineHeight": "1.4",
                                      "letterSpacing": "0.05em",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-lg": [
                              "48px",
                              {
                                      "lineHeight": "1.1",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "1.6",
                                      "fontWeight": "400"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "1.5",
                                      "fontWeight": "400"
                              }
                      ]
              }
      },
          },
        }
      </script>
<style>
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 1;
        }
        .hero-gradient {
            background: linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%);
        }
        .card-shadow {
            box-shadow: 0px 4px 20px rgba(0, 86, 150, 0.05);
        }
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
      </style>
</head>
<body class="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
<!-- TopNavBar -->
<header class="bg-surface shadow-sm docked full-width top-0 z-50 sticky">
<div class="flex justify-between items-center w-full px-container-padding max-w-[1440px] mx-auto h-20">
<!-- Logo & Brand -->
<div class="flex items-center gap-4">
<img alt="Kristu Jayanti College Logo" class="h-12 w-12 object-contain rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGiAbIKhJQnAdbqrjWfkMS5z7iZGZgrbGajiiz4b6ov2UPbyenAW72eo-kfsYaSeU1Xx_MqS2iDLGagKXflGnpQIgk9fLyyTM6uDT8H5kGoWenkUWHEjjZ9Od_doTAyDgsANU69rTpQ6i7ZisrrrNA-Ssht-TNoBQDlFncCg2L7ZNz__XsPKoBb3BV0rLtzUwfEJywcpQhqSbsUfhv1wmF7-jmZN_Ff63jBntdkYPnpvA_ePO1dnkjVfbgjsmBop05mw">
<div class="flex flex-col">
<span class="text-headline-md font-headline-md font-bold text-primary">Cafe Q</span>
<span class="text-[10px] text-secondary font-medium tracking-wide">Good Food. Great Campus Life.</span>
</div>
</div>
<!-- Navigation Links (Hidden on Mobile) -->
<nav class="hidden md:flex items-center gap-6">
<a class="text-primary border-b-2 border-primary font-bold pb-1 text-label-md font-label-md" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Menu</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">My Orders</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Wallet</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Offers</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">About Us</a>
<a class="text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md" href="#">Contact</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-4">
<button class="relative p-2 text-primary hover:bg-surface-container-high rounded-full transition-all">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-white">3</span>
</button>
<button class="bg-primary text-on-primary px-6 py-2 rounded-2xl font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-2">
<span class="material-symbols-outlined text-[20px]">person</span> Login
                </button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-[1440px] mx-auto px-container-padding py-stack-lg space-y-section-gap overflow-hidden">
<!-- Search Bar -->
<div class="w-full max-w-[800px] mx-auto mb-8 relative flex gap-3 flex-grow">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary">search</span>
</div>
<input class="w-full pl-12 pr-4 py-4 rounded-[16px] border-none shadow-sm card-shadow text-body-md focus:ring-2 focus:ring-primary outline-none bg-surface-container-lowest" placeholder="Search meals, cafés, outlets or offers..." type="text"><div class="relative flex-shrink-0">
<button class="h-full px-6 flex items-center gap-2 bg-white border-2 border-primary text-primary rounded-[12px] font-bold hover:bg-primary/5 transition-colors" id="filter-toggle-btn" onclick="document.getElementById('filter-panel').classList.toggle('hidden')">
<span class="material-symbols-outlined">filter_list</span>
<span class="">Filter</span>
</button>
<!-- Filter Dropdown Panel -->
<div class="hidden absolute right-0 top-full mt-2 w-[320px] bg-white rounded-2xl shadow-lg border border-outline-variant/30 z-50 p-6" id="filter-panel">
<div class="flex justify-between items-center mb-6">
<h3 class="font-bold text-on-surface">Filter</h3>
<button class="text-primary text-label-sm font-bold hover:underline">Clear All</button>
</div>
<div class="space-y-4">
<div>
<label class="block text-label-sm text-on-surface-variant mb-1">Canteen</label>
<select class="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary">
<option>All Canteens</option>
<option>Campus Bites</option>
<option>Delhi Bites</option>
<option>Lumina Foods</option>
<option>Annapoorna</option>
<option>Zamorine Café</option>
</select>
</div>
<div>
<label class="block text-label-sm text-on-surface-variant mb-1">Food Type</label>
<select class="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary">
<option>All</option>
<option>Vegetarian</option>
<option>Non-Vegetarian</option>
</select>
</div>
<div>
<label class="block text-label-sm text-on-surface-variant mb-1">Category</label>
<select class="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary">
<option>All</option>
<option>Breakfast</option>
<option>Lunch</option>
<option>Snacks</option>
<option>Beverages</option>
<option>Desserts</option>
</select>
</div>
<div>
<label class="block text-label-sm text-on-surface-variant mb-1">Price</label>
<select class="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary">
<option>Any Price</option>
<option>Under ₹50</option>
<option>₹50–₹100</option>
<option>₹100–₹200</option>
<option>₹200+</option>
</select>
</div>
<div>
<label class="block text-label-sm text-on-surface-variant mb-1">Availability</label>
<select class="w-full p-2 rounded-lg border border-outline-variant text-body-md outline-none focus:ring-1 focus:ring-primary">
<option>All</option>
<option>Open Now</option>
<option>Available for Ordering</option>
</select>
</div>
</div>
<div class="flex gap-3 mt-8">
<button class="flex-1 py-2 rounded-xl border border-primary text-primary font-bold text-label-md hover:bg-primary/5 transition-colors">Clear All</button>
<button class="flex-1 py-2 rounded-xl bg-primary text-white font-bold text-label-md hover:opacity-90 transition-opacity">Apply Filters</button>
</div>
</div>
</div>
</div>
<!-- Hero Section (Carousel) -->
<section class="relative w-full flex flex-col mb-8">
<div class="relative w-full h-[400px]">
<!-- Left Arrow -->
<button class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition" onclick="moveCarousel(-1)">
<span class="material-symbols-outlined text-primary">chevron_left</span>
</button>
<!-- Carousel Container -->
<div class="w-full overflow-hidden relative rounded-[16px] h-full" id="carousel-container">
<div class="flex transition-transform duration-500 w-full h-full" id="carousel-track" style="transform: translateX(-400%);">
<!-- Slide 1 -->
<div class="w-full flex-shrink-0 h-full relative">
<img alt="Banner 1" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZexvwBj0eZwaHiSdhvnfx105Bmyl3hRUVVqaTBP77put3w7NMtIPyA9WMnJKBW-IGfNOLIldRlw2YdhBzBVf-J5h6kjsAmRd54i06KXpVOdYlrrw5u56DesRPPBcwOqvfL65pREGLxQEFfw7sJvmofPgTR3qKxB1ZPnEmhTTaTQNVrHWRPJ-SC0kQ9s0YyJzRrTYwhP8dDN0T7TZkWtwvbeTSlFkbED6KiU6qdFmVvjtjkuCWhyg9A25fp_pyx8YpMg">
</div>
<!-- Slide 2 -->
<div class="w-full flex-shrink-0 h-full relative">
<img alt="Banner 2" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5NETyvdSuL-FhpzbDzjb7KO7g9HlrDIG8aIxSOeUDDoUm-cVnpXpySd65kdS56GEKIqLxFsA_zFNPMrufEUbJJkwWOBGO51mvPYyni8tLbEYaqYPlJ3Ui4jKyOXcbYdg6cZVyIx9k9evmTYHEVJnKQOxQAVK_DfdyKhFMxB7zZ2yCICShqprMuEJzPoUo6uxUz8gb8URfcD3UTaC5Oqml7n5n9xHCGQoMv9iROF0FJpU1eN-YZuQfveMegRH-cQO5Lg">
</div>
<!-- Slide 3 -->
<div class="w-full flex-shrink-0 h-full relative">
<img alt="Banner 3" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6jBAW5g4Wx6EP5QFgu-_fIvUMvtbnTlHST1cCNb7Sspy9jlBu2vgGn8OnwFUW-B64zQhf1018kmpItqSZuHinzfWjy1VuEBmTJZFGUzxEbTddMkpklOF2_c2weZiDPjTV5TuWVtKjnReeQZvuuKf1jVCSZPkUt54E0aDMak5vo9T0J3tFmBQh0eVQdI2wIKIAGadDcE6fmbpep9kqcwYn2MajIbXFvK3o3WmeKD-iDC4gFnfIoLRYHUettjfK2ZbEg">
</div>
<!-- Slide 4 -->
<div class="w-full flex-shrink-0 h-full relative">
<img alt="Banner 4" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClhMefATQHp1B67cTXt3PuVpQV7c9XazmCAfblPmQaYJqF1lUyAv1wYCoACoLy5JPM-g-7CNSW8EAkR_SKiRJA2pTFhPeeV1CfRTdzqC9z9cBs7Zs7fdu6gezyAYp9r2umcMPdpdDpffJwlXC_jBujxnnuNb4TiDostAejEQG-hEpjiDgtJAgkiG8zaTVyrDG4184NUsD-71odbHaQa_LUAtKFt9hN4WjeluvMgAPbQE2xHlHPJKeuZW5MlUDToMRb9w">
</div>
<!-- Slide 5 -->
<div class="w-full flex-shrink-0 h-full relative">
<img alt="Banner 5" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpDiC2xp8_haaqhUXlH4ubYMCP_3aml9uzBOqfvqfyUbv5HxZtho-CygjKZrvdet2zWwuWei8mQeJiXmmAC5DD-F7aOxyuQM6oZWZZrCgvxu_5T5HyxVPOMlb71t7q0gYHXuoV3b9RJpSb5_by3SijonrpKuCokQPhMv2V0ZU5YmkLHM3ixmCzmJ6popql6IrErqO_968SLFoRFied4Jo2_3lqHDrtVElQQzsphRyXyN46aTzHqN9bybWx7fLb7q-LTQ">
</div>
</div>
</div>
<!-- Right Arrow -->
<button class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition" onclick="moveCarousel(1)">
<span class="material-symbols-outlined text-primary">chevron_right</span>
</button>
</div>
<!-- Pagination Dots -->
<div class="flex justify-center gap-2 mt-4" id="carousel-dots">
<div class="w-2.5 h-2.5 bg-outline-variant rounded-full transition-all duration-300 cursor-pointer" onclick="goToSlide(0)"></div>
<div class="w-2.5 h-2.5 bg-outline-variant rounded-full transition-all duration-300 cursor-pointer" onclick="goToSlide(1)"></div>
<div class="w-2.5 h-2.5 bg-outline-variant rounded-full transition-all duration-300 cursor-pointer" onclick="goToSlide(2)"></div>
<div class="w-2.5 h-2.5 bg-outline-variant rounded-full transition-all duration-300 cursor-pointer" onclick="goToSlide(3)"></div>
<div class="w-2.5 h-2.5 bg-primary rounded-full transition-all duration-300 cursor-pointer" onclick="goToSlide(4)"></div>
</div>
</section>
<!-- Quick Action Bar -->
<section class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"><div class="bg-surface-container-lowest rounded-2xl overflow-hidden flex items-center card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
<div class="w-[40%] h-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
<img alt="Order Meals" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtCh5swLtqod3evPh7eNWVPBMvL1f290yXnI-qVwLCOsVlypC-xV7lCvIrdgjdXXO1ITPIinHiIED3DNhiISudBmhCfGuPwiDm9JxWuCvn1ptMUCekeAPWCBiTq6w7QmJxi1DeRE3_VLr9o4DA4t8EoFxvya-T1MT4XJZNd6JWRBNGXipdl25YrEie4Ka32w8NvzVmWkUb6-WIFZGq6r5Tgn1G6ytc_-K-OAMv_5yy3cES3eKhMVqS">
</div>
<div class="p-3 flex-1">
<h4 class="font-label-md text-label-md text-primary">Order Meals</h4>
<p class="text-[10px] text-on-surface-variant">Breakfast &amp; Lunch</p>
</div>
</div>
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden flex items-center card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
<div class="w-[40%] h-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
<img alt="Scan &amp; Eat" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQUahV0RzqHYs31W6dWfxObkRHYMNLAUq9kKJegdlIC-yOL0wvkCVhzudons0iBEp-bmfMuXDiZ8nPcH_p9yeHFMroYXWaQTzoGB3bviomkTiDdnhEzCG0QkyLkAYqacVVHO9hBQPaa2vgv56uUlamMfkeaEh_FnVgoReQ9UmD2VQH_E1nN1TlsN3seEJt_VgDXhwyt_CJ5wsCGlffg13abRH1zwhHoFti32N4N9mWhTGN7biQSYBS">
</div>
<div class="p-3 flex-1">
<h4 class="font-label-md text-label-md text-primary">Scan &amp; Eat</h4>
<p class="text-[10px] text-on-surface-variant">Show QR at Counter</p>
</div>
</div>
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden flex items-center card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
<div class="w-[40%] h-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
<img alt="Make Payment" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4OybajE7xPuw4pQdObD1igJNDPK_g9JV_3KZ9XpZxGGb8PipMlxDKTtL4hyK62ENmJycEcKG_NMCBuziMGx4QOK3vB9WNdGVkbtVNHzPMm4sw4nPLD6ImmeE4kOFwLnQYVHJ6RLN2Zeo1wb0NjbB2sTuHvwQH47drtKBk0NuI46fnW07Jz9AKMmAIhknVBDAXi-7S-hnLpjbaQxW7KGONZZ9ujy50H3Uto3hZ_44QF6AXNysxzTeJ">
</div>
<div class="p-3 flex-1">
<h4 class="font-label-md text-label-md text-primary">Make Payment</h4>
<p class="text-[10px] text-on-surface-variant">UPI / Cards / Wallet</p>
</div>
</div>
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden flex items-center card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
<div class="w-[40%] h-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
<img alt="Digital Bill" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDyt7eFTTabld-a5tiAWffTJsWjvPMywf4S1h2xFAcA0mUuJMNldLRjF_k1mKrZpN1KMOUT6yTuduzT64gJ9hROnA1vL8310003pgDvY32hLWc2Ohi-z0vhpmpWJFOywOl2Cq6TlVOQL32STWtx3zozxwbU3CtU9UdPqJ1_D6ch0Pc8VgVlx5wEZYTZrUhkfEIaQycMsMHDDXHOY2S0mWzHQfUnVZwIr99d0DkmUYzX6RYw_nMhaSX">
</div>
<div class="p-3 flex-1">
<h4 class="font-label-md text-label-md text-primary">Digital Bill</h4>
<p class="text-[10px] text-on-surface-variant">Download Anytime</p>
</div>
</div>
<div class="bg-surface-container-lowest rounded-2xl overflow-hidden flex items-center card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group md:col-span-1 col-span-2">
<div class="w-[40%] h-full bg-blue-50/50 flex items-center justify-center overflow-hidden">
<img alt="Order History" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdDyR4yt5y-QahfggIeyBltgl_x8ZoXk4QS0wX-KxqZS72jaVjvtpdwgQ7pqzLCOG8uNc5BcOV2afoEam37CjfKcCm54IMrLz0OJ07J9YTEYWv2F6GisENK7iVMwnr3xZVfmDozDSG__4DhEhyh7TMEBxK9Zerycq3Da0spqdoiDA33IySUCaFV7DVzU1aqrsrw5fNxy-iggaRcLUmT8GuqGrd1NlHBftSC_O8QJXSOLJKvDIZ79XJ">
</div>
<div class="p-3 flex-1">
<h4 class="font-label-md text-label-md text-primary">Order History</h4>
<p class="text-[10px] text-on-surface-variant">View Past Orders</p>
</div>
</div></section><section class="mt-16 w-full relative">
<div class="flex justify-between items-center mb-6">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-[28px]">stars</span>
<h2 class="text-headline-md font-headline-md font-bold text-on-surface">Today's Menu Highlights</h2>
</div>
<a class="text-primary hover:text-primary-fixed-variant font-label-md text-label-md flex items-center gap-1 transition-colors" href="#">
      View Full Menu <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div class="relative w-full overflow-hidden">
<div class="flex gap-6 overflow-x-visible carousel-track py-2 px-1" id="menu-track" style="transition: none; transform: translateX(0px);">
<!-- Card 1: Masala Dosa -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Masala Dosa" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCipV1REBEaPCM99pCchq9I5N7q9orHZRefaa2jUzsuP8fBuw29B3rlo67tk6vkf7GPnZeeMAtQy3YFmbctdLO8zoWDmm_iBtrcDHsqmCpjxKT01SY3txOABPolAlk5ME4Ya5SZ1W_JDgt9PShuvPsG9ModmMLaW3Cn8ypjz-iTtllVDxWWbazoOpY6tuqxa-Oq-I1IykZC1pjD3RUkIwxzwzD77HC2zILLN25JeHa8ZK328AfZTr9Mg2kExSXLvgc8Og">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Masala Dosa</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Crispy golden dosa served with flavorful potato masala and chutneys</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹45</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div>
<!-- Card 2: Chicken Biryani -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Chicken Biryani" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgMjWPGxxHQgTCLY4I0bTcedr6HOB_Z-Y2QoHdJ4XAQjX1rgHoVwfsH9FI4H33Jp-NQq14o7LObys3irLQVR6qQ4kL1ctXOpb-jRXs5DSMKPSGQ3u7w8oMy4sQNWdG970emVV_ZWqOOl0RugOns21_rMY0mUOfXDDddFppDmxE9bCot6jO4_GHjkTAafusq2O9h6YNZcdw8FGGlRMkgwCy-v6SxNS-95d-rVLDBnWLYeqdMTK7R7jzwjZ-oD6OUArAg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Chicken Biryani</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Aromatic basmati rice cooked with succulent chicken and spices</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹90</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div>
<!-- Card 3: Paneer Tikka Roll -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Paneer Tikka Roll" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHj0E0xQMbJAs4s96PsYTuDFKgEUYHOZc9ddxjlVfSmfDm47RgBNopF64Sqiz6oHt74Hwt_bx3glo8eMAwbTodR88gVRqWGA9V-_pgJ9O95wvLXj7pLG_RY9pft64VI71QDe5oyeNIwpLP93tiUQmXncDOIu7nZbIb4rGHsBZqnXQPKVQwpHLnWrNXUX94mUKmKHc_ykOe7rcOVAkwJlrRYY7Ek2DMYEqpxX-orKjT00qDzIw2JpnAAs-oayoLPY7fYg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Paneer Tikka Roll</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Grilled paneer cubes wrapped in a soft paratha with fresh veggies</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹65</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div>
<!-- Card 4: Classic Beef Burger -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Classic Beef Burger" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzM94Cup16awhDYbL1mLsksRbB_POoYTdvqwBODF0czVl3C7TwSfhAAmFjCCY34hjve6owp-wHJ4ymD3XFIEU7mFk1lju2Mt9k6w6YKoVLrSTEZMnxFeu27qlyI943VAtu7_CLcrBPx9_8Gz-KWhMGoVNNSEp3VK14fgQExYnKp-CoHu-ppES5jyNHL-0epUuYsRfSem2LbrhgW97PQia9U5KGvm7Tvjxs0lZ3F10krdWomACCZMvFgwBJNLzlAsIeOA">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Classic Beef Burger</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Juicy beef patty with fresh lettuce, tomato, and signature sauce</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹120</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div>
<!-- Card 5: Malabar Parotta with Curry -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Malabar Parotta with Curry" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfiGqauaYrG6ENqXPUrto_ITQvNRSlzKr_et2tDyZnRdpMgN2nc3AT_1ygyxCd4cHbydyZI5bQki_-bbbHH84LWFpH4U3SgSJWtF6EcHY8VSZ_EFyAeIY9_8IYciEx8fYYgThwwWGrOIl2Y9bV0CTiUqDr7qnNc_bTdMiMf_Xac8ps6UouEGFIb08UVMcK3y64Q2tWhzHeqdABxhXmlbyZh9NE1X5zlkoNR2Bs8nLXlEHHGpZ_TyljR4Pm9G08HdQIQ">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Malabar Parotta with Curry</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Flaky layered parotta served with spicy chicken curry</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹85</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div>
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Masala Dosa" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCipV1REBEaPCM99pCchq9I5N7q9orHZRefaa2jUzsuP8fBuw29B3rlo67tk6vkf7GPnZeeMAtQy3YFmbctdLO8zoWDmm_iBtrcDHsqmCpjxKT01SY3txOABPolAlk5ME4Ya5SZ1W_JDgt9PShuvPsG9ModmMLaW3Cn8ypjz-iTtllVDxWWbazoOpY6tuqxa-Oq-I1IykZC1pjD3RUkIwxzwzD77HC2zILLN25JeHa8ZK328AfZTr9Mg2kExSXLvgc8Og">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Masala Dosa</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Crispy golden dosa served with flavorful potato masala and chutneys</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹45</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Chicken Biryani" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgMjWPGxxHQgTCLY4I0bTcedr6HOB_Z-Y2QoHdJ4XAQjX1rgHoVwfsH9FI4H33Jp-NQq14o7LObys3irLQVR6qQ4kL1ctXOpb-jRXs5DSMKPSGQ3u7w8oMy4sQNWdG970emVV_ZWqOOl0RugOns21_rMY0mUOfXDDddFppDmxE9bCot6jO4_GHjkTAafusq2O9h6YNZcdw8FGGlRMkgwCy-v6SxNS-95d-rVLDBnWLYeqdMTK7R7jzwjZ-oD6OUArAg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Chicken Biryani</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Aromatic basmati rice cooked with succulent chicken and spices</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹90</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Paneer Tikka Roll" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHj0E0xQMbJAs4s96PsYTuDFKgEUYHOZc9ddxjlVfSmfDm47RgBNopF64Sqiz6oHt74Hwt_bx3glo8eMAwbTodR88gVRqWGA9V-_pgJ9O95wvLXj7pLG_RY9pft64VI71QDe5oyeNIwpLP93tiUQmXncDOIu7nZbIb4rGHsBZqnXQPKVQwpHLnWrNXUX94mUKmKHc_ykOe7rcOVAkwJlrRYY7Ek2DMYEqpxX-orKjT00qDzIw2JpnAAs-oayoLPY7fYg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Paneer Tikka Roll</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Grilled paneer cubes wrapped in a soft paratha with fresh veggies</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹65</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Classic Beef Burger" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzM94Cup16awhDYbL1mLsksRbB_POoYTdvqwBODF0czVl3C7TwSfhAAmFjCCY34hjve6owp-wHJ4ymD3XFIEU7mFk1lju2Mt9k6w6YKoVLrSTEZMnxFeu27qlyI943VAtu7_CLcrBPx9_8Gz-KWhMGoVNNSEp3VK14fgQExYnKp-CoHu-ppES5jyNHL-0epUuYsRfSem2LbrhgW97PQia9U5KGvm7Tvjxs0lZ3F10krdWomACCZMvFgwBJNLzlAsIeOA">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Classic Beef Burger</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Juicy beef patty with fresh lettuce, tomato, and signature sauce</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹120</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Malabar Parotta with Curry" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfiGqauaYrG6ENqXPUrto_ITQvNRSlzKr_et2tDyZnRdpMgN2nc3AT_1ygyxCd4cHbydyZI5bQki_-bbbHH84LWFpH4U3SgSJWtF6EcHY8VSZ_EFyAeIY9_8IYciEx8fYYgThwwWGrOIl2Y9bV0CTiUqDr7qnNc_bTdMiMf_Xac8ps6UouEGFIb08UVMcK3y64Q2tWhzHeqdABxhXmlbyZh9NE1X5zlkoNR2Bs8nLXlEHHGpZ_TyljR4Pm9G08HdQIQ">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Malabar Parotta with Curry</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Flaky layered parotta served with spicy chicken curry</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹85</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Masala Dosa" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCipV1REBEaPCM99pCchq9I5N7q9orHZRefaa2jUzsuP8fBuw29B3rlo67tk6vkf7GPnZeeMAtQy3YFmbctdLO8zoWDmm_iBtrcDHsqmCpjxKT01SY3txOABPolAlk5ME4Ya5SZ1W_JDgt9PShuvPsG9ModmMLaW3Cn8ypjz-iTtllVDxWWbazoOpY6tuqxa-Oq-I1IykZC1pjD3RUkIwxzwzD77HC2zILLN25JeHa8ZK328AfZTr9Mg2kExSXLvgc8Og">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Masala Dosa</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Crispy golden dosa served with flavorful potato masala and chutneys</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹45</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Chicken Biryani" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgMjWPGxxHQgTCLY4I0bTcedr6HOB_Z-Y2QoHdJ4XAQjX1rgHoVwfsH9FI4H33Jp-NQq14o7LObys3irLQVR6qQ4kL1ctXOpb-jRXs5DSMKPSGQ3u7w8oMy4sQNWdG970emVV_ZWqOOl0RugOns21_rMY0mUOfXDDddFppDmxE9bCot6jO4_GHjkTAafusq2O9h6YNZcdw8FGGlRMkgwCy-v6SxNS-95d-rVLDBnWLYeqdMTK7R7jzwjZ-oD6OUArAg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Chicken Biryani</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Aromatic basmati rice cooked with succulent chicken and spices</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹90</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Paneer Tikka Roll" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHj0E0xQMbJAs4s96PsYTuDFKgEUYHOZc9ddxjlVfSmfDm47RgBNopF64Sqiz6oHt74Hwt_bx3glo8eMAwbTodR88gVRqWGA9V-_pgJ9O95wvLXj7pLG_RY9pft64VI71QDe5oyeNIwpLP93tiUQmXncDOIu7nZbIb4rGHsBZqnXQPKVQwpHLnWrNXUX94mUKmKHc_ykOe7rcOVAkwJlrRYY7Ek2DMYEqpxX-orKjT00qDzIw2JpnAAs-oayoLPY7fYg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Paneer Tikka Roll</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Grilled paneer cubes wrapped in a soft paratha with fresh veggies</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹65</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Classic Beef Burger" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzM94Cup16awhDYbL1mLsksRbB_POoYTdvqwBODF0czVl3C7TwSfhAAmFjCCY34hjve6owp-wHJ4ymD3XFIEU7mFk1lju2Mt9k6w6YKoVLrSTEZMnxFeu27qlyI943VAtu7_CLcrBPx9_8Gz-KWhMGoVNNSEp3VK14fgQExYnKp-CoHu-ppES5jyNHL-0epUuYsRfSem2LbrhgW97PQia9U5KGvm7Tvjxs0lZ3F10krdWomACCZMvFgwBJNLzlAsIeOA">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Classic Beef Burger</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Juicy beef patty with fresh lettuce, tomato, and signature sauce</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹120</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Malabar Parotta with Curry" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfiGqauaYrG6ENqXPUrto_ITQvNRSlzKr_et2tDyZnRdpMgN2nc3AT_1ygyxCd4cHbydyZI5bQki_-bbbHH84LWFpH4U3SgSJWtF6EcHY8VSZ_EFyAeIY9_8IYciEx8fYYgThwwWGrOIl2Y9bV0CTiUqDr7qnNc_bTdMiMf_Xac8ps6UouEGFIb08UVMcK3y64Q2tWhzHeqdABxhXmlbyZh9NE1X5zlkoNR2Bs8nLXlEHHGpZ_TyljR4Pm9G08HdQIQ">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Malabar Parotta with Curry</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Flaky layered parotta served with spicy chicken curry</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹85</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Masala Dosa" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCipV1REBEaPCM99pCchq9I5N7q9orHZRefaa2jUzsuP8fBuw29B3rlo67tk6vkf7GPnZeeMAtQy3YFmbctdLO8zoWDmm_iBtrcDHsqmCpjxKT01SY3txOABPolAlk5ME4Ya5SZ1W_JDgt9PShuvPsG9ModmMLaW3Cn8ypjz-iTtllVDxWWbazoOpY6tuqxa-Oq-I1IykZC1pjD3RUkIwxzwzD77HC2zILLN25JeHa8ZK328AfZTr9Mg2kExSXLvgc8Og">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Masala Dosa</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Crispy golden dosa served with flavorful potato masala and chutneys</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹45</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Chicken Biryani" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgMjWPGxxHQgTCLY4I0bTcedr6HOB_Z-Y2QoHdJ4XAQjX1rgHoVwfsH9FI4H33Jp-NQq14o7LObys3irLQVR6qQ4kL1ctXOpb-jRXs5DSMKPSGQ3u7w8oMy4sQNWdG970emVV_ZWqOOl0RugOns21_rMY0mUOfXDDddFppDmxE9bCot6jO4_GHjkTAafusq2O9h6YNZcdw8FGGlRMkgwCy-v6SxNS-95d-rVLDBnWLYeqdMTK7R7jzwjZ-oD6OUArAg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Chicken Biryani</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Aromatic basmati rice cooked with succulent chicken and spices</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹90</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Paneer Tikka Roll" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHj0E0xQMbJAs4s96PsYTuDFKgEUYHOZc9ddxjlVfSmfDm47RgBNopF64Sqiz6oHt74Hwt_bx3glo8eMAwbTodR88gVRqWGA9V-_pgJ9O95wvLXj7pLG_RY9pft64VI71QDe5oyeNIwpLP93tiUQmXncDOIu7nZbIb4rGHsBZqnXQPKVQwpHLnWrNXUX94mUKmKHc_ykOe7rcOVAkwJlrRYY7Ek2DMYEqpxX-orKjT00qDzIw2JpnAAs-oayoLPY7fYg">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Paneer Tikka Roll</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Grilled paneer cubes wrapped in a soft paratha with fresh veggies</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹65</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Classic Beef Burger" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzM94Cup16awhDYbL1mLsksRbB_POoYTdvqwBODF0czVl3C7TwSfhAAmFjCCY34hjve6owp-wHJ4ymD3XFIEU7mFk1lju2Mt9k6w6YKoVLrSTEZMnxFeu27qlyI943VAtu7_CLcrBPx9_8Gz-KWhMGoVNNSEp3VK14fgQExYnKp-CoHu-ppES5jyNHL-0epUuYsRfSem2LbrhgW97PQia9U5KGvm7Tvjxs0lZ3F10krdWomACCZMvFgwBJNLzlAsIeOA">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Classic Beef Burger</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Juicy beef patty with fresh lettuce, tomato, and signature sauce</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹120</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[16px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
<div class="relative h-40 overflow-hidden">
<img alt="Malabar Parotta with Curry" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkfiGqauaYrG6ENqXPUrto_ITQvNRSlzKr_et2tDyZnRdpMgN2nc3AT_1ygyxCd4cHbydyZI5bQki_-bbbHH84LWFpH4U3SgSJWtF6EcHY8VSZ_EFyAeIY9_8IYciEx8fYYgThwwWGrOIl2Y9bV0CTiUqDr7qnNc_bTdMiMf_Xac8ps6UouEGFIb08UVMcK3y64Q2tWhzHeqdABxhXmlbyZh9NE1X5zlkoNR2Bs8nLXlEHHGpZ_TyljR4Pm9G08HdQIQ">
<div class="absolute top-2 right-2 bg-white p-1 rounded-sm shadow-sm">
<div class="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
<div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
</div>
</div>
</div>
<div class="p-4 flex flex-col flex-grow">
<h3 class="font-bold text-on-surface mb-1">Malabar Parotta with Curry</h3>
<p class="text-[12px] text-on-surface-variant line-clamp-2 mb-4 h-9">Flaky layered parotta served with spicy chicken curry</p>
<div class="flex justify-between items-center mt-auto">
<span class="font-bold text-primary">₹85</span>
<button class="px-4 py-1 rounded-full border border-primary text-primary text-label-sm font-bold hover:bg-primary hover:text-white transition-colors">Add +</button>
</div>
</div>
</div></div>
</div>
</section>
<!-- Our Canteen Outlets Section -->
<section class="mt-16 w-full relative">
<div class="flex justify-between items-center mb-6">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-[28px]">storefront</span>
<h2 class="text-headline-md font-headline-md font-bold text-on-surface">Our Canteen Outlets</h2>
</div>
<a class="text-primary hover:text-primary-fixed-variant font-label-md text-label-md flex items-center gap-1 transition-colors" href="#">
            View All Outlets <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<!-- Outlets Carousel -->
<div class="relative w-full overflow-hidden" id="outlets-carousel-container">
<div class="flex gap-6 carousel-track py-2 px-1" id="outlets-track" style="transition: transform 0.5s ease-in-out; transform: translateX(-1008px);">
<!-- Card 1: Campus Bites -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Campus Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWubJtBSrNYKDurdXhh-yjJMq-uUncIwRhZuc-oKSoiS4Ylvs1x9xZZxlOf57Q_TqfzUxTQxFIH-TFFAq9mIOYZ2W0R0daJpAVbGBIXqVVGR2Rre4O9Y7sLtvW3g-5GNLJwfFcQ85Xtm3xTVnC97LUz6hKMJi5Cd1_YE5jjch5TlYxQ_UrfIJMfFSK3nLiKWUqTlsCObXg1T0AZidN4_GW70XZLmLZYUC1-sdk_7sihoLHd1Tw57GF58QsEibl1yqtg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Non Veg
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Campus Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div>
<!-- Card 2: Delhi Bites -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Delhi Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCREA6y2ayt8NnjcDvUlVqFaIDeMoP25aPJwVNyjZYVcIGVJlT1gd_HpLLxIvctfqd50MQoB0yccnLADtAbXt9Gf6QR8NAPVryP37lg46p5TlF9lhABe-mqlyrayQ-NzflayoABO9LClXjUgmARJ318-jsXOM_PEpUoQf-6ug2CNQDaGhdky0UbVnEWi7Voi86bf4cBW2vQgiBEAXokGDvizia5bTindIBay-b9tzJJZ80v1eJkBNDJv4h0AeFGGHf3sA">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        North Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Delhi Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">8:00 AM – 8:00 PM</span>
</div>
</div>
<!-- Card 3: Lumina Foods -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Lumina Foods" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy2_EkbT2HLBHa39EsB7X7fYIrVVMkG509Dia_n_abxJnTGhQgECPZgbTUIYfzc5dBeHMrJv7UdaRHztlNsKiN8Oqmx1Pe2hp8jil-G3L9PE9381klkj-zxTXyN_7v6NVpSAuMoLknuYBWcVSF4DJQhI1Y7QVr-mzFjZZvKbFoMDoTGKtGF8D3qHVUuiyOSkK4Lo0UC2G9vSgkXoGZb9TdCTUwzgx4pAux525D2NsknL2MIaOpe_HD_aEORSFNgW-fmg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Healthy &amp; Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Lumina Foods</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:30 AM – 7:30 PM</span>
</div>
</div>
<!-- Card 4: Annapoorna -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Annapoorna" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdhfx4fyT4WAZnSD5ui1a7iOr0qoGnRAAnpo3RFKkDUGDo4RYcdzD4-HiN9E5Tdc9khyPVqyu6ntmlVf31aEB_zmo6SQR_Vonq3sdZ77bfqUQF9xUWlcXQelG5KwISlklhp2czll40zWf2R1pUWWoCKFajIInARvNbvrppShewo--eLtFUYL_etsbxMbWrCzYHrbIbs9dHqhYuD-1SEBl09BZsijsRmBKPPjoAdLdbD44_0gV_qejC5itQVZ_4S5WhEg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        South Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Annapoorna</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div>
<!-- Card 5: Zamorine Café -->
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Zamorine Café" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4XOee8V8HgQS_8XmUL9xDjVHFKmFiWbtZAhP1GyuLsM9uJb276NnWLkQuyPxHUf2PKeBcO9dW4567nERwaEt4AFZDY-7KufK21NaNWZNRFbpqH8Lrg8JRYo9vbZUkofuRxzCcup2yNfpwX46tJD4fZb19ib7MSLwO9P5-iM7OFM4E2lhqXiqRoIBv5QYddFzGYGuacqhnNKx0HxodQWTMhkkR8y-xXYYUQ-g23kyjXtXtyUEvEIV_2R60fyAGIHHFg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Zamorine Café</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">9:00 AM – 10:00 PM</span>
</div>
</div>
<div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Campus Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWubJtBSrNYKDurdXhh-yjJMq-uUncIwRhZuc-oKSoiS4Ylvs1x9xZZxlOf57Q_TqfzUxTQxFIH-TFFAq9mIOYZ2W0R0daJpAVbGBIXqVVGR2Rre4O9Y7sLtvW3g-5GNLJwfFcQ85Xtm3xTVnC97LUz6hKMJi5Cd1_YE5jjch5TlYxQ_UrfIJMfFSK3nLiKWUqTlsCObXg1T0AZidN4_GW70XZLmLZYUC1-sdk_7sihoLHd1Tw57GF58QsEibl1yqtg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Non Veg
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Campus Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Delhi Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCREA6y2ayt8NnjcDvUlVqFaIDeMoP25aPJwVNyjZYVcIGVJlT1gd_HpLLxIvctfqd50MQoB0yccnLADtAbXt9Gf6QR8NAPVryP37lg46p5TlF9lhABe-mqlyrayQ-NzflayoABO9LClXjUgmARJ318-jsXOM_PEpUoQf-6ug2CNQDaGhdky0UbVnEWi7Voi86bf4cBW2vQgiBEAXokGDvizia5bTindIBay-b9tzJJZ80v1eJkBNDJv4h0AeFGGHf3sA">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        North Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Delhi Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">8:00 AM – 8:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Lumina Foods" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy2_EkbT2HLBHa39EsB7X7fYIrVVMkG509Dia_n_abxJnTGhQgECPZgbTUIYfzc5dBeHMrJv7UdaRHztlNsKiN8Oqmx1Pe2hp8jil-G3L9PE9381klkj-zxTXyN_7v6NVpSAuMoLknuYBWcVSF4DJQhI1Y7QVr-mzFjZZvKbFoMDoTGKtGF8D3qHVUuiyOSkK4Lo0UC2G9vSgkXoGZb9TdCTUwzgx4pAux525D2NsknL2MIaOpe_HD_aEORSFNgW-fmg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Healthy &amp; Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Lumina Foods</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:30 AM – 7:30 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Annapoorna" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdhfx4fyT4WAZnSD5ui1a7iOr0qoGnRAAnpo3RFKkDUGDo4RYcdzD4-HiN9E5Tdc9khyPVqyu6ntmlVf31aEB_zmo6SQR_Vonq3sdZ77bfqUQF9xUWlcXQelG5KwISlklhp2czll40zWf2R1pUWWoCKFajIInARvNbvrppShewo--eLtFUYL_etsbxMbWrCzYHrbIbs9dHqhYuD-1SEBl09BZsijsRmBKPPjoAdLdbD44_0gV_qejC5itQVZ_4S5WhEg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        South Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Annapoorna</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Zamorine Café" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4XOee8V8HgQS_8XmUL9xDjVHFKmFiWbtZAhP1GyuLsM9uJb276NnWLkQuyPxHUf2PKeBcO9dW4567nERwaEt4AFZDY-7KufK21NaNWZNRFbpqH8Lrg8JRYo9vbZUkofuRxzCcup2yNfpwX46tJD4fZb19ib7MSLwO9P5-iM7OFM4E2lhqXiqRoIBv5QYddFzGYGuacqhnNKx0HxodQWTMhkkR8y-xXYYUQ-g23kyjXtXtyUEvEIV_2R60fyAGIHHFg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Zamorine Café</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">9:00 AM – 10:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Campus Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWubJtBSrNYKDurdXhh-yjJMq-uUncIwRhZuc-oKSoiS4Ylvs1x9xZZxlOf57Q_TqfzUxTQxFIH-TFFAq9mIOYZ2W0R0daJpAVbGBIXqVVGR2Rre4O9Y7sLtvW3g-5GNLJwfFcQ85Xtm3xTVnC97LUz6hKMJi5Cd1_YE5jjch5TlYxQ_UrfIJMfFSK3nLiKWUqTlsCObXg1T0AZidN4_GW70XZLmLZYUC1-sdk_7sihoLHd1Tw57GF58QsEibl1yqtg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Non Veg
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Campus Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Delhi Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCREA6y2ayt8NnjcDvUlVqFaIDeMoP25aPJwVNyjZYVcIGVJlT1gd_HpLLxIvctfqd50MQoB0yccnLADtAbXt9Gf6QR8NAPVryP37lg46p5TlF9lhABe-mqlyrayQ-NzflayoABO9LClXjUgmARJ318-jsXOM_PEpUoQf-6ug2CNQDaGhdky0UbVnEWi7Voi86bf4cBW2vQgiBEAXokGDvizia5bTindIBay-b9tzJJZ80v1eJkBNDJv4h0AeFGGHf3sA">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        North Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Delhi Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">8:00 AM – 8:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Lumina Foods" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy2_EkbT2HLBHa39EsB7X7fYIrVVMkG509Dia_n_abxJnTGhQgECPZgbTUIYfzc5dBeHMrJv7UdaRHztlNsKiN8Oqmx1Pe2hp8jil-G3L9PE9381klkj-zxTXyN_7v6NVpSAuMoLknuYBWcVSF4DJQhI1Y7QVr-mzFjZZvKbFoMDoTGKtGF8D3qHVUuiyOSkK4Lo0UC2G9vSgkXoGZb9TdCTUwzgx4pAux525D2NsknL2MIaOpe_HD_aEORSFNgW-fmg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Healthy &amp; Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Lumina Foods</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:30 AM – 7:30 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Annapoorna" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdhfx4fyT4WAZnSD5ui1a7iOr0qoGnRAAnpo3RFKkDUGDo4RYcdzD4-HiN9E5Tdc9khyPVqyu6ntmlVf31aEB_zmo6SQR_Vonq3sdZ77bfqUQF9xUWlcXQelG5KwISlklhp2czll40zWf2R1pUWWoCKFajIInARvNbvrppShewo--eLtFUYL_etsbxMbWrCzYHrbIbs9dHqhYuD-1SEBl09BZsijsRmBKPPjoAdLdbD44_0gV_qejC5itQVZ_4S5WhEg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        South Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Annapoorna</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Zamorine Café" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4XOee8V8HgQS_8XmUL9xDjVHFKmFiWbtZAhP1GyuLsM9uJb276NnWLkQuyPxHUf2PKeBcO9dW4567nERwaEt4AFZDY-7KufK21NaNWZNRFbpqH8Lrg8JRYo9vbZUkofuRxzCcup2yNfpwX46tJD4fZb19ib7MSLwO9P5-iM7OFM4E2lhqXiqRoIBv5QYddFzGYGuacqhnNKx0HxodQWTMhkkR8y-xXYYUQ-g23kyjXtXtyUEvEIV_2R60fyAGIHHFg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Zamorine Café</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">9:00 AM – 10:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Campus Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVWubJtBSrNYKDurdXhh-yjJMq-uUncIwRhZuc-oKSoiS4Ylvs1x9xZZxlOf57Q_TqfzUxTQxFIH-TFFAq9mIOYZ2W0R0daJpAVbGBIXqVVGR2Rre4O9Y7sLtvW3g-5GNLJwfFcQ85Xtm3xTVnC97LUz6hKMJi5Cd1_YE5jjch5TlYxQ_UrfIJMfFSK3nLiKWUqTlsCObXg1T0AZidN4_GW70XZLmLZYUC1-sdk_7sihoLHd1Tw57GF58QsEibl1yqtg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Non Veg
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Campus Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Delhi Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCREA6y2ayt8NnjcDvUlVqFaIDeMoP25aPJwVNyjZYVcIGVJlT1gd_HpLLxIvctfqd50MQoB0yccnLADtAbXt9Gf6QR8NAPVryP37lg46p5TlF9lhABe-mqlyrayQ-NzflayoABO9LClXjUgmARJ318-jsXOM_PEpUoQf-6ug2CNQDaGhdky0UbVnEWi7Voi86bf4cBW2vQgiBEAXokGDvizia5bTindIBay-b9tzJJZ80v1eJkBNDJv4h0AeFGGHf3sA">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        North Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Delhi Bites</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">8:00 AM – 8:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Lumina Foods" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy2_EkbT2HLBHa39EsB7X7fYIrVVMkG509Dia_n_abxJnTGhQgECPZgbTUIYfzc5dBeHMrJv7UdaRHztlNsKiN8Oqmx1Pe2hp8jil-G3L9PE9381klkj-zxTXyN_7v6NVpSAuMoLknuYBWcVSF4DJQhI1Y7QVr-mzFjZZvKbFoMDoTGKtGF8D3qHVUuiyOSkK4Lo0UC2G9vSgkXoGZb9TdCTUwzgx4pAux525D2NsknL2MIaOpe_HD_aEORSFNgW-fmg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Healthy &amp; Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Lumina Foods</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:30 AM – 7:30 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Annapoorna" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdhfx4fyT4WAZnSD5ui1a7iOr0qoGnRAAnpo3RFKkDUGDo4RYcdzD4-HiN9E5Tdc9khyPVqyu6ntmlVf31aEB_zmo6SQR_Vonq3sdZ77bfqUQF9xUWlcXQelG5KwISlklhp2czll40zWf2R1pUWWoCKFajIInARvNbvrppShewo--eLtFUYL_etsbxMbWrCzYHrbIbs9dHqhYuD-1SEBl09BZsijsRmBKPPjoAdLdbD44_0gV_qejC5itQVZ_4S5WhEg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        South Indian
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Annapoorna</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">7:00 AM – 9:00 PM</span>
</div>
</div><div class="w-[calc(66.666vw-16px)] md:w-[calc(33.333vw-24px)] lg:w-[calc(20vw-28px)] flex-shrink-0 bg-surface-container-lowest rounded-[20px] p-4 card-shadow hover:-translate-y-2 hover:shadow-lg transition-all border border-outline-variant/30 flex flex-col cursor-pointer">
<div class="relative w-full aspect-square rounded-[16px] overflow-hidden mb-4 bg-surface-container">
<img alt="Zamorine Café" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4XOee8V8HgQS_8XmUL9xDjVHFKmFiWbtZAhP1GyuLsM9uJb276NnWLkQuyPxHUf2PKeBcO9dW4567nERwaEt4AFZDY-7KufK21NaNWZNRFbpqH8Lrg8JRYo9vbZUkofuRxzCcup2yNfpwX46tJD4fZb19ib7MSLwO9P5-iM7OFM4E2lhqXiqRoIBv5QYddFzGYGuacqhnNKx0HxodQWTMhkkR8y-xXYYUQ-g23kyjXtXtyUEvEIV_2R60fyAGIHHFg">
<div class="absolute top-3 right-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        Café
                    </div>
</div>
<h3 class="text-headline-sm font-headline-sm text-on-surface mb-1">Zamorine Café</h3>
<div class="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span class="text-[12px] font-bold text-primary flex items-center gap-1"><span class="text-[8px]">●</span> Open</span>
<span class="text-[12px] text-on-surface-variant font-medium">9:00 AM – 10:00 PM</span>
</div>
</div></div>
</div>
</section>
</main>
<!-- Footer Area (Benefits) -->

<script>
    // Banner Carousel Logic
    let currentIndex = 0;
    const totalSlides = 5;
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        Array.from(dotsContainer.children).forEach((dot, index) => {
            if (index === currentIndex) {
                dot.className = 'w-2.5 h-2.5 bg-primary rounded-full transition-all duration-300 cursor-pointer';
            } else {
                dot.className = 'w-2.5 h-2.5 bg-outline-variant rounded-full transition-all duration-300 cursor-pointer';
            }
        });
    }
    
    function moveCarousel(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    setInterval(() => {
        moveCarousel(1);
    }, 3000);

    // Infinite Auto Carousel Logic for Menu and Outlets
    function setupInfiniteCarousel(trackId, intervalTime) {
        const track = document.getElementById(trackId);
        if (!track) return;

        // Clone elements for infinite scrolling
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        let currentPos = 0;
        let isTransitioning = false;

        function getCardWidth() {
            return track.children[0].offsetWidth + 24; // width + gap (gap-6 = 24px)
        }
        
        function getVisibleCards() {
            if (window.innerWidth >= 1024) return 5;
            if (window.innerWidth >= 768) return 3;
            return 1.5;
        }

        function moveNext() {
            if (isTransitioning) return;
            
            const cardWidth = getCardWidth();
            currentPos++;
            
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${currentPos * cardWidth}px)`;
            
            isTransitioning = true;
        }

        track.addEventListener('transitionend', () => {
            isTransitioning = false;
            
            const originalCount = items.length;
            
            if (currentPos >= originalCount) {
                track.style.transition = 'none';
                currentPos = 0;
                track.style.transform = `translateX(0)`;
                // Force a reflow to apply the immediate non-transitioned shift
                void track.offsetWidth;
            }
        });

        // Handle resize
        window.addEventListener('resize', () => {
             track.style.transition = 'none';
             track.style.transform = `translateX(-${currentPos * getCardWidth()}px)`;
             void track.offsetWidth;
        });

        setInterval(moveNext, intervalTime);
    }

    // Initialize carousels
    document.addEventListener('DOMContentLoaded', () => {
        setupInfiniteCarousel('menu-track', 4000);
        setupInfiniteCarousel('outlets-track', 5000);
    });

</script>


</body></html>