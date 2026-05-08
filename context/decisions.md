# Decisions Log — IntelliversePress

> Append-only log. Newest at the top.

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
