"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { Telescope, GitBranch, BrainCircuit, Network, Layers } from "lucide-react";

const visions = [
  {
    icon: Telescope,
    title: "Monitoring Integrations",
    description:
      "Native connectors for Datadog, PagerDuty, Grafana, and your existing observability stack. Incident data flows directly into your frontend runtime.",
    status: "In development",
    color: "text-chart-1",
    bg: "bg-chart-1/5 border-chart-1/15",
  },
  {
    icon: BrainCircuit,
    title: "Automated Incident Detection",
    description:
      "ML-powered anomaly detection that identifies degradation patterns before they surface in official status pages, often minutes or hours earlier.",
    status: "Planned",
    color: "text-violet-400",
    bg: "bg-violet-500/5 border-violet-500/15",
  },
  {
    icon: GitBranch,
    title: "Provider-Aware Interfaces",
    description:
      "UI components that understand your business logic, automatically selecting fallback providers, CDNs, or regions when primary services fail.",
    status: "Planned",
    color: "text-orange-400",
    bg: "bg-orange-500/5 border-orange-500/15",
  },
  {
    icon: Network,
    title: "Runtime Frontend Orchestration",
    description:
      "A declarative runtime layer that orchestrates your entire frontend in response to live provider state, like Kubernetes for your UI reliability.",
    status: "Research",
    color: "text-blue-400",
    bg: "bg-blue-500/5 border-blue-500/15",
  },
  {
    icon: Layers,
    title: "Adaptive Reliability UX",
    description:
      "Beyond status banners, a complete reliability UX framework. Progressive disclosure of degradation, contextual fallback flows, and intelligent retry surfaces.",
    status: "Vision",
    color: "text-pink-400",
    bg: "bg-pink-500/5 border-pink-500/15",
  },
];

const statusColor: Record<string, string> = {
  "In development": "text-chart-1 bg-chart-1/10 border-chart-1/20",
  Planned: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Research: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Vision: "text-pink-400 bg-pink-500/10 border-pink-500/20",
};

export function FutureVisionSection() {
  return (
    <section className="py-24 px-5 md:px-7 bg-card/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary">Roadmap</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            The future of{" "}
            <span className="text-chart-1">reliability UX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We&apos;re building toward a world where frontend applications are
            inherently resilient, not as an afterthought, but as a primitive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {visions.map(({ icon: Icon, title, description, status, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-xl border p-5 ${bg} hover:shadow-[0_4px_24px_oklch(0_0_0/0.3)] transition-shadow duration-300`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={`w-9 h-9 rounded-xl bg-background/50 border border-border flex items-center justify-center ${color}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${statusColor[status]}`}
                >
                  {status}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
