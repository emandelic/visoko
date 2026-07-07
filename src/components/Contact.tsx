"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Youtube, Instagram } from "lucide-react";

const inputCls = "w-full px-4 py-3 rounded-xl text-stone-100 text-sm placeholder:text-stone-600 outline-none transition-colors focus:ring-1 focus:ring-gold-500/50"
  + " bg-stone-800/80 border border-stone-700/60 focus:border-gold-600/60";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="relative py-28 bg-stone-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="section-label">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-50 mt-3 mb-5">
            Contact Us
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Questions about visiting? Want to book a tour or join our volunteer programme?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, label: "Address",  value: "Archaeological Park Bosanske Piramide\n71300 Visoko, Bosnia & Herzegovina" },
              { icon: Phone,  label: "Phone",    value: "+387 32 735 590" },
              { icon: Mail,   label: "Email",    value: "info@piramidasunca.ba" },
            ].map((item) => (
              <div key={item.label} className="card-premium rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                     style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                  <item.icon className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 mb-1 uppercase tracking-wider">{item.label}</p>
                  <p className="text-stone-300 text-sm whitespace-pre-line leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="card-premium rounded-2xl p-5">
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook,  href: "https://www.facebook.com/BosnianPyramidsFoundation", label: "Facebook" },
                  { icon: Youtube,   href: "https://www.youtube.com/@BosnianPyramids",           label: "YouTube" },
                  { icon: Instagram, href: "https://www.instagram.com/bosnianpyramids/",         label: "Instagram" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                     aria-label={s.label}
                     className="w-10 h-10 rounded-xl flex items-center justify-center text-stone-400 hover:text-gold-400 transition-colors"
                     style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-stone-800/60" style={{ height: "200px" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=18.160%2C43.988%2C18.195%2C44.008&layer=mapnik&marker=43.9978%2C18.1774"
                width="100%" height="200" style={{ border: 0, display: "block" }}
                loading="lazy" title="Visoko, Bosnia location map"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 card-premium rounded-2xl text-center">
                <CheckCircle className="w-14 h-14 text-green-400 mb-5" />
                <h3 className="font-display text-2xl font-bold text-stone-50 mb-3">Message Sent!</h3>
                <p className="text-stone-400 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24–48 hours.</p>
                <button onClick={() => setSubmitted(false)}
                        className="btn-gold px-6 py-2.5 rounded-xl text-sm">
                  <span>Send Another</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium rounded-2xl p-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input type="text" required value={form.name}
                           onChange={(e) => setForm({ ...form, name: e.target.value })}
                           placeholder="John Doe" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" required value={form.email}
                           onChange={(e) => setForm({ ...form, email: e.target.value })}
                           placeholder="you@email.com" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-stone-500 uppercase tracking-wider mb-2">Subject</label>
                  <select value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className={inputCls}>
                    <option value="">Select a topic…</option>
                    <option value="visit">Plan a Visit</option>
                    <option value="tour">Book a Guided Tour</option>
                    <option value="volunteer">Volunteer Programme</option>
                    <option value="research">Research Inquiry</option>
                    <option value="media">Media &amp; Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-stone-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea required rows={6} value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us how we can help…"
                            className={inputCls + " resize-none"} />
                </div>
                <button type="submit"
                        className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
