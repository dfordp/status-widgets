"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, oklch(0.2809 0 0 / 0.6) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -5%, oklch(0.4365 0.1044 156.7556 / 0.18), transparent 65%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto px-5 md:px-7 w-full">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-14 items-center py-8 lg:py-14">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5"
            >
              <div>
                <Badge variant="default" className="gap-1.5">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-chart-1 inline-block"
                  />
                  Realtime Status Intelligence
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight text-foreground">
                Your{" "}
                <span className="relative inline-block">
                  <span className="opacity-30 italic">app</span>
                  {/* Diagonal cut through "app" */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[-4%] right-[-4%] top-1/2 -translate-y-1/2 h-[2.5px] rounded-full bg-foreground/30 block"
                    style={{ transform: "translateY(-50%) rotate(-6deg)" }}
                  />
                </span>{" "}
                <span className="text-chart-1">Providers</span>
                <br />
                are broken.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-[500px]">
                Build apps that adapt gracefully to outages.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#waitlist"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-chart-1 text-card font-semibold text-sm hover:brightness-110 transition-all duration-200 shadow-[0_0_28px_oklch(0.8003_0.1821_151.7110/0.25)]"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl border border-border bg-transparent text-foreground font-medium text-sm hover:bg-accent hover:border-border/60 transition-all duration-200"
                >
                  <Play className="w-4 h-4" />
                  View Demo
                </a>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <div className="flex -space-x-2">
                  {[
                    "oklch(0.5 0.1 200)",
                    "oklch(0.55 0.12 160)",
                    "oklch(0.45 0.08 250)",
                    "oklch(0.5 0.1 30)",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-background"
                      style={{ background: color }}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">400+</span>{" "}
                  developers on the waitlist
                </p>
              </div>
            </motion.div>

            {/* Right: floating panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex justify-center lg:justify-end"
            >
              <FloatingStatusPanel />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

function FloatingStatusPanel() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[360px] max-w-[calc(100vw-40px)]"
    >
      {/* Glow behind panel */}
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.4365 0.1044 156.7556 / 0.25), transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Panel */}
      <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-[0_24px_64px_oklch(0_0_0/0.5)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/40 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-chart-1/60" />
            </div>
            <span className="text-[11px] text-muted-foreground font-mono ml-0.5">
              StatusMonitor
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-chart-1 inline-block"
            />
            <span className="text-[11px] font-semibold text-chart-1 tracking-wider">
              LIVE
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* OpenAI status row */}
          <ServiceRow
            name="OpenAI API"
            region="APAC"
            status="degraded"
            message="Degraded · ~45% slower"
            progress={55}
            progressColor="bg-yellow-400/70"
            pulseColor="bg-yellow-400"
            bgColor="bg-yellow-500/5"
            borderColor="border-yellow-500/20"
            tagColor="text-yellow-400 bg-yellow-400/10"
          />

          {/* Payment gateway status row */}
          <ServiceRow
            name="Payment Gateway"
            region="MAJOR"
            status="outage"
            message="Service outage · 0% success"
            progress={3}
            progressColor="bg-red-400/70"
            pulseColor="bg-red-400"
            bgColor="bg-red-500/5"
            borderColor="border-red-500/20"
            tagColor="text-red-400 bg-red-400/10"
          />

          <div className="h-px bg-border" />

          {/* Affected actions */}
          <div className="space-y-2">
            <p className="text-[11px] text-muted-foreground/60 uppercase tracking-wider font-medium">
              Adapted UI
            </p>
            <div className="space-y-1.5">
              <DisabledAction
                label="Generate Response"
                note="Using cached · 2m ago"
                type="warn"
              />
              <DisabledAction
                label="Process Payment"
                note="Retrying automatically"
                type="error"
              />
            </div>
          </div>

          {/* Adaptive message */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-chart-1/5 border border-chart-1/15">
            <div className="w-0.5 self-stretch rounded-full bg-chart-1/50 flex-shrink-0" />
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              Your interface adapted automatically.{" "}
              <span className="text-chart-1 font-medium">
                0 users saw an error.
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ServiceRowProps {
  name: string;
  region: string;
  status: string;
  message: string;
  progress: number;
  progressColor: string;
  pulseColor: string;
  bgColor: string;
  borderColor: string;
  tagColor: string;
}

function ServiceRow({
  name,
  region,
  message,
  progress,
  progressColor,
  pulseColor,
  bgColor,
  borderColor,
  tagColor,
}: ServiceRowProps) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg ${bgColor} border ${borderColor}`}>
      <motion.span
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className={`w-2 h-2 rounded-full ${pulseColor} mt-1 flex-shrink-0`}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-foreground truncate">
            {name}
          </span>
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${tagColor} flex-shrink-0`}>
            {region}
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground mt-0.5">{message}</p>
        <div className="mt-2 h-1 rounded-full bg-border overflow-hidden">
          <div
            className={`h-full ${progressColor} rounded-full`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function DisabledAction({
  label,
  note,
  type,
}: {
  label: string;
  note: string;
  type: "warn" | "error";
}) {
  return (
    <div
      className={`flex items-center gap-2 h-8 px-3 rounded-lg border text-[12px] cursor-not-allowed opacity-60 ${
        type === "error"
          ? "bg-red-500/5 border-red-500/15 text-muted-foreground"
          : "bg-muted/30 border-border text-muted-foreground"
      }`}
    >
      <div
        className={`w-2 h-2 rounded-full border flex-shrink-0 ${
          type === "error" ? "border-red-400/50" : "border-yellow-400/50"
        }`}
      />
      <span className="flex-1">{label}</span>
      <span
        className={`text-[10px] ${
          type === "error" ? "text-red-400/70" : "text-muted-foreground/60"
        }`}
      >
        {note}
      </span>
    </div>
  );
}
