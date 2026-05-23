import { GitFork, X } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20">
      <div className="max-w-5xl mx-auto px-5 md:px-7 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-chart-1 flex items-center justify-center shadow-[0_0_10px_oklch(0.8003_0.1821_151.7110/0.3)]">
              <div className="w-2 h-2 rounded-sm bg-card" />
            </div>
            <span className="font-semibold text-foreground text-sm tracking-tight">
              Status Widgets
            </span>
            <span className="text-muted-foreground/40 text-xs ml-1">·</span>
            <span className="text-xs text-muted-foreground/60">
              Build apps that adapt gracefully to outages.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dfordp/status-widgets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitFork className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://x.com/dfordp11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
              Twitter/X
            </a>
            <span className="text-muted-foreground/40 text-xs">·</span>
            <a
              href="https://www.dilpreetgrover.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-chart-1 transition-colors"
            >
              Made by Dilpreet Grover
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
