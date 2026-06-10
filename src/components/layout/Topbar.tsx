import { Menu, Bell, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockStats } from "../../lib/mock-data";
import { mockSession, roleLabels } from "../../lib/mock-session";

interface TopbarProps {
  onMenuClick: () => void;
  pageTitle: string;
}

export default function Topbar({ onMenuClick, pageTitle }: TopbarProps) {
  const navigate = useNavigate();
  const admin = mockSession.user;

  function handleLogout() {
    // Mock logout — no storage/cookies to clear, just navigate to login
    navigate("/login");
  }

  return (
    <header className="h-16 bg-white border-b border-line flex items-center justify-between px-5 flex-shrink-0">
      {/* Right side */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden w-9 h-9 rounded-lg border border-line flex items-center justify-center text-slate hover:text-ink hover:bg-soft transition-colors"
          onClick={onMenuClick}
          aria-label="فتح القائمة"
        >
          <Menu className="w-4 h-4" />
        </button>
        <h2 className="text-base font-800 text-ink">{pageTitle}</h2>
      </div>

      {/* Left side */}
      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <button className="relative w-9 h-9 rounded-lg border border-line flex items-center justify-center text-slate hover:text-ink hover:bg-soft transition-colors">
          <Bell className="w-4 h-4" />
          {mockStats.unreadMessages > 0 && (
            <span className="absolute top-1 left-1 w-2 h-2 rounded-full bg-brand-500" />
          )}
        </button>

        {/* Admin info */}
        <div className="flex items-center gap-2 pr-2 border-r border-line mr-1">
          <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center">
            <User className="w-4 h-4 text-brand-500" />
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-xs font-700 text-ink leading-none">{admin.name}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs bg-brand-50 text-brand-600 border border-brand-100 px-1.5 py-0.5 rounded-md font-700 leading-none">
                {roleLabels[admin.role]}
              </span>
            </div>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-slate hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors"
          title="تسجيل الخروج"
          aria-label="تسجيل الخروج"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
