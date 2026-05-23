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
  Layers,
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
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-xs text-emerald-400 font-medium truncate">Stripe · Operational</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-500/8 border border-yellow-500/15">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse flex-shrink-0" />
          <span className="text-xs text-yellow-400 font-medium truncate">OpenAI · Degraded · APAC</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/8 border border-red-500/15">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
          <span className="text-xs text-red-400 font-medium truncate">Twilio · Outage</span>
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
      <div className="mt-3 p-2.5 rounded-lg bg-muted/30 border border-border font-mono text-[11px] text-muted-foreground leading-relaxed">
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
    icon: Layers,
    title: "Adaptive UI",
    description:
      "Your UI reconfigures itself in response to provider state. Buttons disable, forms show fallbacks, flows reroute.",
    preview: (
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-muted/20 border border-border">
          <span className="text-xs text-muted-foreground">Generate</span>
          <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/15 px-1.5 py-0.5 rounded-full">Disabled</span>
        </div>
        <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-chart-1/8 border border-chart-1/15">
          <span className="text-xs text-chart-1">Use cached result</span>
          <span className="text-[10px] text-chart-1">Fallback →</span>
        </div>
      </div>
    ),
    accent: "text-chart-1",
  },
  {
    icon: MessageSquare,
    title: "Context-Aware Messaging",
    description:
      "Communicate exactly what's wrong, where, and why, instead of a generic error that leaves users guessing.",
    preview: (
      <div className="mt-3 p-2.5 rounded-lg bg-yellow-500/6 border border-yellow-500/15">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse flex-shrink-0" />
          <span className="text-[11px] font-medium text-yellow-300">OpenAI · APAC</span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Elevated latency detected. Responses may take 2–3× longer. Using cached results where possible.
        </p>
      </div>
    ),
    accent: "text-yellow-400",
  },
  {
    icon: AlertTriangle,
    title: "Provider-Aware UX",
    description:
      "Aggregate health data from 100+ cloud providers. Adapt before users feel the impact.",
    preview: (
      <div className="mt-3 flex flex-col gap-1.5">
        {[
          { name: "OpenAI", pct: 58, color: "bg-yellow-400/60" },
          { name: "Stripe", pct: 98, color: "bg-chart-1/60" },
          { name: "Twilio", pct: 12, color: "bg-red-400/60" },
        ].map(({ name, pct, color }) => (
          <div key={name} className="flex items-center gap-2">
            <span className="text-[11px] text-muted-foreground w-11 flex-shrink-0">{name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[11px] text-muted-foreground w-8 text-right flex-shrink-0">{pct}%</span>
          </div>
        ))}
      </div>
    ),
    accent: "text-orange-400",
  },
  {
    icon: RefreshCw,
    title: "Graceful Degradation",
    description:
      "Services fail partially, not completely. Status Widgets orchestrates the right fallback for each scenario.",
    preview: (
      <div className="mt-3 space-y-1.5">
        {[
          { label: "Primary provider", state: "down", color: "text-red-400/60 bg-red-500/8 border-red-500/15" },
          { label: "Cached fallback", state: "active", color: "text-chart-1 bg-chart-1/8 border-chart-1/15" },
          { label: "Retry queue", state: "waiting", color: "text-yellow-400/80 bg-yellow-500/8 border-yellow-500/15" },
        ].map(({ label, state, color }) => (
          <div key={label} className={`flex items-center justify-between p-2 rounded-lg border text-[11px] ${color}`}>
            <span>{label}</span>
            <span className="font-medium">{state}</span>
          </div>
        ))}
      </div>
    ),
    accent: "text-pink-400",
  },
  {
    icon: Globe,
    title: "Edge-Native Reliability",
    description:
      "Status data propagated via Cloudflare edge runtime with sub-50ms global latency. No cold starts.",
    preview: (
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["US East", "EU West", "APAC", "US West", "SA", "ANZ"].map((region) => (
          <div key={region} className="flex items-center gap-1 px-2 py-1.5 rounded bg-muted/30 border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-chart-1/70 flex-shrink-0" />
            <span className="text-[9px] text-muted-foreground truncate">{region}</span>
          </div>
        ))}
      </div>
    ),
    accent: "text-violet-400",
  },
  {
    icon: Cpu,
    title: "Global Realtime Sync",
    description:
      "Status changes propagate worldwide in milliseconds via persistent edge connections. No polling required.",
    preview: (
      <div className="mt-3 flex-1 flex flex-col gap-1.5">
        {[
          { step: "Incident detected", time: "0ms" },
          { step: "Edge propagation", time: "48ms" },
          { step: "UI adapted", time: "51ms" },
        ].map(({ step, time }, i) => (
          <div key={step} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-chart-1/20 border border-chart-1/30 flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] text-chart-1 font-bold">{i + 1}</span>
            </div>
            <span className="text-[11px] text-muted-foreground flex-1">{step}</span>
            <span className="text-[10px] text-chart-1 flex-shrink-0">{time}</span>
          </div>
        ))}
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
            Everything you need for{" "}
            <span className="text-chart-1">resilient UX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A complete toolkit for building applications that stay useful even
            when your dependencies don&apos;t.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, description, preview, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full group hover:border-chart-1/30 hover:bg-card/80 transition-all duration-300 hover:shadow-[0_8px_32px_oklch(0_0_0/0.3)]">
                <CardHeader className="pb-2">
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-muted/50 group-hover:bg-chart-1/10 transition-colors", accent)}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <CardTitle className="text-xs leading-snug">{title}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">{description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">{preview}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
