import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson34() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-lime-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-700">34-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Iterators va generators
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Iterator va generatorlar ma&apos;lumotlar ketma-ketligini yengil va samarali ishlatishda muhim rol o&apos;ynaydi. Ular katta ma&apos;lumotlarni birma-bir qaytarishga yordam beradi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-lime-200 bg-gradient-to-r from-lime-50 to-emerald-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-lime-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-lime-700">1</p><p className="mt-2 text-sm text-gray-700">Iterator tushunchasi.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-lime-700">2</p><p className="mt-2 text-sm text-gray-700">Generator orqali ma&apos;lumot berish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-lime-700">3</p><p className="mt-2 text-sm text-gray-700">Katta ma&apos;lumotlarni samarali ishlatish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-lime-600">34.1.</span> Iterator nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Iterator — ma&apos;lumotlar ketma-ketligini birma-bir olib chiqadigan ob&apos;ekt. <code className="rounded bg-gray-100 px-2 py-1 font-mono text-lime-600">next()</code> orqali elementlarni ketma-ket chiqara oladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-lime-600">34.2.</span> Generator</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Generator — <code className="rounded bg-gray-100 px-2 py-1 font-mono text-lime-600">yield</code> ishlatiladigan funksiya bo&apos;lib, u qiymatlarni qadam-baqadam qaytaradi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-lime-600">34.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-lime-500 bg-lime-50 p-5">
              <p className="m-0 font-medium text-lime-900"><strong>Qoidalar:</strong> generatorlarni juda katta massivlar bilan ishlatishda samarali bo&apos;ladi. Bu xotiradan yoshdan ko&apos;proq xotira sarfini oldini oladi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-lime-400 to-emerald-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-lime-700">Mashq 34</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> generator uchun ishlatiladigan kalit so&apos;zni chiqaring. Natija <b>yield</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'keyword = "yield"\nprint(keyword)'} expectedOutput={"yield"} taskId="python_34" />
        </div>
      </div>
    </main>
  );
}
