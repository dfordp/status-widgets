"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export function BeforeAfterSection() {
  return (
    <section className="py-20 px-5 md:px-7">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium">
            Why it matters
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            The difference is immediate
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-[0_24px_64px_oklch(0_0_0/0.55)]">
          {/* LEFT: Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-red-500/4 border-r border-border p-7 flex flex-col gap-5"
          >
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                Traditional UX
              </span>
            </div>

            {/* Mock error dialog */}
            <div className="rounded-xl border border-red-500/20 bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-red-500/10 bg-red-500/5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-muted/40" />
                </div>
                <span className="text-[11px] text-muted-foreground/50 font-mono ml-1">
                  your-app.com/generate
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Something went wrong.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Please try again later.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-7 px-3 rounded-md bg-muted/40 border border-border text-xs text-muted-foreground/60 cursor-not-allowed opacity-60">
                    Retry
                  </button>
                  <button className="h-7 px-3 rounded-md border border-border text-xs text-red-400/70 hover:underline">
                    Visit status page →
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/50 text-center">
              Users are confused. Context is lost. Trust erodes.
            </p>
          </motion.div>

          {/* RIGHT: Status Widgets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-chart-1/4 p-7 flex flex-col gap-5"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-chart-1 flex-shrink-0" />
              <span className="text-xs font-semibold text-chart-1 uppercase tracking-wider">
                Status Widgets
              </span>
            </div>

            {/* Mock adaptive UI */}
            <div className="rounded-xl border border-yellow-500/25 bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-yellow-500/10 bg-yellow-500/5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-muted/40" />
                </div>
                <span className="text-[11px] text-muted-foreground/50 font-mono ml-1">
                  your-app.com/generate
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2"
                  />
                  <div>
                    <p className="text-sm font-semibold text-yellow-300">
                      Elevated latency in APAC
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      OpenAI is currently experiencing elevated latency in APAC.
                      Responses may take longer than usual.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="h-7 px-3 rounded-md bg-chart-1/15 border border-chart-1/25 text-xs text-chart-1 font-medium">
                    Use cached result →
                  </button>
                  <span className="h-7 px-3 rounded-md border border-border text-xs text-muted-foreground/60 flex items-center">
                    Retrying automatically
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground/50 text-center">
              Users stay informed. Feature degrades gracefully. Trust grows.
            </p>
          </motion.div>
        </div>

        {/* Arrow / label below */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground/60 mt-8"
        >
          The same outage. Two completely different user experiences.
        </motion.p>
      </div>
    </section>
  );
}
