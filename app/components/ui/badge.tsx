import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "warning"
  | "success"
  | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium leading-none",
        {
          "bg-chart-1/15 text-chart-1 border border-chart-1/25":
            variant === "default",
          "bg-muted text-muted-foreground border border-border":
            variant === "secondary",
          "bg-red-500/10 text-red-400 border border-red-500/25":
            variant === "destructive",
          "bg-yellow-500/10 text-yellow-400 border border-yellow-500/25":
            variant === "warning",
          "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25":
            variant === "success",
          "border border-border text-muted-foreground": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
