"use client";

import { useLang } from "./LanguageContext";

export default function Schedule() {
  const { t } = useLang();

  return (
    <section id="schedule" className="bg-green-50 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            🌅 {t.schedule.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-800">
            {t.schedule.title}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-amber-200" />

          <div className="space-y-2">
            {t.schedule.items.map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                {/* Time */}
                <div className="w-14 text-right text-sm font-bold text-amber-600 shrink-0">
                  {item.time}
                </div>

                {/* Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-sm group-hover:scale-125 transition-transform shrink-0" />

                {/* Label */}
                <div className="flex-1 bg-white rounded-2xl px-5 py-3 shadow-sm border border-amber-100 group-hover:border-amber-300 transition-colors">
                  <span className="text-stone-700 font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
