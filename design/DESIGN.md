---
version: alpha
name: IntelliversePress
description: >
  A design system for IntelliversePress — an author/small-publisher imprint
  whose inaugural title is "AI Fundamentals" by David Preston. The system
  marries editorial-press authority (high-contrast serif headlines, warm parchment
  canvas, careful reading typography) with a quiet signal of intelligence and
  depth (a confident indigo-blue accent, deep navy ink, a cosmos-dark hero
  surface). All fonts are open-source Google Fonts. No proprietary faces required.
  The primary commercial surface is the per-book detail page; navigation and
  purchase-link components are first-class citizens.

colors:
  # ── Primary accent ──────────────────────────────────────────────────────────
  primary: "#2d6be4"          # Confident tech-blue — CTAs, links, active states
  primary-deep: "#1e4db8"     # Pressed / hover state for primary
  on-primary: "#ffffff"

  # ── Brand depth ─────────────────────────────────────────────────────────────
  cosmos: "#0d1b2a"           # Very deep navy — hero bands, footer, dramatic sections
  cosmos-mid: "#1a2f45"       # Lighter navy surface inside cosmos bands
  on-cosmos: "#e8edf2"        # Off-white text on cosmos surfaces
  on-cosmos-muted: "#7a9ab5"  # Muted text on cosmos surfaces (metadata, captions)

  # ── Canvas surfaces ─────────────────────────────────────────────────────────
  canvas: "#faf9f6"           # Warm off-white — the primary page background (quality paper feel)
  canvas-soft: "#f0ede6"      # Slightly deeper warm tint — alternating sections, card fills
  canvas-white: "#ffffff"     # Pure white — used only for card elevations over canvas

  # ── Text ────────────────────────────────────────────────────────────────────
  ink: "#0d1b2a"              # Same as cosmos — the primary text color on canvas
  ink-mid: "#3a4e60"          # Secondary body text
  ink-soft: "#6b7f8f"         # Metadata, captions, supporting text

  # ── Accent ──────────────────────────────────────────────────────────────────
  gold: "#c8881a"             # Warm amber-gold — "New," "Featured," award badges, flourishes
  gold-soft: "#fdf3e0"        # Gold tint surface for highlighted callouts

  # ── Structure ───────────────────────────────────────────────────────────────
  hairline: "#ddd9d1"         # Warm-gray divider — section separators, card borders
  hairline-strong: "#bfb9ae"  # Stronger divider for high-contrast moments

  # ── Semantic ────────────────────────────────────────────────────────────────
  success: "#1d7a4a"
  error: "#c0392b"

typography:
  # ── Display (Playfair Display — high-contrast didone serif) ─────────────────
  display-hero:
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
    fontSize: 56px
    fontWeight: 400
    lineHeight: 62px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
    fontSize: 40px
    fontWeight: 400
    lineHeight: 46px
    letterSpacing: -0.4px
  display-md:
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
    fontSize: 28px
    fontWeight: 400
    lineHeight: 34px
    letterSpacing: -0.2px
  display-sm:
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
    fontSize: 22px
    fontWeight: 400
    lineHeight: 28px
  display-sm-bold:
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
    fontSize: 22px
    fontWeight: 700
    lineHeight: 28px

  # ── Body serif (Lora — warm humanist serif for reading) ─────────────────────
  body-serif-lg:
    fontFamily: '"Lora", Georgia, serif'
    fontSize: 19px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: 0.1px
  body-serif-md:
    fontFamily: '"Lora", Georgia, serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0.08px
  body-serif-sm:
    fontFamily: '"Lora", Georgia, serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px

  # ── UI sans (Inter — clean humanist sans for navigation and metadata) ────────
  body-md:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-sm:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.1px
  body-sm-strong:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.1px
  eyebrow:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 11px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 1.2px
    textTransform: uppercase
  caption:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  button-md:
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.1px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 48px
  5xl: 64px
  6xl: 96px

