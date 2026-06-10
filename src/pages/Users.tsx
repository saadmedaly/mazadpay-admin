import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Eye, Ban, ChevronRight, ChevronLeft } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import StatusBadge from "../components/shared/StatusBadge";
import EmptyState from "../components/shared/EmptyState";
import { mockUsers, type UserStatus } from "../lib/mock-data";
import { formatDate } from "../lib/utils";

const PAGE_SIZE = 5;

const statusOptions: { value: UserStatus | "all"; label: string }[] = [
  { value: "all",       label: "الكل" },
  { value: "active",    label: "نشط" },
  { value: "suspended", label: "موقوف" },
  { value: "pending",   label: "معلّق" },
];

export default function Users() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<UserStatus | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = mockUsers.filter((u) => {
    const matchStatus = filter === "all" || u.status === filter;
    const matchSearch = u.name.includes(search) || u.phone.includes(search);
    return matchStatus && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleFilterChange(value: UserStatus | "all") {
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
        title="المستخدمون"
        subtitle={`${mockUsers.length} مستخدم مسجّل`}
      />

      {/* Filters */}
      <div className="bg-white border border-line rounded-xl p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="ابحث باسم أو هاتف..."
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
            <span className="text-xs text-muted">صفحة {currentPage} من {totalPages}</span>
          )}
        </div>

        {paginated.length === 0 ? (
          <EmptyState
            title="لا توجد نتائج"
            description={search ? `لم يُعثر على مستخدمين يطابقون "${search}"` : "لا توجد مستخدمون في هذه الفئة"}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px] text-sm">
              <thead>
                <tr className="border-b border-line text-right">
                  <th className="pb-3 px-5 pt-1 text-xs font-700 text-muted">الاسم</th>
                  <th className="pb-3 px-5 pt-1 text-xs font-700 text-muted">الهاتف</th>
                  <th className="pb-3 px-5 pt-1 text-xs font-700 text-muted">المزايدات</th>
                  <th className="pb-3 px-5 pt-1 text-xs font-700 text-muted">الحالة</th>
                  <th className="pb-3 px-5 pt-1 text-xs font-700 text-muted">تاريخ التسجيل</th>
                  <th className="pb-3 px-5 pt-1 text-xs font-700 text-muted">إجراء</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b border-line last:border-0 hover:bg-soft transition-colors cursor-pointer"
                    onClick={() => navigate(`/users/${u.id}`)}
                  >
                    <td className="py-3 px-5 font-700 text-ink-2">{u.name}</td>
                    <td className="py-3 px-5 text-slate" dir="ltr">{u.phone}</td>
                    <td className="py-3 px-5 text-center font-800 text-ink" dir="ltr">{u.bidsCount}</td>
                    <td className="py-3 px-5"><StatusBadge status={u.status} /></td>
                    <td className="py-3 px-5 text-slate" dir="ltr">{formatDate(u.joinedAt)}</td>
                    <td className="py-3 px-5" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors"
                          title="عرض"
                          onClick={() => navigate(`/users/${u.id}`)}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 rounded-lg hover:bg-red-50 text-slate hover:text-red-500 transition-colors"
                          title="تعليق"
                          onClick={() => alert("هذه الميزة ستكون متاحة في Milestone C")}
                        >
                          <Ban className="w-4 h-4" />
                        </button>
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
