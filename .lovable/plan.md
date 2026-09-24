# Add the sticky homepage hero

## Scope
- Keep the existing one-session typed splash and footer unchanged.
- Add only the first hero section revealed after the splash.
- Leave all shared elements and other pages untouched.

## Build
1. Add the `--chalk` color token and expose it as the semantic Chalk utility, reserved for foregrounds and fine lines on dark/photo surfaces.
2. Add a full-height (`100svh`) sticky hero using the existing warm interior photograph, the established photo treatment, and a burgundy-deep overlay.
3. Set “Spaces, Realized.” in Bodoni Moda and Chalk, followed by the supplied Jost subtext and a clearly legible Chalk/burgundy “View Our Work” CTA.
4. Connect the splash completion event to a one-time GSAP timeline: photo scale 110% → 100%, then headline rise/fade, followed by the subtext and CTA. Do not add scroll-linked image movement or a second entrance.
5. Register ScrollTrigger for the hero animation approach while retaining CSS sticky positioning for the pin.
6. Correct any body-size burgundy-light text found on cream-deep surfaces by using burgundy-ink instead.

## Validation
- Check the initial splash, splash-to-hero handoff, tap-to-skip, returning-session load, and reduced-motion behavior.
- Check desktop and mobile framing, sticky release behavior, animation timing, and browser errors.

## Assumption
- The CTA destination is `/our-creations`, matching the page name supplied. The current checkout contains no such route, so this step will not create or alter that page; the link will become active when that existing page is restored to this checkout.
