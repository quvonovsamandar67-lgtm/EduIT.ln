"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState("admin@eduit.ln");

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("eduAdminAuth") === "true";
    const savedEmail = window.localStorage.getItem("eduAdminEmail");

    if (!isLoggedIn) {
      router.replace("/admin/login");
      return;
    }

    if (savedEmail) {
      setAdminEmail(savedEmail);
    }
  }, [router]);

  const handleLogout = () => {
    window.localStorage.removeItem("eduAdminAuth");
    window.localStorage.removeItem("eduAdminEmail");
    router.push("/admin/login");
  };

  return (
    <main className="min-h-screen bg-[var(--background)] p-6 text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Admin panel</p>
            <h1 className="mt-2 text-3xl font-bold">Xush kelibsiz</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {adminEmail}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
            >
              Chiqish
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Umumiy foydalanuvchilar</p>
            <p className="mt-3 text-3xl font-bold text-blue-600">128</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Bajarilgan darslar</p>
            <p className="mt-3 text-3xl font-bold text-emerald-600">2,340</p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <p className="text-sm text-[var(--muted)]">Faol kurslar</p>
            <p className="mt-3 text-3xl font-bold text-violet-600">36</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold">Boshqaruv</h2>
            <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
              Bosh sahifaga
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-semibold text-blue-800">Kurslarni boshqarish</p>
              <p className="mt-2 text-sm text-blue-700">Darslar, videolar va testlar ustida ishlash.</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="font-semibold text-emerald-800">Foydalanuvchilar</p>
              <p className="mt-2 text-sm text-emerald-700">Ro‘yxatdan o‘tganlar va faoliyatni kuzatish.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
