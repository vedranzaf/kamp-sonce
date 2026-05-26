"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.activities, href: "#activities" },
    { label: t.nav.schedule, href: "#schedule" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-amber-600">
          <span className="text-2xl">☀️</span>
          <span>Камп Сонце</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex bg-amber-100 rounded-full p-0.5 text-sm font-medium">
            <button
              onClick={() => setLang("mk")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "mk" ? "bg-amber-500 text-white shadow" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              МК
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === "en" ? "bg-amber-500 text-white shadow" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              EN
            </button>
          </div>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            {t.nav.register}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-amber-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1">
            <span className={`block h-0.5 bg-stone-700 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-stone-700 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-stone-700 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-amber-50 border-t border-amber-200 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-stone-600 hover:text-amber-600 font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex bg-amber-100 rounded-full p-0.5 text-sm font-medium">
              <button
                onClick={() => setLang("mk")}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === "mk" ? "bg-amber-500 text-white shadow" : "text-stone-500"
                }`}
              >
                МК
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === "en" ? "bg-amber-500 text-white shadow" : "text-stone-500"
                }`}
              >
                EN
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              {t.nav.register}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
