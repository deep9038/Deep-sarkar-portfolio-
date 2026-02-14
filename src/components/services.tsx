"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const services = [
  {
    title: "Local Marketplace Platforms",
    description:
      "End-to-end marketplace systems designed for local commerce — connecting vendors and customers with scalable digital infrastructure.",
    features: [
      "Vendor onboarding systems",
      "Commission models",
      "Service aggregation platforms",
      "Local commerce platforms",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0020.25 9.35m-16.5 0c0-.713.248-1.368.661-1.884l1.65-2.067A1.5 1.5 0 017.233 4.5h9.534a1.5 1.5 0 011.172.563l1.65 2.067c.413.516.661 1.171.661 1.884" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Business Tools",
    description:
      "Intelligent systems that automate workflows, enhance decision-making, and give your business an unfair advantage through artificial intelligence.",
    features: [
      "Smart automation",
      "AI chat systems",
      "Intelligent search",
      "Workflow automation",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Scalable Startup Systems",
    description:
      "Production-grade architecture built to scale — from SaaS dashboards to payment systems, designed for growth from day one.",
    features: [
      "SaaS dashboards",
      "Payment integration",
      "Admin systems",
      "Growth-ready architecture",
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-accent uppercase">
              What I Build
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Digital Systems for Local Growth
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Purpose-built platforms for businesses in Shyamanagar, Barrackpore,
              Naihati, and across North 24 Parganas.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group h-full rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
