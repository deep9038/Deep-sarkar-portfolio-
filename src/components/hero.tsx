"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingImage } from "./motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent"
            >
              AI & Marketplace Product Builder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl leading-tight font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl"
            >
              Let&apos;s build your business into a{" "}
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                scalable digital platform.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-lg text-muted md:text-xl"
            >
              Deep Sarkar — AI & Marketplace Product Builder in Shyamanagar.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-3 text-base text-muted/80"
            >
              Helping local businesses become the 1% who build, not just dream.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start"
            >
              <a
                href="#cta"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25"
              >
                <span className="relative z-10">Work With Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a
                href="#builds"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:border-accent/30 hover:bg-accent/5"
              >
                View Selected Builds
                <svg
                  className="ml-2 h-4 w-4"
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
          </div>

          {/* Right: Image */}
          <FloatingImage className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-accent/20 to-blue-400/20 blur-2xl" />
              <Image
                src="/images/deep-hero.jpg"
                alt="Deep Sarkar — AI & Marketplace Product Builder in Shyamanagar"
                width={420}
                height={500}
                priority
                className="relative rounded-xl object-cover shadow-2xl shadow-accent/10"
              />
            </div>
          </FloatingImage>
        </div>
      </div>
    </section>
  );
}
