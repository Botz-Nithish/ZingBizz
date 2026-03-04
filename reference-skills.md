# ZingBizz — Reference Skills

> Skills selected for building a **production-ready, animated, interactive, responsive, mobile-friendly Next.js website**.

---

## 🏗️ Framework & Architecture

| Skill | Path | Why |
|---|---|---|
| `nextjs-app-router-patterns` | `skills/nextjs-app-router-patterns` | Primary framework. Next.js 14+ App Router, Server Components, streaming & data fetching. |
| `nextjs-best-practices` | `skills/nextjs-best-practices` | Vercel Engineering routing rules, SSR/SSG, and performance — keeps the app fast and production-ready. |
| `react-nextjs-development` | `skills/react-nextjs-development` | Full setup: React 19 + Next.js 14+ + TypeScript + Tailwind CSS + modern frontend patterns. |

---

## 🎨 UI, Animation & Design

| Skill | Path | Why |
|---|---|---|
| `scroll-experience` | `skills/scroll-experience` | **Critical.** Parallax storytelling, scroll-driven animations, cinematic web experience (Apple-style). |
| `frontend-ui-dark-ts` | `skills/frontend-ui-dark-ts` | Glassmorphism + **Framer Motion animations** for dark-themed, highly interactive React UIs. |
| `frontend-design` | `skills/frontend-design` | Production-grade, distinctive UI with intentional aesthetics — avoids generic designs. |
| `tailwind-design-system` | `skills/tailwind-design-system` | Scalable design tokens + component libraries for consistent, responsive styling. |
| `3d-web-experience` | `skills/3d-web-experience` | Three.js / React Three Fiber — immersive 3D sections add premium "wow" factor. |

---

## 📱 Responsiveness & Mobile

| Skill | Path | Why |
|---|---|---|
| `mobile-design` | `skills/mobile-design` | Mobile-first doctrine: touch interaction, performance, platform conventions. |
| `react-patterns` | `skills/react-patterns` | Modern React hooks, composition, and TypeScript best practices for robust components. |

---

## ⚡ Performance & State Management

| Skill | Path | Why |
|---|---|---|
| `react-best-practices` | `skills/react-best-practices` | Vercel Engineering performance rules — prevents rendering pitfalls across the app. |
| `frontend-dev-guidelines` | `skills/frontend-dev-guidelines` | **Suspense-first data fetching + lazy loading** — governs `next/dynamic`, `React.lazy`, and code splitting patterns. |
| `react-state-management` | `skills/react-state-management` | Zustand / Jotai / React Query for managing interactive UI state (modals, tabs, menus). |
| `typescript-pro` | `skills/typescript-pro` | Strict TypeScript across the entire codebase = fewer production bugs + better DX. |

---

## 🧪 Quality & Testing

| Skill | Path | Why |
|---|---|---|
| `e2e-testing` | `skills/e2e-testing` | Playwright E2E tests — ensures all interactive elements and pages work across browsers. |
| `accessibility-compliance-accessibility-audit` | `skills/accessibility-compliance-accessibility-audit` | WCAG compliance for inclusive UX and better SEO ranking. |

---

## 🔥 Tech Stack Summary

```
Framework    →  Next.js 14+ (App Router)
Language     →  TypeScript
Styling      →  Tailwind CSS + design tokens
Animations   →  Framer Motion (scroll-experience + frontend-ui-dark-ts)
3D / Visual  →  Three.js via React Three Fiber (3d-web-experience)
State        →  Zustand (react-state-management)
Testing      →  Playwright (e2e-testing)
Mobile       →  Mobile-first responsive (mobile-design)
```

---

## 📌 Notes

- All animations should be **scroll-triggered** and use `Framer Motion` for smooth, GPU-accelerated transitions.  
- Use **Server Components** for static content and **Client Components** only where interactivity is needed.  
- Follow **Tailwind CSS design tokens** defined in `tailwind.config.ts` for consistency.  
- Every page must be fully responsive — test on 320px, 768px, 1024px, and 1440px viewports.
