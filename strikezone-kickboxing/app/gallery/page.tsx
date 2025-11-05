import Image from "next/image";

export const metadata = { title: "Gallery" };

const items = [
  {
    src: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1600&auto=format&fit=crop",
    caption: "Power in Motion",
  },
  {
    src: "https://images.unsplash.com/photo-1549062575-7e9a74e1e2ea?q=80&w=1600&auto=format&fit=crop",
    caption: "Focus Before the Round",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
    caption: "Pad Work Precision",
  },
  {
    src: "https://images.unsplash.com/photo-1620913029330-2c6fba9b6f08?q=80&w=1600&auto=format&fit=crop",
    caption: "Footwork Drills",
  },
  {
    src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1600&auto=format&fit=crop",
    caption: "Fight Night",
  },
  {
    src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600&auto=format&fit=crop",
    caption: "Community Grind",
  },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.06em] text-white">
        Gallery
      </h1>
      <p className="mt-2 text-zinc-300">Every sweat drop tells a story.</p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
            <Image
              src={it.src}
              alt={it.caption}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={idx < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {it.caption}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16 overflow-hidden rounded-xl border border-white/10 bg-fixed bg-[url('https://images.unsplash.com/photo-1521804906057-1df8fdb0f92e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-black/70 p-10 text-center">
          <blockquote className="mx-auto max-w-3xl text-2xl text-zinc-100">
            “You don’t rise to the occasion — you fall to your training.”
          </blockquote>
        </div>
      </section>
    </main>
  );
}
