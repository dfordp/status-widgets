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
  Upload,
  FileText,
  ImageIcon,
  Clock,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { cn } from "@/lib/utils";

type ServiceState = "operational" | "degraded" | "outage";

export function LiveDemoSection() {
  const [openaiState, setOpenaiState] = useState<ServiceState>("operational");
  const [paymentsState, setPaymentsState] = useState<ServiceState>("operational");
  const [uploadsState, setUploadsState] = useState<ServiceState>("operational");

  const cycleState = (current: ServiceState): ServiceState => {
    if (current === "operational") return "degraded";
    if (current === "degraded") return "outage";
    return "operational";
  };

  const anyIssue =
    openaiState !== "operational" ||
    paymentsState !== "operational" ||
    uploadsState !== "operational";

  const criticalIssue =
    openaiState === "outage" ||
    paymentsState === "outage" ||
    uploadsState === "outage";

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
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-chart-1 inline-block mr-1.5"
            />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            See it <span className="text-chart-1">adapt in real time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Toggle service states below and watch the application interface
            respond instantly, no error pages, no confusion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6 items-start">
          {/* Control panel */}
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium px-1">
              Simulate outages
            </p>

            <ServiceControl
              icon={Zap}
              name="OpenAI API"
              description="AI generation"
              state={openaiState}
              onCycle={() => setOpenaiState(cycleState(openaiState))}
              onReset={() => setOpenaiState("operational")}
            />

            <ServiceControl
              icon={CreditCard}
              name="Payment Gateway"
              description="Stripe · checkout"
              state={paymentsState}
              onCycle={() => setPaymentsState(cycleState(paymentsState))}
              onReset={() => setPaymentsState("operational")}
            />

            <ServiceControl
              icon={Upload}
              name="File Uploads"
              description="S3 · storage layer"
              state={uploadsState}
              onCycle={() => setUploadsState(cycleState(uploadsState))}
              onReset={() => setUploadsState("operational")}
            />

            <div className="p-3 rounded-xl bg-muted/20 border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click a service to cycle:{" "}
                <span className="text-chart-1">operational</span>
                {" → "}
                <span className="text-yellow-400">degraded</span>
                {" → "}
                <span className="text-red-400">outage</span>
              </p>
            </div>

            {/* Live status summary */}
            {anyIssue && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl border border-chart-1/20 bg-chart-1/5"
              >
                <p className="text-[11px] text-chart-1 font-medium mb-1">
                  UI adapted automatically
                </p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Affected features are disabled or showing fallback states. No
                  error pages shown.
                </p>
              </motion.div>
            )}
          </div>

          {/* Simulated SaaS app */}
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-[0_8px_40px_oklch(0_0_0/0.4)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50 flex-shrink-0">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-muted/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-1 truncate">
                your-app.com/dashboard
              </span>
              {anyIssue && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="ml-auto flex items-center gap-1 flex-shrink-0"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={cn(
                      "w-2 h-2 rounded-full",
                      criticalIssue ? "bg-red-400" : "bg-yellow-400"
                    )}
                  />
                  <span className={cn("text-[10px] font-medium", criticalIssue ? "text-red-400" : "text-yellow-400")}>
                    {criticalIssue ? "Outage" : "Degraded"}
                  </span>
                </motion.div>
              )}
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
                      "flex items-start gap-3 px-4 py-3 text-sm border-b",
                      criticalIssue
                        ? "bg-red-500/8 border-red-500/20 text-red-300"
                        : "bg-yellow-500/8 border-yellow-500/20 text-yellow-300"
                    )}
                  >
                    {criticalIssue ? (
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="min-w-0">
                      <span className="font-medium">
                        {criticalIssue ? "Service outage detected" : "Degraded performance"}
                      </span>
                      <p className="text-xs opacity-70 mt-0.5 leading-relaxed">
                        {getBannerMessage(openaiState, paymentsState, uploadsState)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* App content */}
            <div className="p-5 space-y-5">
              {/* Dashboard header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Dashboard</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Welcome back, Alex</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className={cn("w-1.5 h-1.5 rounded-full", {
                      "bg-chart-1": !anyIssue,
                      "bg-yellow-400 animate-pulse": anyIssue && !criticalIssue,
                      "bg-red-400 animate-pulse": criticalIssue,
                    })}
                  />
                  <span className="text-[11px] text-muted-foreground">
                    {!anyIssue ? "All systems operational" : criticalIssue ? "Active outage" : "Degraded performance"}
                  </span>
                </div>
              </div>

              <div className="h-px bg-border" />

              {/* AI Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    <span className="text-sm font-medium text-foreground">AI Assistant</span>
                  </div>
                  <StatusPill state={openaiState} />
                </div>

                <div className="p-4 rounded-xl bg-muted/20 border border-border space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      Summarize the latest customer feedback report
                    </p>
                  </div>

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
                        <div className="flex items-center gap-2 flex-wrap">
                          <button className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-yellow-500/15 border border-yellow-500/25 text-yellow-400 text-xs font-medium">
                            <Clock className="w-3 h-3" />
                            Generate Summary
                            <span className="text-[10px] opacity-60">· slower</span>
                          </button>
                          <button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg border border-border text-xs text-muted-foreground hover:bg-accent transition-colors">
                            Use cached
                          </button>
                        </div>
                        <p className="text-[11px] text-yellow-400/80">
                          OpenAI APAC degraded · responses 2–3× slower than usual
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
                        <div className="flex items-center gap-2 flex-wrap">
                          <button
                            disabled
                            className="inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-muted/40 border border-border text-muted-foreground/40 text-xs cursor-not-allowed"
                          >
                            <X className="w-3 h-3" />
                            Generate Summary
                          </button>
                          <button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-chart-1/15 border border-chart-1/25 text-xs text-chart-1 font-medium">
                            View cached →
                          </button>
                        </div>
                        <p className="text-[11px] text-muted-foreground">
                          AI unavailable · showing cached summary from 4h ago
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Upload className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-foreground">File Uploads</span>
                  </div>
                  <StatusPill state={uploadsState} />
                </div>

                <AnimatePresence mode="wait">
                  {uploadsState === "operational" ? (
                    <motion.div
                      key="uploads-active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border-2 border-dashed border-border bg-muted/10 p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-chart-1/30 hover:bg-chart-1/3 transition-all"
                    >
                      <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                      <p className="text-xs text-muted-foreground text-center">
                        Drop files here or{" "}
                        <span className="text-chart-1 underline">browse</span>
                      </p>
                    </motion.div>
                  ) : uploadsState === "degraded" ? (
                    <motion.div
                      key="uploads-degraded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-yellow-500/25 bg-yellow-500/5 p-4 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-xs font-medium text-yellow-300">Uploads are slower than usual</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        S3 is experiencing intermittent delays. Files will upload but may take longer.
                        Retry is automatic.
                      </p>
                      <button className="inline-flex items-center gap-1.5 h-7 px-3 rounded-lg border border-yellow-500/25 text-xs text-yellow-400">
                        <RefreshCw className="w-3 h-3" />
                        Upload anyway
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="uploads-outage"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-red-500/25 bg-red-500/5 p-4 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-xs font-medium text-red-300">Uploads unavailable</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Storage service is down. Uploads are disabled to prevent data loss.
                        Will restore automatically.
                      </p>
                      <button
                        disabled
                        className="inline-flex items-center gap-1.5 h-7 px-3 rounded-lg border border-border text-xs text-muted-foreground/40 cursor-not-allowed"
                      >
                        <X className="w-3 h-3" />
                        Upload file
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Payments Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Billing</span>
                  </div>
                  <StatusPill state={paymentsState} />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 border border-border gap-3 flex-wrap">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">Pro Plan · $49/mo</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Due June 1, 2026</p>
                  </div>

                  <AnimatePresence mode="wait">
                    {paymentsState === "operational" ? (
                      <motion.button
                        key="pay-active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-shrink-0 inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-chart-1 text-card text-xs font-medium hover:brightness-110 transition-all"
                      >
                        Pay now
                      </motion.button>
                    ) : paymentsState === "degraded" ? (
                      <motion.button
                        key="pay-degraded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-shrink-0 inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-yellow-500/15 border border-yellow-500/25 text-yellow-400 text-xs"
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
                        className="flex-shrink-0 inline-flex items-center gap-2 h-8 px-4 rounded-lg bg-muted/40 border border-border text-muted-foreground/40 text-xs cursor-not-allowed"
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
                        ? "Payment processing is delayed. Your payment will complete shortly, no action needed."
                        : "Stripe is currently down. Your payment is queued and will process automatically when service resumes."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer status */}
              <div className="flex items-center gap-2 pt-1 border-t border-border">
                <div
                  className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", {
                    "bg-chart-1": !anyIssue,
                    "bg-yellow-400 animate-pulse": anyIssue && !criticalIssue,
                    "bg-red-400 animate-pulse": criticalIssue,
                  })}
                />
                <span className="text-[11px] text-muted-foreground">
                  {!anyIssue
                    ? "All systems operational"
                    : criticalIssue
                    ? "Active outage · UI adapted"
                    : "Degraded performance · UI adapted"}
                </span>
                <span className="ml-auto text-[10px] text-muted-foreground/40 flex-shrink-0">
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

