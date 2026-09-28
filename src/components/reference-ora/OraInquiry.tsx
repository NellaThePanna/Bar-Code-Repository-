import { useState, type FormEvent } from "react";
import { OraArrow } from "./OraArrow";

type Errors = { name?: string; email?: string };

const field =
  "w-full pt-2 pb-3 bg-transparent border-0 border-b border-(--cream-deep)/45 text-base text-white placeholder:text-white/55 focus:border-(--cream-deep) transition-colors";

export function OraInquiry() {
  const [errors, setErrors] = useState<Errors>({});
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      setNote("");
      form.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setNote("Form not connected yet — [TBD]");
  };

  return (
    <section id="contact" className="scroll-mt-20 border-b border-(--burgundy-ink)/18">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28 grid lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
        <div>
          <span className="ora-mono block mb-4 text-(--burgundy-light)">[ Start a project ]</span>
          <h2 className="ora-disp mt-2 mb-7 text-5xl sm:text-[64px] lg:text-[84px] leading-[0.98]">
            Tell us about
            <br />
            <em>your space.</em>
          </h2>
          <p className="max-w-[460px] text-base leading-[1.7] text-(--burgundy-light)">
            [Inquiry intro — TBD. What happens after someone sends a brief.]
          </p>
          <div className="mt-12 pt-6 flex flex-wrap gap-10 border-t border-(--burgundy-ink)/18">
            <div>
              <span className="ora-mono text-(--burgundy-light)">Studio</span>
              <span className="block mt-1.5 text-[15px] font-medium">[Studio address — TBD]</span>
            </div>
            <div>
              <span className="ora-mono text-(--burgundy-light)">Email</span>
              <span className="block mt-1.5 text-[15px] font-medium">[Email — TBD]</span>
            </div>
          </div>
        </div>

        <form
          noValidate
          onSubmit={onSubmit}
          aria-label="Project brief"
          className="on-dark bg-(--burgundy-deep) text-white p-6 sm:p-14 flex flex-col gap-[30px]"
        >
          <div>
            <label htmlFor="ora-name" className="ora-mono block mb-2.5 text-(--cream-deep)/80">
              Full name *
            </label>
            <input
              id="ora-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "ora-name-error" : undefined}
              className={field}
            />
            {errors.name && (
              <p id="ora-name-error" className="mt-2 text-[13px] text-(--cream-deep)">
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-7">
            <div>
              <label htmlFor="ora-email" className="ora-mono block mb-2.5 text-(--cream-deep)/80">
                Email *
              </label>
              <input
                id="ora-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="name@domain.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "ora-email-error" : undefined}
                className={field}
              />
              {errors.email && (
                <p id="ora-email-error" className="mt-2 text-[13px] text-(--cream-deep)">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="ora-phone" className="ora-mono block mb-2.5 text-(--cream-deep)/80">
                Phone
              </label>
              <input id="ora-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971" className={field} />
            </div>
          </div>

          <div>
            <label htmlFor="ora-space" className="ora-mono block mb-2.5 text-(--cream-deep)/80">
              Type of space
            </label>
            <div className="relative">
              <select id="ora-space" name="space" className={`${field} appearance-none pr-8`}>
                <option className="text-(--burgundy-ink)">Residential</option>
                <option className="text-(--burgundy-ink)">Commercial</option>
                <option className="text-(--burgundy-ink)">Other</option>
              </select>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-(--cream-deep)">
                <OraArrow dir="down" />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2.5 h-14 flex items-center justify-center gap-3.5 bg-white text-(--burgundy-ink) ora-cap hover:text-(--burgundy-deep) transition-colors"
          >
            Send project brief
            <OraArrow />
          </button>

          <p role="status" className="text-sm text-(--cream-deep) empty:hidden">
            {note}
          </p>
        </form>
      </div>
    </section>
  );
}
