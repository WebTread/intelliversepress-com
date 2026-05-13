# Vault Structure Brief

_Source: "Bonus Vault Layout & Structure Brief" — David / Intelliverse Press, January 2025_

---

## What the Bonus Vault is

A gated resource hub at `/vault/` where readers of *AI Fundamentals* access supplementary materials (audio companions, video overviews, PDFs) after providing their email address. Readers arrive primarily via QR codes printed in the physical book.

---

## Site map

```
/vault/                  ← Landing Page (pre-signup gate)
/vault/dashboard/        ← Dashboard (post-signup home)
/vault/intro/            ← Introduction page
/vault/chapter-1/        ← Chapter 1
/vault/chapter-2/        ← Chapter 2
...
/vault/chapter-13/       ← Chapter 13
```

**14 chapter pages total** (Introduction + Chapters 1–13)

---

## Page inventory

### Landing Page `/vault/` (pre-signup)
- Logo header
- Headline + subtitle
- Introduction / value proposition
- Email signup form (the gate)
- Privacy assurance text

### Dashboard `/vault/dashboard/` (post-signup home)
- Welcome / success message
- "How to Use This Vault" collapsible section (with callout graphic)
- **Full-book resources:** Complete Audio Companion + Complete Video Overview
- **Chapter grid** — visual navigation to all 14 chapters
- **Bonus downloads:** 100 AI Prompts Guide PDF (+ future items)
- Footer

### Chapter Pages `/vault/chapter-X/` (×14)
Each contains:
- Logo + "← Back to Dashboard" header
- Chapter title + number
- Brief orientation copy
- Audio Companion (embedded player)
- Video Overview (embedded player)
- ← Prev / Next → chapter navigation
- Footer
- Placeholder sections for future: Quick Reference Guide, Interactive Exercise

---

## User flows

### Path A — QR code from book (primary)
`Book QR code (e.g., Chapter 3)` → **Landing Page** (if new) → **Chapter 3 page**
- Returning visitors with cookie skip the gate and land directly on the chapter page

### Path B — Direct visit
`intelliversepress.com/vault` → **Landing Page** → **Dashboard**

### Path C — Returning visitor
Any vault URL → cookie/session check → skip gate → land on requested page

---

## Functional requirements

| Feature | Requirement | Notes |
|---|---|---|
| Email gate | Required for first access | Remember via cookie/session |
| Email integration | Connect to mailing list | Provider TBD — see open questions |
| Audio embed | Embedded player | Hosting TBD: self-hosted / SoundCloud / Spotify |
| Video embed | Embedded player | Hosting TBD: YouTube unlisted / Vimeo / self-hosted |
| PDF download | Direct download link | 100 Prompts Guide (more in future) |
| Chapter navigation | Prev/Next links | On each chapter page |
| Back to Dashboard | Persistent link | In chapter page header |
| Mobile responsive | **Critical** | Majority of traffic via QR scan on phone |
| Analytics | Track page visits | Which chapters get most traffic |
| Collapsible section | "How to Use" on Dashboard | Keeps page clean for returning visitors |

---

## Content inventory

| Content | Qty | Status |
|---|---|---|
| Landing page copy | 1 set | ✅ Complete (see `content/vault/landing-copy.md`) |
| Dashboard copy | 1 set | ✅ Complete (see `content/vault/landing-copy.md`) |
| Chapter page copy template | 1 | ✅ Complete (see `content/vault/landing-copy.md`) |
| Chapter titles | 14 | ⏳ David to provide |
| Full-book audio file | 1 | ⏳ In production |
| Chapter audio files | 14 | ⏳ In production |
| Full-book video file | 1 | ⏳ In production |
| Chapter video files | 14 | ⏳ In production |
| 100 Prompts PDF | 1 | ⏳ David to provide |
| Callout graphic ("Get the Most Out of This Chapter") | 1 image | ✅ Available |
| Intelliverse Press logo | 1 | ⏳ David to provide |

---

## Future expansion (not in initial build)

Build Dashboard and Chapter Page templates with hidden/placeholder sections for:
- Quick Reference Guides (per-chapter one-page PDFs)
- Interactive Exercises (per-chapter)
- Mind Maps
- Flashcards
- Additional curated links and templates

Recommendation: Design for expansion now so activating these is a content task, not a redesign.

---

## Open questions (resolve before dev starts)

1. **Email service provider** — Mailchimp, ConvertKit, Kit, or other?
2. **Audio hosting** — self-hosted on Cloudflare / SoundCloud / Spotify?
3. **Video hosting** — YouTube unlisted / Vimeo / self-hosted?
4. **Session/cookie approach** — simple localStorage token? or proper auth?
5. **Analytics** — Plausible, Fathom, Google Analytics, or Cloudflare built-in?
6. **Timeline and phasing** — MVP (landing + dashboard + 1 chapter) first, then full rollout?
7. **Support email address** — what address goes in the footer?
