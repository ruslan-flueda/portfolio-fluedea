# Changelog

## 2026-08-28

- Expanded each progress-ribbon hover target from the `17 px` text strip to its entire project card; leaving the card now stops future mutation bursts while allowing active motion to finish.
- Inspected exact Figma node `166:12088` (`Progress block`) and recorded that it contains no native motion timeline.
- Replaced the nested status-ribbon composition with a flat live-text token strip and independently clipped `FULL`, `FRAGMENT`, and `BRIDGE` overlay regions.
- Added deterministic hover mutation bursts driven by a seeded PRNG and the Web Animations API: transform-only enter, exit, sweep, and hold states with irregular participation, stagger, and pauses.
- Preserved the original difference blend, translucent blurred card bands, stable reload state, and a non-animated reduced-motion fallback. Pointer leave now stops future scheduling while allowing active mutations to complete naturally.
- Reduced project-card descriptions from Arial Regular (`400`) to Arial Light (`300`).
- Switched project-card titles to the bundled Ramabhadra Regular font and made project descriptions explicitly Arial Regular.
- Slowed the Azimut `view` label's follow motion to a softer `420 ms` ease-out trail.
- Removed all project-card hover movement and added a pointer-following black `view` label exclusively to the Azimut card.
- Made the social-link text white on hover and keyboard focus, independently of each link's animated fill color.
- Rebuilt the static preview after manual header-fill color edits: Telegram remains blue, Instagram is now pink, and Gmail is near-black.
- Changed the header-link marker from a fixed `12 px` strip to a full-label fill whose width automatically follows each link's text.
- Constrained each header-link marker to a clipping frame matching the label width; its rightward exit now disappears at the text boundary instead of remaining visible in empty space.
- Added the Figma-derived hover/focus interaction to `tg`, `inst`, and `gmail`: a `12 × 17 px` blue difference-blended marker enters from the left and exits to the right.
- Adapted the supplied looping Figma timeline into clean one-shot `240 ms` web transitions, with keyboard parity and a reduced-motion fallback.
- Moved `hero-layer__fade` out of the astronaut crop and corrected the stack to astronaut → fade → light, preserving the soft lower transition while keeping the light above it.
- Replaced the four full-card raster exports with exact 2x exports of the Figma `cover` frames.
- Rebuilt project titles and descriptions as selectable, accessible Arial text.
- Recreated the translucent `in process` bands as independent HTML/CSS layers with deliberately irregular segment grouping, overlap depth, and per-project color treatment for future animation.
- Replaced the raster footer signature with its Figma SVG and rebuilt the `august 2026` caption as live text.
- Corrected project-grid column and row gaps so the desktop page is exactly 1440 x 5134 px at the Figma reference viewport.
- Re-verified project dimensions, natural 2x cover sizes, live text nodes, local assets, and the browser console.

## 2026-08-27

- Connected the empty `ruslan-flueda/portfolio-fluedea` repository.
- Recorded the approved stack, hosting plan, content model, Figma mapping, and working agreement.
- Added the Astro and Cloudflare project configuration.
- Implemented the English desktop page from Figma nodes `150:11528` and `150:11935`.
- Added the fixed identity/social header, live Saint Petersburg time, Ramabhadra specialist statement, layered hero collage, restrained multi-depth parallax, data-driven project grid, and Telegram contact footer.
- Stored all Figma exports and the supplied Ramabhadra font locally so the production site has no expiring design-tool asset URLs.
- Added content entries for Azimut, Dovodo, Dodo Payment, and Dodo Split Payment. Cards remain interactive buttons until project routes are supplied.
- Added project-maintenance instructions and the canonical project-context workflow.
- Verified the production page at 1440 px: 5132 px rendered height against the 5134 px Figma frame, with no browser console warnings or errors.
- Passed Astro/TypeScript validation with zero errors, warnings, or hints, and completed a successful production build.
