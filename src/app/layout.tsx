// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, Search, Activity, Calendar } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AfyaApp - Your Health Companion",
  description:
    "Track your health, explore medical insights, and book professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="flex h-screen overflow-hidden">
          {/* Desktop Sidebar (Hidden on Mobile) */}
          <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 px-6 py-8">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                AfyaApp
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 bg-slate-50 text-blue-600 rounded-2xl font-semibold transition-colors"
              >
                <Home size={20} /> Dashboard
              </Link>
              <Link
                href="/symptoms"
                className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-medium transition-colors"
              >
                <Activity size={20} /> Symptoms
              </Link>
              <Link
                href="/explore"
                className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-medium transition-colors"
              >
                <Search size={20} /> Explore
              </Link>
              <Link
                href="/appointments"
                className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-2xl font-medium transition-colors"
              >
                <Calendar size={20} /> Bookings
              </Link>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto pb-24 md:pb-0">
            {children}
          </main>

          {/* Mobile Bottom Navigation (Hidden on Desktop) */}
          <nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-slate-200 flex justify-around items-center p-4 pb-safe z-50">
            <Link
              href="/"
              className="flex flex-col items-center gap-1 text-blue-600"
            >
              <Home size={24} strokeWidth={2.5} />
              <span className="text-[10px] font-semibold">Home</span>
            </Link>
            <Link
              href="/symptoms"
              className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Activity size={24} />
              <span className="text-[10px] font-medium">Symptoms</span>
            </Link>
            <Link
              href="/explore"
              className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Search size={24} />
              <span className="text-[10px] font-medium">Explore</span>
            </Link>
            <Link
              href="/appointments"
              className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Calendar size={24} />
              <span className="text-[10px] font-medium">Book</span>
            </Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
