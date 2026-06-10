import { useNavigate } from "react-router-dom";
import { Gavel, Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Milestone A: mock login — سيُستبدل بـ Auth حقيقي في Milestone D
    navigate("/dashboard");
  }

  return (
    <div
      className="min-h-screen bg-soft flex items-center justify-center p-4 font-sans"
      dir="rtl"
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center shadow-blue mb-4">
            <Gavel className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-xl font-black text-ink">MazadPay Admin</h1>
          <p className="text-sm text-slate mt-1">تسجيل الدخول إلى لوحة التحكم</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-line rounded-2xl p-7 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-700 text-ink-2 mb-1.5">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted" />
                <input
                  type="email"
                  defaultValue="admin@mazadpay.com"
                  className="w-full pr-9 pl-4 py-2.5 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 transition-all"
                  placeholder="admin@mazadpay.com"
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
                  type="password"
                  defaultValue="••••••••"
                  className="w-full pr-9 pl-4 py-2.5 border border-line-2 rounded-xl text-sm bg-soft focus:outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/10 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-700 py-2.5 rounded-xl transition-colors shadow-blue text-sm mt-2"
            >
              دخول
            </button>
          </form>

          <p className="text-center text-xs text-muted mt-5">
            Milestone A — واجهة UI فقط، بدون Auth حقيقي
          </p>
        </div>
      </div>
    </div>
  );
}
