# CLAUDE.md

See [`AGENTS.md`](./AGENTS.md) for canonical project instructions. Workspace rules in `~/AI/AGENTS.md` and `~/AI/CLAUDE.md` also apply.

## Claude-specific notes for website projects

- **Copy drafts:** prefer markdown (`.md`) for drafts in `content/`. Convert to `.docx` only when delivering to a client who needs Word format (use the `docx` skill).
- **Page mockups:** when sketching a page layout, an HTML artifact is often the fastest way for Grant to see the result. Use `mcp__cowork__create_artifact` for live previews.
- **Image generation:** if the project asks for AI-generated imagery, save originals to `assets/images/generated/` with a sidecar `.txt` file containing the prompt used, so it's reproducible.
