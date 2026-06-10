// ============================================================
//  MazadPay Admin — Mock Data (Milestone B)
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
  description?: string;
  startPrice?: number;
  ownerId?: string;
  ownerName?: string;
  ownerPhone?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  bidsCount: number;
  auctionsCount?: number;
  status: UserStatus;
  joinedAt: string;
  email?: string;
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
  auctionId?: string;
  auctionTitle: string;
  userId?: string;
  userName: string;
  amount: number;
  placedAt: string;
}

// ---------- Auctions ----------
export const mockAuctions: Auction[] = [
  {
    id: "auc-001",
    title: "سيارة رباعية الدفع",
    category: "سيارات",
    currentPrice: 320000,
    startPrice: 280000,
    bidsCount: 24,
    status: "active",
    endsAt: "2026-06-15",
    createdAt: "2026-06-01",
    description: "سيارة تويوتا لاند كروزر موديل 2022، قطعت 45,000 كم، حالة ممتازة، بدون حوادث، كاملة الصيانة لدى الوكالة.",
    ownerId: "user-001",
    ownerName: "أحمد ولد محمد",
    ownerPhone: "+222 32 11 22 33",
  },
  {
    id: "auc-002",
    title: "محل تجاري للإيجار",
    category: "عقارات",
    currentPrice: 45000,
    startPrice: 35000,
    bidsCount: 11,
    status: "active",
    endsAt: "2026-06-20",
    createdAt: "2026-06-02",
    description: "محل تجاري في حي تفرغ زينه، مساحة 40 متر مربع، طابق أرضي، موقع مميز على الشارع الرئيسي.",
    ownerId: "user-002",
    ownerName: "فاطمة بنت سيدي",
    ownerPhone: "+222 32 44 55 66",
  },
  {
    id: "auc-003",
    title: "حاسوب محمول",
    category: "إلكترونيات",
    currentPrice: 28500,
    startPrice: 20000,
    bidsCount: 37,
    status: "active",
    endsAt: "2026-06-12",
    createdAt: "2026-06-03",
    description: "ماك بوك برو M3 2024، ذاكرة 16GB، تخزين 512GB SSD، شاشة 14 بوصة Retina، حالة جديدة مع الضمان.",
    ownerId: "user-003",
    ownerName: "محمد ولد باب",
    ownerPhone: "+222 32 77 88 99",
  },
  {
    id: "auc-004",
    title: "هاتف ذكي",
    category: "هواتف",
    currentPrice: 19200,
    startPrice: 15000,
    bidsCount: 52,
    status: "active",
    endsAt: "2026-06-11",
    createdAt: "2026-06-04",
    description: "آيفون 15 برو ماكس، 256GB، لون تيتانيوم طبيعي، معه الكرتون الأصلي وجميع الملحقات.",
    ownerId: "user-006",
    ownerName: "خديجة بنت محمد",
    ownerPhone: "+222 32 66 77 88",
  },
  {
    id: "auc-005",
    title: "شقة للبيع",
    category: "عقارات",
    currentPrice: 1200000,
    startPrice: 1000000,
    bidsCount: 5,
    status: "pending",
    endsAt: "2026-06-25",
    createdAt: "2026-06-05",
    description: "شقة في عمارة حديثة بحي الرياض، 3 غرف نوم، صالة، مطبخ، حمامان، مع موقف سيارة.",
    ownerId: "user-001",
    ownerName: "أحمد ولد محمد",
    ownerPhone: "+222 32 11 22 33",
  },
  {
    id: "auc-006",
    title: "دراجة نارية",
    category: "سيارات",
    currentPrice: 85000,
    startPrice: 70000,
    bidsCount: 8,
    status: "pending",
    endsAt: "2026-06-22",
    createdAt: "2026-06-06",
    description: "هوندا CBR600RR موديل 2023، 6000 كم فقط، حالة شبه جديدة، كاملة الملحقات.",
    ownerId: "user-002",
    ownerName: "فاطمة بنت سيدي",
    ownerPhone: "+222 32 44 55 66",
  },
  {
    id: "auc-007",
    title: "تلفاز كبير",
    category: "إلكترونيات",
    currentPrice: 15000,
    startPrice: 10000,
    bidsCount: 19,
    status: "ended",
    endsAt: "2026-06-08",
    createdAt: "2026-05-28",
    description: "سامسونج QLED 65 بوصة 4K، موديل 2023، مع جهاز تحكم ذكي وضمان سنة.",
    ownerId: "user-003",
    ownerName: "محمد ولد باب",
    ownerPhone: "+222 32 77 88 99",
  },
  {
    id: "auc-008",
    title: "كاميرا احترافية",
    category: "إلكترونيات",
    currentPrice: 42000,
    startPrice: 38000,
    bidsCount: 14,
    status: "rejected",
    endsAt: "2026-06-10",
    createdAt: "2026-06-01",
    description: "كانون EOS R5، 45 ميجابكسل، مع عدسة 24-105mm، مثالية للتصوير الاحترافي.",
    ownerId: "user-004",
    ownerName: "مريم بنت أحمد",
    ownerPhone: "+222 32 00 11 22",
  },
];

