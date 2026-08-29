<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Create Account - Cafe Q</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-container": "#cf9215",
                        "secondary-container": "#d5e8d2",
                        "primary-fixed": "#cfeac7",
                        "surface-container": "#efeeea",
                        "on-secondary-container": "#586957",
                        "on-tertiary-fixed-variant": "#604100",
                        "on-background": "#1b1c1a",
                        "primary": "#0f240e",
                        "surface-variant": "#e3e2de",
                        "outline-variant": "#c3c8be",
                        "on-tertiary": "#ffffff",
                        "surface-tint": "#4d6449",
                        "surface-container-low": "#f5f4ef",
                        "secondary-fixed-dim": "#b9ccb6",
                        "on-error": "#ffffff",
                        "tertiary": "#2d1c00",
                        "surface-bright": "#faf9f5",
                        "on-primary-fixed-variant": "#364c33",
                        "tertiary-fixed-dim": "#feba41",
                        "on-secondary": "#ffffff",
                        "tertiary-fixed": "#ffdeae",
                        "surface-container-high": "#e9e8e4",
                        "on-primary-container": "#8ba485",
                        "surface-container-highest": "#e3e2de",
                        "inverse-on-surface": "#f2f1ec",
                        "on-primary-fixed": "#0b200b",
                        "primary-container": "#243a22",
                        "on-surface-variant": "#434841",
                        "primary-fixed-dim": "#b3ceac",
                        "inverse-surface": "#30312e",
                        "background": "#faf9f5",
                        "surface-dim": "#dbdad6",
                        "error": "#ba1a1a",
                        "on-tertiary-fixed": "#281900",
                        "on-error-container": "#93000a",
                        "on-surface": "#1b1c1a",
                        "inverse-primary": "#b3ceac",
                        "on-primary": "#ffffff",
                        "on-secondary-fixed": "#101f11",
                        "outline": "#747970",
                        "surface-container-lowest": "#ffffff",
                        "error-container": "#ffdad6",
                        "tertiary-container": "#493000",
                        "secondary-fixed": "#d5e8d2",
                        "secondary": "#526351",
                        "on-secondary-fixed-variant": "#3b4b3b",
                        "surface": "#faf9f5"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "xs": "4px",
                        "md": "24px",
                        "base": "8px",
                        "lg": "40px",
                        "container-max": "1200px",
                        "gutter": "24px",
                        "sm": "12px",
                        "xl": "64px"
                    },
                    "fontFamily": {
                        "body-md": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "headline-lg": ["Inter"],
                        "label-sm": ["Inter"],
                        "script-accent": ["Epilogue"],
                        "display-lg": ["Epilogue"]
                    },
                    "fontSize": {
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
                        "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                        "label-sm": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
                        "script-accent": ["24px", { "lineHeight": "32px", "fontWeight": "400" }],
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
<style>
        .glass-card {
            background: rgba(250, 249, 245, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .botanical-bg-tr {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M90 10C80 20 70 30 60 50' stroke='%23C3C8BE' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M90 10C70 15 60 25 50 40' stroke='%23C3C8BE' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: top right;
            opacity: 0.5;
        }
        .botanical-bg-bl {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 90C20 80 30 70 40 50' stroke='%23C3C8BE' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M10 90C30 85 40 75 50 60' stroke='%23C3C8BE' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: bottom left;
            opacity: 0.5;
        }
    </style>
</head>
<body class="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-primary m-0 p-0 font-body-md text-on-surface">
<!-- Background Image -->
<div class="fixed inset-0 w-full h-full z-0" data-alt="A cinematic, high-end cafe interior with lush dark green walls, hanging plants, warm golden ambient lighting, neon signs reading 'Good Food Great Campus Life', and a wooden table in the foreground featuring a dark green coffee cup and a QR code stand. The atmosphere is cozy, premium, and studious." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk0o_ow1LfrKOixe6MsYdUd2DDx6fytMtVRM2oKXolsz-18Sxh_abaqQCHOuXv3ApyAsxSqFJOJMVVbcujuSeTsNRYtiq-czS-Ev0u9PdmqV9hj79ftD0CwhrPhsldvRSWB9h31YhyzcrBZrBdEL3mZR93uhCwDNkBnk4mBNw4pmf1-07EEWfLzh6xjugEecWyAo1a346fSc29-qcEfWCvXYew117Ex18Fc9OdLfRzKsfcZFAUsdmkf4OsGgF-jFSzzA'); background-size: cover; background-position: center;">
<!-- Dark Overlay -->
<div class="absolute inset-0 bg-black/20"></div>
</div>
<!-- Main Content Area -->
<div class="relative z-10 w-full min-h-screen flex items-center justify-end px-[8vw] py-10">
<!-- Create Account Card -->
<div class="w-[540px] min-h-[820px] glass-card rounded-[30px] p-10 flex flex-col relative overflow-hidden">
<!-- Decorative Elements -->
<div class="absolute inset-0 botanical-bg-tr pointer-events-none z-0"></div>
<div class="absolute inset-0 botanical-bg-bl pointer-events-none z-0"></div>
<div class="relative z-10 flex flex-col h-full">
<!-- Header -->
<div class="flex flex-col items-center mb-8">
<!-- Icon -->
<div class="text-primary-container mb-4">
<span class="material-symbols-outlined" style="font-size: 70px; font-weight: 300;">local_cafe</span>
</div>
<h1 class="font-display-lg text-primary-container text-[38px] leading-[44px] mb-2 text-center">Create Account</h1>
<p class="font-body-md text-on-surface-variant text-center text-[16px]">Join Cafe Q and get started</p>
</div>
<!-- Form -->
<form class="flex flex-col gap-[18px] flex-grow justify-center">
<!-- Full Name -->
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined">person</span>
</div>
<input class="w-full h-[60px] pl-12 pr-4 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-[16px] text-on-surface focus:border-tertiary-fixed-dim focus:ring-2 focus:ring-tertiary-fixed-dim/50 transition-all outline-none" placeholder="Full Name" type="text"/>
</div>
<!-- Email or Phone -->
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined">mail</span>
</div>
<input class="w-full h-[60px] pl-12 pr-4 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-[16px] text-on-surface focus:border-tertiary-fixed-dim focus:ring-2 focus:ring-tertiary-fixed-dim/50 transition-all outline-none" placeholder="Email or Phone" type="text"/>
</div>
<!-- Password -->
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined">lock</span>
</div>
<input class="w-full h-[60px] pl-12 pr-12 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-[16px] text-on-surface focus:border-tertiary-fixed-dim focus:ring-2 focus:ring-tertiary-fixed-dim/50 transition-all outline-none" placeholder="Password" type="password"/>
<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
<!-- Confirm Password -->
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
<span class="material-symbols-outlined">lock</span>
</div>
<input class="w-full h-[60px] pl-12 pr-12 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-[16px] text-on-surface focus:border-tertiary-fixed-dim focus:ring-2 focus:ring-tertiary-fixed-dim/50 transition-all outline-none" placeholder="Confirm Password" type="password"/>
<button class="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
<span class="material-symbols-outlined">visibility</span>
</button>
</div>
<!-- Terms -->
<div class="flex items-center mt-2">
<input class="w-5 h-5 border-outline-variant rounded text-primary-container focus:ring-tertiary-fixed-dim bg-surface-container-low cursor-pointer" id="terms" type="checkbox"/>
<label class="ml-3 font-body-md text-[16px] text-on-surface-variant cursor-pointer select-none" for="terms">
                            I agree to the <a class="text-on-tertiary-container hover:underline" href="#">Terms &amp; Conditions</a>
</label>
</div>
<!-- Main Action -->
<button class="w-full h-[60px] mt-4 bg-[#243A22] text-white rounded-xl font-label-sm text-[18px] font-bold hover:bg-tertiary-fixed-dim hover:text-primary-container transition-all flex items-center justify-center shadow-lg shadow-primary-container/20" type="submit">
                        Sign Up
                    </button>
<!-- Divider -->
<div class="relative flex py-5 items-center">
<div class="flex-grow border-t border-outline-variant"></div>
<span class="flex-shrink-0 mx-4 font-body-md text-outline text-sm">or sign up with</span>
<div class="flex-grow border-t border-outline-variant"></div>
</div>
<!-- Social Buttons -->
<div class="flex gap-4">
<button class="flex-1 h-[54px] bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center gap-3 hover:bg-surface-container-low transition-colors font-label-sm text-[16px] text-on-surface" type="button">
<svg class="w-5 h-5" viewbox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg>
                            Google
                        </button>
<button class="flex-1 h-[54px] bg-surface-container-lowest border border-outline-variant rounded-xl flex items-center justify-center gap-3 hover:bg-surface-container-low transition-colors font-label-sm text-[16px] text-on-surface" type="button">
<span class="material-symbols-outlined text-on-surface-variant">call</span>
                            Phone
                        </button>
</div>
<!-- Footer Link -->
<div class="mt-8 text-center font-body-md text-[16px] text-on-surface-variant">
                        Already have an account? <a class="text-on-tertiary-container hover:underline font-medium" href="#">Login</a>
</div>
</form>
</div>
</div>
</div>
</body></html>