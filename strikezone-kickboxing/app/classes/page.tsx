export const metadata = { title: "Classes" };
import Link from "next/link";

const programs = [
  {
    title: "Beginner Fundamentals",
    desc: "Learn proper stance, balance, and essential kickboxing combinations.",
    schedule: "Mon / Wed / Fri — 6 PM",
    duration: "60 mins",
    intensity: "Moderate",
    cta: { label: "Reserve a Spot", href: "/contact" },
  },
  {
    title: "Fitness Kickboxing",
    desc: "Cardio-based training for strength, endurance, and fat loss.",
    schedule: "Tue / Thu — 7 PM",
    duration: "45 mins",
    intensity: "High",
    cta: { label: "Join Class", href: "/contact" },
  },
  {
    title: "Advanced Techniques",
    desc: "For experienced fighters focusing on power, timing, and tactical movement.",
    schedule: "Sat — 4 PM",
    duration: "90 mins",
    intensity: "Intense",
    cta: { label: "Train with Us", href: "/contact" },
  },
  {
    title: "1-on-1 Personal Coaching",
    desc: "Private sessions tailored to your goals — technical or competitive.",
    schedule: "By appointment",
    duration: "",
    intensity: "",
    cta: { label: "Book a Private Session", href: "/contact" },
  },
];

export default function ClassesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="text-center">
        <h1 className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.06em] text-white">
          Classes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Whether your goal is fitness, skill mastery, or competition — there’s a class built for you.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {programs.map((p) => (
          <div key={p.title} className="rounded-lg border border-white/10 bg-zinc-900/60 p-6">
            <h3 className="text-xl text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
            <div className="mt-4 grid gap-1 text-sm text-zinc-400">
              {p.schedule && <div>Schedule: {p.schedule}</div>}
              {p.duration && <div>Duration: {p.duration}</div>}
              {p.intensity && <div>Intensity: {p.intensity}</div>}
            </div>
            <Link href={p.cta.href} className="mt-5 inline-block rounded-full bg-[--color-primary] px-4 py-2 text-white">
              {p.cta.label}
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
