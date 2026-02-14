"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const builds = [
  {
    title: "Local Services Marketplace",
    problem:
      "Local service providers in Shyamanagar and surrounding areas had no centralized platform to reach customers digitally. Discovery relied entirely on word-of-mouth, limiting growth and scale.",
    solution:
      "Built a full-stack marketplace platform with vendor onboarding, service listing, booking management, and a commission-based revenue model — designed specifically for local market dynamics.",
    architecture: [
      "Next.js frontend with SSR for SEO",
      "Node.js REST API with role-based access",
      "PostgreSQL database with optimized queries",
      "Razorpay payment integration",
    ],
    businessModel:
      "Platform commission model with tiered vendor subscriptions. Vendors pay a percentage per transaction, with premium tiers for enhanced visibility and analytics.",
    scalability:
      "Modular microservice architecture allows horizontal scaling. Can onboard new service categories and geographic zones without re-architecture.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Razorpay",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Inventory Assistant",
    problem:
      "Small retail businesses in Barrackpore were managing inventory manually — leading to stockouts, over-ordering, and lost revenue. No affordable solution existed for their scale.",
    solution:
      "Developed an AI-driven inventory management system with demand prediction, automated reorder alerts, and a conversational interface for non-technical store owners.",
    architecture: [
      "React dashboard with real-time updates",
      "Python FastAPI backend for ML inference",
      "TensorFlow demand forecasting model",
      "WebSocket for live notifications",
    ],
    businessModel:
      "SaaS subscription model with usage-based pricing. Free tier for basic tracking, paid tiers unlock AI predictions and multi-store management.",
    scalability:
      "Cloud-native architecture with containerized ML models. Prediction accuracy improves with more data — creating a compounding competitive moat.",
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "TensorFlow",
      "PostgreSQL",
      "Docker",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Multi-Vendor E-Commerce Platform",
    problem:
      "Local vendors in Naihati and North 24 Parganas lacked a unified digital storefront. Each operated independently with no shared infrastructure, limiting collective growth.",
    solution:
      "Created a multi-vendor e-commerce platform with individual storefronts, unified checkout, logistics integration, and an admin dashboard for platform-level operations.",
    architecture: [
      "Next.js with app router and server components",
      "Express.js API with vendor isolation",
      "MongoDB for flexible product schemas",
      "Redis caching for performance",
    ],
    businessModel:
      "Revenue share model combined with listing fees. Platform earns through transaction commissions and premium vendor placement options.",
    scalability:
      "Event-driven architecture supports real-time order processing. Database sharding strategy in place for handling growing vendor and transaction volume.",
    techStack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Stripe",
      "TypeScript",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Builds() {
  return (
    <section id="builds" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center">
            <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-accent uppercase">
              Selected Builds
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Real Problems. Real Solutions.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Structured case studies of platforms built for local market needs
              — each designed with a sustainable business model and scalable
              architecture.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-14 space-y-10">
          {builds.map((build, index) => (
            <StaggerItem key={build.title}>
              <div className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                {/* Header */}
                <div className="border-b border-border bg-gradient-to-r from-slate-50 to-white px-8 py-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold text-primary">
                      {build.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="grid gap-8 p-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-accent uppercase tracking-wide">
                        Problem
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {build.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-accent uppercase tracking-wide">
                        Solution
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {build.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-accent uppercase tracking-wide">
                        Business Model
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {build.businessModel}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-accent uppercase tracking-wide">
                        Architecture
                      </h4>
                      <ul className="space-y-2">
                        {build.architecture.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-accent uppercase tracking-wide">
                        Scalability
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {build.scalability}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-semibold text-accent uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {build.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 border-t border-border bg-slate-50/50 px-8 py-5">
                  <a
                    href={build.demoUrl}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={build.githubUrl}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-accent/30 hover:bg-accent/5"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