components:
  # ── Navigation ───────────────────────────────────────────────────────────────
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    borderBottom: "1px solid {colors.hairline}"
    padding: "{spacing.lg} {spacing.3xl}"
  nav-link:
    textColor: "{colors.ink-mid}"
    hoverColor: "{colors.ink}"
    activeColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
  nav-bar-cosmos:
    backgroundColor: "{colors.cosmos}"
    textColor: "{colors.on-cosmos}"
    typography: "{typography.body-sm-strong}"
    padding: "{spacing.lg} {spacing.3xl}"

  # ── Buttons ──────────────────────────────────────────────────────────────────
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    hoverBackground: "{colors.primary-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    hoverBackground: "{colors.canvas-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
  button-outline-cosmos:
    backgroundColor: "transparent"
    textColor: "{colors.on-cosmos}"
    borderColor: "{colors.on-cosmos-muted}"
    hoverBackground: "{colors.cosmos-mid}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.2xl}"
  retailer-button:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    hoverBorderColor: "{colors.primary}"
    hoverTextColor: "{colors.primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
    description: "Outbound purchase link to a specific retailer (Amazon, Apple Books, Kobo, etc.). Displays retailer name + format (Paperback / eBook / Audio)."

  # ── Hero surfaces ─────────────────────────────────────────────────────────────
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-hero}"
    padding: "{spacing.6xl} {spacing.3xl}"
    description: "Light-mode hero. Book cover floats right, headline + tagline left."
  hero-band-cosmos:
    backgroundColor: "{colors.cosmos}"
    textColor: "{colors.on-cosmos}"
    typography: "{typography.display-hero}"
    padding: "{spacing.6xl} {spacing.3xl}"
    description: "Dark cosmos hero variant. Full-bleed deep navy with star-field or gradient texture optional. Headline in on-cosmos, primary CTA button-primary."

  # ── Book components ────────────────────────────────────────────────────────────
  book-card:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.2xl}"
    description: "Standard book listing card. Displays: cover thumbnail (left), title in display-sm, author in eyebrow, short blurb in body-serif-md, format badges, and a button-primary Buy CTA."
  book-card-featured:
    backgroundColor: "{colors.cosmos}"
    textColor: "{colors.on-cosmos}"
    rounded: "{rounded.md}"
    padding: "{spacing.4xl}"
    description: "Large feature book card for a hero book detail section. Cover art is large (portrait, ~300px wide), headline in display-lg, description in body-serif-lg. All retailer-buttons displayed in a flex row below."
  book-cover-frame:
    backgroundColor: "{colors.canvas-soft}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    description: "Constraining frame for book cover images. Preserves 2:3 portrait aspect ratio. Adds a subtle hairline border and soft shadow."
  format-badge:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink-mid}"
    borderColor: "{colors.hairline}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    description: "Pill badge indicating format: PAPERBACK / EBOOK / AUDIO. Inline, sits above or beside the retailer buttons."
  featured-badge:
    backgroundColor: "{colors.gold-soft}"
    textColor: "{colors.gold}"
    borderColor: "{colors.gold}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    description: "NEW or FEATURED badge. Gold palette. Used on cover frames or card eyebrow rows."

  # ── Author components ─────────────────────────────────────────────────────────
  author-bio:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.4xl}"
    description: "Author profile block. Photo (circular, 120px) left-aligned or above on mobile. Name in display-sm, role/credentials in eyebrow, bio text in body-serif-md. Optional social links."
  author-byline:
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-sm}"
    description: "Compact byline — 'By David Preston' — used inside book cards and page headers."

  # ── Chapter / excerpt ─────────────────────────────────────────────────────────
  chapter-teaser:
    backgroundColor: "{colors.canvas-soft}"
    borderLeft: "3px solid {colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.body-serif-md}"
    padding: "{spacing.3xl}"
    rounded: "{rounded.sm}"
    description: "Indented excerpt block — pulls a short passage from the book. Left border in primary blue. Caption below in ink-soft attributes the chapter number and title."

  # ── Structure ──────────────────────────────────────────────────────────────────
  imprint-tagline:
    textColor: "{colors.ink-soft}"
    typography: "{typography.eyebrow}"
    description: "Small 'IntelliversePress' imprint mark. Used in page footer and book-card sub-lines. Never larger than eyebrow size."
  section-band:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    padding: "{spacing.6xl} {spacing.3xl}"
    description: "Alternating section band for page rhythm. Warm canvas-soft background separates content zones without heavy borders."
  hairline-divider:
    borderColor: "{colors.hairline}"
    description: "1px horizontal rule. Used between list rows, inside cards."
  footer:
    backgroundColor: "{colors.cosmos}"
    textColor: "{colors.on-cosmos}"
    mutedColor: "{colors.on-cosmos-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.5xl} {spacing.3xl}"
    description: "Full-width cosmos-dark footer. Columns: Imprint info + tagline / Book links / Contact. Copyright line in on-cosmos-muted."

  # ── Forms ─────────────────────────────────────────────────────────────────────
  text-input:
    backgroundColor: "{colors.canvas-white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline-strong}"
    focusBorderColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  newsletter-band:
    backgroundColor: "{colors.cosmos-mid}"
    textColor: "{colors.on-cosmos}"
    padding: "{spacing.5xl} {spacing.3xl}"
    description: "Optional mailing-list sign-up strip. Sits between content and footer. Headline in display-sm (on-cosmos), subline in body-serif-md (on-cosmos-muted), email input + button-primary side by side."

  # ── Example surfaces (illustrative) ─────────────────────────────────────────
  ex-pricing-tier:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-pricing-tier-featured:
    backgroundColor: "{colors.cosmos}"
    textColor: "{colors.on-cosmos}"
    rounded: "{rounded.md}"
    padding: "{spacing.3xl}"
  ex-modal-card:
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
  ex-toast:
    backgroundColor: "{colors.canvas-white}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    typography: "{typography.body-sm}"
  ex-empty-state-card:
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.5xl}"
    captionTypography: "{typography.body-serif-md}"

