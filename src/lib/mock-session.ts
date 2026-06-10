export interface AdminUser {
  name: string;
  email: string;
  role: string;
}

export const mockAdminUser: AdminUser = {
  name: "مدير MazadPay",
  email: "admin@mazadpay.com",
  role: "Super Admin",
};

// Mock session — always authenticated in Milestone B (no real auth)
export const mockSession = {
  isAuthenticated: true,
  user: mockAdminUser,
};
