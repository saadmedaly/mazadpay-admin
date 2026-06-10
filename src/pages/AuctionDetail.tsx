import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowRight, Archive, Pencil, ToggleLeft, User } from "lucide-react";
import { mockAuctions, getBidsByAuction } from "../lib/mock-data";
import StatusBadge from "../components/shared/StatusBadge";
import { formatPrice, formatDate } from "../lib/utils";

export default function AuctionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const auction = mockAuctions.find((a) => a.id === id);

  if (!auction) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-lg font-700 text-ink">المزاد غير موجود</p>
        <button
          onClick={() => navigate("/auctions")}
          className="flex items-center gap-2 text-brand-500 hover:text-brand-600 text-sm font-700"
        >
          <ArrowRight className="w-4 h-4" />
          العودة إلى المزادات
        </button>
      </div>
    );
  }

  const bids = getBidsByAuction(auction.id);

  return (
    <div className="space-y-5">
      {/* Back + title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/auctions")}
          className="flex items-center gap-1.5 text-sm text-slate hover:text-ink transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          المزادات
        </button>
        <span className="text-muted">/</span>
        <span className="text-sm font-700 text-ink">{auction.title}</span>
      </div>

      {/* Main info card */}
      <div className="bg-white border border-line rounded-xl p-6 space-y-5">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-xl font-900 text-ink mb-1">{auction.title}</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate">{auction.category}</span>
              <span className="text-line">•</span>
              <StatusBadge status={auction.status} />
            </div>
          </div>

          {/* Action buttons — UI only */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-line text-sm font-700 text-slate hover:bg-soft transition-colors"
              onClick={() => alert("هذه الميزة ستكون متاحة في Milestone C")}
            >
              <ToggleLeft className="w-4 h-4" />
              تغيير الحالة
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-line text-sm font-700 text-slate hover:bg-soft transition-colors"
              onClick={() => alert("هذه الميزة ستكون متاحة في Milestone C")}
            >
              <Pencil className="w-4 h-4" />
              تعديل
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-amber-200 text-sm font-700 text-amber-700 hover:bg-amber-50 transition-colors"
              onClick={() => alert("هذه الميزة ستكون متاحة في Milestone C")}
            >
              <Archive className="w-4 h-4" />
              أرشفة
            </button>
          </div>
        </div>

        {/* Key stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">السعر الحالي</p>
            <p className="text-base font-900 text-brand-600" dir="ltr">{formatPrice(auction.currentPrice)}</p>
          </div>
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">سعر البداية</p>
            <p className="text-base font-900 text-ink" dir="ltr">{formatPrice(auction.startPrice ?? 0)}</p>
          </div>
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">عدد المزايدات</p>
            <p className="text-base font-900 text-ink">{auction.bidsCount}</p>
          </div>
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">ينتهي في</p>
            <p className="text-base font-900 text-ink" dir="ltr">{formatDate(auction.endsAt)}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-6 text-sm text-slate pt-1 border-t border-line">
          <span>تاريخ الإنشاء: <span className="font-700 text-ink" dir="ltr">{formatDate(auction.createdAt)}</span></span>
          <span>تاريخ الانتهاء: <span className="font-700 text-ink" dir="ltr">{formatDate(auction.endsAt)}</span></span>
        </div>

        {/* Description */}
        {auction.description && (
          <div className="pt-2 border-t border-line">
            <p className="text-xs font-700 text-muted mb-2">وصف المزاد</p>
            <p className="text-sm text-ink leading-relaxed">{auction.description}</p>
          </div>
        )}
      </div>

      {/* Owner info */}
      {auction.ownerName && (
        <div className="bg-white border border-line rounded-xl p-5">
          <p className="text-sm font-700 text-muted mb-3">صاحب المزاد</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center">
              <User className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <p className="text-sm font-700 text-ink">{auction.ownerName}</p>
              <p className="text-xs text-slate" dir="ltr">{auction.ownerPhone}</p>
            </div>
            {auction.ownerId && (
              <Link
                to={`/users/${auction.ownerId}`}
                className="mr-auto text-xs font-700 text-brand-500 hover:text-brand-600 transition-colors"
              >
                عرض الملف الشخصي ←
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Bids table */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-line">
          <h2 className="text-sm font-700 text-ink">
            آخر المزايدات
            <span className="text-muted font-400 mr-2">({bids.length})</span>
          </h2>
        </div>

        {bids.length === 0 ? (
          <div className="py-12 flex flex-col items-center gap-2 text-muted">
            <span className="text-2xl">📭</span>
            <p className="text-sm">لا توجد مزايدات بعد</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-line text-right">
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">المزايد</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">المبلغ</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">الوقت</th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid, i) => (
                  <tr key={bid.id} className={`border-b border-line last:border-0 hover:bg-soft transition-colors ${i === 0 ? "bg-brand-50/40" : ""}`}>
                    <td className="py-3 px-5 font-700 text-ink-2 flex items-center gap-2">
                      {i === 0 && <span className="text-xs bg-brand-500 text-white rounded-full px-1.5 py-0.5">الأعلى</span>}
                      {bid.userId ? (
                        <Link to={`/users/${bid.userId}`} className="hover:text-brand-500 transition-colors">
                          {bid.userName}
                        </Link>
                      ) : bid.userName}
                    </td>
                    <td className="py-3 px-5 font-800 text-brand-600" dir="ltr">{formatPrice(bid.amount)}</td>
                    <td className="py-3 px-5 text-slate" dir="ltr">
                      {new Date(bid.placedAt).toLocaleString("ar-MR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
