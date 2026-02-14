"use client";

import Image from "next/image";
import { FadeIn } from "./motion";

export default function Vision() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Left: Text */}
          <div className="flex-1">
            <FadeIn>
              <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-accent uppercase">
                The Vision
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                The Future Digital Architect of Shyamanagar
              </h2>
              <div className="mt-6 space-y-4 text-muted">
                <p>
                  I believe that every local business has the potential to become
                  a digital platform. The gap between a traditional business and
                  a scalable digital operation isn&apos;t just technology — it&apos;s
                  vision, architecture, and execution.
                </p>
                <p>
                  My work sits at the intersection of{" "}
                  <span className="font-medium text-primary">
                    AI, marketplace systems, and startup architecture
                  </span>
                  . I don&apos;t just write code — I design systems that create
                  lasting competitive advantages for businesses in Shyamanagar,
                  Barrackpore, Naihati, and across North 24 Parganas.
                </p>
                <p>
                  Whether you&apos;re launching a startup or digitizing an
                  established business, I bring the technical depth and business
                  acumen to make it work at scale.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Working image */}
          <FadeIn delay={0.2} className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-accent/15 to-blue-300/15 blur-2xl" />
              <Image
                src="/images/deep-working.jpg"
                alt="Deep Sarkar working on digital platforms"
                width={400}
                height={480}
                className="relative rounded-xl object-cover shadow-2xl shadow-accent/10"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
