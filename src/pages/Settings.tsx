import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import { Info, ShieldOff } from "lucide-react";
import { hasPermission } from "../lib/mock-session";

interface FieldProps {
  label: string;
  value: string;
  type?: string;
  dir?: "rtl" | "ltr";
}

function SettingField({ label, value, type = "text", dir = "rtl" }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-700 text-ink-2 mb-1.5">{label}</label>
      <input
        type={type}
        defaultValue={value}
        dir={dir}
        className="w-full px-4 py-2.5 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 transition-all"
      />
    </div>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const canManage = hasPermission("manage_settings");

  if (!hasPermission("view_settings")) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
          <ShieldOff className="w-7 h-7 text-red-400" />
        </div>
        <p className="text-lg font-700 text-ink">غير مصرح لك</p>
        <p className="text-sm text-muted">ليس لديك صلاحية الوصول إلى الإعدادات</p>
        <button
          onClick={() => navigate("/forbidden")}
          className="text-sm font-700 text-brand-500 hover:text-brand-600 transition-colors"
        >
          عرض صفحة الصلاحيات ←
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <PageHeader title="الإعدادات" subtitle="إعدادات المنصة العامة" />
      {!canManage && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <p className="text-sm text-amber-800 font-600">وضع القراءة فقط — لا تملك صلاحية تعديل الإعدادات</p>
        </div>
      )}

      {/* Notice */}
      <div className="flex items-start gap-3 bg-brand-50 border border-brand-200 rounded-xl px-4 py-3">
        <Info className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm font-600 text-brand-700">
          Milestone A — هذه الإعدادات للعرض فقط، الحفظ سيعمل في Milestone D بعد ربط الـ API.
        </p>
      </div>

      <div className="bg-white border border-line rounded-xl p-6 shadow-xs space-y-5 max-w-xl">
        <h2 className="text-base font-800 text-ink pb-3 border-b border-line">معلومات المنصة</h2>

        <SettingField label="اسم المنصة" value="مزاد باي MazadPay" />
        <SettingField label="رقم واتساب" value="+222 32 81 67 79" dir="ltr" type="tel" />
        <SettingField label="البريد الإلكتروني" value="admin@mazadpay.com" dir="ltr" type="email" />

        <div>
          <label className="block text-sm font-700 text-ink-2 mb-1.5">اللغة الافتراضية</label>
          <select className="w-full px-4 py-2.5 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 transition-colors">
            <option value="ar">العربية (الافتراضية)</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <button
          disabled
          className="flex items-center gap-2 bg-brand-500/50 text-white text-sm font-700 px-5 py-2.5 rounded-xl cursor-not-allowed"
        >
          {canManage
            ? "حفظ الإعدادات (متاح في Milestone D)"
            : "حفظ الإعدادات (قراءة فقط)"}
        </button>
      </div>
    </div>
  );
}
