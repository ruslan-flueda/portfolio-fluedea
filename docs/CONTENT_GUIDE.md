# Adding and publishing projects

Projects live in `src/content/projects/`. Images live in `src/assets/projects/<slug>/`.

## Add a project

1. Duplicate an existing Markdown entry in `src/content/projects/`.
2. Rename it to the project's URL-safe slug.
3. Add the project's exported artwork under `src/assets/projects/<slug>/`.
4. Update the frontmatter fields.
5. Run `pnpm check` and `pnpm build`.
6. Push a branch to GitHub and inspect the Cloudflare preview.
7. Merge to `main` to publish.

## Frontmatter

- `title`: visible project name.
- `description`: short English description.
- `status`: `ready` or `in-process`.
- `order`: order on the homepage.
- `size`: `wide` or `half`.
- `cover`: local image path.
- `ribbon`: optional status-layer layout: `dovodo`, `payment`, or `split`. Omit it for completed projects without a ribbon.
- `href`: optional future destination.
- `published`: show or hide the card.

Without `href`, a card has interaction feedback but no navigation. Adding `href` converts it into a normal link without changing the card component.

Export only the Figma `cover` frame at 2x. Do not bake the project caption or status ribbon into the image.

The three ribbon values select positioning/backdrop treatment and a stable animation seed. The token sequence, decorative overlay geometry, and hover mutations are maintained centrally in `src/components/ProgressRibbon.astro`; they do not need to be copied into project frontmatter.
