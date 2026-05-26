"use client";

import { useLang } from "./LanguageContext";

const placeholderItems = [
  { emoji: "🏕️", bg: "from-amber-100 to-amber-200" },
  { emoji: "🌲", bg: "from-green-100 to-green-200" },
  { emoji: "⚽", bg: "from-sky-100 to-sky-200" },
  { emoji: "🎨", bg: "from-pink-100 to-pink-200" },
  { emoji: "🌻", bg: "from-yellow-100 to-yellow-200" },
  { emoji: "🤸", bg: "from-purple-100 to-purple-200" },
];

export default function Gallery() {
  const { t } = useLang();

  return (
    <section id="gallery" className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            📸 {t.gallery.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-800">
            {t.gallery.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {placeholderItems.map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${item.bg} rounded-3xl aspect-square flex items-center justify-center text-7xl hover:scale-105 transition-transform cursor-default`}
            >
              {item.emoji}
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 mt-8 text-sm">{t.gallery.placeholder}</p>
      </div>
    </section>
  );
}
