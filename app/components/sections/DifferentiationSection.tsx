"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import {
  ExternalLink,
  MessageSquare,
  Megaphone,
  Users,
  Server,
  Zap,
  Layout,
  ToggleLeft,
  MessageCircle,
  Heart,
  Layers,
  XCircle,
  CheckCircle2,
} from "lucide-react";

const traditional = [
  { icon: ExternalLink, text: "External status pages", sub: "Users leave your app" },
  { icon: Megaphone, text: "Manual incident posts", sub: "Hours of ops-team effort" },
  { icon: MessageSquare, text: "Generic error banners", sub: "No context for users" },
  { icon: Users, text: "Ops-team focused", sub: "Not user experience focused" },
  { icon: Server, text: "Infrastructure visibility", sub: "Not frontend adaptation" },
];

const modern = [
  { icon: Layout, text: "Embedded inside your UI", sub: "Users never leave your app" },
  { icon: Zap, text: "Adaptive frontend behavior", sub: "Happens automatically" },
  { icon: ToggleLeft, text: "Realtime feature gating", sub: "Features disable gracefully" },
  { icon: MessageCircle, text: "Context-aware messaging", sub: "Specific, helpful, clear" },
  { icon: Heart, text: "User experience focused", sub: "Trust preserved during outages" },
];

export function DifferentiationSection() {
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
          <Badge variant="secondary">
            <Layers className="w-3 h-3 mr-1.5" />
            Category differentiation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Status pages{" "}
            <span className="text-muted-foreground/50 italic font-normal">
              inform users after failure.
            </span>
            <br />
            Status Widgets{" "}
            <span className="text-chart-1">helps apps adapt during failure.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            This is a different layer entirely. Not communication tooling,
            adaptive frontend infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional Status Tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card/40 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-muted-foreground/60" />
                <span className="text-sm font-semibold text-foreground">
                  Traditional Status Tools
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/50 bg-muted/30 border border-border px-2 py-0.5 rounded-full">
                Statuspage · Instatus · BetterStack
              </span>
            </div>
            <div className="p-6 space-y-4">
              {traditional.map(({ icon: Icon, text, sub }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-muted/40 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-muted-foreground/60" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/80 font-medium">{text}</p>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-border bg-muted/10">
              <p className="text-xs text-muted-foreground/60 text-center">
                External incident communication layer
              </p>
            </div>
          </motion.div>

          {/* Status Widgets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-chart-1/30 bg-chart-1/5 overflow-hidden shadow-[0_0_40px_oklch(0.4365_0.1044_156.7556/0.12)]"
          >
            <div className="px-6 py-4 border-b border-chart-1/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-chart-1" />
                <span className="text-sm font-semibold text-foreground">
                  Status Widgets
                </span>
              </div>
              <span className="text-[10px] text-chart-1 bg-chart-1/10 border border-chart-1/20 px-2 py-0.5 rounded-full font-medium">
                Different layer
              </span>
            </div>
            <div className="p-6 space-y-4">
              {modern.map(({ icon: Icon, text, sub }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-chart-1/15 border border-chart-1/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-chart-1" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground font-medium">{text}</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-chart-1/15 bg-chart-1/5">
              <p className="text-xs text-chart-1/80 text-center font-medium">
                Embedded adaptive reliability UX
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
