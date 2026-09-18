# Bar Code Living Launch

Build a single landing page for "Bar Code Living," a high-end interior design and fit-out company. This is page one only — a hero + brand story + a signature before/after showcase + process timeline + closing CTA. No routing, no other pages yet.

BRAND

- Company name: Bar Code Living

- Positioning: premium residential & commercial interior fit-out studio

- Tone: editorial, confident, warm-minimal — think a design-magazine feature, not a typical contractor site

COLOR PALETTE (use exactly these, no substitutes)

- Cream / base: #FEEFDC

- Burgundy / ink & accent: #63343C

- Treat cream as the dominant background (like warm paper), burgundy as text, headlines, and accent details (dividers, buttons, small labels)

- Avoid pure black or pure white anywhere — everything sits on the cream base

- Buttons: burgundy fill with cream text, or cream outline with burgundy text on hover-invert

TYPOGRAPHY

- Large, bold, tightly-tracked serif or high-contrast display serif for the wordmark/hero headline (editorial, confident — similar spirit to a fashion-house or architecture-studio logotype)

- Clean grotesk/sans for body copy and labels, generous line height

- Small uppercase labels with letter-spacing for eyebrows/tags (e.g. "INTERIOR DESIGN · FIT-OUT · DUBAI")

LAYOUT — SECTION BY SECTION

1) HERO

- Full-width cream background

- Top-left or top meta row in small uppercase burgundy text: "FIT-OUT · INTERIOR DESIGN · DUBAI" / "EST. [year]"

- Massive bold wordmark "BAR CODE LIVING" as the dominant visual element, burgundy on cream, slightly oversized, almost bleeding off the edges of the viewport (editorial hero treatment)

- A single moody, high-end interior photograph (placeholder: use a warm, softly-lit living room or lobby interior stock image) positioned overlapping/beside the wordmark, not framed in a box — let it breathe into the whitespace

- One short tagline beneath, e.g. "We design spaces that hold the way you actually live." in a smaller serif italic

2) BRAND STORY

- Right-aligned (or asymmetric two-column) text block on cream background, paired with a second interior photograph placeholder (a kitchen or dining nook, warm tones)

- Short paragraph explaining who Bar Code Living is: a fit-out studio turning bare shells into finished, liveable spaces — from concept to handover

- Include a small stat row: "10+ years experience" / "80+ projects delivered" / "Residential & Commercial" — styled as understated inline stats, not big flashy counters

3) SIGNATURE FEATURE — "BEFORE / AFTER" CURTAIN REVEAL

This is the centerpiece interactive section. Build it as follows:

- Full-width section, burgundy background with cream heading: "SEE THE TRANSFORMATION"

- A large image container (16:9 or similar) showing a "before" photo (placeholder: an empty/unfinished raw interior shell) 

- Over it, two solid curtain panels (colored in cream, or a subtle textured fabric-like cream gradient) meet in the middle covering the image completely at rest

- On scroll-into-view (or on hover/click if scroll-trigger isn't reliable), the two curtain panels slide apart horizontally — left panel slides left, right panel slides right — like a theatre curtain opening, with an eased, slightly staggered motion (600–900ms, ease-in-out)

- As the curtains part, reveal is progressive: what's underneath is actually the "after" photo (placeholder: the same room type, fully finished — warm, styled, high-end)

- Add a thin vertical burgundy divider line down the center where the curtains meet, and small cream labels "BEFORE" (left edge) and "AFTER" (right edge, revealed as curtains open)

- Include 2–3 of these curtain reveal panels in a row or stacked, each representing a different space (e.g. "Living Room," "Kitchen," "Master Suite") — all using placeholder before/after stock imagery for now

- Respect prefers-reduced-motion: fall back to a simple crossfade or static side-by-side before/after if motion is reduced

4) PROCESS / WORKFLOW

- Cream background, small uppercase eyebrow "[ HOW WE WORK ]" in burgundy

- Horizontal 4-step timeline with pill-shaped burgundy badges over a thin connecting line: 

  1. Consultation (Week 1)

  2. Concept & Moodboard (Week 2)

  3. Design & Materials (Week 3–4)

  4. Fit-Out & Handover (Week 5+)

- Each step gets a one-line description beneath its badge

5) CLOSING CTA

- Full-width burgundy section, cream centered text

- Large serif headline: "Let's design your next space."

- Cream outline button: "Book a Consultation"

- Small footer row beneath: company name, city, and placeholder contact details (email/phone/Instagram)

INTERACTION / POLISH

- Generous whitespace throughout, nothing feels cramped

- Smooth scroll-reveal fade/slide-ups on each section as it enters viewport (subtle, not bouncy)

- The curtain-reveal section is the one moment of bigger, more theatrical motion — everything else stays quiet and editorial so that moment stands out

- Fully responsive; on mobile, stack the curtain panels vertically (top/bottom reveal instead of left/right) if horizontal doesn't fit well

Use placeholder stock-style interior photography throughout (warm-toned residential/commercial interiors) — these will be swapped for real project photography later. This is the first landing page only; do not scaffold additional routes or pages yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e1ffbaed-f29f-44f7-9e11-eea75f510e3b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
