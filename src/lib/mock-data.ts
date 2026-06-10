// ============================================================
//  MazadPay Admin — Mock Data (Milestone A)
//  بيانات تجريبية فقط — لا توجد بيانات حقيقية أو حساسة
// ============================================================

export type AuctionStatus = "active" | "pending" | "ended" | "rejected";
export type UserStatus    = "active" | "suspended" | "pending";
export type MessageStatus = "unread" | "read" | "resolved";

export interface Auction {
  id: string;
  title: string;
  category: string;
  currentPrice: number;
  bidsCount: number;
  status: AuctionStatus;
  endsAt: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  bidsCount: number;
  status: UserStatus;
  joinedAt: string;
}

export interface Category {
  id: string;
  name: string;
  auctionsCount: number;
  icon: string;
}

export interface Message {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: MessageStatus;
  receivedAt: string;
}

export interface Bid {
  id: string;
  auctionTitle: string;
  userName: string;
  amount: number;
  placedAt: string;
}

// ---------- Auctions ----------
export const mockAuctions: Auction[] = [
  { id: "a1", title: "سيارة رباعية الدفع", category: "سيارات", currentPrice: 320000, bidsCount: 24, status: "active",  endsAt: "2026-06-15", createdAt: "2026-06-01" },
  { id: "a2", title: "محل تجاري للإيجار", category: "عقارات", currentPrice: 45000,  bidsCount: 11, status: "active",  endsAt: "2026-06-20", createdAt: "2026-06-02" },
  { id: "a3", title: "حاسوب محمول",        category: "إلكترونيات", currentPrice: 28500, bidsCount: 37, status: "active",  endsAt: "2026-06-12", createdAt: "2026-06-03" },
  { id: "a4", title: "هاتف ذكي",           category: "هواتف",   currentPrice: 19200, bidsCount: 52, status: "active",  endsAt: "2026-06-11", createdAt: "2026-06-04" },
  { id: "a5", title: "شقة للبيع",          category: "عقارات", currentPrice: 1200000, bidsCount: 5, status: "pending", endsAt: "2026-06-25", createdAt: "2026-06-05" },
  { id: "a6", title: "دراجة نارية",        category: "سيارات", currentPrice: 85000,  bidsCount: 8, status: "pending", endsAt: "2026-06-22", createdAt: "2026-06-06" },
  { id: "a7", title: "تلفاز كبير",         category: "إلكترونيات", currentPrice: 15000, bidsCount: 19, status: "ended",   endsAt: "2026-06-08", createdAt: "2026-05-28" },
  { id: "a8", title: "كاميرا احترافية",   category: "إلكترونيات", currentPrice: 42000, bidsCount: 14, status: "rejected", endsAt: "2026-06-10", createdAt: "2026-06-01" },
];

// ---------- Users ----------
export const mockUsers: User[] = [
  { id: "u1", name: "أحمد ولد محمد",   phone: "+222 32 11 22 33", bidsCount: 14, status: "active",    joinedAt: "2026-04-10" },
  { id: "u2", name: "فاطمة بنت سيدي",  phone: "+222 32 44 55 66", bidsCount: 7,  status: "active",    joinedAt: "2026-04-15" },
  { id: "u3", name: "محمد ولد باب",    phone: "+222 32 77 88 99", bidsCount: 31, status: "active",    joinedAt: "2026-04-20" },
  { id: "u4", name: "مريم بنت أحمد",   phone: "+222 32 00 11 22", bidsCount: 2,  status: "suspended", joinedAt: "2026-05-01" },
  { id: "u5", name: "إبراهيم ولد سيد", phone: "+222 32 33 44 55", bidsCount: 0,  status: "pending",   joinedAt: "2026-06-08" },
  { id: "u6", name: "خديجة بنت محمد",  phone: "+222 32 66 77 88", bidsCount: 9,  status: "active",    joinedAt: "2026-05-12" },
];

// ---------- Categories ----------
export const mockCategories: Category[] = [
  { id: "c1", name: "سيارات",      auctionsCount: 40, icon: "🚗" },
  { id: "c2", name: "عقارات",      auctionsCount: 25, icon: "🏠" },
  { id: "c3", name: "إلكترونيات", auctionsCount: 60, icon: "💻" },
  { id: "c4", name: "هواتف",      auctionsCount: 48, icon: "📱" },
  { id: "c5", name: "معدات",      auctionsCount: 18, icon: "⚙️" },
  { id: "c6", name: "أخرى",       auctionsCount: 12, icon: "📦" },
];

// ---------- Messages ----------
export const mockMessages: Message[] = [
  { id: "m1", name: "أحمد ولد كار",   phone: "+222 32 10 20 30", message: "متى سيتوفر التطبيق على Google Play؟",           status: "unread",   receivedAt: "2026-06-09" },
  { id: "m2", name: "سلمى بنت محمود", phone: "+222 32 40 50 60", message: "كيف أشحن رصيدي في المحفظة؟",                   status: "read",     receivedAt: "2026-06-08" },
  { id: "m3", name: "يوسف ولد أعمر",  phone: "+222 32 70 80 90", message: "هل يمكنني إضافة مزاد عقاري بنفسي؟",           status: "resolved", receivedAt: "2026-06-07" },
  { id: "m4", name: "زينب بنت سالم",  phone: "+222 32 12 34 56", message: "واجهت مشكلة في عملية الدفع، أحتاج مساعدة.",    status: "unread",   receivedAt: "2026-06-09" },
  { id: "m5", name: "موسى ولد باب",   phone: "+222 32 98 76 54", message: "هل خدمة التوصيل متاحة خارج نواكشوط؟",          status: "read",     receivedAt: "2026-06-06" },
];

// ---------- Recent Bids ----------
export const mockBids: Bid[] = [
  { id: "b1", auctionTitle: "سيارة رباعية الدفع", userName: "محمد ولد باب",   amount: 320000, placedAt: "2026-06-09T10:30:00" },
  { id: "b2", auctionTitle: "هاتف ذكي",           userName: "أحمد ولد محمد", amount: 19200,  placedAt: "2026-06-09T09:15:00" },
  { id: "b3", auctionTitle: "حاسوب محمول",        userName: "خديجة بنت محمد", amount: 28500, placedAt: "2026-06-09T08:45:00" },
  { id: "b4", auctionTitle: "محل تجاري",          userName: "فاطمة بنت سيدي", amount: 45000, placedAt: "2026-06-08T17:20:00" },
  { id: "b5", auctionTitle: "سيارة رباعية الدفع", userName: "إبراهيم ولد سيد", amount: 315000, placedAt: "2026-06-08T16:00:00" },
];

// ---------- Stats ----------
export const mockStats = {
  totalAuctions:  mockAuctions.length,
  activeAuctions: mockAuctions.filter(a => a.status === "active").length,
  pendingReview:  mockAuctions.filter(a => a.status === "pending").length,
  totalUsers:     mockUsers.length,
  activeUsers:    mockUsers.filter(u => u.status === "active").length,
  totalBids:      mockBids.length,
  unreadMessages: mockMessages.filter(m => m.status === "unread").length,
  totalMessages:  mockMessages.length,
};
