import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson16() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-700">16-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Modullar va paketlar <span className="text-violet-600">(import, kutubxonalar, mustaqil ishlatish)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Dastur yozishda bir xil vazifalar ko&apos;p uchraydi. Ularni qayta-qayta yozish o&apos;rniga, oldindan tayyorlangan funksiyalarni import qilib ishlatamiz. Bu dasturni qanchalik tez, toza va professional qilishni ta&apos;minlaydi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">1</p><p className="mt-2 text-sm text-gray-700">Modul nima ekanini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">2</p><p className="mt-2 text-sm text-gray-700">import, from ... import ... sintaksisini bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">3</p><p className="mt-2 text-sm text-gray-700">Real loyihalarda kutubxona ishlatishni o&apos;rganish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">16.1.</span> Modul nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Modul — bu funksiyalar, klasslar va o&apos;zgaruvchilar to&apos;plami bo&apos;lgan fayl. Python bilan keladigan standart kutubxonalar ko&apos;p. Masalan, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-violet-600">math</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-violet-600">random</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-violet-600">datetime</code>.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-violet-500 bg-violet-50 p-5">
              <p className="m-0 font-medium text-violet-900"><strong>Qoidalar:</strong> kutubxona ishlatish uchun <code className="rounded bg-violet-100 px-1 font-mono">import</code> yoziladi. Bu kodni qisqartirib, samarali qiladi.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">16.2.</span> Eng ko&apos;p ishlatiladigan usullar</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Asosiy misollar</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`import math
print(math.sqrt(81))
print(math.pi)`}</pre>
              </div>
              <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-violet-800">Nega muhim?</h3>
                <ul className="space-y-2 text-sm text-violet-700">
                  <li>Matematik hisoblashlarni tez bajaradi.</li>
                  <li>Yangi kod yozmasdan tayyor funksiyalardan foydalanasiz.</li>
                  <li>Loyihalar osonroq kengaytiriladi.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">16.3.</span> Paketlar qanday ishlaydi?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Paket — bu bir nechta modullar bir xilda jamlangan katalogdir. Masalan, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-violet-600">pandas</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-violet-600">numpy</code> kabi kutubxonalar ko&apos;p moduldan tashkil topgan. Bu nima uchun muhim? Chunki loyiha o&apos;sib borishi bilan kod katta va murakkab bo&apos;ladi, modullar esa uni bo&apos;laklarga ajratadi.
            </p>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
              <p className="text-yellow-900">Birinchi navbatda standart kutubxonalar bilan ishlashni o&apos;rganing. Keyin uchinchi tomon paketlar va joriy loyihalarda importdan foydalanishni bilib oling.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Modul — tayyor funksiyalar va klasslar to&apos;plamidir.</li>
              <li>import yordamida kerakli module yuklanadi.</li>
              <li>Modullar kodni soddaroq, tezroq va ishonchliroq qiladi.</li>
              <li>Paketlar bir necha modullarni birga birlashtiradi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-violet-400 to-indigo-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">Mashq 16</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> <code className="font-mono text-violet-600">math.sqrt(81)</code> qiymatini ishlab chiqaringsiz. Natija <b>9.0</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'import math\nprint(math.sqrt(81))'} expectedOutput={"9.0"} taskId="python_16" />
        </div>
      </div>
    </main>
  );
}
