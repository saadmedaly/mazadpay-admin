import { useNavigate } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-soft flex flex-col items-center justify-center gap-6 p-6" dir="rtl">
      <div className="text-center space-y-3">
        <div className="text-7xl font-900 text-brand-500 leading-none">404</div>
        <h1 className="text-2xl font-900 text-ink">الصفحة غير موجودة</h1>
        <p className="text-sm text-slate max-w-xs mx-auto">
          الرابط الذي طلبته غير موجود أو ربما تم نقله إلى عنوان آخر.
        </p>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-700 px-5 py-2.5 rounded-xl transition-colors shadow-blue"
      >
        <LayoutDashboard className="w-4 h-4" />
        العودة إلى لوحة التحكم
      </button>
    </div>
  );
}
