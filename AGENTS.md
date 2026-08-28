# Project working agreement

Before changing this project, read these files in order:

1. `docs/PROJECT_CONTEXT.md`
2. `docs/FIGMA_MAP.md`
3. `docs/CONTENT_GUIDE.md`
4. The latest entries in `docs/CHANGELOG.md`

Keep `docs/PROJECT_CONTEXT.md` aligned with the current implementation. It is the canonical snapshot, not a historical log.

After each material change:

- update `docs/PROJECT_CONTEXT.md` when behavior, architecture, content, or constraints changed;
- append a dated entry to `docs/CHANGELOG.md`;
- update `docs/FIGMA_MAP.md` when Figma mappings or visual behavior changed;
- run `pnpm check` and `pnpm build`;
- record any known gap instead of silently diverging from the Figma source.

Do not use expiring Figma asset URLs at runtime. Commit the exact exported assets into `src/assets/`.

