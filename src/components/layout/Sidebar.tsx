import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Gavel, Users, Tag, MessageSquare, Settings, LogOut,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { mockSession, hasPermission, roleLabels } from "../../lib/mock-session";

interface NavItem {
  to: string;
  label: string;
  icon: React.ElementType;
  permission: Parameters<typeof hasPermission>[0];
}

const navItems: NavItem[] = [
  { to: "/dashboard",  label: "لوحة التحكم", icon: LayoutDashboard, permission: "view_dashboard"  },
  { to: "/auctions",   label: "المزادات",    icon: Gavel,            permission: "view_auctions"   },
  { to: "/users",      label: "المستخدمون", icon: Users,            permission: "view_users"      },
  { to: "/categories", label: "التصنيفات",  icon: Tag,              permission: "view_categories" },
  { to: "/messages",   label: "الرسائل",    icon: MessageSquare,    permission: "view_messages"   },
  { to: "/settings",   label: "الإعدادات",  icon: Settings,         permission: "view_settings"   },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const admin = mockSession.user;
  const visibleItems = navItems.filter((item) => hasPermission(item.permission));

  function handleLogout() {
    // Mock logout — no storage/cookies to clear, just navigate to login
    navigate("/login");
  }

  return (
    <>
      {/* Overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-ink/40 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed top-0 right-0 h-screen w-60 bg-ink flex flex-col z-30",
          "transition-transform duration-250",
          open ? "translate-x-0" : "translate-x-full lg:translate-x-0",
        )}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-white/10 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
            <Gavel className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-800 text-sm leading-none">MazadPay</div>
            <div className="text-white/50 text-xs font-600 mt-0.5">لوحة التحكم</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-hide">
          <ul className="space-y-1">
            {visibleItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-600 transition-colors",
                      isActive
                        ? "bg-brand-500 text-white"
                        : "text-white/65 hover:text-white hover:bg-white/8",
                    )
                  }
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Admin info + Logout */}
        <div className="px-3 pb-4 border-t border-white/10 pt-3 flex-shrink-0 space-y-1">
          {/* Mini profile */}
          <div className="px-3 py-2 rounded-xl bg-white/5 mb-1">
            <p className="text-xs font-700 text-white/90 leading-none truncate">{admin.name}</p>
            <p className="text-xs text-brand-300 mt-0.5 font-600">{roleLabels[admin.role]}</p>
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-600 text-white/55 hover:text-white hover:bg-white/8 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
