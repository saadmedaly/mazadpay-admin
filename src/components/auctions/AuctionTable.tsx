import { Eye, Pencil } from "lucide-react";
import type { Auction } from "../../lib/mock-data";
import StatusBadge from "../shared/StatusBadge";
import { formatPrice, formatDate } from "../../lib/utils";

interface AuctionTableProps {
  auctions: Auction[];
}

export default function AuctionTable({ auctions }: AuctionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-sm">
        <thead>
          <tr className="border-b border-line text-right">
            <th className="pb-3 px-4 text-xs font-700 text-muted">العنوان</th>
            <th className="pb-3 px-4 text-xs font-700 text-muted">التصنيف</th>
            <th className="pb-3 px-4 text-xs font-700 text-muted">السعر الحالي</th>
            <th className="pb-3 px-4 text-xs font-700 text-muted">المزايدات</th>
            <th className="pb-3 px-4 text-xs font-700 text-muted">الحالة</th>
            <th className="pb-3 px-4 text-xs font-700 text-muted">ينتهي في</th>
            <th className="pb-3 px-4 text-xs font-700 text-muted">إجراء</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((a) => (
            <tr key={a.id} className="border-b border-line last:border-0 hover:bg-soft transition-colors">
              <td className="py-3 px-4 font-700 text-ink-2">{a.title}</td>
              <td className="py-3 px-4 text-slate">{a.category}</td>
              <td className="py-3 px-4 font-700 text-brand-600" dir="ltr">{formatPrice(a.currentPrice)}</td>
              <td className="py-3 px-4 text-center">
                <span className="font-800 text-ink" dir="ltr">{a.bidsCount}</span>
              </td>
              <td className="py-3 px-4"><StatusBadge status={a.status} /></td>
              <td className="py-3 px-4 text-slate" dir="ltr">{formatDate(a.endsAt)}</td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors" title="عرض">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors" title="تعديل">
                    <Pencil className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