// ---------- Users ----------
export const mockUsers: User[] = [
  { id: "user-001", name: "أحمد ولد محمد",   phone: "+222 32 11 22 33", bidsCount: 14, auctionsCount: 2, status: "active",    joinedAt: "2026-04-10", email: "ahmed@example.com" },
  { id: "user-002", name: "فاطمة بنت سيدي",  phone: "+222 32 44 55 66", bidsCount: 7,  auctionsCount: 2, status: "active",    joinedAt: "2026-04-15", email: "fatima@example.com" },
  { id: "user-003", name: "محمد ولد باب",    phone: "+222 32 77 88 99", bidsCount: 31, auctionsCount: 2, status: "active",    joinedAt: "2026-04-20", email: "mbab@example.com" },
  { id: "user-004", name: "مريم بنت أحمد",   phone: "+222 32 00 11 22", bidsCount: 2,  auctionsCount: 1, status: "suspended", joinedAt: "2026-05-01", email: "mariem@example.com" },
  { id: "user-005", name: "إبراهيم ولد سيد", phone: "+222 32 33 44 55", bidsCount: 0,  auctionsCount: 0, status: "pending",   joinedAt: "2026-06-08", email: "ibrahim@example.com" },
  { id: "user-006", name: "خديجة بنت محمد",  phone: "+222 32 66 77 88", bidsCount: 9,  auctionsCount: 1, status: "active",    joinedAt: "2026-05-12", email: "khadija@example.com" },
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

// ---------- Bids (global recent) ----------
export const mockBids: Bid[] = [
  { id: "b1", auctionId: "auc-001", auctionTitle: "سيارة رباعية الدفع", userId: "user-003", userName: "محمد ولد باب",    amount: 320000, placedAt: "2026-06-09T10:30:00" },
  { id: "b2", auctionId: "auc-004", auctionTitle: "هاتف ذكي",           userId: "user-001", userName: "أحمد ولد محمد",  amount: 19200,  placedAt: "2026-06-09T09:15:00" },
  { id: "b3", auctionId: "auc-003", auctionTitle: "حاسوب محمول",        userId: "user-006", userName: "خديجة بنت محمد", amount: 28500,  placedAt: "2026-06-09T08:45:00" },
  { id: "b4", auctionId: "auc-002", auctionTitle: "محل تجاري",          userId: "user-002", userName: "فاطمة بنت سيدي", amount: 45000,  placedAt: "2026-06-08T17:20:00" },
  { id: "b5", auctionId: "auc-001", auctionTitle: "سيارة رباعية الدفع", userId: "user-005", userName: "إبراهيم ولد سيد", amount: 315000, placedAt: "2026-06-08T16:00:00" },
  { id: "b6", auctionId: "auc-004", auctionTitle: "هاتف ذكي",           userId: "user-003", userName: "محمد ولد باب",    amount: 18800,  placedAt: "2026-06-08T14:10:00" },
  { id: "b7", auctionId: "auc-003", auctionTitle: "حاسوب محمول",        userId: "user-001", userName: "أحمد ولد محمد",  amount: 27500,  placedAt: "2026-06-08T11:00:00" },
  { id: "b8", auctionId: "auc-008", auctionTitle: "كاميرا احترافية",    userId: "user-002", userName: "فاطمة بنت سيدي", amount: 41000,  placedAt: "2026-06-07T09:30:00" },
];

// Bids grouped by auction
export function getBidsByAuction(auctionId: string): Bid[] {
  return mockBids.filter((b) => b.auctionId === auctionId);
}

// Bids grouped by user
export function getBidsByUser(userId: string): Bid[] {
  return mockBids.filter((b) => b.userId === userId);
}

// Auctions by owner
export function getAuctionsByOwner(userId: string): Auction[] {
  return mockAuctions.filter((a) => a.ownerId === userId);
}

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
