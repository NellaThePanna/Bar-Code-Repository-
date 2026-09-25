# Bar Code Living — Brand Reference

Source of truth for colour, typography, and usage rules. Established 2026-09-25 during the landing-page hero work on `ashwin-v4`. Do not introduce new hex values or fonts without updating this file first.

## Colour tokens

Defined in `src/styles.css` (`:root`) and exposed as Tailwind utilities via `@theme inline`.

| Token | Hex | CSS variable | Tailwind | Role |
|---|---|---|---|---|
| Chalk | `#FAF7F2` | `--chalk` | `bg-chalk` / `text-chalk` | Dominant light surface; UI chips and cards over photography |
| Cream base | `#FEEFDC` | `--cream-base` | `bg-cream` | Supporting warm surface |
| Cream deep | `#F5DFC3` | `--cream-deep` | `bg-cream-deep` | Supporting warm surface (card fills, bands, blocks) |
| Burgundy ink | `#63343C` | `--burgundy-ink` | `bg-burgundy` / `text-burgundy` | All text on light surfaces; primary CTA fill/border |
| Burgundy deep | `#4A2530` | `--burgundy-deep` | `bg-burgundy-deep` | One small deliberate detail per view (hairline, tag); CTA hover |
| Burgundy light | `#8C5866` | `--burgundy-light` | `bg-burgundy-light` | Borders and inputs (`--border`, `--input`) |

## Ratios

- **Chalk / cream:** chalk carries the page; cream is supporting only — a small card fill, a thin band, or a warm block behind one element. Never the main ground.
- **Burgundy:** sparing. Target ≤ 15–20% of any frame. Screenshot-check new sections and estimate the split before shipping.
- **Burgundy deep:** never a fill larger than a small fraction of the screen.

## Directions

- **Direction A — chalk-dominant** (superseded for the hero): chalk background, photo as a framed element, cream as a small offset block.
- **Direction B′ — photo-led (live on the hero):** the photo is full-bleed and dominant, shown in true colour. Chalk carries the overlaid UI as solid chips and cards, not as a background fill.
  - No colour overlays, gradients, or tints on photography.
  - Text over a photo always sits on an opaque chalk card or chip, in burgundy ink. That makes contrast hold by construction instead of depending on the photo underneath.

## Typography

Loaded from Google Fonts in `src/routes/__root.tsx`.

| Role | Family | Loaded weights | Tailwind | Usage |
|---|---|---|---|---|
| Display | Bodoni Moda (optical size 6–96) | 400, 500 | `font-founder` / `font-display` | Headlines — large, tight leading (~0.88), slight negative tracking (~-0.02em) |
| Body | Jost | 400, 500, 600 | `font-founder-body` / `font-sans` | Body copy, CTAs, eyebrow labels (600, uppercase, tracked) |

## Contrast (WCAG 2.x)

| Text | Background | Ratio | Passes |
|---|---|---|---|
| Burgundy ink | Chalk | 9.42:1 | AAA |
| Burgundy ink | Cream base | 8.91:1 | AAA |
| Burgundy ink | Cream deep | 7.77:1 | AAA |
| Burgundy deep | Chalk | 12.29:1 | AAA |
| Burgundy light | Chalk | 5.31:1 | AA |
| Burgundy light | Cream deep | 4.38:1 | AA large text only |
| Chalk | Burgundy ink | 9.42:1 | AAA |

Burgundy ink on photography was measured on the hero placeholder and failed (≈1.0–2.0:1). Don't set text straight on a photo.

## Components

- **Primary CTA:** rounded-full pill, burgundy ink fill, chalk uppercase Jost label, trailing chalk circle with a burgundy arrow. Hover: burgundy deep.
- **Chip:** chalk background, burgundy ink eyebrow text, small padding. Used for frame counters and photo captions.

## Content rules

- Never present placeholder content as real. Placeholder photography must be visibly labelled (e.g. a "Placeholder photography" chip) and noted in its alt text.
- No invented client names, testimonials, or pricing.
- Motion: Framer Motion is the standard going forward. Respect `prefers-reduced-motion`.
