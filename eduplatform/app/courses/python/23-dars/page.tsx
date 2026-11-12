import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson23() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">23-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            JSON va ma&apos;lumotlarni parse qilish
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            JSON (JavaScript Object Notation) internetdagi ma&apos;lumotlarni saqlashning eng keng tarqalgan formatidir. Python unda ma&apos;lumotlarni joydan-ketgacha oson o&apos;qish va ishlatish mumkin.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">1</p><p className="mt-2 text-sm text-gray-700">JSON formatini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">2</p><p className="mt-2 text-sm text-gray-700">json.loads() bilan ma&apos;lumotlarni o&apos;qish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">3</p><p className="mt-2 text-sm text-gray-700">Ma&apos;lumotlarni real loyihada ishlatish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-amber-600">23.1.</span> JSON nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              JSON — qavslar ichida yozilgan ma&apos;lumotlar strukturasi. U dict va listga o&apos;xshab ishlaydi, faqat tekis ko&apos;rinishda saqlanadi.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`import json
text = '{"name": "Ali", "age": 20}'
data = json.loads(text)
print(data["name"])`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-amber-600">23.2.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-amber-500 bg-amber-50 p-5">
              <p className="m-0 font-medium text-amber-900"><strong>Qoidalar:</strong> JSON ichida kalit va qiymat bo&apos;lishi kerak. Keyin Python dict sifatida ishlatiladi va <code className="rounded bg-amber-100 px-1 font-mono">["key"]</code> orqali murojat qilinadi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-amber-400 to-yellow-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Mashq 23</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> JSON string ichidagi <b>name</b> qiymatini chiqaring. Natija <b>Ali</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'import json\ntext = \'{"name": "Ali", "age": 20}\'\ndata = json.loads(text)\nprint(data["name"])'} expectedOutput={"Ali"} taskId="python_23" />
        </div>
      </div>
    </main>
  );
}