---

## Overview

IntelliversePress is a small author-publisher imprint. Its design voice sits at the intersection of two things it needs to be simultaneously: **a serious editorial publisher** and **a knowledgeable guide to a complex field**. The typographic system leans editorial — a high-contrast display serif anchors every headline, a warm humanist serif carries body and book descriptions, and a clean geometric sans handles all navigation and metadata. The color system gives the brand presence without noise: a warm parchment canvas for reading comfort, a deep navy that serves as both the primary ink color and the dramatic hero surface, and a single confident blue accent that signals intelligence and technology without screaming "startup."

The site's primary job is to sell books. Every page structure should route attention toward the book cover, the book description, and the purchase links — in that order.

**Key characteristics:**
- Two surfaces: warm parchment (`{colors.canvas}`) for most content, deep cosmos navy (`{colors.cosmos}`) for hero bands and the footer.
- One accent color: `{colors.primary}` blue. Used exclusively for CTAs, active navigation states, and the chapter-teaser left border. Never decorative.
- A gold accent (`{colors.gold}`) reserved for editorial signals only — NEW, FEATURED, award callouts. Never used for buttons.
- Square-ish corners — `{rounded.sm}` 4px on interactive elements, `{rounded.md}` 8px on cards. Never pill-shaped buttons (that reads as SaaS, not publishing).
- Serif for narrative, sans for structure. No exceptions.

---

## Colors

### Brand accent
- **Primary blue** (`{colors.primary}` — `#2d6be4`): The site's only action color. Every CTA button, every link, the chapter-teaser accent bar. Used with restraint so it never loses its signal value.
- **Primary deep** (`{colors.primary-deep}` — `#1e4db8`): Hover and pressed state for primary blue. Never appears standalone.

### Depth palette
- **Cosmos** (`{colors.cosmos}` — `#0d1b2a`): Very deep navy. The hero band, the footer, and any section where the brand needs to feel expansive and serious. Sits just far enough from pure black to feel warm.
- **Cosmos mid** (`{colors.cosmos-mid}` — `#1a2f45`): A lighter navy used for surface variation inside cosmos bands — newsletter strips, inset cards on dark backgrounds.
- **On-cosmos** (`{colors.on-cosmos}` — `#e8edf2`): The readable off-white for text on dark surfaces.
- **On-cosmos muted** (`{colors.on-cosmos-muted}` — `#7a9ab5`): Metadata and supporting text on dark surfaces.

### Canvas surfaces
- **Canvas** (`{colors.canvas}` — `#faf9f6`): The default page background. A warm off-white — deliberately not clinical white. Books live on warm paper; this canvas echoes that without being beige.
- **Canvas soft** (`{colors.canvas-soft}` — `#f0ede6`): Slightly deeper warm tint. Used for alternating section bands, card fills, and the author-bio block. Provides rhythm without borders.
- **Canvas white** (`{colors.canvas-white}` — `#ffffff`): Pure white for card elevations over the canvas (the book-card uses this to "lift" off the canvas background).

