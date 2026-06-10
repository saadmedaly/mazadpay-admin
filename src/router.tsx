import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout      from "./components/layout/AdminLayout";
import ProtectedLayout  from "./components/layout/ProtectedLayout";
import Login            from "./pages/Login";
import Dashboard        from "./pages/Dashboard";
import Auctions         from "./pages/Auctions";
import AuctionDetail    from "./pages/AuctionDetail";
import Users            from "./pages/Users";
import UserDetail       from "./pages/UserDetail";
import Categories       from "./pages/Categories";
import Messages         from "./pages/Messages";
import Settings         from "./pages/Settings";
import NotFound         from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true,                  element: <Navigate to="/dashboard" replace /> },
          { path: "dashboard",            element: <Dashboard /> },
          { path: "auctions",             element: <Auctions /> },
          { path: "auctions/:id",         element: <AuctionDetail /> },
          { path: "users",                element: <Users /> },
          { path: "users/:id",            element: <UserDetail /> },
          { path: "categories",           element: <Categories /> },
          { path: "messages",             element: <Messages /> },
          { path: "settings",             element: <Settings /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
