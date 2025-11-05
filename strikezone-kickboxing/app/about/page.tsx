export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-4">
        <h1 className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.06em] text-white">
          Our Story
        </h1>
        <p className="text-zinc-300">
          Founded by passionate martial artists, StrikeZone Kickboxing began as a small training community and grew into a powerhouse of fighters, athletes, and everyday people pushing their limits.
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.06em] text-white">
          Our Philosophy
        </h2>
        <p className="text-zinc-300">
          Every punch teaches focus. Every kick builds character. Our goal isn’t just to train fighters — it’s to shape stronger, more resilient individuals inside and outside the ring.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-[0.06em] text-white">
          Our Team
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <li className="rounded-lg border border-white/10 bg-zinc-900/60 p-6">
            <div className="text-white">Coach Marcus Lee</div>
            <div className="text-sm text-zinc-400">Former National Kickboxing Champion, 15 years of coaching experience.</div>
          </li>
          <li className="rounded-lg border border-white/10 bg-zinc-900/60 p-6">
            <div className="text-white">Coach Sofia Ramirez</div>
            <div className="text-sm text-zinc-400">Certified fitness instructor specializing in power conditioning.</div>
          </li>
          <li className="rounded-lg border border-white/10 bg-zinc-900/60 p-6">
            <div className="text-white">Coach Jamal Khan</div>
            <div className="text-sm text-zinc-400">Tactical movement and fight analysis specialist.</div>
          </li>
        </ul>
      </section>
    </main>
  );
}
