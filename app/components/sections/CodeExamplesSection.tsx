"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { cn } from "@/lib/utils";

const examples = [
  {
    label: "Feature Gate",
    filename: "app/generate-button.tsx",
    code: [
      { type: "keyword", text: "import" },
      { type: "plain", text: " { " },
      { type: "component", text: "FeatureGate" },
      { type: "plain", text: " } " },
      { type: "keyword", text: "from" },
      { type: "string", text: ' "status-widgets/react"' },
      { type: "newline" },
      { type: "newline" },
      { type: "keyword", text: "export function" },
      { type: "plain", text: " " },
      { type: "fn", text: "AIPanel" },
      { type: "plain", text: "() {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "keyword", text: "return" },
      { type: "plain", text: " (" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "component", text: "<FeatureGate" },
      { type: "prop", text: " service" },
      { type: "plain", text: "=" },
      { type: "string", text: '"openai"' },
      { type: "component", text: ">" },
      { type: "newline" },
      { type: "plain", text: "      " },
      { type: "component", text: "<GenerateButton" },
      { type: "plain", text: " />" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "component", text: "</FeatureGate>" },
      { type: "newline" },
      { type: "plain", text: "  )" },
      { type: "newline" },
      { type: "plain", text: "}" },
    ],
    raw: `import { FeatureGate } from "status-widgets/react"

export function AIPanel() {
  return (
    <FeatureGate service="openai">
      <GenerateButton />
    </FeatureGate>
  )
}`,
    description:
      "Wrap any component in FeatureGate. It automatically disables or replaces the UI when the service is unavailable.",
  },
  {
    label: "Status Banner",
    filename: "app/layout.tsx",
    code: [
      { type: "keyword", text: "import" },
      { type: "plain", text: " { " },
      { type: "component", text: "StatusBanner" },
      { type: "plain", text: " } " },
      { type: "keyword", text: "from" },
      { type: "string", text: ' "status-widgets/react"' },
      { type: "newline" },
      { type: "newline" },
      { type: "keyword", text: "export function" },
      { type: "plain", text: " " },
      { type: "fn", text: "Layout" },
      { type: "plain", text: "({ children }) {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "keyword", text: "return" },
      { type: "plain", text: " (" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "component", text: "<div>" },
      { type: "newline" },
      { type: "plain", text: "      " },
      { type: "component", text: "<StatusBanner" },
      { type: "prop", text: " service" },
      { type: "plain", text: "=" },
      { type: "string", text: '"payments"' },
      { type: "plain", text: " " },
      { type: "prop", text: "variant" },
      { type: "plain", text: "=" },
      { type: "string", text: '"inline"' },
      { type: "plain", text: " />" },
      { type: "newline" },
      { type: "plain", text: "      {children}" },
      { type: "newline" },
      { type: "plain", text: "    " },
      { type: "component", text: "</div>" },
      { type: "newline" },
      { type: "plain", text: "  )" },
      { type: "newline" },
      { type: "plain", text: "}" },
    ],
    raw: `import { StatusBanner } from "status-widgets/react"

export function Layout({ children }) {
  return (
    <div>
      <StatusBanner service="payments" variant="inline" />
      {children}
    </div>
  )
}`,
    description:
      "Contextual banners that only appear when a service is affected. Fully styled, zero configuration.",
  },
  {
    label: "Service Hook",
    filename: "app/components/pay-button.tsx",
    code: [
      { type: "keyword", text: "import" },
      { type: "plain", text: " { " },
      { type: "fn", text: "useServiceStatus" },
      { type: "plain", text: " } " },
      { type: "keyword", text: "from" },
      { type: "string", text: ' "status-widgets/react"' },
      { type: "newline" },
      { type: "newline" },
      { type: "keyword", text: "export function" },
      { type: "plain", text: " " },
      { type: "fn", text: "PayButton" },
      { type: "plain", text: "() {" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "keyword", text: "const" },
      { type: "plain", text: " { " },
      { type: "plain", text: "state, region" },
      { type: "plain", text: " } = " },
      { type: "fn", text: "useServiceStatus" },
      { type: "plain", text: "(" },
      { type: "string", text: '"stripe"' },
      { type: "plain", text: ")" },
      { type: "newline" },
      { type: "newline" },
      { type: "comment", text: "  // state → 'operational' | 'degraded' | 'outage'" },
      { type: "newline" },
      { type: "comment", text: "  // region → 'us-east' | 'eu-west' | 'apac' | null" },
      { type: "newline" },
      { type: "newline" },
      { type: "plain", text: "  " },
      { type: "keyword", text: "return" },
      { type: "plain", text: " <" },
      { type: "component", text: "Button" },
      { type: "prop", text: " disabled" },
      { type: "plain", text: "={state !== " },
      { type: "string", text: '"operational"' },
      { type: "plain", text: "} />" },
      { type: "newline" },
      { type: "plain", text: "}" },
    ],
    raw: `import { useServiceStatus } from "status-widgets/react"

export function PayButton() {
  const { state, region } = useServiceStatus("stripe")

  // state → 'operational' | 'degraded' | 'outage'
  // region → 'us-east' | 'eu-west' | 'apac' | null

  return <Button disabled={state !== "operational"} />
}`,
    description:
      "Full programmatic access to live service status. React to any state change with custom logic.",
  },
];

export function CodeExamplesSection() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(examples[active].raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-5 md:px-7 bg-card/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="secondary">Developer Experience</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Three lines.{" "}
            <span className="text-chart-1">Production ready.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Drop-in components and hooks that integrate with any React
            application in minutes, not days.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl bg-muted/30 border border-border mb-0 w-full sm:w-fit overflow-x-auto">
            {examples.map((ex, i) => (
              <button
                key={ex.label}
                onClick={() => setActive(i)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
                  active === i
                    ? "bg-card text-foreground shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {ex.label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-border bg-card overflow-hidden shadow-[0_8px_32px_oklch(0_0_0/0.4)] mt-3"
          >
            {/* File chrome */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/40">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted/50" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-1">
                  {examples[active].filename}
                </span>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-accent"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-chart-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Code */}
            <pre className="p-5 overflow-x-auto">
              <code className="text-sm font-mono leading-7">
                {examples[active].code.map((token, i) => {
                  if (token.type === "newline") return <br key={i} />;
                  return (
                    <span
                      key={i}
                      className={cn({
                        "text-violet-400": token.type === "keyword",
                        "text-chart-1": token.type === "component",
                        "text-yellow-300": token.type === "string",
                        "text-blue-400": token.type === "prop",
                        "text-orange-300": token.type === "fn",
                        "text-muted-foreground/50": token.type === "comment",
                        "text-muted-foreground": token.type === "plain",
                      })}
                    >
                      {token.text}
                    </span>
                  );
                })}
              </code>
            </pre>

            {/* Description */}
            <div className="px-5 py-3.5 border-t border-border bg-muted/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {examples[active].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
