"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { isAdminCredentialsValid } from "@/app/lib/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@eduit.ln");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Email va parolni to‘ldiring.");
      return;
    }

    if (!isAdminCredentialsValid(email, password)) {
      setError("Admin ma’lumotlari xato. Iltimos, to‘g‘ri ma’lumot kiriting.");
      return;
    }

    setLoading(true);

    try {
      window.localStorage.setItem("eduAdminAuth", "true");
      window.localStorage.setItem("eduAdminEmail", email.trim());
      router.push("/admin");
    } catch {
      setError("Kirish jarayonida xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-12 text-[var(--foreground)]">
      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-lg">
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Admin</p>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">Kirish</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--foreground)] outline-none transition focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Kirishmoqda..." : "Admin paneliga kirish"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-[var(--muted)]">
          <Link href="/" className="font-semibold text-blue-600 hover:underline">
            Bosh sahifaga qaytish
          </Link>
        </p>
      </div>
    </main>
  );
}