### Text
- **Ink** (`{colors.ink}` — `#0d1b2a`): Primary text color. Same deep navy as the cosmos surface — the palette is unified, not split between a "warm black" for text and a "cool navy" for surfaces.
- **Ink mid** (`{colors.ink-mid}` — `#3a4e60`): Secondary body text, sub-headings in smaller contexts.
- **Ink soft** (`{colors.ink-soft}` — `#6b7f8f`): Metadata, captions, publication dates, supporting lines.

### Editorial accent
- **Gold** (`{colors.gold}` — `#c8881a`): Warm amber. Signals distinction — used only for NEW/FEATURED/award badges and the occasional pull-quote flourish. Never on buttons; never on navigation.
- **Gold soft** (`{colors.gold-soft}` — `#fdf3e0`): The tinted surface background for gold-badged callout cards.

### Structure
- **Hairline** (`{colors.hairline}` — `#ddd9d1`): Warm gray. The default separator — between list rows, around card borders.
- **Hairline strong** (`{colors.hairline-strong}` — `#bfb9ae`): Higher contrast divider for moments where the hairline needs to compete with the canvas-soft background.

---

## Typography

### Font families
Three families, each with a single role:

1. **Playfair Display** — the display serif. A high-contrast didone (thick/thin stroke contrast) that reads as authoritative and editorial. Loaded at weights 400 and 700. Used exclusively for headlines and the book's title treatments.
2. **Lora** — the reading serif. A humanist serif optimized for screen reading at body sizes. Warm, slightly condensed compared to Georgia, comfortable at 16–19px. Used for book descriptions, author bios, and any longer text blocks.
3. **Inter** — the UI sans. Used for all navigation, button labels, eyebrow tags, metadata, captions. Loaded at weights 400 and 600.

