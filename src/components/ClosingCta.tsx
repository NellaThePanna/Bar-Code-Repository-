import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="bg-burgundy-deep px-5 py-28 text-chalk md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1480px] border-t border-chalk/25 pt-10">
        <p className="eyebrow text-chalk/70">[ Start a Project ]</p>
        <h2
          id="closing-cta-heading"
          className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[1] font-medium"
        >
          Your space, realized next.
        </h2>
        <p className="font-founder-body mt-6 max-w-xl text-base leading-relaxed md:text-lg">
          Tell us about the room you have and the one you want. We'll take it from there.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 h-12 border border-chalk bg-chalk px-7 font-founder-body text-xs font-semibold uppercase text-burgundy-deep hover:bg-transparent hover:text-chalk"
        >
          <a href="mailto:hello@barcodeliving.com">Get In Touch</a>
        </Button>
      </div>
    </section>
  );
}
