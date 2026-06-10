import { cn } from "../../lib/utils";
import type { AuctionStatus, UserStatus, MessageStatus } from "../../lib/mock-data";

type AnyStatus = AuctionStatus | UserStatus | MessageStatus;

const config: Record<string, { label: string; classes: string }> = {
  active:    { label: "نشط",        classes: "bg-success-50 text-success border-success-100" },
  pending:   { label: "قيد المراجعة", classes: "bg-warn-50 text-warn border-amber-200" },
  ended:     { label: "منتهي",      classes: "bg-soft text-slate border-line" },
  rejected:  { label: "مرفوض",     classes: "bg-red-50 text-red-600 border-red-200" },
  suspended: { label: "موقوف",      classes: "bg-red-50 text-red-600 border-red-200" },
  unread:    { label: "غير مقروء",  classes: "bg-brand-50 text-brand-600 border-brand-200" },
  read:      { label: "مقروء",      classes: "bg-soft text-slate border-line" },
  resolved:  { label: "تمت المعالجة", classes: "bg-success-50 text-success border-success-100" },
};

export default function StatusBadge({ status }: { status: AnyStatus }) {
  const c = config[status] ?? { label: status, classes: "bg-soft text-slate border-line" };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-700 border", c.classes)}>
      {c.label}
    </span>
  );
}
