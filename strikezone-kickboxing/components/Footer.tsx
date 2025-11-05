import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-400">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.08em] text-white">
            STRIKE<span className="text-[--color-primary]">ZONE</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white">Instagram</Link>
            <Link href="#" className="hover:text-white">YouTube</Link>
            <Link href="#" className="hover:text-white">TikTok</Link>
            <Link href="#" className="hover:text-white">Facebook</Link>
          </div>
        </div>
        <div className="mt-6 grid gap-2 text-zinc-500">
          <div>123 Strike Street, New York, NY</div>
          <div>+1 (555) 777-2025 • info@strikezonekickboxing.com</div>
        </div>
        <div className="mt-8 text-xs text-zinc-600">© {new Date().getFullYear()} StrikeZone Kickboxing. All rights reserved.</div>
      </div>
    </footer>
  );
}
