import { Zap, Globe, RefreshCw, Layers, Activity } from "lucide-react";

const pillars = [
  { icon: Activity, label: "Realtime" },
  { icon: Globe, label: "Edge-native" },
  { icon: Layers, label: "Framework agnostic" },
  { icon: Zap, label: "Adaptive UI" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-card/30">
      <div className="max-w-5xl mx-auto px-5 md:px-7 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium hidden sm:block">
            Built for modern API-first applications
          </p>
          <div className="hidden sm:block w-px h-4 bg-border" />
          {pillars.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-chart-1" />
              <span className="text-sm text-muted-foreground font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
