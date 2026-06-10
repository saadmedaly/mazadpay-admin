import { CheckCircle, Mail } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import StatusBadge from "../components/shared/StatusBadge";
import { mockMessages, mockStats } from "../lib/mock-data";
import { formatDate } from "../lib/utils";

export default function Messages() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="الرسائل"
        subtitle={`${mockStats.unreadMessages} رسالة غير مقروءة من ${mockStats.totalMessages}`}
      />

      <div className="space-y-3">
        {mockMessages.map((msg) => (
          <div
            key={msg.id}
            className={`bg-white border rounded-xl p-5 shadow-xs transition-all ${
              msg.status === "unread"
                ? "border-brand-200 bg-brand-50/30"
                : "border-line"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-brand-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-700 text-ink text-sm">{msg.name}</span>
                    <span className="text-muted text-xs" dir="ltr">{msg.phone}</span>
                    <StatusBadge status={msg.status} />
                  </div>
                  <p className="text-sm text-slate leading-relaxed">{msg.message}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="text-xs text-muted" dir="ltr">{formatDate(msg.receivedAt)}</span>
                <button className="flex items-center gap-1.5 text-xs font-700 text-success hover:text-green-700 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5" />
                  تم المعالجة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
