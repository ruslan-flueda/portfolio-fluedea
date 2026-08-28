# Portfolio project context

Last updated: 2026-08-28

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
- Header social links use directional difference-blended fills. Their width adapts to the complete label (`tg`, `inst`, or `gmail`), they enter from the left on pointer hover or keyboard focus, hold over the whole label, and exit to the right. Link text becomes white while hovered or keyboard-focused. Current fills: Telegram `#529dff`, Instagram `#FF157A`, Gmail `#272727`. Each link clips its fill to the exact width of its text, so it is never visible outside the label container. Decorative link motion is removed for reduced-motion users.
- The specialist description scrolls normally and uses the bundled Ramabhadra font.
- All other site interface text uses Arial, except project-card titles, which use the bundled Ramabhadra Regular font, and the `in process` strips, which use Helvetica Neue Regular at `14 px` to match Figma node `166:12088`. Project-card descriptions use Arial Light (`300`).
- Saint Petersburg time updates live using the `Europe/Moscow` time zone.
- Hero layers use restrained pointer-and-scroll parallax with different depth values.
- Motion is disabled when `prefers-reduced-motion: reduce` is active.
- Project cards respond to hover/click but do not navigate yet.
- Project cards remain static on hover. The Azimut card alone shows a black `view` label that softly trails the pointer within the card (`420 ms` easing); reduced-motion users see the label centred instead of tracking pointer movement.
- Project covers are exact Figma `cover` frames exported at 2x. Card captions and all `in process` ribbons are live HTML text layered above and below those images.
- The status composition from Figma node `166:12088` is flattened into one semantic token strip plus independent `FULL`, `FRAGMENT`, and `BRIDGE` overlay regions. The source's deeply nested auto-layout frames are intentionally not reproduced.
- Each status strip has a deterministic initial seed close to the Figma composition. Hovering anywhere on its project card starts irregular mutation bursts: roughly 55–80% of available regions enter, exit, sweep, or hold with short seeded staggers. Leaving the card stops future scheduling but lets active animations finish. Reloading restores the same initial composition, and reduced-motion users receive that stable state without mutation.
- The footer drawing is an SVG export; its date caption is live HTML text.
- Azimut is marked ready. Other projects are marked in process.
- Contact opens `https://t.me/flueda`.
- Social destinations: Telegram `https://t.me/flueda`, Instagram `https://www.instagram.com/flueda1/`, email `mailto:ruslan4ik.hairullin@gmail.com`.
- LinkedIn and CV controls remain hidden until destinations are supplied.

## Architecture

- Astro static site with strict TypeScript.
- Plain CSS and custom properties; no Tailwind runtime.
- Astro content collection for project metadata.
- Local Figma exports under `src/assets/`; production markup never depends on expiring Figma URLs.
- Cloudflare Workers Static Assets, deployed from GitHub.

## Quality constraints

- Preserve the Figma art direction at 1440 px while allowing proportional desktop stretching.
- Use transforms only for parallax to avoid layout work during scrolling.
- Keep essential UI accessible by keyboard and expose meaningful link labels.
- Prefer visual fidelity and fast loading in equal measure.

## Current verification baseline

- `astro check`: zero errors, warnings, or hints.
- Production build: successful static output for `/` and `/404.html`.
- Browser QA viewport: 1440 x 900 px.
- Rendered page width: 1440 px; rendered height: 5134 px (equal to the Figma reference frame).
- Local Ramabhadra font, live time, project controls, contact links, reduced-motion fallbacks, independent parallax transforms, and deterministic status-strip mutation verified in the browser.

## Deferred work

- Mobile/tablet composition.
- Project detail routes and live card navigation.
- LinkedIn and CV destinations.
