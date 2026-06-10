import { Inbox } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message = "لا توجد بيانات للعرض" }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-muted">
      <Inbox className="w-10 h-10 mb-3 opacity-40" />
      <p className="text-sm font-semibold">{message}</p>
    </div>
  );
}
