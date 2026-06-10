import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowRight, ShieldOff, ShieldCheck } from "lucide-react";
import { mockUsers, getBidsByUser, getAuctionsByOwner } from "../lib/mock-data";
import StatusBadge from "../components/shared/StatusBadge";
import { formatPrice, formatDate } from "../lib/utils";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-lg font-700 text-ink">المستخدم غير موجود</p>
        <button
          onClick={() => navigate("/users")}
          className="flex items-center gap-2 text-brand-500 hover:text-brand-600 text-sm font-700"
        >
          <ArrowRight className="w-4 h-4" />
          العودة إلى المستخدمين
        </button>
      </div>
    );
  }

  const bids = getBidsByUser(user.id);
  const auctions = getAuctionsByOwner(user.id);

  return (
    <div className="space-y-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/users")}
          className="flex items-center gap-1.5 text-sm text-slate hover:text-ink transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
          المستخدمون
        </button>
        <span className="text-muted">/</span>
        <span className="text-sm font-700 text-ink">{user.name}</span>
      </div>

      {/* Profile card */}
      <div className="bg-white border border-line rounded-xl p-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          {/* Avatar + info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center text-2xl font-900 text-brand-600">
              {user.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-lg font-900 text-ink mb-0.5">{user.name}</h1>
              <div className="flex items-center gap-2">
                <StatusBadge status={user.status} />
                {user.email && (
                  <span className="text-xs text-muted" dir="ltr">{user.email}</span>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons — UI only */}
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-red-200 text-sm font-700 text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => alert("هذه الميزة ستكون متاحة في Milestone C")}
            >
              <ShieldOff className="w-4 h-4" />
              تعليق المستخدم
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-green-200 text-sm font-700 text-green-700 hover:bg-green-50 transition-colors"
              onClick={() => alert("هذه الميزة ستكون متاحة في Milestone C")}
            >
              <ShieldCheck className="w-4 h-4" />
              تفعيل المستخدم
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">رقم الهاتف</p>
            <p className="text-sm font-800 text-ink" dir="ltr">{user.phone}</p>
          </div>
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">تاريخ التسجيل</p>
            <p className="text-sm font-800 text-ink" dir="ltr">{formatDate(user.joinedAt)}</p>
          </div>
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">عدد المزايدات</p>
            <p className="text-base font-900 text-brand-600">{user.bidsCount}</p>
          </div>
          <div className="bg-soft rounded-xl p-4">
            <p className="text-xs text-muted mb-1">المزادات المنشورة</p>
            <p className="text-base font-900 text-ink">{user.auctionsCount ?? auctions.length}</p>
          </div>
        </div>
      </div>

      {/* User's auctions */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-line">
          <h2 className="text-sm font-700 text-ink">
            مزادات المستخدم
            <span className="text-muted font-400 mr-2">({auctions.length})</span>
          </h2>
        </div>
        {auctions.length === 0 ? (
          <div className="py-12 flex flex-col items-center gap-2 text-muted">
            <span className="text-2xl">📭</span>
            <p className="text-sm">لا توجد مزادات منشورة</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-line text-right">
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">العنوان</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">التصنيف</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">السعر</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">الحالة</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">ينتهي في</th>
                </tr>
              </thead>
              <tbody>
                {auctions.map((a) => (
                  <tr key={a.id} className="border-b border-line last:border-0 hover:bg-soft transition-colors">
                    <td className="py-3 px-5">
                      <Link to={`/auctions/${a.id}`} className="font-700 text-ink-2 hover:text-brand-500 transition-colors">
                        {a.title}
                      </Link>
                    </td>
                    <td className="py-3 px-5 text-slate">{a.category}</td>
                    <td className="py-3 px-5 font-800 text-brand-600" dir="ltr">{formatPrice(a.currentPrice)}</td>
                    <td className="py-3 px-5"><StatusBadge status={a.status} /></td>
                    <td className="py-3 px-5 text-slate" dir="ltr">{formatDate(a.endsAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* User's bids */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-line">
          <h2 className="text-sm font-700 text-ink">
            آخر مزايدات المستخدم
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
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">المزاد</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">المبلغ</th>
                  <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">الوقت</th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid) => (
                  <tr key={bid.id} className="border-b border-line last:border-0 hover:bg-soft transition-colors">
                    <td className="py-3 px-5">
                      {bid.auctionId ? (
                        <Link to={`/auctions/${bid.auctionId}`} className="font-700 text-ink-2 hover:text-brand-500 transition-colors">
                          {bid.auctionTitle}
                        </Link>
                      ) : (
                        <span className="font-700 text-ink-2">{bid.auctionTitle}</span>
                      )}
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
