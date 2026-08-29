# Portfolio project context

Last updated: 2026-08-29

## Goal

Build Ruslan Khairullin's English-only product-design portfolio from the latest FLUEDA Figma composition. The desktop experience is the only supported layout in the current phase.

## Source of truth

- Full desktop frame: Figma file `Uk4CXDLmdE2ErD60YJyP4X`, node `150:11528`.
- Layered hero replacement: node `150:11935`.
- Reference canvas: 1440 px wide.

## Confirmed behavior

- The page expands fluidly across desktop viewport widths.
- No dedicated mobile layout is included in this phase.
- The compact identity, location/time, and social links remain fixed.
- The browser favicon is the exact local PNG export of Figma node `201:16167`: a cyan `R` over a red vertical block on black.
- Header social links use directional difference-blended fills. Their width adapts to the complete label (`tg`, `inst`, or `gmail`), they enter from the left on pointer hover or keyboard focus, hold over the whole label, and exit to the right. Link text becomes white while hovered or keyboard-focused. Current fills: Telegram `#529dff`, Instagram `#FF157A`, Gmail `#272727`. Each link clips its fill to the exact width of its text, so it is never visible outside the label container. Decorative link motion is removed for reduced-motion users.
- The specialist description scrolls normally and uses the bundled Ramabhadra font.
- All other site interface text uses Arial, except project-card titles and the footer date, which use the bundled Ramabhadra Regular font; the `in process` strips, which use Helvetica Neue Regular at `14 px`; and the footer bracket labels, which use the bundled Inter Tight Regular font. Project-card descriptions use Arial Light (`300`). Footer typography maps Figma node `150:11577`: `14 px` at the reference viewport, `-0.56 px` tracking, `99.22%` date line-height, and `1` bracket line-height.
- Saint Petersburg time updates live using the `Europe/Moscow` time zone.
- Hero layers use restrained pointer-and-scroll parallax with different depth values.
- Motion is disabled when `prefers-reduced-motion: reduce` is active.
- Project cards respond to hover/click but do not navigate yet.
- Project cards remain static on hover. In-process projects, now including Azimut, show the shared animated `in process` ribbon. The finished-case `view` treatment derived from Figma node `183:12704` remains implemented but is state-driven: it appears only when a project has both `status: ready` and an `href`, while the process ribbon renders only for `status: in-process`. The saved `view` bar is white and difference-blended, uses centered Helvetica Neue Regular `14 px` text with `-0.56 px` tracking, matches the responsive base size of `site-footer__contact`, and keeps the manually tuned `420 ms cubic-bezier(.84, 0, .31, .97)` expansion.
- Project covers are exact local Figma `cover` exports. Card captions and all `in process` ribbons are live HTML text layered above and below those images. The Russian Design Cup cover is stored at its native `1402 × 700 px` Figma render; the other covers remain 2x exports.
- The status composition from Figma node `166:12088` is flattened into one semantic token strip plus independent `FULL`, `FRAGMENT`, and `BRIDGE` overlay regions. The source's deeply nested auto-layout frames are intentionally not reproduced.
- Each status strip has a deterministic initial seed close to the Figma composition. Hovering anywhere on its project card starts irregular mutation bursts: roughly 55–80% of available regions enter, exit, sweep, or hold with short seeded staggers. Leaving the card stops future scheduling but lets active animations finish. Reloading restores the same initial composition, and reduced-motion users receive that stable state without mutation.
- The footer drawing is an SVG export; its date caption is live HTML text. Hovering the character area reveals the exact local SVG teeth layer from Figma state `197:16030` / child `197:16049`; the base drawing and footer layout remain fixed, and reduced-motion removes the short opacity transition.
- All four current projects—Azimut, Dowedo, Dodo Payment, and Russian Design Cup—are marked in process and have no case-study destination yet.
- Contact opens `https://t.me/flueda`.
- The footer contact expands to its hover width and `42 px` height from the center. It is absolutely centered inside a fixed base-height layout slot, so the character, date caption, and overall footer flow do not move while the button animates.
- Social destinations: Telegram `https://t.me/flueda`, Instagram `https://www.instagram.com/flueda1/`, email `mailto:rus01.khairullin@gmail.com`.
- LinkedIn and CV controls remain hidden until destinations are supplied.

## Architecture

- Astro static site with strict TypeScript.
- Plain CSS and custom properties; no Tailwind runtime.
- Astro content collection for project metadata.
- Local Figma exports under `src/assets/`; production markup never depends on expiring Figma URLs.
- GitHub Pages static hosting at `https://ruslan-flueda.github.io/portfolio-fluedea/`, built and deployed from `main` by the official Astro GitHub Action. The existing Cloudflare Workers configuration remains available as an optional alternative.

## Quality constraints

- Preserve the Figma art direction at 1440 px while allowing proportional desktop stretching.
- Use transforms only for parallax to avoid layout work during scrolling.
- Keep essential UI accessible by keyboard and expose meaningful link labels.
- Prefer visual fidelity and fast loading in equal measure.

## Current verification baseline

- `astro check`: zero errors, warnings, or hints.
- Production build: successful static output for `/` and `/404.html`.
- GitHub Pages production workflow: successful at `https://ruslan-flueda.github.io/portfolio-fluedea/`; pnpm is pinned to `11.19.0` for reproducible future deployments.
- Browser QA viewport: 1440 x 900 px.
- Rendered page width: 1440 px; rendered height: 5134 px (equal to the Figma reference frame).
- Local Ramabhadra font, live time, project controls, contact links, reduced-motion fallbacks, independent parallax transforms, and deterministic status-strip mutation verified in the browser.

## Deferred work

- Mobile/tablet composition.
- Project detail routes and live card navigation.
- LinkedIn and CV destinations.
