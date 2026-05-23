"use client";

import { motion } from "framer-motion";
import { Badge } from "@/app/components/ui/badge";
import { CheckCircle2, MinusCircle, XCircle } from "lucide-react";

const categories = [
  "Embedded in your UI",
  "Adaptive frontend behavior",
  "Realtime feature gating",
  "Context-aware user messaging",
  "Zero user-visible errors",
  "Provider-aware UX",
  "Works without ops intervention",
  "Runtime reliability layer",
];

const tools: {
  name: string;
  category: string;
  description: string;
  scores: (boolean | null)[];
  muted: boolean;
  highlight: boolean;
}[] = [
  {
    name: "Statuspage",
    category: "External status page",
    description: "Incident communication for customers and stakeholders.",
    scores: [false, false, false, null, false, false, false, false],
    muted: true,
    highlight: false,
  },
  {
    name: "Instatus",
    category: "Status page builder",
    description: "Beautiful hosted status pages with subscriber notifications.",
    scores: [false, false, false, null, false, false, false, false],
    muted: true,
    highlight: false,
  },
  {
    name: "Better Stack",
    category: "Uptime monitoring",
    description: "Uptime monitoring, incident management, and status pages.",
    scores: [false, false, false, null, false, false, false, false],
    muted: true,
    highlight: false,
  },
  {
    name: "Status Widgets",
    category: "Runtime reliability layer",
    description: "Embedded adaptive UI that responds to live provider state.",
    scores: [true, true, true, true, true, true, true, true],
    muted: false,
    highlight: true,
  },
];

function ScoreIcon({ value, highlight }: { value: boolean | null; highlight: boolean }) {
  if (value === null) {
    return <MinusCircle className="w-4 h-4 text-muted-foreground/30" />;
  }
  if (value) {
    return (
      <CheckCircle2
        className={`w-4 h-4 ${highlight ? "text-chart-1" : "text-chart-1/60"}`}
      />
    );
  }
  return <XCircle className="w-4 h-4 text-muted-foreground/30" />;
}

export function CompetitorSection() {
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
          <Badge variant="secondary">How we&apos;re different</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            A new layer in the{" "}
            <span className="text-chart-1">reliability stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Existing tools handle incident communication. Status Widgets handles
            what happens inside your app when an incident occurs.
          </p>
        </motion.div>

        {/* Desktop comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:block rounded-2xl border border-border overflow-hidden shadow-[0_8px_40px_oklch(0_0_0/0.4)]"
        >
          {/* Header row */}
          <div className="grid grid-cols-[220px_1fr_1fr_1fr_1fr] border-b border-border bg-background/60">
            <div className="px-5 py-4" />
            {tools.map((tool) => (
              <div
                key={tool.name}
                className={`px-4 py-4 border-l border-border ${tool.highlight ? "bg-chart-1/5" : ""}`}
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-sm font-semibold ${tool.highlight ? "text-chart-1" : "text-foreground"}`}>
                    {tool.name}
                  </span>
                  {tool.highlight && (
                    <span className="text-[9px] text-chart-1 bg-chart-1/15 border border-chart-1/25 px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                      Us
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-muted-foreground/60 leading-tight">{tool.category}</p>
              </div>
            ))}
          </div>

          {/* Category rows */}
          {categories.map((cat, ci) => (
            <div
              key={cat}
              className={`grid grid-cols-[220px_1fr_1fr_1fr_1fr] border-b border-border last:border-b-0 ${
                ci % 2 === 0 ? "bg-background/20" : ""
              }`}
            >
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-xs text-muted-foreground">{cat}</span>
              </div>
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`px-4 py-3.5 border-l border-border flex items-center justify-center ${
                    tool.highlight ? "bg-chart-1/5" : ""
                  }`}
                >
                  <ScoreIcon value={tool.scores[ci]} highlight={tool.highlight} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Mobile: card list */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-xl border p-5 ${
                tool.highlight
                  ? "border-chart-1/30 bg-chart-1/5 shadow-[0_0_24px_oklch(0.4365_0.1044_156.7556/0.1)]"
                  : "border-border bg-card/40"
              }`}
            >
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`text-sm font-semibold ${tool.highlight ? "text-chart-1" : "text-foreground"}`}>
                  {tool.name}
                </span>
                {tool.highlight && (
                  <span className="text-[9px] text-chart-1 bg-chart-1/15 border border-chart-1/25 px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    Us
                  </span>
                )}
              </div>
              <p className="text-[10px] text-muted-foreground/60 mb-3">{tool.category}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{tool.description}</p>
              <div className="space-y-2">
                {categories.slice(0, 5).map((cat, ci) => (
                  <div key={cat} className="flex items-center gap-2">
                    <ScoreIcon value={tool.scores[ci]} highlight={tool.highlight} />
                    <span className="text-xs text-muted-foreground/70">{cat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground/40 mt-8"
        >
          Statuspage, Instatus, and Better Stack are excellent tools for their
          category. They solve a different problem.
        </motion.p>
      </div>
    </section>
  );
}
