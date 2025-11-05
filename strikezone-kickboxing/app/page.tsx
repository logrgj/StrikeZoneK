import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

export default function Home() {
  return (
    <main className="font-sans">
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-training-with-a-punching-bag-7217/1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1543810052-1bf84f2b9dd5?q=80&w=1600&auto=format&fit=crop"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.06em] text-white sm:text-6xl md:text-7xl"
          >
            Unleash Power. Master Discipline. Become Limitless.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200"
          >
            At StrikeZone Kickboxing, we train your body, sharpen your mind, and build unstoppable confidence — one round at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Link href="/classes" className="rounded-full bg-[--color-primary] px-6 py-3 text-white">
              Join a Class
            </Link>
            <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 text-white">
              Discover the Gym
            </Link>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          <TiltCard>
            <div>
              <div className="text-4xl font-bold text-white">10+ Years</div>
              <div className="mt-1 text-sm text-zinc-400">Experience</div>
            </div>
          </TiltCard>
          <TiltCard>
            <div>
              <div className="text-4xl font-bold text-white">300+</div>
              <div className="mt-1 text-sm text-zinc-400">Students Trained</div>
            </div>
          </TiltCard>
          <TiltCard>
            <div>
              <div className="text-4xl font-bold text-white">20+</div>
              <div className="mt-1 text-sm text-zinc-400">Classes Per Week</div>
            </div>
          </TiltCard>
        </div>
        <p className="mt-8 text-center text-zinc-300">
          Real training. Real results. Real fighters.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="text-center text-lg text-zinc-300">
          StrikeZone is where discipline meets intensity. Whether you’re just starting or chasing championship form, our instructors will help you move with precision, power, and purpose.
        </p>
      </section>
    </main>
  );
}
