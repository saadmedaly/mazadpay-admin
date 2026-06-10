import { Navigate, Outlet } from "react-router-dom";
import { mockSession } from "../../lib/mock-session";

export default function ProtectedLayout() {
  if (!mockSession.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
