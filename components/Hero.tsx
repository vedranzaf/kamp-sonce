"use client";

import { useLang } from "./LanguageContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fef9c3 0%, #fde68a 30%, #bbf7d0 70%, #d1fae5 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow-300/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-green-300/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      {/* Floating icons */}
      <span className="absolute top-32 right-[15%] text-4xl animate-bounce" style={{ animationDuration: "3s" }}>🌲</span>
      <span className="absolute top-48 left-[12%] text-3xl animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>⚽</span>
      <span className="absolute bottom-40 left-[20%] text-3xl animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>🎨</span>
      <span className="absolute bottom-32 right-[22%] text-4xl animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "0.3s" }}>🌻</span>
      <span className="absolute top-36 left-[40%] text-2xl animate-bounce" style={{ animationDuration: "5s", animationDelay: "1.2s" }}>🦋</span>

      <div className="relative text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-6xl sm:text-8xl font-extrabold text-amber-600 tracking-tight leading-none mb-2">
          {t.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-green-700 mb-6 tracking-widest uppercase">
          {t.hero.subtitle}
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.tagline}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-amber-300/50 transition-all hover:scale-105 active:scale-95"
          >
            {t.hero.cta}
          </a>
          <a
            href="#about"
            className="bg-white/70 hover:bg-white text-stone-700 font-semibold px-8 py-4 rounded-full text-lg border border-stone-200 transition-all hover:scale-105 active:scale-95"
          >
            {t.hero.scroll} ↓
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L48 69.3C96 59 192 37 288 32C384 27 480 37 576 42.7C672 48 768 48 864 42.7C960 37 1056 27 1152 32C1248 37 1344 59 1392 69.3L1440 80V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V80Z" fill="#fefce8"/>
        </svg>
      </div>
    </section>
  );
}
