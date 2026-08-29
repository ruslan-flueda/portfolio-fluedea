# Figma implementation map

Last updated: 2026-08-29

## Page

| Area | Figma node | Implementation |
| --- | --- | --- |
| Desktop page | `150:11528` | `src/pages/index.astro` |
| Header and specialist copy | children of `150:11528` | `src/components/SiteHeader.astro` |
| Layered hero | `150:11935` | `src/components/HeroCollage.astro` |
| Projects container | `150:11585` | `src/components/ProjectGrid.astro` |
| Contact/footer | children `150:11583`, `150:11543` | `src/components/SiteFooter.astro` |
| Browser favicon | `201:16167` | `public/favicon.png`, linked by `src/layouts/BaseLayout.astro` |

## Header link motion

The fill is based on Figma node `166:12028`: `17 px` high and difference blend. For the web interaction, its width adapts to the full width of each label. It slides completely in from the left over `240 ms`, holds over the complete label, then slides completely out to the right over `240 ms`. Label text is white while hovered or keyboard-focused. Current per-link colors are Telegram `#529dff`, Instagram `#FF157A`, and Gmail `#272727`. Every link is its own clipping frame, so the fill disappears at the text boundary instead of flying into empty header space. This avoids the exported infinite-loop reset while preserving the refined interaction intent.

## Hero depth groups

| Figma layer | Node | Depth intent |
| --- | --- | --- |
| Light | `150:11972` | background |
| Astronaut backdrop | `150:11937` | background |
| Editorial desktop | `150:11974` | middle |
| Flower composition | `150:11977` | middle |
| Phone 1 | `150:11973` | foreground |
| Phone 2 | `150:11975` | foreground |
| Phone 3 | `150:11978` | foreground |
| Poster 1 | `150:11976` | foreground |
| Poster 2 | `150:11979` | foreground |
| Posts | `150:11980` | foreground |
| Logo | `150:11981` | middle |

The Figma canvas uses absolute 1440-based coordinates. CSS percentages are derived from these coordinates so the composition scales with the desktop viewport.

## Project cards

Only each card's `cover` frame is exported as a local PNG. The first three covers are 2x exports; Russian Design Cup uses the native `1402 × 700 px` render returned for its Figma cover node. Captions, descriptions, translucent center bands, and irregular `in process` sequences are implemented as HTML/CSS layers.

| Project | Card node | Cover node | Ribbon variant |
| --- | --- | --- | --- |
| Azimut | `150:11586` | `150:11588` | `azimut` |
| Dovodo | `150:11618` | `150:11620` | `dovodo` |
| Dodo payment | `150:11766` | `150:11768` | `payment` |
| Russian design cup | `150:11815` | `150:11817` | `split` |

### Progress strip

The shared status artwork maps exact Figma node `166:12088` (`Progress block`, reference size `1402 × 17 px`) to `src/components/ProgressRibbon.astro`. Inspection found no native Figma motion timeline on this node, so the interaction follows the approved web motion specification rather than an exported prototype animation.

The implementation uses one flat sequence of live `in process` and `-` tokens. Decorative overlays are separate clipped regions with three geometry types: `FULL` covers one token, `FRAGMENT` covers part of a token, and `BRIDGE` spans adjacent tokens and gaps. Region positions are measured from the rendered token geometry, while their initial visibility and mutation order come from fixed per-card seeds.

One controller per strip handles the whole interaction and uses the containing project card as its hover target. Hovering anywhere on that card starts seeded mutation bursts with 55–80% participation, `0–220 ms` staggering, `180–320 ms` enter/exit movement, optional `80–500 ms` holds, and `350–1100 ms` pauses. Movement uses the Web Animations API and `translateX` only, with `cubic-bezier(0, 1, 0.57, 0.97)` for the core motion. Difference blend and the existing blurred ribbon backdrops remain intact. Leaving the card stops scheduling new bursts but does not cancel active motion; reduced-motion preserves the deterministic initial composition.

The footer signature drawing is the SVG export of node `150:11544`. Its character-only hover state maps Figma group `197:16030`: the base drawing remains unchanged while the exact teeth vector from child `197:16049` is layered at its source coordinates and revealed with opacity only, so no footer geometry moves. The caption from node `150:11577` remains live text with the source typography: local Inter Tight Regular for `r(` / `)k`, local Ramabhadra Regular for `august 2026`, `14 px` at 1440 px, `-0.56 px` tracking, and the source line-heights.

The contact link keeps its normal Figma-flow footprint in a fixed-height slot. Its visual box expands from the center to the configured hover width and `42 px` height, while the signature block below remains at the same coordinates.

Project cards do not shift, scale, or brighten on hover. Azimut currently uses the shared animated process strip with its own deterministic `azimut` seed. The completed-case treatment mapped from Figma node `183:12704` remains preserved in `ProjectGrid.astro` and is selected by content state: `status: in-process` plus a ribbon value renders the process strip; `status: ready` plus an `href` renders the centered `view` reveal instead. The saved reveal keeps its responsive footer-contact dimensions, white difference blend, centered Helvetica Neue `14 px` label, fully hidden `0 px` idle width, and manually tuned `420 ms cubic-bezier(.84, 0, .31, .97)` transition.

Project-card titles use the local Ramabhadra Regular font; their descriptions use Arial Light (`300`).
