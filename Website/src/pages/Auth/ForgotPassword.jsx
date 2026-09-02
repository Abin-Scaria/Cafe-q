import { useState } from "react";
import { Link } from "react-router-dom";

/*
 * Cafe Q Forgot Password page — matches the main website's design system.
 *
 * NOTE: There is no authentication backend yet (src/api/authApi.js is empty),
 * so submitting the form shows a frontend success message only. This is
 * structured so a real password-reset API can be inserted easily later.
 */

function ForgotPassword() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [message, setMessage] = useState(null); // { ok, text }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) {
      setMessage({ ok: false, text: "Please enter your email or phone number." });
      return;
    }

    // No backend yet — show a frontend success message.
    // A real API call would go here: await resetPassword(emailOrPhone)
    setIsSubmitted(true);
    setMessage({
      ok: true,
      text: "If an account exists for this email or phone, you'll receive password reset instructions.",
    });
  };

  const handlePhoneReset = () => {
    // UI-only action — no backend implementation yet
    setMessage({ ok: false, text: "Phone reset is not available yet." });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-body-md bg-surface">
      {/* Main container - two column layout on desktop */}
      <div className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row">

        {/* LEFT SIDE - Clean minimal background */}
        <div className="relative lg:w-[50%] bg-gradient-to-br from-[#f3f9ff] via-[#e8f4ff] to-[#dceeff] flex items-center justify-center p-6 py-12 lg:p-12 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/3 rounded-full blur-2xl"></div>
        </div>

        {/* RIGHT SIDE - Forgot Password Card */}
        <div className="relative lg:w-[50%] flex items-center justify-center p-6 lg:p-8 bg-surface">
          <div className="bg-surface-container-lowest w-full max-w-[450px] rounded-[24px] p-7 lg:p-9 card-shadow border border-outline-variant/20">

            {/* Icon header - using lock_reset icon */}
            <div className="w-full flex justify-center mb-5">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                  aria-hidden="true"
                >
                  lock_reset
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-7">
              <h2 className="text-[28px] font-headline-lg font-bold text-primary mb-2 leading-tight">
                Forgot Password?
              </h2>
              <p className="text-[15px] text-on-surface-variant leading-relaxed">
                No worries! Enter your email or phone number and we'll send you a link to reset your password.
              </p>
            </div>

            {/* Recovery form */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col">
              {/* Email / Phone */}
              <label className="sr-only" htmlFor="forgot-email">
                Email or Phone
              </label>
              <div className="group rounded-[14px] bg-surface-container-lowest border border-outline-variant flex items-center px-4 h-[54px] transition-all duration-200 mb-4 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <span className="material-symbols-outlined text-on-surface-variant mr-3 group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  id="forgot-email"
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => {
                    setEmailOrPhone(e.target.value);
                    setMessage(null);
                  }}
                  placeholder="Enter your email or phone number"
                  autoComplete="email"
                  disabled={isSubmitted}
                  className="w-full h-full bg-transparent outline-none border-none p-0 text-on-surface placeholder:text-on-surface-variant/60 text-body-md font-body-md disabled:opacity-60"
                />
              </div>

              {/* Send Reset Link button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full h-[52px] bg-primary text-on-primary rounded-[14px] font-bold text-body-md hover:bg-primary/90 shadow-md transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Send Reset Link
              </button>

              {/* Validation / success message */}
              {message && (
                <p
                  role="status"
                  className={`mt-3 text-sm text-center leading-relaxed ${
                    message.ok ? "text-green-700" : "text-error"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="shrink-0 mx-4 text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                or
              </span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>

            {/* Reset using Phone button */}
            <button
              type="button"
              onClick={handlePhoneReset}
              disabled={isSubmitted}
              className="w-full flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant h-[54px] rounded-[14px] hover:bg-surface-container hover:border-primary transition-colors text-label-md font-medium text-on-surface cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-xl">call</span>
              Reset using Phone
            </button>

            {/* Back to Login */}
            <div className="mt-7 text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-1 text-body-md font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Login
              </Link>
            </div>

            {/* Remember password */}
            <div className="mt-5 text-center text-[14px] text-on-surface-variant">
              Remember your password?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
