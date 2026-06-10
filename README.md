# MazadPay Admin Dashboard

لوحة التحكم الإدارية لمنصة مزاد باي — **Milestone B: Mock Data Dashboard**

---

## الحالة الحالية

> **Milestone B — لوحة تحكم كاملة بـ mock data**
>
> لا يوجد اتصال بقاعدة بيانات أو خادم. جميع البيانات تجريبية من `src/lib/mock-data.ts`.
> لا يوجد API calls — لا يوجد fetch — لا يوجد Auth حقيقي.

---

## تشغيل المشروع

```bash
npm install
npm run dev
```

ثم افتح: `http://localhost:5174` (أو المنفذ الذي يظهر في الطرفية)

---

## بناء المشروع

```bash
npm run build
```

ناتج البناء في مجلد `dist/`.

---

## الصفحات المتاحة

| الرابط | الصفحة |
|--------|--------|
| `/login` | تسجيل الدخول (UI فقط) |
| `/dashboard` | لوحة التحكم الرئيسية |
| `/auctions` | قائمة المزادات — بحث + فلترة + pagination |
| `/auctions/:id` | تفاصيل المزاد — وصف، مزايدات، صاحب المزاد |
| `/users` | قائمة المستخدمين — بحث + فلترة + pagination |
| `/users/:id` | ملف المستخدم — مزاداته، مزايداته |
| `/categories` | التصنيفات |
| `/messages` | رسائل التواصل |
| `/settings` | الإعدادات |
| `*` | صفحة 404 مع زر العودة |

---

## Milestone B — ما تم إضافته

- **AuctionDetail** `/auctions/:id` — عنوان، تصنيف، حالة، سعر، وصف، مزايدات، صاحب المزاد
- **UserDetail** `/users/:id` — ملف كامل، مزاداته، مزايداته
- **Local Search** — بحث محلي داخل mock data في Auctions و Users
- **Local Filter** — فلترة بالحالة في كلا الصفحتين
- **Local Pagination** — 5 عناصر في الصفحة مع أزرار التنقل
- **Mock Session** — `src/lib/mock-session.ts` — admin object بدون localStorage أو cookies
- **ProtectedLayout** — محاكاة حماية الـ routes (mock فقط)
- **404 Page** — صفحة جميلة لأي رابط غير معروف
- **Empty States** — رسائل واضحة عند عدم وجود نتائج

---

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v3
- React Router v6
- lucide-react (أيقونات)
- clsx + tailwind-merge

---

## هيكل المشروع

```
src/
├── components/
│   ├── layout/        # AdminLayout, Sidebar, Topbar, ProtectedLayout
│   ├── shared/        # StatCard, StatusBadge, PageHeader, EmptyState
│   └── auctions/      # AuctionTable
├── pages/
│   ├── Dashboard.tsx
│   ├── Auctions.tsx        # search + filter + pagination
│   ├── AuctionDetail.tsx   # NEW
│   ├── Users.tsx           # search + filter + pagination
│   ├── UserDetail.tsx      # NEW
│   ├── Categories.tsx
│   ├── Messages.tsx
│   ├── Settings.tsx
│   ├── Login.tsx
│   └── NotFound.tsx        # NEW
├── lib/
│   ├── mock-data.ts        # بيانات تجريبية موسّعة
│   ├── mock-session.ts     # NEW — mock admin session
│   └── utils.ts
└── router.tsx
```

---

## ملاحظات

- لوحة التحكم مستقلة تماماً عن `plateforme-mazadpay` و`mazadpay-api`
- RTL Arabic-first من البداية (`dir="rtl"` في index.html والـ Layout)
- الألوان متناسقة مع هوية MazadPay: أزرق `#2563EB` / كحلي `#0B1B3B`
- لا يوجد API calls أو Auth حقيقي — هذا Milestone B (UI + mock data)

---

---

## Milestone C — ما تم إضافته

- **Login UI** — صفحة دخول احترافية: بريد + كلمة مرور + إظهار/إخفاء + تذكّرني + demo credentials box + loading animation
- **Mock Session** — `src/lib/mock-session.ts` — role (`super_admin`) + permissions list + `hasPermission()` + `hasRole()` + `roleLabels`
- **Role-based UI** — أزرار إنشاء/تعديل/حذف المزاد تظهر حسب الصلاحية فقط
- **Protected Layout** — redirect إلى `/login` إذا `isAuthenticated = false`
- **Forbidden Page** `/forbidden` — 403 مع زر العودة
- **Settings Guard** — رسالة صلاحية غير كافية إذا لم يملك المستخدم `view_settings`
- **Topbar** — اسم المدير + role badge + زر logout ينقل إلى `/login`
- **Sidebar** — nav items مفلترة حسب الصلاحيات + mini profile + logout
- **Logout** — navigate إلى `/login` فقط — بدون localStorage أو cookies
- لا يوجد Auth حقيقي — لا JWT — لا cookies — لا localStorage — لا API

---

## الخطوة القادمة — Milestone D

- ربط API حقيقي (TanStack Query + Axios)
- Auth حقيقي مع JWT
- CRUD كامل للمزادات والمستخدمين
