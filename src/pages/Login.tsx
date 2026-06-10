import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gavel, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const DEMO_EMAIL    = "admin@mazadpay.com";
const DEMO_PASSWORD = "mazadpay2026";

export default function Login() {
  const navigate = useNavigate();

  const [email,       setEmail]       = useState(DEMO_EMAIL);
  const [password,    setPassword]    = useState(DEMO_PASSWORD);
  const [showPass,    setShowPass]    = useState(false);
  const [rememberMe,  setRememberMe]  = useState(false);
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("يرجى ملء جميع الحقول");
      return;
    }

    // Simulate brief loading — mock only, no API
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 600);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-soft flex items-center justify-center p-4 font-sans" dir="rtl">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center shadow-blue mb-4">
            <Gavel className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-900 text-ink">MazadPay</h1>
          <p className="text-sm text-slate mt-1 font-600">دخول لوحة التحكم الإدارية</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-line rounded-2xl shadow-sm overflow-hidden">

          {/* Card header */}
          <div className="px-7 pt-6 pb-5 border-b border-line">
            <h2 className="text-base font-800 text-ink">تسجيل الدخول</h2>
            <p className="text-xs text-muted mt-0.5">أدخل بيانات حسابك للمتابعة</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-7 py-5 space-y-4">

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-700 px-4 py-2.5 rounded-xl">
                {error}
              </div>
            )}

            {/* Email / Phone */}
            <div>
              <label className="block text-sm font-700 text-ink-2 mb-1.5">
                البريد الإلكتروني أو الهاتف
              </label>
              <div className="relative">
                <Mail className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mazadpay.com"
                  autoComplete="username"
                  className="w-full pr-9 pl-4 py-2.5 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-700 text-ink-2 mb-1.5">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full pr-9 pl-10 py-2.5 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-muted hover:text-ink transition-colors"
                  aria-label={showPass ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-line-2 text-brand-500 accent-brand-500 cursor-pointer"
              />
              <span className="text-sm text-slate font-600">تذكّرني</span>
              <span className="text-xs text-muted mr-auto">(UI فقط)</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-700 py-2.5 rounded-xl transition-colors shadow-blue text-sm flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جارٍ الدخول...
                </>
              ) : "دخول"}
            </button>
          </form>

          {/* Demo credentials box */}
          <div className="mx-7 mb-6 bg-brand-50 border border-brand-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
              <span className="text-xs font-800 text-brand-700">نسخة تجريبية — بيانات الدخول</span>
            </div>
            <div className="space-y-1 text-xs" dir="ltr">
              <div className="flex items-center gap-2">
                <span className="text-muted w-20 text-right" dir="rtl">البريد:</span>
                <code className="bg-white border border-brand-100 px-2 py-0.5 rounded-lg font-mono text-ink select-all">{DEMO_EMAIL}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted w-20 text-right" dir="rtl">كلمة المرور:</span>
                <code className="bg-white border border-brand-100 px-2 py-0.5 rounded-lg font-mono text-ink select-all">{DEMO_PASSWORD}</code>
              </div>
            </div>
            <p className="text-xs text-muted mt-2 text-center">لا يوجد Auth حقيقي — mock UI فقط</p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted mt-5">
          MazadPay Admin · Milestone C · لا يوجد API أو تخزين
        </p>
      </div>
    </div>
  );
}
