import { Gavel, Users, TrendingUp, MessageSquare, Clock } from "lucide-react";
import StatCard from "../components/shared/StatCard";
import AuctionTable from "../components/auctions/AuctionTable";
import { mockStats, mockAuctions, mockBids } from "../lib/mock-data";
import { formatPrice } from "../lib/utils";

export default function Dashboard() {
  const recentAuctions = mockAuctions.slice(0, 5);
  const recentBids = mockBids.slice(0, 5);

  return (
    <div className="space-y-7">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="إجمالي المزادات"
          value={mockStats.totalAuctions}
          sub={`${mockStats.activeAuctions} نشط`}
          icon={Gavel}
          color="blue"
        />
        <StatCard
          label="المستخدمون"
          value={mockStats.totalUsers}
          sub={`${mockStats.activeUsers} مفعّل`}
          icon={Users}
          color="green"
        />
        <StatCard
          label="المزايدات الأخيرة"
          value={mockStats.totalBids}
          sub="آخر 24 ساعة"
          icon={TrendingUp}
          color="blue"
        />
        <StatCard
          label="رسائل غير مقروءة"
          value={mockStats.unreadMessages}
          sub={`من ${mockStats.totalMessages} رسالة`}
          icon={MessageSquare}
          color={mockStats.unreadMessages > 0 ? "warn" : "slate"}
        />
      </div>

      {/* Pending review alert */}
      {mockStats.pendingReview > 0 && (
        <div className="flex items-center gap-3 bg-warn-50 border border-amber-200 rounded-xl px-4 py-3">
          <Clock className="w-4 h-4 text-warn flex-shrink-0" />
          <p className="text-sm font-600 text-warn">
            يوجد <strong>{mockStats.pendingReview}</strong> مزاد بانتظار المراجعة والموافقة.
          </p>
        </div>
      )}

      {/* Recent auctions table */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-line flex items-center justify-between">
          <h2 className="text-base font-800 text-ink">أحدث المزادات</h2>
          <span className="text-xs text-muted font-600">آخر {recentAuctions.length} مزادات</span>
        </div>
        <AuctionTable auctions={recentAuctions} />
      </div>

      {/* Recent bids */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-line">
          <h2 className="text-base font-800 text-ink">آخر المزايدات</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-line text-right">
                <th className="pb-3 px-5 pt-3 text-xs font-700 text-muted">المزايد</th>
                <th className="pb-3 px-5 pt-3 text-xs font-700 text-muted">المزاد</th>
                <th className="pb-3 px-5 pt-3 text-xs font-700 text-muted">المبلغ</th>
                <th className="pb-3 px-5 pt-3 text-xs font-700 text-muted">الوقت</th>
              </tr>
            </thead>
            <tbody>
              {recentBids.map((b) => (
                <tr key={b.id} className="border-b border-line last:border-0 hover:bg-soft transition-colors">
                  <td className="py-3 px-5 font-600 text-ink-2">{b.userName}</td>
                  <td className="py-3 px-5 text-slate">{b.auctionTitle}</td>
                  <td className="py-3 px-5 font-700 text-brand-600" dir="ltr">{formatPrice(b.amount)}</td>
                  <td className="py-3 px-5 text-muted text-xs" dir="ltr">
                    {new Date(b.placedAt).toLocaleTimeString("ar-MR", { hour: "2-digit", minute: "2-digit" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
