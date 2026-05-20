"use client";

import { motion } from "framer-motion";
import {
  Radio,
  ShieldCheck,
  MessageSquare,
  Globe,
  AlertTriangle,
  Cpu,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/app/components/ui/card";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Radio,
    title: "Realtime Status Components",
    description:
      "Drop-in React components that subscribe to live service health data and re-render automatically on status changes.",
    preview: (
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/8 border border-emerald-500/15">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400 font-medium">Stripe · Operational</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-500/8 border border-yellow-500/15">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs text-yellow-400 font-medium">OpenAI · Degraded</span>
        </div>
      </div>
    ),
    accent: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Feature Gates",
    description:
      "Wrap any UI element to automatically disable, hide, or replace it when a dependent service is unavailable.",
    preview: (
      <div className="mt-3 p-2.5 rounded-lg bg-muted/30 border border-border font-mono text-[11px] text-muted-foreground">
        <span className="text-chart-1">&lt;FeatureGate</span>
        <span className="text-foreground/70"> service</span>
        <span className="text-yellow-400">=&quot;openai&quot;</span>
        <span className="text-chart-1">&gt;</span>
        <br />
        <span className="pl-4 text-foreground/50">&lt;GenerateButton /&gt;</span>
        <br />
        <span className="text-chart-1">&lt;/FeatureGate&gt;</span>
      </div>
    ),
    accent: "text-blue-400",
  },
  {
    icon: Globe,
    title: "Edge-Native Reliability",
    description:
      "Status data propagated via Cloudflare edge runtime with sub-50ms global latency. No cold starts, no lag.",
    preview: (
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["US East", "EU West", "APAC", "US West", "SAF", "ANZ"].map((region) => (
          <div key={region} className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-muted/30 border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-chart-1/70" />
            <span className="text-[9px] text-muted-foreground">{region}</span>
          </div>
        ))}
      </div>
    ),
    accent: "text-violet-400",
  },
  {
    icon: AlertTriangle,
    title: "Provider Degradation Awareness",
    description:
      "Aggregate health data from 100+ cloud providers and APIs. Know about incidents before your users feel them.",
    preview: (
      <div className="mt-3 flex flex-col gap-1.5">
        {[
          { name: "OpenAI", pct: 60, color: "bg-yellow-400/60" },
          { name: "Stripe", pct: 98, color: "bg-chart-1/60" },
          { name: "Twilio", pct: 45, color: "bg-red-400/60" },
        ].map(({ name, pct, color }) => (
          <div key={name} className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground w-12">{name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[11px] text-muted-foreground w-8 text-right">{pct}%</span>
          </div>
        ))}
      </div>
    ),
    accent: "text-orange-400",
  },
  {
    icon: Cpu,
    title: "Adaptive Frontend Runtime",
    description:
      "A runtime layer that orchestrates your UI in response to provider state, no custom logic required.",
    preview: (
      <div className="mt-3 p-2.5 rounded-lg bg-muted/30 border border-border font-mono text-[11px] text-muted-foreground">
        <span className="text-blue-400">const</span>
        <span className="text-foreground"> status </span>
        <span className="text-foreground/50">= </span>
        <span className="text-chart-1">useServiceStatus</span>
        <span className="text-foreground/50">(</span>
        <span className="text-yellow-400">&quot;openai&quot;</span>
        <span className="text-foreground/50">)</span>
        <br />
        <span className="text-muted-foreground/50 pl-0">{`// { state: "degraded", region: "apac" }`}</span>
      </div>
    ),
    accent: "text-pink-400",
  },
  {
    icon: RefreshCw,
    title: "Global Realtime Sync",
    description:
      "Status changes propagate worldwide in milliseconds via persistent edge connections, no polling required.",
    preview: (
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1 flex flex-col gap-1">
          {["Incident detected", "Edge propagation", "UI updated"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-chart-1/20 border border-chart-1/30 flex items-center justify-center">
                <span className="text-[8px] text-chart-1 font-bold">{i + 1}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">{step}</span>
              <span className="ml-auto text-[10px] text-chart-1">
                {i === 0 ? "0ms" : i === 1 ? "48ms" : "51ms"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    accent: "text-cyan-400",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-5 md:px-7">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary">Platform</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Everything you need for
            <span className="text-chart-1"> resilient UX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A complete toolkit for building applications that stay useful even
            when your dependencies don&apos;t.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, description, preview, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full group hover:border-chart-1/30 hover:bg-card/80 transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0_0_0/0.3)]">
                <CardHeader>
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-1 bg-muted/50 group-hover:bg-chart-1/10 transition-colors", accent)}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <CardTitle className="text-sm">{title}</CardTitle>
                  <CardDescription className="text-xs">{description}</CardDescription>
                </CardHeader>
                <CardContent>{preview}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
