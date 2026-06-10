import { Plus, Pencil, Trash2 } from "lucide-react";
import PageHeader from "../components/shared/PageHeader";
import { mockCategories } from "../lib/mock-data";

export default function Categories() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="التصنيفات"
        subtitle={`${mockCategories.length} تصنيف`}
        action={
          <button className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-700 px-4 py-2 rounded-xl transition-colors shadow-blue">
            <Plus className="w-4 h-4" />
            تصنيف جديد
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockCategories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white border border-line rounded-xl p-5 shadow-xs flex items-center justify-between hover:border-brand-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl flex-shrink-0">
                {cat.icon}
              </div>
              <div>
                <div className="font-800 text-ink">{cat.name}</div>
                <div className="text-xs text-muted font-600 mt-0.5" dir="ltr">
                  {cat.auctionsCount}+ مزاد
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg hover:bg-brand-50 text-slate hover:text-brand-500 transition-colors" title="تعديل">
                <Pencil className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-red-50 text-slate hover:text-red-500 transition-colors" title="حذف">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
