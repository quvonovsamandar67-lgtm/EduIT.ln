import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson26() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">26-Bob</span>
            <span className="text-sm text-gray-500">~ 20 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Paketlar va pip
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Pythondagi paketlar boshqa dasturchilar yozgan funksiyalar to&apos;plamidir. Pip esa bu paketlarni o&apos;rnatish va boshqarish uchun eng asosiy vositadir.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-violet-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">1</p><p className="mt-2 text-sm text-gray-700">Paketlar nima ekanini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">2</p><p className="mt-2 text-sm text-gray-700">pip orqali paket o&apos;rnatishni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">3</p><p className="mt-2 text-sm text-gray-700">Loyihalarda paketlarni boshqarish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-indigo-600">26.1.</span> pip nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              pip Python uchun paketlar menegeridir. U yangi kutubxonalarni install qilish, yangilash va natijalarni boshqarish imkonini beradi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-indigo-600">26.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`pip install requests
# yoki
python -m pip install requests`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-indigo-600">26.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-5">
              <p className="m-0 font-medium text-indigo-900"><strong>Qoidalar:</strong> paketlarni global emas, virtual muhit ichida o&apos;rnatish yaxshiroqdir. Bu loyiha mustaqilligini saqlaydi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-400 to-violet-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">Mashq 26</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> `pip` bu nima deb hisoblaydi? Natija <b>package installer</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'pip_tool = "package installer"\nprint(pip_tool)'} expectedOutput={"package installer"} taskId="python_26" />
        </div>
      </div>
    </main>
  );
}
