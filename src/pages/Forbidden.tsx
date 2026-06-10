import { useNavigate } from "react-router-dom";
import { LayoutDashboard, ShieldOff } from "lucide-react";

export default function Forbidden() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-soft flex flex-col items-center justify-center gap-6 p-6" dir="rtl">
      <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
        <ShieldOff className="w-8 h-8 text-red-400" />
      </div>

      <div className="text-center space-y-2">
        <div className="text-5xl font-900 text-red-400 leading-none">403</div>
        <h1 className="text-xl font-900 text-ink">غير مصرح لك</h1>
        <p className="text-sm text-slate max-w-xs mx-auto">
          ليس لديك الصلاحية للوصول إلى هذه الصفحة. تواصل مع المدير العام للحصول على الإذن.
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
