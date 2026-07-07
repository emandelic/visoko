"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-stone-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pyramid-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-pyramid-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
            Contact Us
          </h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Have questions about visiting the pyramids? Want to join our
            volunteer program? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Reach Us Directly
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Archaeological Park\nBosanske Piramide\n71300 Visoko, BiH",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+387 32 735 590",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@piramidasunca.ba",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 bg-pyramid-900/50 border border-pyramid-700/40 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-pyramid-400" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-stone-300 text-sm whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-xl overflow-hidden border border-stone-800 aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11492.41!2d18.1785!3d44.0944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475f8a3edd5bda7b%3A0x33b6b7a62e33c7!2sVisoko%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Visoko, Bosnia map"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-10 bg-stone-900/60 border border-stone-800 rounded-2xl text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-stone-400">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-pyramid-600 hover:bg-pyramid-500 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 bg-stone-900/60 border border-stone-800 rounded-2xl space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-stone-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 focus:border-pyramid-500 rounded-lg text-white text-sm placeholder:text-stone-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-stone-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@email.com"
                      className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 focus:border-pyramid-500 rounded-lg text-white text-sm placeholder:text-stone-600 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 focus:border-pyramid-500 rounded-lg text-white text-sm outline-none transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="visit">Plan a Visit</option>
                    <option value="tour">Book a Guided Tour</option>
                    <option value="volunteer">Volunteer Program</option>
                    <option value="research">Research Inquiry</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-2.5 bg-stone-800 border border-stone-700 focus:border-pyramid-500 rounded-lg text-white text-sm placeholder:text-stone-600 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-pyramid-600 hover:bg-pyramid-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-pyramid-600/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
