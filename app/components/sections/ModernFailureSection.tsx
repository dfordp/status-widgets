"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { CloudLightning, Globe, CreditCard, Wifi, Cpu, AlertTriangle } from "lucide-react";

const failureModes = [
  {
    icon: Cpu,
    title: "AI providers spike",
    example: "OpenAI APAC latency 8×",
    description: "Generation requests queue. Users wait in silence.",
    color: "text-violet-400",
    bg: "bg-violet-500/8 border-violet-500/20",
  },
  {
    icon: CreditCard,
    title: "Payments fail regionally",
    example: "Stripe EU 0% success rate",
    description: "Checkout breaks for an entire region.",
    color: "text-red-400",
    bg: "bg-red-500/8 border-red-500/20",
  },
  {
    icon: Wifi,
    title: "Uploads degrade",
    example: "S3 intermittent errors",
    description: "Files upload halfway, then silently fail.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/8 border-yellow-500/20",
  },
  {
    icon: Globe,
    title: "APIs become unstable",
    example: "Twilio timeout loop",
    description: "Requests hang. Retries cascade into outages.",
    color: "text-orange-400",
    bg: "bg-orange-500/8 border-orange-500/20",
  },
];

export function ModernFailureSection() {
  return (
    <section className="py-24 px-5 md:px-7 bg-card/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-5"
        >
          <Badge variant="secondary">
            <CloudLightning className="w-3 h-3 mr-1.5" />
            The reality of modern infra
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Modern applications{" "}
            <span className="text-chart-1">fail differently</span> now.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your app depends on dozens of APIs, AI providers, payment gateways,
            and distributed services. Failures are no longer all-or-nothing.
          </p>
        </motion.div>

        {/* Failure mode cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {failureModes.map(({ icon: Icon, title, example, description, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-xl border p-5 ${bg} hover:shadow-[0_4px_24px_oklch(0_0_0/0.3)] transition-all duration-300`}
            >
              <div className={`w-9 h-9 rounded-xl bg-background/50 border border-border flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
              <p className={`text-[11px] font-mono mb-2 ${color}`}>{example}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition to Status Widgets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* "But" divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-border" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50">
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs text-muted-foreground font-medium">
                Yet most apps still respond with:
              </span>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* The old error */}
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-3 rounded-xl border border-red-500/25 bg-red-500/5">
              <p className="text-lg font-mono text-red-300/80">
                &ldquo;Something went wrong.&rdquo;
              </p>
            </div>
          </div>

          {/* Transition arrow */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-6 bg-border" />
              <div className="w-6 h-6 rounded-full border border-chart-1/30 bg-chart-1/10 flex items-center justify-center">
                <span className="text-chart-1 text-xs">↓</span>
              </div>
              <div className="w-px h-6 bg-border" />
            </div>
          </div>

          {/* The solution */}
          <div className="rounded-2xl border border-chart-1/25 bg-chart-1/5 p-7 text-center">
            <div className="w-10 h-10 rounded-xl bg-chart-1/15 border border-chart-1/25 flex items-center justify-center mx-auto mb-4">
              <CloudLightning className="w-5 h-5 text-chart-1" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Status Widgets helps applications{" "}
              <span className="text-chart-1">adapt intelligently</span>{" "}
              during degradation.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Realtime-aware UI components that understand your provider
              landscape and respond gracefully, without a single custom
              error handler.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
