"use client";

import { useLang } from "./LanguageContext";

export default function Activities() {
  const { t } = useLang();

  return (
    <section id="activities" className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-sky-100 text-sky-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            ⚽ {t.activities.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-800">
            {t.activities.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.activities.items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-amber-50 to-green-50 hover:from-amber-100 hover:to-green-100 border border-amber-100 rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
