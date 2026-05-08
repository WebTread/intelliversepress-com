# AGENTS.md — Website Project Template

You are working on a **website project** in Grant's workspace. This file gives you project-scoped instructions; the workspace-wide rules in `~/AI/AGENTS.md` still apply.

## Before you do anything

Read in this order:
1. `context/brief.md` — what is this site, who is it for, what does success look like?
2. `context/brand.md` — voice, visual direction, tone constraints
3. `context/audience.md` — who reads this, what do they care about
4. `context/decisions.md` — what's already been decided and why

If `brief.md` is empty or thin, **stop and ask Grant before proceeding.** Writing copy without context produces work that has to be redone.

## Where things go

| Folder | What goes here |
|---|---|
| `context/` | The WHY: brief, brand, audience, decisions log |
| `content/` | Canonical drafts: page copy, blog posts, written deliverables |
| `design/` | Mockups, wireframes, design notes (not final assets) |
| `assets/` | Final images, icons, fonts to be used in the site |
| `src/` | Code, if developing locally |
| `reference/` | Inspiration, competitor screenshots, brand assets you didn't create |
| `notes/` | Meeting notes, research, working thinking |
| `scratch/` | Sandbox — experiments, throwaway drafts, anything you might delete |
| `outputs/` | Final, ship-ready deliverables |

## Operating rules for this project

1. **Copy first, edit second.** Drafts go into `content/` (canonical) or `scratch/` (experimental). Don't write directly to `outputs/`.

2. **Log decisions.** When you make a non-obvious call — a structural choice, a copy direction, a tech pick — add a paragraph to `context/decisions.md` with date, decision, and one-sentence reasoning.

3. **Brand voice is non-negotiable.** If `context/brand.md` says "warm, plain-language, no jargon," do not produce corporate marketing-speak. If you need to deviate, ask first.

4. **Reference, don't reinvent.** If a similar problem was solved in another project's `Library/`-hoisted prompt or template, use it.

5. **Image assets:** keep originals in `assets/images/`. Optimized/exported versions go in `outputs/`. Don't lose the originals.

## Common tasks

- **Writing homepage copy:** drafts in `content/homepage.md`, alternates in `scratch/`, final in `outputs/` once approved.
- **Building a sitemap:** `design/sitemap.md`.
- **Logging a meeting:** `notes/YYYY-MM-DD-<topic>.md`.
- **New brand reference:** drop in `reference/brand/` with a note on where it came from.

## What NOT to do

- Don't edit the `_template/` directly — copy it to a real project folder first.
- Don't put project-specific prompts here if they could be reusable; put them in `~/AI/Library/prompts/` instead.
- Don't commit raw video, large image originals, or design files (PSD, Figma exports) without checking `.gitignore`.
