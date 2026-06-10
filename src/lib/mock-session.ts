// ============================================================
//  MazadPay Admin — Mock Session (Milestone C)
//  Hardcoded mock only — no JWT, no cookies, no localStorage
// ============================================================

export type AdminRole = "super_admin" | "admin" | "moderator";

export type Permission =
  | "view_dashboard"
  | "view_auctions"
  | "create_auction"
  | "edit_auction"
  | "delete_auction"
  | "archive_auction"
  | "view_users"
  | "suspend_user"
  | "activate_user"
  | "view_categories"
  | "manage_categories"
  | "view_messages"
  | "view_settings"
  | "manage_settings";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  permissions: Permission[];
}

// Role → permission mapping
const rolePermissions: Record<AdminRole, Permission[]> = {
  super_admin: [
    "view_dashboard",
    "view_auctions",
    "create_auction",
    "edit_auction",
    "delete_auction",
    "archive_auction",
    "view_users",
    "suspend_user",
    "activate_user",
    "view_categories",
    "manage_categories",
    "view_messages",
    "view_settings",
    "manage_settings",
  ],
  admin: [
    "view_dashboard",
    "view_auctions",
    "create_auction",
    "edit_auction",
    "archive_auction",
    "view_users",
    "suspend_user",
    "activate_user",
    "view_categories",
    "view_messages",
    "view_settings",
  ],
  moderator: [
    "view_dashboard",
    "view_auctions",
    "view_users",
    "view_categories",
    "view_messages",
  ],
};

export const mockAdminUser: AdminUser = {
  id: "admin-001",
  name: "مدير MazadPay",
  email: "admin@mazadpay.com",
  role: "super_admin",
  permissions: rolePermissions["super_admin"],
};

export const mockSession = {
  isAuthenticated: true,
  user: mockAdminUser,
};

// Role labels in Arabic
export const roleLabels: Record<AdminRole, string> = {
  super_admin: "مدير عام",
  admin:       "مدير",
  moderator:   "مشرف",
};

// Check if current mock user has a given permission
export function hasPermission(permission: Permission): boolean {
  return mockSession.user.permissions.includes(permission);
}

// Check if current mock user has a given role
export function hasRole(role: AdminRole): boolean {
  return mockSession.user.role === role;
}
