import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eduIT.ln | Zamonaviy ta'lim platformasi",
  description: "AI, Python va JavaScript kurslari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#020817" />
      </head>
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <nav className="flex flex-col gap-3 border-b border-[var(--border)] bg-[var(--nav-bg)] p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-lg bg-blue-600 p-2 text-white transition group-hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[var(--nav-text)]">
              edu<span className="text-blue-600">IT</span>.ln
            </span>
          </Link>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-4 text-sm font-medium text-[var(--nav-text)]/80 sm:gap-6">
              <Link href="/courses" className="transition hover:text-blue-600">
                Kurslar
              </Link>
              <Link href="/login" className="transition hover:text-blue-600">
                Kirish
              </Link>
              <Link href="/admin/login" className="transition hover:text-blue-600">
                Admin
              </Link>
            </div>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Ro&apos;yxatdan o&apos;tish
            </Link>

            <ThemeToggle />
          </div>
        </nav>

        <div>{children}</div>
      </body>
    </html>
  );
}