"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  AlertCircle,
  Zap,
  CreditCard,
  X,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceState = "operational" | "degraded" | "outage";

export function LiveDemoSection() {
  const [openaiState, setOpenaiState] = useState<ServiceState>("operational");
  const [paymentsState, setPaymentsState] = useState<ServiceState>("operational");

  const cycleState = (current: ServiceState): ServiceState => {
    if (current === "operational") return "degraded";
    if (current === "degraded") return "outage";
    return "operational";
  };

  const anyIssue = openaiState !== "operational" || paymentsState !== "operational";
  const criticalIssue =
    openaiState === "outage" || paymentsState === "outage";

  return (
    <section id="demo" className="py-24 px-5 md:px-7">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="default">
            <span className="w-1.5 h-1.5 rounded-full bg-chart-1 inline-block mr-1.5 animate-pulse" />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            See it <span className="text-chart-1">adapt in real time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Toggle service states below and watch your application interface
            adapt automatically, no configuration needed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Control panel */}
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">
              Simulate service states
            </p>

            <ServiceControl
              icon={Zap}
              name="OpenAI API"
              description="AI generation & completions"
              state={openaiState}
              onCycle={() => setOpenaiState(cycleState(openaiState))}
              onReset={() => setOpenaiState("operational")}
            />

            <ServiceControl
              icon={CreditCard}
              name="Payment Gateway"
              description="Stripe charge & subscription API"
              state={paymentsState}
              onCycle={() => setPaymentsState(cycleState(paymentsState))}
              onReset={() => setPaymentsState("operational")}
            />

            <div className="p-3 rounded-xl bg-muted/20 border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click a service to cycle through{" "}
                <span className="text-chart-1">operational</span> →{" "}
                <span className="text-yellow-400">degraded</span> →{" "}
                <span className="text-red-400">outage</span> and back.
              </p>
            </div>
          </div>

          {/* Simulated app */}
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-[0_8px_40px_oklch(0_0_0/0.4)]">
            {/* App chrome */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-1">
                  your-app.com/dashboard
                </span>
              </div>
            </div>

            {/* Alert banner */}
            <AnimatePresence>
              {anyIssue && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "flex items-start gap-3 px-4 py-3 text-sm",
                      criticalIssue
                        ? "bg-red-500/8 border-b border-red-500/20 text-red-300"
                        : "bg-yellow-500/8 border-b border-yellow-500/20 text-yellow-300"
                    )}
                  >
                    {criticalIssue ? (
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <span className="font-medium">
                        {criticalIssue
                          ? "Service outage detected"
                          : "Degraded performance detected"}
                      </span>
                      <p className="text-xs opacity-70 mt-0.5">
                        {getBannerMessage(openaiState, paymentsState)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* App content */}
            <div className="p-6 space-y-6">
              {/* Header */}
              <div>
                <h3 className="font-semibold text-foreground">Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Good morning, Alex
                </p>
              </div>

              {/* AI section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      AI Assistant
                    </span>
                  </div>
                  <StatusBadge state={openaiState} />
                </div>

                <div className="p-3 rounded-lg bg-muted/20 border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Summarize the latest customer feedback report
                  </p>

                  <AnimatePresence mode="wait">
                    {openaiState === "operational" ? (
                      <motion.button
                        key="ai-active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-chart-1 text-card text-xs font-medium hover:brightness-110 transition-all"
                      >
                        <Zap className="w-3 h-3" />
                        Generate Summary
                      </motion.button>
                    ) : openaiState === "degraded" ? (
                      <motion.div
                        key="ai-degraded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2"
                      >
                        <button className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-yellow-500/15 border border-yellow-500/25 text-yellow-400 text-xs font-medium">
                          <Zap className="w-3 h-3" />
                          Generate Summary
                          <span className="text-[10px] opacity-60">· slower</span>
                        </button>
                        <p className="text-[11px] text-muted-foreground">
                          OpenAI APAC is degraded. Responses may take 2–3×
                          longer than usual.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="ai-outage"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2"
                      >
                        <button
                          disabled
                          className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-muted/40 border border-border text-muted-foreground/40 text-xs font-medium cursor-not-allowed"
                        >
                          <X className="w-3 h-3" />
                          Generate Summary
                        </button>
                        <p className="text-[11px] text-muted-foreground">
                          AI unavailable. Using last cached summary from 4h ago.{" "}
                          <span className="text-chart-1 cursor-pointer hover:underline">
                            View cached →
                          </span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Payment section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      Billing
                    </span>
                  </div>
                  <StatusBadge state={paymentsState} />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Pro Plan · $49/mo
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Due June 1, 2026
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {paymentsState === "operational" ? (
                      <motion.button
                        key="pay-active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-chart-1 text-card text-xs font-medium hover:brightness-110 transition-all"
                      >
                        Pay now
                      </motion.button>
                    ) : paymentsState === "degraded" ? (
                      <motion.button
                        key="pay-degraded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-yellow-500/15 border border-yellow-500/25 text-yellow-400 text-xs"
                      >
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Retrying…
                      </motion.button>
                    ) : (
                      <motion.button
                        key="pay-outage"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        disabled
                        className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-muted/40 border border-border text-muted-foreground/40 text-xs cursor-not-allowed"
                      >
                        <X className="w-3 h-3" />
                        Unavailable
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {paymentsState !== "operational" && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[11px] text-muted-foreground overflow-hidden"
                    >
                      {paymentsState === "degraded"
                        ? "Payment processing is experiencing delays. Your payment will complete shortly."
                        : "Stripe is currently down. Your payment is queued and will process automatically when service resumes."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Status footer */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <div
                  className={cn("w-1.5 h-1.5 rounded-full", {
                    "bg-chart-1": !anyIssue,
                    "bg-yellow-400 animate-pulse": anyIssue && !criticalIssue,
                    "bg-red-400 animate-pulse": criticalIssue,
                  })}
                />
                <span className="text-xs text-muted-foreground">
                  {!anyIssue
                    ? "All systems operational"
                    : criticalIssue
                    ? "Active outage detected"
                    : "Degraded performance detected"}
                </span>
                <span className="ml-auto text-[10px] text-muted-foreground/50">
                  via Status Widgets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ state }: { state: ServiceState }) {
  if (state === "operational") {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        <span className="text-[11px] text-emerald-400 font-medium">
          Operational
        </span>
      </div>
    );
  }
  if (state === "degraded") {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
        <AlertTriangle className="w-3 h-3 text-yellow-400" />
        <span className="text-[11px] text-yellow-400 font-medium">Degraded</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20">
      <AlertCircle className="w-3 h-3 text-red-400" />
      <span className="text-[11px] text-red-400 font-medium">Outage</span>
    </div>
  );
}

function ServiceControl({
  icon: Icon,
  name,
  description,
  state,
  onCycle,
  onReset,
}: {
  icon: React.ElementType;
  name: string;
  description: string;
  state: ServiceState;
  onCycle: () => void;
  onReset: () => void;
}) {
  const stateConfig = {
    operational: {
      color: "text-chart-1",
      bg: "bg-chart-1/10 border-chart-1/20",
      label: "Operational",
      dot: "bg-chart-1",
    },
    degraded: {
      color: "text-yellow-400",
      bg: "bg-yellow-500/10 border-yellow-500/20",
      label: "Degraded",
      dot: "bg-yellow-400 animate-pulse",
    },
    outage: {
      color: "text-red-400",
      bg: "bg-red-500/10 border-red-500/20",
      label: "Outage",
      dot: "bg-red-400 animate-pulse",
    },
  };

  const cfg = stateConfig[state];

  return (
    <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{description}</p>
        </div>
        <div className={cn("flex items-center gap-1.5 px-2 py-1 rounded-full border text-[11px] font-medium", cfg.bg, cfg.color)}>
          <span className={cn("w-1.5 h-1.5 rounded-full", cfg.dot)} />
          {cfg.label}
        </div>
      </div>
      <div className="flex border-t border-border">
        <button
          onClick={onCycle}
          className="flex-1 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          Next state →
        </button>
        {state !== "operational" && (
          <button
            onClick={onReset}
            className="flex-1 py-2 text-xs text-chart-1 hover:bg-chart-1/5 border-l border-border transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

function getBannerMessage(
  openai: ServiceState,
  payments: ServiceState
): string {
  const parts: string[] = [];
  if (openai === "degraded") parts.push("OpenAI APAC is experiencing degraded performance");
  if (openai === "outage") parts.push("OpenAI is down");
  if (payments === "degraded") parts.push("payment processing is slower than usual");
  if (payments === "outage") parts.push("Stripe is unavailable");
  return parts.join(" · ") + ". Your UI has adapted automatically.";
}
