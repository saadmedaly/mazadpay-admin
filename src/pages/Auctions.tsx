import { useState } from "react";
import { Plus, Search } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import AuctionTable from "../components/auctions/AuctionTable";
import { mockAuctions, type AuctionStatus } from "../lib/mock-data";

const statusOptions: { value: AuctionStatus | "all"; label: string }[] = [
  { value: "all",      label: "الكل" },
  { value: "active",   label: "نشط" },
  { value: "pending",  label: "قيد المراجعة" },
  { value: "ended",    label: "منتهي" },
  { value: "rejected", label: "مرفوض" },
];

export default function Auctions() {
  const [filter, setFilter] = useState<AuctionStatus | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = mockAuctions.filter((a) => {
    const matchStatus = filter === "all" || a.status === filter;
    const matchSearch = a.title.includes(search) || a.category.includes(search);
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-5">
      <PageHeader
        title="المزادات"
        subtitle={`${mockAuctions.length} مزاد إجمالاً`}
        action={
          <button className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-700 px-4 py-2 rounded-xl transition-colors shadow-blue">
            <Plus className="w-4 h-4" />
            مزاد جديد
          </button>
        }
      />

      {/* Filters */}
      <div className="bg-white border border-line rounded-xl p-4 flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن مزاد..."
            className="w-full pr-9 pl-4 py-2 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>

        {/* Status filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {statusOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
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
        <div className="px-5 py-4 border-b border-line">
          <span className="text-sm font-700 text-ink">
            {filtered.length} نتيجة
          </span>
        </div>
        <AuctionTable auctions={filtered} />
      </div>
    </div>
  );
}
