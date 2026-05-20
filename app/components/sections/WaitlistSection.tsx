"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, AlertCircle } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { joinWaitlist, type WaitlistResult } from "@/app/actions/waitlist";

export function WaitlistSection() {
  const [result, setResult] = useState<WaitlistResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const res = await joinWaitlist(formData);
      setResult(res);
    });
  };

  return (
    <section
      id="waitlist"
      className="py-24 px-5 md:px-7 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.4365 0.1044 156.7556 / 0.12), transparent 65%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-10 space-y-4">
            <Badge variant="default">
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-chart-1 inline-block mr-1.5"
              />
              Early Access
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Be the first to
              <span className="text-chart-1"> ship resilience</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join 400+ engineers building more reliable product experiences.
              Early access includes the SDK, docs, and direct support.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_16px_64px_oklch(0_0_0/0.5)]">
            <AnimatePresence mode="wait">
              {result?.success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-chart-1/15 border border-chart-1/25 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      You&apos;re on the list
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll reach out when your early access is ready.
                      Expect to hear from us soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full name{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Alex Chen"
                        required
                        disabled={isPending}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Work email{" "}
                        <span className="text-red-400">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="alex@company.com"
                        required
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company{" "}
                      <span className="text-muted-foreground/50 text-xs font-normal">
                        (optional)
                      </span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Corp"
                      disabled={isPending}
                    />
                  </div>

                  <AnimatePresence>
                    {result && !result.success && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/8 border border-red-500/20 text-sm text-red-400">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {result.error}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Joining…
                      </>
                    ) : (
                      <>
                        Join the Waitlist
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground/60">
                    No spam, no fluff. Early access notifications only.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
