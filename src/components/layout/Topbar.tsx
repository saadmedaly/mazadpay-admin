import { Menu, Bell, User } from "lucide-react";
import { mockStats } from "../../lib/mock-data";

interface TopbarProps {
  onMenuClick: () => void;
  pageTitle: string;
}

export default function Topbar({ onMenuClick, pageTitle }: TopbarProps) {
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

        {/* Admin avatar */}
        <div className="flex items-center gap-2 pr-2 border-r border-line mr-1">
          <div className="w-8 h-8 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center">
            <User className="w-4 h-4 text-brand-500" />
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-xs font-700 text-ink leading-none">Super Admin</div>
            <div className="text-xs text-muted mt-0.5">admin@mazadpay.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
