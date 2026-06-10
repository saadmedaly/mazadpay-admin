import { Search, Ban, Eye } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/shared/PageHeader";
import StatusBadge from "../components/shared/StatusBadge";
import { mockUsers } from "../lib/mock-data";
import { formatDate } from "../lib/utils";

export default function Users() {
  const [search, setSearch] = useState("");

  const filtered = mockUsers.filter(
    (u) => u.name.includes(search) || u.phone.includes(search)
  );

  return (
    <div className="space-y-5">
      <PageHeader
        title="المستخدمون"
        subtitle={`${mockUsers.length} مستخدم مسجّل`}
      />

      {/* Search */}
      <div className="bg-white border border-line rounded-xl p-4">
        <div className="relative max-w-sm">
          <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث باسم أو هاتف..."
            className="w-full pr-9 pl-4 py-2 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[580px] text-sm">
            <thead>
              <tr className="border-b border-line text-right">
                <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">الاسم</th>
                <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">الهاتف</th>
                <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">المزايدات</th>
                <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">الحالة</th>
                <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">تاريخ التسجيل</th>
                <th className="pb-3 px-5 pt-4 text-xs font-700 text-muted">إجراء</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-line last:border-0 hover:bg-soft transition-colors">
                  <td className="py-3 px-5 font-700 text-ink-2">{u.name}</td>
                  <td className="py-3 px-5 text-slate" dir="ltr">{u.phone}</td>
                  <td className="py-3 px-5 text-center font-800 text-ink" dir="ltr">{u.bidsCount}</td>
                  <td className="py-3 px-5"><StatusBadge status={u.status} /></td>
                  <td className="py-3 px-5 text-slate" dir="ltr">{formatDate(u.joinedAt)}</td>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors" title="عرض">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 text-slate hover:text-red-500 transition-colors" title="تعليق">
                        <Ban className="w-4 h-4" />
                      </button>
                    </div>
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
