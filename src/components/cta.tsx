"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Ready to digitize your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            If you&apos;re building a startup or running a local business in
            Shyamanagar, let&apos;s build something scalable.
          </p>
          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="mailto:hello@deepsarkar.dev"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-10 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30"
            >
              Work With Me
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
