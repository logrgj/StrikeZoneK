"use client";

import { useForm, ValidationError } from "@formspree/react";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const [state, handleSubmit] = useForm("your_form_id");

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.06em] text-white">
        Let’s Get You in the Ring.
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-zinc-300">Name</label>
          <input id="name" name="name" className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-[--color-primary]" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-zinc-300">Email</label>
          <input id="email" name="email" type="email" className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-[--color-primary]" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm text-zinc-300">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full rounded-md border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-[--color-primary]" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting} className="mt-2 rounded-full bg-[--color-primary] px-6 py-3 text-white disabled:opacity-60">
          Submit
        </button>
        {state.succeeded && <p className="text-sm text-green-500">Thanks! Your message has been sent.</p>}
      </form>

      <div className="mt-12 grid gap-2 text-zinc-300">
        <div>📍 Location: 123 Strike Street, New York, NY</div>
        <div>📞 +1 (555) 777-2025</div>
        <div>✉️ info@strikezonekickboxing.com</div>
        <div className="mt-2 flex gap-4">
          <a href="#" className="text-zinc-400 hover:text-white">Instagram</a>
          <a href="#" className="text-zinc-400 hover:text-white">YouTube</a>
          <a href="#" className="text-zinc-400 hover:text-white">TikTok</a>
          <a href="#" className="text-zinc-400 hover:text-white">Facebook</a>
        </div>
        <a href="/contact" className="mt-4 inline-block rounded-full border border-white/20 px-6 py-3 text-white">Book a Free Trial</a>
      </div>
    </main>
  );
}
