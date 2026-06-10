import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Eye, Pencil, Trash2, ChevronRight, ChevronLeft } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import StatusBadge from "../components/shared/StatusBadge";
import EmptyState from "../components/shared/EmptyState";
import { mockAuctions, type AuctionStatus } from "../lib/mock-data";
import { formatPrice, formatDate } from "../lib/utils";
import { hasPermission } from "../lib/mock-session";

const PAGE_SIZE = 5;

const statusOptions: { value: AuctionStatus | "all"; label: string }[] = [
  { value: "all",      label: "الكل" },
  { value: "active",   label: "نشط" },
  { value: "pending",  label: "قيد المراجعة" },
  { value: "ended",    label: "منتهي" },
  { value: "rejected", label: "مرفوض" },
];

export default function Auctions() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<AuctionStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = mockAuctions.filter((a) => {
    const matchStatus = filter === "all" || a.status === filter;
    const matchSearch = a.title.includes(search) || a.category.includes(search);
    return matchStatus && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleFilterChange(value: AuctionStatus | "all") {
    setFilter(value);
    setPage(1);
  }

  function handleSearchChange(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title="المزادات"
        subtitle={`${mockAuctions.length} مزاد إجمالاً`}
        action={
          hasPermission("create_auction") ? (
            <button
              className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-700 px-4 py-2 rounded-xl transition-colors shadow-blue"
              onClick={() => alert("هذه الميزة ستكون متاحة في Milestone D")}
            >
              <Plus className="w-4 h-4" />
              مزاد جديد
            </button>
          ) : undefined
        }
      />

      {/* Filters */}
      <div className="bg-white border border-line rounded-xl p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="ابحث عن مزاد..."
            className="w-full pr-9 pl-4 py-2 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {statusOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => handleFilterChange(value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-700 transition-colors border ${
                filter === value
                  ? "bg-brand-500 text-white border-brand-500"
                  : "bg-soft text-slate border-line hover:border-brand-200 hover:text-brand-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-line rounded-xl shadow-xs overflow-hidden">
        <div className="px-5 py-4 border-b border-line flex items-center justify-between">
          <span className="text-sm font-700 text-ink">{filtered.length} نتيجة</span>
          {filtered.length > PAGE_SIZE && (
            <span className="text-xs text-muted">
              صفحة {currentPage} من {totalPages}
            </span>
          )}
        </div>

        {paginated.length === 0 ? (
          <EmptyState
            title="لا توجد نتائج"
            description={search ? `لم يُعثر على مزادات تطابق "${search}"` : "لا توجد مزادات في هذه الفئة"}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="border-b border-line text-right">
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">العنوان</th>
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">التصنيف</th>
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">السعر الحالي</th>
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">المزايدات</th>
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">الحالة</th>
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">ينتهي في</th>
                  <th className="pb-3 px-4 pt-1 text-xs font-700 text-muted">إجراء</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-line last:border-0 hover:bg-soft transition-colors cursor-pointer"
                    onClick={() => navigate(`/auctions/${a.id}`)}
                  >
                    <td className="py-3 px-4 font-700 text-ink-2">{a.title}</td>
                    <td className="py-3 px-4 text-slate">{a.category}</td>
                    <td className="py-3 px-4 font-700 text-brand-600" dir="ltr">{formatPrice(a.currentPrice)}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="font-800 text-ink" dir="ltr">{a.bidsCount}</span>
                    </td>
                    <td className="py-3 px-4"><StatusBadge status={a.status} /></td>
                    <td className="py-3 px-4 text-slate" dir="ltr">{formatDate(a.endsAt)}</td>
                    <td className="py-3 px-4" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors"
                          title="عرض"
                          onClick={() => navigate(`/auctions/${a.id}`)}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {hasPermission("edit_auction") && (
                          <button
                            className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors"
                            title="تعديل"
                            onClick={() => alert("هذه الميزة ستكون متاحة في Milestone D")}
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                        )}
                        {hasPermission("delete_auction") && (
                          <button
                            className="p-1.5 rounded-lg hover:bg-red-50 text-slate hover:text-red-500 transition-colors"
                            title="حذف"
                            onClick={() => alert("هذه الميزة ستكون متاحة في Milestone D")}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-5 py-4 border-t border-line flex items-center justify-between">
            <button
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-line text-xs font-700 text-slate hover:bg-soft disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
              السابق
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-xs font-700 transition-colors ${
                    p === currentPage
                      ? "bg-brand-500 text-white"
                      : "text-slate hover:bg-soft border border-line"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-line text-xs font-700 text-slate hover:bg-soft disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              التالي
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
