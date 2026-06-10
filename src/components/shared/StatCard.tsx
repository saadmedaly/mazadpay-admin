import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  icon: LucideIcon;
  color?: "blue" | "green" | "warn" | "slate";
}

const colorMap = {
  blue:  { bg: "bg-brand-50",   icon: "text-brand-500", border: "border-brand-200" },
  green: { bg: "bg-success-50", icon: "text-success",   border: "border-success-100" },
  warn:  { bg: "bg-warn-50",    icon: "text-warn",      border: "border-amber-200" },
  slate: { bg: "bg-soft",       icon: "text-slate",     border: "border-line" },
};

export default function StatCard({ label, value, sub, icon: Icon, color = "blue" }: StatCardProps) {
  const c = colorMap[color];
  return (
    <div className="bg-white border border-line rounded-xl p-5 shadow-xs flex items-start gap-4">
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border", c.bg, c.border)}>
        <Icon className={cn("w-5 h-5", c.icon)} />
      </div>
      <div className="min-w-0">
        <div className="text-sm text-muted font-semibold mb-1">{label}</div>
        <div className="text-2xl font-black text-ink leading-none" dir="ltr">{value}</div>
        {sub && <div className="text-xs text-muted font-medium mt-1">{sub}</div>}
      </div>
    </div>
  );
}
