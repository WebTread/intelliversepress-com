# Decisions Log — IntelliversePress

> Append-only log. Newest at the top.

---

## 2026-05-13 — Tailwind CSS for all styling

**Decision:** All styling uses Tailwind CSS. This applies to both the main marketing site and the Bonus Vault.

**Reasoning:** Grant's standard across all projects. Not a per-project decision.

**Made by:** Grant

---

## 2026-05-13 — Bonus Vault confirmed as in-scope for Phase 1

**Decision:** The Bonus Vault (`/vault/`) is part of the Phase 1 build, not a Phase 2 addition. David has provided full copy and structure brief.

**Reasoning:** The QR codes in the physical book already link to vault URLs. If the vault isn't live at launch, those QR codes go nowhere — making the vault a launch blocker, not a nice-to-have. The static marketing site and the vault ship together.

**Implications:**
- The site needs email capture, session/cookie auth for returning visitors, embedded media players, and PDF downloads — not purely static.
- Astro SSR mode or Cloudflare Workers will likely be needed for the session/gate logic.
- Provider decisions (email service, audio hosting, video hosting, analytics) are open and must be resolved before launch.

**Made by:** Grant + Claude (inferred from David's content documents)

---

## 2026-05-08 — Migrating from Joomla 6 to Astro

**Decision:** Rebuild the site on Astro, replacing the existing Joomla 6 implementation.

**Reasoning:** Astro's flat-file content model (markdown + frontmatter), strong AI training-data presence, and static-first deploy story fit how Grant wants to work going forward. Joomla works but the database-backed content model creates friction with AI-assisted edits, and the PHP runtime adds hosting cost/complexity for a site that doesn't need them.

**Alternatives considered:**
- Stay on Joomla 6 — rejected: no upside for migration, ongoing AI friction
- Grav (PHP flat-file CMS) — rejected: weaker training data than Astro, smaller ecosystem
- Next.js — rejected: heavier than needed for a content site

**Made by:** Grant + Claude

---

## 2026-05-08 — Hosting on Cloudflare Pages or Netlify (free tier)

**Decision:** Deploy to Cloudflare Pages or Netlify (final pick TBD before launch). Both have free tiers covering this site's needs comfortably.

**Reasoning:** Static output, edge-deployed, fast globally, free until traffic gets large. Either platform supports the workflow we want.

**Made by:** Grant + Claude

---

## 2026-05-08 — Phased build, no e-commerce in Phase 1

**Decision:** Phase 1 is the marketing site only — purchase links go to external retailers (Amazon, Apple Books, etc.). Self-hosted commerce is out of scope unless David specifically requests it.

**Reasoning:** Reduces complexity, gets to launch faster, and matches how most author sites work. Authors who eventually want a "buy direct" option (signed copies, bundles) can add Snipcart or similar later.

**Made by:** Grant + Claude
