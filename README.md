# MazadPay Admin Dashboard

لوحة التحكم الإدارية لمنصة مزاد باي — **Milestone A: Static UI**

---

## الحالة الحالية

> **Milestone A — واجهة UI ثابتة بدون API**
>
> لا يوجد اتصال بقاعدة بيانات أو خادم. جميع البيانات تجريبية من `src/lib/mock-data.ts`.

---

## تشغيل المشروع

```bash
npm install
npm run dev
```

ثم افتح: `http://localhost:5173`

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
| `/auctions` | قائمة المزادات مع فلترة وبحث |
| `/users` | قائمة المستخدمين |
| `/categories` | التصنيفات |
| `/messages` | رسائل التواصل |
| `/settings` | الإعدادات (عرض فقط) |

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
│   ├── layout/        # AdminLayout, Sidebar, Topbar
│   ├── shared/        # StatCard, StatusBadge, PageHeader, EmptyState
│   └── auctions/      # AuctionTable
├── pages/             # Dashboard, Auctions, Users, Categories, Messages, Settings, Login
├── lib/
│   ├── mock-data.ts   # بيانات تجريبية
│   └── utils.ts       # دوال مساعدة
└── router.tsx         # تعريف الـ routes
```

---

## الخطوة القادمة — Milestone B

- إضافة صفحات تفاصيل المزاد والمستخدم
- Pagination محلي على الجداول
- Mock session لمحاكاة الـ Auth
- Protected routes

---

## ملاحظات

- لوحة التحكم مستقلة تماماً عن `plateforme-mazadpay` و`mazadpay-api`
- RTL Arabic-first من البداية (`dir="rtl"` في index.html والـ Layout)
- الألوان متناسقة مع هوية MazadPay: أزرق `#2563EB` / كحلي `#0B1B3B`
- لا يوجد API calls أو Auth حقيقي في هذه المرحلة
