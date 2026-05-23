"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    tagline: "Start building",
    price: "$0",
    period: "forever",
    description: "For indie hackers, prototypes, and open-source projects.",
    cta: "Join Waitlist",
    ctaHref: "#waitlist",
    highlight: false,
    features: [
      { text: "3 services monitored", included: true },
      { text: "Realtime status updates", included: true },
      { text: "Basic status components", included: true },
      { text: "Community support", included: true },
      { text: "FeatureGate component", included: false },
      { text: "Webhook integrations", included: false },
      { text: "Advanced components", included: false },
    ],
    comingSoon: [],
  },
  {
    name: "Pro",
    tagline: "Ship resilience",
    price: "$29",
    period: "per month",
    description: "For production apps and teams who care about UX under failure.",
    cta: "Join Waitlist",
    ctaHref: "#waitlist",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited services", included: true },
      { text: "FeatureGate component", included: true },
      { text: "Advanced status components", included: true },
      { text: "Webhook integrations", included: true },
      { text: "Realtime orchestration", included: true },
      { text: "Provider-aware messaging", included: true },
      { text: "Priority support", included: true },
    ],
    comingSoon: [
      "Automated incident detection",
      "Provider intelligence",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Full control",
    price: "Custom",
    period: "contact us",
    description: "For organizations with compliance, scale, and reliability requirements.",
    cta: "Contact Us",
    ctaHref: "#waitlist",
    highlight: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "RBAC & team permissions", included: true },
      { text: "Audit logs", included: true },
      { text: "SSO / SAML", included: true },
      { text: "SLA guarantees", included: true },
      { text: "Dedicated support", included: true },
      { text: "Custom deployments", included: true },
    ],
    comingSoon: [
      "AI reliability routing",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-5 md:px-7 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.4365 0.1044 156.7556 / 0.08), transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="default">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-chart-1 inline-block mr-1.5"
            />
            Pricing
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Simple, honest{" "}
            <span className="text-chart-1">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Start free. Scale as your reliability requirements grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map(({ name, tagline, price, period, description, cta, ctaHref, highlight, badge, features, comingSoon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border overflow-hidden flex flex-col ${
                highlight
                  ? "border-chart-1/40 shadow-[0_0_48px_oklch(0.4365_0.1044_156.7556/0.18)]"
                  : "border-border"
              }`}
            >
              {/* Popular badge */}
              {badge && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="bg-chart-1 text-card text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg">
                    {badge}
                  </div>
                </div>
              )}

              {/* Card body */}
              <div
                className={`p-7 flex flex-col flex-1 ${
                  highlight ? "bg-chart-1/5 pt-10" : "bg-card/30"
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium mb-1">
                    {tagline}
                  </p>
                  <h3 className={`text-xl font-bold mb-1 ${highlight ? "text-chart-1" : "text-foreground"}`}>
                    {name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-3xl font-bold text-foreground">{price}</span>
                    <span className="text-sm text-muted-foreground">{period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {features.map(({ text, included }) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 ${
                          included
                            ? highlight
                              ? "text-chart-1"
                              : "text-chart-1/70"
                            : "text-muted-foreground/25"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          included ? "text-foreground/90" : "text-muted-foreground/40 line-through"
                        }`}
                      >
                        {text}
                      </span>
                    </div>
                  ))}

                  {/* Coming soon features */}
                  {comingSoon.length > 0 && (
                    <div className="pt-2 space-y-2.5 border-t border-border/50 mt-2">
                      <p className="text-[10px] text-muted-foreground/40 uppercase tracking-wider font-medium">
                        Coming soon
                      </p>
                      {comingSoon.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <Sparkles className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground/50">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-7">
                  <a
                    href={ctaHref}
                    className={`w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      highlight
                        ? "bg-chart-1 text-card hover:brightness-110 shadow-[0_0_24px_oklch(0.8003_0.1821_151.7110/0.25)]"
                        : "bg-transparent border border-border text-foreground hover:bg-accent hover:border-border/60"
                    }`}
                  >
                    {cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/50 mt-10"
        >
          All plans include early access to new components as we ship them.
          Pricing will be confirmed before public launch.
        </motion.p>
      </div>
    </section>
  );
}
