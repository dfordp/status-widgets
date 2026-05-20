"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { ArrowDown, Monitor, Package, Globe, Radio } from "lucide-react";

const layers = [
  {
    icon: Monitor,
    label: "Client Application",
    sublabel: "React / Next.js / Vue / Svelte",
    description: "Your existing frontend, zero refactoring required",
    color: "text-violet-400",
    bg: "bg-violet-500/8 border-violet-500/20",
    glow: "shadow-[0_0_20px_oklch(0.6_0.15_290/0.15)]",
  },
  {
    icon: Package,
    label: "Status Widgets SDK",
    sublabel: "3kB gzip · tree-shakeable",
    description: "Components, hooks, and context providers",
    color: "text-chart-1",
    bg: "bg-chart-1/8 border-chart-1/20",
    glow: "shadow-[0_0_20px_oklch(0.8003_0.1821_151.7110/0.15)]",
  },
  {
    icon: Globe,
    label: "Cloudflare Edge Runtime",
    sublabel: "330+ global PoPs",
    description: "Sub-50ms status propagation, zero cold starts",
    color: "text-orange-400",
    bg: "bg-orange-500/8 border-orange-500/20",
    glow: "shadow-[0_0_20px_oklch(0.7_0.15_40/0.15)]",
  },
  {
    icon: Radio,
    label: "Realtime Distribution",
    sublabel: "Provider APIs · Webhooks · Polling",
    description: "Aggregated health data from 100+ services",
    color: "text-blue-400",
    bg: "bg-blue-500/8 border-blue-500/20",
    glow: "shadow-[0_0_20px_oklch(0.65_0.15_250/0.15)]",
  },
];

export function ArchitectureSection() {
  return (
    <section className="py-24 px-5 md:px-7">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary">Architecture</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Simple stack.{" "}
            <span className="text-chart-1">Serious infrastructure.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Built on battle-tested primitives. Edge-first from the ground up.
            No servers to manage.
          </p>
        </motion.div>

        <div className="max-w-sm mx-auto space-y-0">
          {layers.map((layer, i) => (
            <div key={layer.label}>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className={`rounded-xl border p-5 ${layer.bg} ${layer.glow} transition-shadow duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-background/50 border border-border flex items-center justify-center flex-shrink-0 ${layer.color}`}
                    >
                      <layer.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-foreground">
                          {layer.label}
                        </span>
                        <span
                          className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${layer.color} bg-current/10 border border-current/20`}
                          style={{ color: "inherit" }}
                        >
                          <span className={layer.color}>{layer.sublabel}</span>
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {i < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-3 bg-border" />
                    <ArrowDown className="w-3.5 h-3.5 text-muted-foreground/40" />
                    <div className="w-px h-3 bg-border" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-2xl mx-auto"
        >
          {[
            { value: "<50ms", label: "Global propagation" },
            { value: "330+", label: "Edge locations" },
            { value: "100+", label: "Providers monitored" },
            { value: "3kB", label: "SDK bundle size" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center p-4 rounded-xl border border-border bg-card/30">
              <div className="text-2xl font-bold text-chart-1 mb-1">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
