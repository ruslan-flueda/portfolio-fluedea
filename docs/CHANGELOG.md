# Changelog

## 2026-08-30

- Connected the portfolio to the supplied PostHog US project with asynchronous Web Analytics, autocapture, page-leave measurement, and session replay. Added explicit anonymous events for project visibility, three-second engagement, dwell duration, card clicks, contact destinations, scroll-depth milestones, and footer reach without changing the visual layout; confirmed the production bootstrap and successful event ingestion after deployment.

## 2026-08-29

- Pinned pnpm `11.19.0` after the first successful GitHub Pages release so subsequent automated builds no longer depend on an unspecified latest package-manager version.
- Corrected the newly added GitHub Pages workflow to build the Astro project with the official `withastro/action`, publish the generated site rather than repository sources, and configured the `/portfolio-fluedea/` base path plus base-aware favicon and 404 links.
- Updated the header Gmail destination to `rus01.khairullin@gmail.com` before the public deployment.
- Replaced the generated red-dot favicon with the exact local PNG render of Figma node `201:16167`, preserving its cyan `R`, red block, black field, and blend-mode appearance.
- Rolled back the experimental shared Figma Glass recreation and restored the previous lightweight translucent blurred backdrops for every `in process` ribbon; live text and hover mutation behavior are unchanged.
- Applied the updated Figma Glass backdrop from node `150:11824` to every in-process project ribbon: unified the band at `63 px` and `12%` white, then recreated the source refraction/depth/dispersion with a clipped, smoothly stretched and filtered copy of each card's own cover while preserving the existing live-text animation.
- Replaced the fourth T-bank / Beri Zaryad card with the updated-color Russian Design Cup composition from Figma node `150:11815`, storing its exact native `1402 × 700 px` cover locally and preserving the shared animated `split` process ribbon.
- Isolated the footer contact's hover growth inside a fixed base-height layout slot and animated both width and height, allowing the button to reach `42 px` without moving the character or date block below.
- Matched footer-caption typography to Figma node `150:11577`: added a local Inter Tight variable font for the bracket labels, switched `august 2026` to the existing local Ramabhadra Regular, and applied the source tracking and line-heights.
- Added the Figma `197:16030` character-only hover state to the footer using the exact locally stored teeth vector from child `197:16049`; only the teeth opacity changes, leaving the existing drawing and footer layout fixed.
- Marked Azimut as in process, added its own seeded instance of the shared animated process ribbon, and made project-card treatment state-driven: in-process projects show their ribbon, while a ready project with an `href` automatically restores the preserved centered `view` reveal.
- Centered the Azimut `view` label explicitly on both axes inside its responsive reveal bar and matched its line-height to the footer contact treatment.
- Matched the Azimut `view` reveal to the responsive base dimensions of `site-footer__contact` (`240 × 14 px` at 1440 px), while preserving the manually tuned `420 ms` expansion and fully hidden `0 px` resting width.
- Rebuilt the centered Azimut `view` reveal from Figma node `183:12704`: white difference-blended `239 × 28 px` treatment, Helvetica Neue `14 px` label with `-0.56 px` tracking, and the source `211 ms` expansion curve; changed its resting width from the Figma motion's `1 px` to `0 px` so it is completely invisible outside hover/focus.
- Replaced Azimut's removed pointer-following label with a fixed centered `239 × 28 px` `view` reveal: the black bar expands from a one-pixel center line over `420 ms`, then fades in its label after `90 ms`, with keyboard and reduced-motion parity.
- Removed the Azimut-only pointer-following `view` label in full, including its markup, pointer listeners, cached card bounds, CSS variables, and trailing transitions; project cards now keep their original visuals on hover.
- Removed the experimental top/bottom viewport distortion in full after visual review, including its component, runtime controller, page integration, and documented behavior; the portfolio is back to its original undistorted presentation.

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