function StatusPill({ state }: { state: ServiceState }) {
  if (state === "operational") {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        <span className="text-[11px] text-emerald-400 font-medium">Operational</span>
      </div>
    );
  }
  if (state === "degraded") {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex-shrink-0">
        <AlertTriangle className="w-3 h-3 text-yellow-400" />
        <span className="text-[11px] text-yellow-400 font-medium">Degraded</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 flex-shrink-0">
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
      <div className="flex items-center gap-3 px-3 py-3">
        <div className="w-7 h-7 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
          <Icon className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-foreground">{name}</p>
          <p className="text-[11px] text-muted-foreground truncate">{description}</p>
        </div>
        <div className={cn("flex items-center gap-1 px-2 py-1 rounded-full border text-[10px] font-medium flex-shrink-0", cfg.bg, cfg.color)}>
          <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", cfg.dot)} />
          {cfg.label}
        </div>
      </div>
      <div className="flex border-t border-border">
        <button
          onClick={onCycle}
          className="flex-1 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          Next state →
        </button>
        {state !== "operational" && (
          <button
            onClick={onReset}
            className="flex-1 py-1.5 text-xs text-chart-1 hover:bg-chart-1/5 border-l border-border transition-colors"
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
  payments: ServiceState,
  uploads: ServiceState
): string {
  const parts: string[] = [];
  if (openai === "degraded") parts.push("OpenAI APAC degraded, responses slower");
  if (openai === "outage") parts.push("OpenAI is down, using cached results");
  if (payments === "degraded") parts.push("payment processing delayed");
  if (payments === "outage") parts.push("Stripe is unavailable payments queued");
  if (uploads === "degraded") parts.push("file uploads slower than usual");
  if (uploads === "outage") parts.push("uploads disabled to prevent data loss");
  return parts.join(" · ") + ". Your UI has adapted automatically.";
}
