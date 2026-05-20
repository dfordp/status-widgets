"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

const traditional = [
  { text: '"Something went wrong"', type: "error" },
  { text: "Redirect to status.company.com", type: "error" },
  { text: "Generic error modals", type: "error" },
  { text: "Users lose context and trust", type: "error" },
  { text: "Silent failures with no UI feedback", type: "error" },
];

const modern = [
  { text: "Contextual service-aware messaging", type: "success" },
  { text: "Adaptive UI with graceful degradation", type: "success" },
  { text: "Auto-disabled affected features", type: "success" },
  { text: "Users stay informed and trust grows", type: "success" },
  { text: "Zero-error-page experience", type: "success" },
];

export function ProblemSection() {
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
          <Badge variant="secondary">The Problem</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Fragmented downtime
            <span className="text-chart-1"> breaks trust.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            When providers fail, most apps show cryptic errors. Users don&apos;t
            know what&apos;s broken, or who to blame.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-destructive/20 bg-red-500/3 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-destructive/15">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <h3 className="font-semibold text-foreground text-sm">
                Traditional approach
              </h3>
              <span className="ml-auto text-[10px] text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-0.5 rounded-full font-medium">
                Status quo
              </span>
            </div>
            <div className="p-5 space-y-3">
              {traditional.map(({ text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              ))}

              {/* Mock error UI */}
              <div className="mt-4 p-3 rounded-lg bg-red-500/8 border border-red-500/15">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-red-400/20 flex items-center justify-center">
                    <XCircle className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-xs font-medium text-red-300">
                    Something went wrong
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground/60">
                  An unexpected error occurred. Please try again later.
                </p>
                <button className="mt-2 text-[11px] text-red-400/70 underline">
                  Visit our status page →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Status Widgets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-chart-1/25 bg-chart-1/3 overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-chart-1/15">
              <CheckCircle2 className="w-4 h-4 text-chart-1" />
              <h3 className="font-semibold text-foreground text-sm">
                With Status Widgets
              </h3>
              <span className="ml-auto text-[10px] text-chart-1 bg-chart-1/10 border border-chart-1/20 px-2 py-0.5 rounded-full font-medium">
                Better
              </span>
            </div>
            <div className="p-5 space-y-3">
              {modern.map(({ text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-chart-1/70 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </div>
              ))}

              {/* Mock adaptive UI */}
              <div className="mt-4 p-3 rounded-lg bg-chart-1/5 border border-chart-1/15">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-xs font-medium text-yellow-300">
                    AI generation temporarily slower
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground/70">
                  OpenAI is experiencing issues in APAC. Using cached results.
                  Full speed expected in ~15 min.
                </p>
                <button className="mt-2 text-[11px] text-chart-1 font-medium">
                  Use cached result ↗
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
