import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StrikeZone Kickboxing",
    template: "%s | StrikeZone Kickboxing",
  },
  description:
    "Train your body, sharpen your mind, and build unstoppable confidence — one round at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <div className="min-h-[calc(100vh-200px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
