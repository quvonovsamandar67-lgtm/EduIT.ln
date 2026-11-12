import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson24() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-rose-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">24-Bob</span>
            <span className="text-sm text-gray-500">~ 20 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            requests va API
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            API (Application Programming Interface) — bu boshqa tizimlar bilan aloqa qilishning standart usuli. Python orqali internetdagi ma&apos;lumotlarni so&apos;rash va olish mumkin.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">1</p><p className="mt-2 text-sm text-gray-700">API nima ekanini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">2</p><p className="mt-2 text-sm text-gray-700">requests bilan so&apos;rov yuborishni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">3</p><p className="mt-2 text-sm text-gray-700">Yakuniy javobni ko&apos;rib, ishlatishni o&apos;rganish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-rose-600">24.1.</span> API haqida umumiy tushuncha</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              API — bu dasturga kerakli ma&apos;lumotni yetkazib beruvchi eshikdir. Biror xizmatdan ma&apos;lumot o&apos;lish uchun so&apos;rov yuboriladi va javob keladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-rose-600">24.2.</span> requests bilan ishlash</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`import requests
response = requests.get('https://api.github.com')
print(response.status_code)`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-rose-600">24.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-rose-500 bg-rose-50 p-5">
              <p className="m-0 font-medium text-rose-900"><strong>Qoidalar:</strong> so&apos;rov yuborishdan oldin, nima olishni bilish kerak. Shuningdek, status kodini tekshirish muhim, chunki bu ishlash muvaffaqiyatini ko&apos;rsatadi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-rose-400 to-pink-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">Mashq 24</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> API dan keladigan status kodini simulyatsiya qiling. Natija <b>200</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'status_code = 200\nprint(status_code)'} expectedOutput={"200"} taskId="python_24" />
        </div>
      </div>
    </main>
  );
}
