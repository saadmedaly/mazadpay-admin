import { Inbox } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  title?: string;
  description?: string;
}

export default function EmptyState({ message, title, description }: EmptyStateProps) {
  const heading = title ?? message ?? "لا توجد بيانات للعرض";
  const sub = description ?? null;

  return (
    <div className="flex flex-col items-center justify-center py-16 text-muted gap-1">
      <Inbox className="w-10 h-10 mb-2 opacity-40" />
      <p className="text-sm font-700 text-ink">{heading}</p>
      {sub && <p className="text-xs text-muted">{sub}</p>}
    </div>
  );
}
