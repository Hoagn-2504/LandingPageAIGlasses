"use client";

import { useState } from "react";
import { Sparkles, CircleCheckBig, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden py-28 flex justify-center"
    >
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto w-full max-w-5xl px-4">
        <div className="flex flex-col items-center gap-4 overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">
          <div className="flex max-w-3xl flex-col items-center text-center">
            <p className="mb-3 text-base font-semibold uppercase tracking-[0.4em] text-cyan-400">
              Stay Connected
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Be the First to <br className="hidden md:block" />
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience the Future
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Join our newsletter and receive exclusive product updates, early
              access opportunities, launch announcements and special offers
              directly in your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xl justify-center"
          >
            <div className="flex w-full flex-col items-center gap-3 rounded-[2rem] border border-white/10 bg-slate-900/70 p-2 backdrop-blur-xl md:flex-row md:rounded-full">
              <div className="flex w-full flex-1 items-center gap-3 px-5 py-3 md:py-0">
                <Mail className="flex-shrink-0 text-cyan-400" size={22} />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-6 w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] md:w-auto"
              >
                Join Waitlist
                <Sparkles size={14} />
              </button>
            </div>
          </form>

          {/* Success */}
          {submitted && (
            <div className="w-full max-w-xl rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-center text-emerald-300">
              🎉 Thank you! Your request has been received successfully.
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 md:gap-10">
            <div className="flex items-center gap-2">
              <CircleCheckBig size={18} className="text-cyan-400" />
              <span>Early Access</span>
            </div>

            <div className="flex items-center gap-2">
              <CircleCheckBig size={18} className="text-cyan-400" />
              <span>Exclusive Offers</span>
            </div>

            <div className="flex items-center gap-2">
              <CircleCheckBig size={18} className="text-cyan-400" />
              <span>Product Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
