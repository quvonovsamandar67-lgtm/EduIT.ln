"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PYTHON_LESSON_COUNT, PYTHON_LESSON_IDS } from "@/app/lib/course-progress";
import { createClient, isSupabaseConfigured } from "@/app/lib/supabase/client";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(0);

  useEffect(() => {
    const countProgress = () => {
      const done = PYTHON_LESSON_IDS.filter(
        (taskId) => window.localStorage.getItem(`task_${taskId}`) === "true",
      ).length;
      const percent = Math.round((done / PYTHON_LESSON_COUNT) * 100);

      setCompletedLessons(done);
      setProgress(percent);
    };

    const loadSession = async () => {
      const savedEmail = window.localStorage.getItem("eduAuthEmail");

      if (savedEmail) {
        setUserEmail(savedEmail);
        countProgress();
        return;
      }

      if (!isSupabaseConfigured()) {
        router.replace("/login");
        return;
      }

      try {
        const supabase = createClient();
        if (!supabase) {
          router.replace("/login");
          return;
        }

        const { data, error } = await supabase.auth.getSession();
        const email = data.session?.user?.email;

        if (error || !email) {
          router.replace("/login");
          return;
        }

        window.localStorage.setItem("eduAuthEmail", email);
        window.localStorage.setItem("eduAuth", "true");
        setUserEmail(email);
      } catch {
        router.replace("/login");
      }
    };

    loadSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      if (supabase) {
        await supabase.auth.signOut();
      }
    } catch {
      // ignore signout errors and clear local state anyway
    }

    window.localStorage.removeItem("eduAuthEmail");
    window.localStorage.removeItem("eduAuth");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-[var(--background)] p-10 text-[var(--foreground)]">
      <div className="mx-auto max-w-4xl rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">Shaxsiy kabinet</h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            Logout
          </button>
        </div>

        <p className="mb-6 text-lg text-[var(--muted)]">
          Xush kelibsiz, <span className="font-bold text-blue-600">{userEmail || "foydalanuvchi"}</span>!
        </p>

        <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="mb-2 text-xl font-bold text-blue-900">Sizning taraqqiyotingiz</h2>
              <p className="text-blue-800">{completedLessons === 0 ? "Hozircha darslarni boshlash vaqti keldi." : `${completedLessons} ta darsni muvaffaqiyatli yakunladingiz.`}</p>
            </div>
            <div className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">{progress}%</div>
          </div>

          <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-blue-100">
            <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Yakunlangan</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">{completedLessons}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Umumiy darslar</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">{PYTHON_LESSON_COUNT}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Ko&apos;rsatma</p>
              <p className="mt-2 text-base font-bold text-gray-900">Har darsni 4 bosqich bilan o&apos;qing</p>
            </div>
          </div>

          <Link
            href="/courses/python"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            O&apos;qishni boshlash
          </Link>
        </div>
      </div>
    </main>
  );
}