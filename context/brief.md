# Brief — IntelliversePress

## One-sentence purpose

Author and small-publisher site for David (Grant's brother), launching with his book *AI Fundamentals* and built to scale gracefully as the IntelliversePress imprint adds future titles.

## Project name

IntelliversePress

## URL / domain

https://intelliversepress.com — currently running on Joomla 6, migrating to Astro.

## Type of site

Author / small-publisher site. Probable structure: home, about (author + imprint), books (with per-book detail pages), blog/articles (optional), contact. Per-book detail pages are the main commercial surface.

## Stakeholders

- **Owner:** David Preston (author, Grant's brother)
- **Decision-maker:** David Preston
- **Builder:** Grant Preston
- **AI partner:** Claude

## Success criteria

1. Visitors can find and purchase *AI Fundamentals* easily across whichever formats David sells in (paperback, ebook, audio).
2. The site scales gracefully to additional books over time — adding a new title is a content task, not a redesign.
3. David can update his own bio, book blurbs, and add new titles without needing Grant in the loop for every small change (CMS layer in Phase 2).
4. Site loads fast (<1s on cold cache) and looks professional — supports David's credibility as an author of a serious technical book.
5. Existing SEO (inbound links, search rankings) is preserved through the migration.

## Constraints / non-goals

- No on-site e-commerce in Phase 1 — purchase links go out to Amazon, Apple Books, Kobo, etc.
- Don't break existing URLs from the Joomla site without 301 redirects in place.
- Stay within free hosting tier (Cloudflare Pages or Netlify) — no recurring infra costs unless explicitly needed.

## Timeline

- **Kickoff:** 2026-05-08
- **Target launch:** TBD — gated on David sending content and the wireframe being applied
- **Phase 2 (CMS):** after Phase 1 ships

## Key references

- Existing site: https://intelliversepress.com
- Existing book page: https://intelliversepress.com/books/ai-fundamentals
- Wireframe from David — to be added to `reference/wireframes/`

## Open questions (to ask David when content arrives)

1. Single-book site for now, or multi-book imprint from day one?
2. Where do existing assets (cover, headshots, bio) live and at what resolution?
3. Sales: Amazon-only, or multiple retailers?
4. Mailing list / newsletter — yes/no, which provider?
5. Blog or article posting — part of launch or later?
6. Existing brand assets (logo, palette, fonts) or do we develop these as part of the build?

## Deferred decisions (resolve before styling sprint)

- **Styling approach:** Tailwind CSS vs. vanilla CSS — decision pending.
