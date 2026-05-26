"use client";

import { useLang } from "./LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const sections = ["#about", "#activities", "#schedule", "#contact"];

  return (
    <footer className="bg-stone-800 text-stone-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 font-bold text-xl text-white mb-2 justify-center sm:justify-start">
              <span className="text-2xl">☀️</span>
              <span>Камп Сонце</span>
            </div>
            <p className="text-stone-400 text-sm">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {t.footer.links.map((label, i) => (
              <a
                key={label}
                href={sections[i]}
                className="text-stone-400 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-6 text-center text-stone-500 text-xs">
          {t.footer.legal}
        </div>
      </div>
    </footer>
  );
}
