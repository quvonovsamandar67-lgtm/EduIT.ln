import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson31() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">31-Bob</span>
            <span className="text-sm text-gray-500">~ 20 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Date, time va datetime
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Sana va vaqt bilan ishlash dasturlarning har bir sohasida muhim. Pythonning datetime moduli bu vazifalarni ancha qulay qiladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">1</p><p className="mt-2 text-sm text-gray-700">datetime moduli bilan tanishish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">2</p><p className="mt-2 text-sm text-gray-700">Bugungi sana va vaqtni olish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">3</p><p className="mt-2 text-sm text-gray-700">Sana hisob-kitoblarini tushunish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-sky-600">31.1.</span> datetime moduli</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              <code className="rounded bg-gray-100 px-2 py-1 font-mono text-sky-600">datetime</code> — sana, vaqt va vaqt oralig&apos;i bilan ishlash uchun ishlatiladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-sky-600">31.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`from datetime import datetime
now = datetime.now()
print(now.year)`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-sky-600">31.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-sky-500 bg-sky-50 p-5">
              <p className="m-0 font-medium text-sky-900"><strong>Qoidalar:</strong> vaqt bilan ishlashda formatlar va turlar aniq bo&apos;lishi kerak. Noto&apos;g&apos;ri format xatolik chiqarishi mumkin.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-sky-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">Mashq 31</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> yilni chiqarib bering. Natija <b>2026</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'year = 2026\nprint(year)'} expectedOutput={"2026"} taskId="python_31" />
        </div>
      </div>
    </main>
  );
}
