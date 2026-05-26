"use client";

import { useState } from "react";
import { useLang } from "./LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", childName: "", childAge: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-amber-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 font-semibold text-sm px-4 py-1 rounded-full mb-4">
            ✉️ {t.contact.subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-800">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-5">
            {t.contact.info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wide">{item.label}</div>
                  <div className="text-stone-700 font-medium mt-0.5">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-amber-400 to-green-400 rounded-3xl p-8 text-white shadow-lg">
              <div className="text-4xl mb-3">☀️</div>
              <p className="font-bold text-xl mb-2">Камп Сонце</p>
              <p className="text-white/80 text-sm leading-relaxed">
                A summer full of sunshine, friendship, and discovery awaits your child.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-64 gap-4">
                <span className="text-6xl">🎉</span>
                <p className="text-xl font-bold text-stone-800">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">
                      {t.contact.name}
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">
                      {t.contact.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">
                    {t.contact.phone}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">
                      {t.contact.childName}
                    </label>
                    <input
                      name="childName"
                      required
                      value={form.childName}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">
                      {t.contact.childAge}
                    </label>
                    <select
                      name="childAge"
                      required
                      value={form.childAge}
                      onChange={handleChange}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    >
                      <option value="">—</option>
                      {[4, 5, 6, 7, 8, 9, 10].map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide block mb-1">
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors text-sm"
                >
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