Google Fonts import: `Playfair+Display:ital,wght@0,400;0,700;1,400 | Lora:ital,wght@0,400;1,400 | Inter:wght@400;600;700`

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display-hero}` | Playfair Display | 56px | 400 | 62px | -0.5px | Page hero headline, book title in featured card |
| `{typography.display-lg}` | Playfair Display | 40px | 400 | 46px | -0.4px | Section headlines, chapter titles |
| `{typography.display-md}` | Playfair Display | 28px | 400 | 34px | -0.2px | Sub-section headings, book card titles |
| `{typography.display-sm}` | Playfair Display | 22px | 400 | 28px | 0 | Author name in bio, inset callout headings |
| `{typography.display-sm-bold}` | Playfair Display | 22px | 700 | 28px | 0 | Pull quote attribution |
| `{typography.body-serif-lg}` | Lora | 19px | 400 | 30px | 0.1px | Lead description paragraph, book blurb hero |
| `{typography.body-serif-md}` | Lora | 16px | 400 | 26px | 0.08px | Default body, chapter teaser, author bio text |
| `{typography.body-serif-sm}` | Lora | 14px | 400 | 22px | 0 | Footnotes, fine-print body copy |
| `{typography.body-md}` | Inter | 16px | 400 | 24px | 0 | General UI body text, nav descriptions |
| `{typography.body-md-strong}` | Inter | 16px | 600 | 24px | 0 | Nav items at desktop, in-text emphasis |
| `{typography.body-sm}` | Inter | 14px | 400 | 20px | 0.1px | Secondary nav, metadata, form labels |
| `{typography.body-sm-strong}` | Inter | 14px | 600 | 20px | 0.1px | Active nav state, tag labels |
| `{typography.eyebrow}` | Inter | 11px | 700 | 16px | 1.2px | ALL CAPS category/format labels above headings |
| `{typography.caption}` | Inter | 12px | 400 | 16px | 0 | Image captions, fine print |
| `{typography.button-md}` | Inter | 15px | 600 | 20px | 0.1px | All button labels |

### Principles
- **Display serif for titles and section heads.** Playfair Display never appears below 22px.
- **Lora for everything the visitor reads.** Book descriptions, the author bio, chapter teasers — anything with more than two sentences gets Lora.
- **Inter for everything the visitor uses.** Navigation, buttons, badges, form labels, metadata.
- **Italic Playfair** is available and encouraged for the book title in running text (e.g. *AI Fundamentals* mid-paragraph).
- **Display weight 400** — Playfair's elegance comes from stroke contrast at regular weight, not from bolding.

---

## Layout

### Spacing system
Base unit: 4px.

`{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.2xl}` 24px · `{spacing.3xl}` 32px · `{spacing.4xl}` 48px · `{spacing.5xl}` 64px · `{spacing.6xl}` 96px

### Container
- Content max-width: 1200px, centred, with `{spacing.3xl}` horizontal padding on desktop.
- Prose/reading content (author bio, book description): max-width 720px to preserve comfortable line lengths (65–75 chars).
- Full-bleed bands (hero, footer, newsletter strip) extend edge-to-edge; content inside uses the standard container.

### Grid
- **Book detail page:** two-column at desktop — cover image (left, ~35%) + content (right, ~65%). Stacks to single column on mobile with cover above.
- **Books shelf:** 2-up book-cards on tablet, 3-up on desktop (future state), 1-up on mobile.
- **Author bio:** single wide column, max-width 720px.

### Responsive breakpoints

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 640px | Single column everywhere; hamburger nav; hero headline 36px; cover above title |
| Tablet | 640–1023px | Two-column book layout; 2-up book shelf |
| Desktop | ≥ 1024px | Full grid; inline nav; hero headline 56px |

### Section rhythm
Pages alternate between `{colors.canvas}` and `{colors.canvas-soft}` bands. The hero is cosmos dark. The footer is cosmos dark. The interior alternation keeps visual rhythm without introducing additional colors.

---

## Elevation & depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Most surfaces on canvas |
| 1 — Hairline | 1px solid `{colors.hairline}` | Card borders, list row dividers, input borders |
| 2 — Lifted | `box-shadow: 0 2px 8px rgba(13,27,42,0.08)` | book-card on canvas-white; hovered state |
| 3 — Cosmos | Cosmos-dark fill, no shadow needed | Hero bands, footer, newsletter strip |

No heavy drop-shadows. The depth system is color and thin borders, not blur-radius stacking.

---

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Hairline dividers |
| `{rounded.sm}` | 4px | Buttons, form inputs, format badges |
| `{rounded.md}` | 8px | book-card, author-bio, chapter-teaser, modals |
| `{rounded.lg}` | 12px | Modal overlay cards |
| `{rounded.full}` | 9999px | Author avatar crops; social icon buttons |

---

## Components

### Navigation
**`nav-bar`** — the top navigation, light by default.
- Background `{colors.canvas}`, 1px solid `{colors.hairline}` bottom border, padding `{spacing.lg} {spacing.3xl}`.
- Layout: logo/imprint mark left, nav links centre-right, optional CTA ("Get the Book") far right as `button-primary`.

**`nav-bar-cosmos`** — dark variant for pages with a cosmos hero (the hero bleeds into the nav area).
- Background `{colors.cosmos}`, no border. Nav links in `{colors.on-cosmos}`.

### Buttons
**`button-primary`** — the blue buy/action CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, `{rounded.sm}` 4px corners, padding `{spacing.md} {spacing.2xl}`.

**`button-outline`** — secondary action on light backgrounds.
- Transparent background, `{colors.ink}` 1px border, ink text.

**`button-outline-cosmos`** — secondary action on dark (cosmos) backgrounds.
- Transparent background, `{colors.on-cosmos-muted}` border, `{colors.on-cosmos}` text.

**`retailer-button`** — the per-store purchase link.
- White fill, `{colors.hairline}` border, ink text, `{rounded.sm}` corners. On hover: border brightens to `{colors.primary}`, text shifts to `{colors.primary}`.
- Label format: retailer name on top line (Inter 14/600), format on second line (eyebrow 11/700 — PAPERBACK · EBOOK · AUDIO).
- Multiple retailer-buttons arrange in a flex row with `{spacing.sm}` gap; wrap to next line gracefully.

### Book components
**`book-card`** — standard listing card.
- White fill with 1px `{colors.hairline}` border, `{rounded.md}` corners, light shadow (Level 2).
- Structure: cover thumbnail (portrait 2:3) | eyebrow (imprint + year) | title in `{typography.display-md}` | author-byline | 2-line blurb in `{typography.body-serif-sm}` | format-badges row | `button-primary` "View Book."

**`book-card-featured`** — the hero book display (used on the home page and the book detail page hero).
- Cosmos dark background, large cover (portrait, ~280–320px wide), title in `{typography.display-hero}` in `{colors.on-cosmos}`, description in `{typography.body-serif-lg}` in `{colors.on-cosmos}`, all retailer-buttons below in `button-outline-cosmos`.

**`format-badge`** — inline pill.
- `{colors.canvas-soft}` fill, `{colors.hairline}` border, ink-mid text in eyebrow style. Text: "PAPERBACK" / "EBOOK" / "AUDIO."

**`featured-badge`** — editorial distinction pill.
- `{colors.gold-soft}` fill, `{colors.gold}` border and text. Text: "NEW" / "FEATURED" / "BESTSELLER."

### Author components
**`author-bio`** — full author profile block.
- `{colors.canvas-soft}` background, `{rounded.md}`. Photo 120px circular (`{rounded.full}`), floated left on desktop. Name in `{typography.display-sm}`, role in `{typography.eyebrow}` (AUTHOR / EDUCATOR), bio in `{typography.body-serif-md}`.

**`author-byline`** — compact inline attribution.
- "By David Preston" in `{typography.body-sm}`, `{colors.ink-soft}`.

### Content components
**`chapter-teaser`** — book excerpt block.
- `{colors.canvas-soft}` background, 3px left border in `{colors.primary}`, text in `{typography.body-serif-md}`. Caption below attributes the excerpt to chapter name + number in `{typography.caption}` `{colors.ink-soft}`.

**`hero-band`** — light hero.
- `{colors.canvas}` background, headline in `{typography.display-hero}` in `{colors.ink}`, padding `{spacing.6xl} {spacing.3xl}`. Book cover image floats right.

**`hero-band-cosmos`** — dark hero.
- `{colors.cosmos}` background, headline in `{typography.display-hero}` in `{colors.on-cosmos}`. Use on home page for maximum impact. A very subtle radial gradient (`cosmos` to `cosmos-mid`, centred on the cover image) adds depth without being decorative.

**`section-band`** — alternating content zone.
- `{colors.canvas-soft}` background, padding `{spacing.6xl} {spacing.3xl}`. Separates major page sections.

**`newsletter-band`** — optional mailing list strip.
- `{colors.cosmos-mid}` background, headline in `{typography.display-md}` `{colors.on-cosmos}`, supporting line in `{typography.body-serif-md}` `{colors.on-cosmos-muted}`, email `text-input` + `button-primary` side by side.

**`imprint-tagline`** — brand identity mark.
- "IntelliversePress" in `{typography.eyebrow}` `{colors.ink-soft}`. Used in the footer, below book-card titles, and in the copyright line. Never larger than 11px uppercase.

### Footer
**`footer`** — cosmos-dark full-width footer.
- `{colors.cosmos}` background, `{spacing.5xl}` padding. Three columns: Imprint name + tagline / Quick links / Contact + social. Copyright in `{colors.on-cosmos-muted}` `{typography.caption}`.

---

## Do's and Don'ts

### Do
- Use `{colors.cosmos}` for the hero and footer. The dark/light alternation gives the site a strong visual structure that immediately reads as a publisher, not a blog.
- Set every book title in `{typography.display-hero}` or `{typography.display-lg}` (Playfair Display) — that serif is the brand's most recognisable element.
- Keep `{colors.primary}` blue reserved for actions (buttons, links). When it appears, visitors know it means "do something."
- Use Lora for book descriptions. It's a reading font — it makes the blurb feel worth reading rather than scanning.
- Let the book cover do the visual work. Don't surround it with decorative elements.
- Use `{rounded.sm}` 4px on all buttons — enough to soften the rectangle, not enough to look like a product app.

### Don't
- Don't use `{colors.gold}` on buttons or navigation. Gold is an editorial accent, not an action signal. If it appears on a CTA it loses meaning.
- Don't use Inter for book descriptions or the author bio. That's Lora's territory — switching to sans reads as UI, not content.
- Don't add gradients to the canvas zones. Gradients belong only on the cosmos hero (and even there, use them sparingly).
- Don't use `{rounded.full}` on buttons. Pill buttons read as mobile-app SaaS. This is a publisher.
- Don't stack multiple accent colors in the same view. One primary blue CTA per section is enough.
- Don't let the nav compete with the book. On book detail pages the cover image is the hero; navigation should be quiet.
