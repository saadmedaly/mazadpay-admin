# MazadPay Admin — Deployment Guide (Cloudflare Pages)

## نوع المشروع

React + Vite + TypeScript — SPA (Single Page Application)

---

## إعدادات Cloudflare Pages

| الإعداد | القيمة |
|---|---|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (root) |
| **Node version** | 18+ |
| **Production branch** | `main` |

---

## خطوات النشر

1. ادخل إلى [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. اضغط **Create a project → Connect to Git**
3. اختر مستودع `mazadpay-admin`
4. أدخل إعدادات البناء أعلاه
5. اضغط **Save and Deploy**

---

## Preview URL

بعد النشر سيكون الرابط من النوع:

```
https://mazadpay-admin.pages.dev
```

أو الاسم الذي تعطيه Cloudflare تلقائياً عند إنشاء المشروع.

---

## ملف _redirects

الملف `public/_redirects` يحتوي على:

```
/* /index.html 200
```

هذا ضروري لأن المشروع SPA يستخدم React Router — بدونه ستفشل routes مثل `/dashboard` عند الـ refresh مباشرة.

---

## ملف _headers

الملف `public/_headers` يضيف security headers على جميع الصفحات:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

> لم يُضف CSP (Content Security Policy) الآن لأنه يحتاج ضبطاً دقيقاً مع Vite assets — يمكن إضافته لاحقاً.

---

## ملاحظات مهمة

> **المشروع حالياً Mock Auth فقط — لا يوجد Auth حقيقي ولا API integration.**
>
> لهذا السبب **لا تربط `admin.mazadpay.com`** بهذا الـ deployment الآن.
> انتظر حتى اكتمال Milestone D (Auth حقيقي + API) قبل ربط الدومين الفعلي.

### خيارات حماية Preview (اختياري)

إذا أردت حماية الـ preview URL من الوصول العام قبل Auth:

- **Cloudflare Access** — يمكن تفعيله من Zero Trust dashboard لحماية `*.pages.dev`
- **Basic Auth عبر Cloudflare Workers** — خيار بسيط للـ preview

---

## متغيرات البيئة

لا يوجد `.env` مطلوب في هذه المرحلة — المشروع mock data فقط.

عند الانتقال إلى Milestone D (API حقيقي) ستُضاف:

```
VITE_API_BASE_URL=https://api.mazadpay.com
```

في Cloudflare Pages → Settings → Environment variables.
