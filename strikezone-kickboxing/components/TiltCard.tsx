"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX / 4);
    y.set(relY / 4);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ perspective: 800 }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
