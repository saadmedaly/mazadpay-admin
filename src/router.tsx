import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Login       from "./pages/Login";
import Dashboard   from "./pages/Dashboard";
import Auctions    from "./pages/Auctions";
import Users       from "./pages/Users";
import Categories  from "./pages/Categories";
import Messages    from "./pages/Messages";
import Settings    from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true,        element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard",  element: <Dashboard /> },
      { path: "auctions",   element: <Auctions /> },
      { path: "users",      element: <Users /> },
      { path: "categories", element: <Categories /> },
      { path: "messages",   element: <Messages /> },
      { path: "settings",   element: <Settings /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
]);

export default router;
