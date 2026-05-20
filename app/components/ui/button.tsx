import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none select-none",
          {
            "bg-chart-1 text-card hover:brightness-105 shadow-[0_0_20px_oklch(0.8003_0.1821_151.7110/0.2)]":
              variant === "default",
            "border border-border bg-transparent hover:bg-accent text-foreground":
              variant === "outline",
            "bg-transparent hover:bg-accent text-foreground": variant === "ghost",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "bg-destructive/20 text-red-400 border border-destructive/30 hover:bg-destructive/30":
              variant === "destructive",
          },
          {
            "text-xs px-3 h-7 gap-1.5": size === "sm",
            "text-sm px-4 h-9 gap-2": size === "md",
            "text-base px-6 h-12 gap-2": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
