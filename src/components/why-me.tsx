"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const reasons = [
  {
    title: "Founder Mindset, Not Freelancer",
    description:
      "I think in terms of business models, unit economics, and long-term viability — not just code deliverables. Every system I build is designed to be a business asset.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: "Long-Term Scalability Focus",
    description:
      "I don't build one-time websites. I architect systems that scale — from 10 users to 10,000. Growth-ready from the first line of code.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "AI-Ready Systems",
    description:
      "Every platform I build is designed with AI integration in mind. From intelligent automation to predictive analytics — your system is future-proof.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Deep Local Market Understanding",
    description:
      "I understand the nuances of local businesses in Shyamanagar, Barrackpore, and surrounding areas. Solutions are tailored to real market dynamics, not generic templates.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "No jargon, no hidden complexities. I keep stakeholders informed with clear progress updates, honest timelines, and straightforward technical decisions.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function WhyMe() {
  return (
    <section id="why-me" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* Left: Content */}
          <div className="flex-1">
            <FadeIn>
              <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-accent uppercase">
                Why Choose Me
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Why Local Businesses Choose Me
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <StaggerItem key={reason.title}>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-primary">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Profile image */}
          <FadeIn delay={0.2} className="flex items-center justify-center md:w-80">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/10 to-blue-400/10 blur-xl" />
              <Image
                src="/images/deep-profile.jpg"
                alt="Deep Sarkar — AI & Marketplace Product Builder"
                width={300}
                height={380}
                className="relative rounded-xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-white px-5 py-3 shadow-lg">
                <p className="text-sm font-bold text-primary">Deep Sarkar</p>
                <p className="text-xs text-muted">
                  Shyamanagar, West Bengal
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
