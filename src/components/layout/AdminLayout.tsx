import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const pageTitles: Record<string, string> = {
  "/dashboard":  "لوحة التحكم",
  "/auctions":   "المزادات",
  "/users":      "المستخدمون",
  "/categories": "التصنيفات",
  "/messages":   "الرسائل",
  "/settings":   "الإعدادات",
};

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = pageTitles[location.pathname] ?? "لوحة التحكم";

  return (
    <div className="flex h-screen overflow-hidden bg-soft font-sans" dir="rtl">
      {/* Sidebar — fixed on right (RTL) */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area — pushed left by sidebar width on desktop */}
      <div className="flex flex-col flex-1 lg:mr-60 overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} pageTitle={title} />
        <main className="flex-1 overflow-y-auto p-5 lg:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
