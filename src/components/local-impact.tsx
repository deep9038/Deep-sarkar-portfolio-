"use client";

import { FadeIn, AnimatedCounter } from "./motion";

const stats = [
  { target: 15, suffix: "+", label: "Local Businesses Going Digital" },
  { target: 10, suffix: "+", label: "Platforms Built" },
  { target: 20, suffix: "+", label: "Systems Deployed" },
];

export default function LocalImpact() {
  return (
    <section id="impact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-accent uppercase">
              Local Impact
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Building Digital Leaders in Shyamanagar.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-muted">
            <p>
              Many local businesses in Shyamanagar, Barrackpore, and Naihati
              still rely entirely on offline presence. In a digital-first
              economy, this limits their growth and reach.
            </p>
            <p>
              Digital platforms unlock scale and automation.{" "}
              <span className="font-medium text-primary">
                AI-powered tools increase operational efficiency
              </span>
              , while marketplace systems connect vendors and customers locally
              — creating new revenue streams and competitive advantages.
            </p>
            <p>
              I help local businesses make this transition — from traditional
              operations to{" "}
              <span className="font-medium text-primary">
                scalable, technology-driven platforms
              </span>{" "}
              that compete at a regional and national level.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
