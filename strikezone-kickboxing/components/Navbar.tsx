"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.08em] text-white">
          STRIKE<span className="text-[--color-primary]">ZONE</span>
        </Link>
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-zinc-300 transition-colors hover:text-white",
                pathname === l.href && "text-white underline underline-offset-8 decoration-[--color-primary]"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-[--color-primary] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Book Free Trial
        </Link>
      </nav>
    </header>
  );
}
