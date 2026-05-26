"use client";

import { useLang } from "./LanguageContext";

export default function About() {
  const { t } = useLang();
  const stats = [t.about.stat1, t.about.stat2, t.about.stat3, t.about.stat4];

  return (
    <section id="about" className="bg-yellow-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
              🌿 {t.about.subtitle}
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-800 mb-6 leading-tight">
              {t.about.title}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              {t.about.body}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100">
                  <div className="text-3xl font-extrabold text-amber-500">{s.value}</div>
                  <div className="text-sm text-stone-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration panel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-3xl p-8 shadow-inner">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🏔️", label: "Планини" },
                  { emoji: "🌊", label: "Пливање" },
                  { emoji: "📚", label: "Учење" },
                  { emoji: "🔥", label: "Оган" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/70 rounded-2xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-default"
                  >
                    <span className="text-5xl">{item.emoji}</span>
                    <span className="font-semibold text-stone-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent dot */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
              ☀️
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl shadow-lg">
              🌱
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
