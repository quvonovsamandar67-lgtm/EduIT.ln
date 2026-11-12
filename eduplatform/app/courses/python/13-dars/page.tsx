import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson13() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700">13-Bob</span>
            <span className="text-sm text-gray-500">~ 20 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            String metodi <span className="text-cyan-600">(matn bilan ishlash)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Str (matn) ma&apos;lumot turi juda ko&apos;p ishlatiladi: foydalanuvchi nomi, xabarlar, fayllar, URL, va uzatmalar. Python matn ustida ishlash uchun foydali metodlar beradi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">1</p><p className="mt-2 text-sm text-gray-700">Matnni tozalash va tekislash usullarini bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">2</p><p className="mt-2 text-sm text-gray-700">upper(), lower(), strip(), replace() va split() ni o&apos;rganish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">3</p><p className="mt-2 text-sm text-gray-700">Matn ustida ishlashning real loyihalarda qanday kerakligini tushunish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">13.1.</span> String metodlari nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">String metodlari matnni o&apos;zgartirish yoki taqqoslash uchun ishlatiladi. Python da juda ko&apos;p foydali str metodlari mavjud: <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">upper()</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">lower()</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">strip()</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">replace()</code>, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">split()</code>.</p>
            <div className="mt-4 rounded-r-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
              <p className="m-0 font-medium text-cyan-900"><strong>Qoidalar:</strong> matn o&apos;zgarmas obyekt hisoblanadi. Shuning uchun barcha metodlar yangi qiymat qaytaradi, asl ma&apos;lumotni o&apos;zgartirmaydi.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">13.2.</span> Asosiy metodlar</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Foydali buyruqlar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><code className="font-mono text-pink-600">text.upper()</code> — barcha harflarni katta qiladi.</li>
                  <li><code className="font-mono text-pink-600">text.lower()</code> — kichik harflarga aylantiradi.</li>
                  <li><code className="font-mono text-pink-600">text.strip()</code> — bosh va oxirdagi bo&apos;shliqlarni olib tashlaydi.</li>
                  <li><code className="font-mono text-pink-600">text.replace("a", "o")</code> — belgilarni almashtiradi.</li>
                  <li><code className="font-mono text-pink-600">text.split()</code> — so&apos;zlarga bo&apos;lib beradi.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-red-800">Xatolardan qochish</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>Matn ichida bo&apos;shliq bo&apos;lsa, uni <code className="font-mono">strip()</code> bilan tozalash muhim.</li>
                  <li>replace() ning natijasi yangi matn bo&apos;lib, asl string o&apos;zgarmaydi.</li>
                  <li>split() natijasida ro&apos;yxat hosil bo&apos;ladi, har doim list sifatida ishlatiladi.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">13.3.</span> Foydali usul</h2>
            <p className="text-lg leading-relaxed text-gray-700">Inputdan olingan ma&apos;lumot ko&apos;pincha xato bo&apos;shliq yoki katta-kichik harf bilan keladi. Shuning uchun developerlar <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">strip()</code> va <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">lower()</code> bilan ma&apos;lumotlarni standartlashtiradi.</p>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
              <p className="text-yellow-900">Matnni qarorlar bilan solishtirganda, ko&apos;pincha yozuvni kichik harfga aylantirib qo&apos;yish kerak, chunki “Admin”, “admin” va “ADMIN” bir xil bo&apos;lishi mumkin.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Matn ustida ishlash uchun string metodlari ishlatiladi.</li>
              <li>upper(), lower(), strip(), replace(), split() juda muhim metodlardir.</li>
              <li>String o&apos;zgarmas obyekt bo&apos;lgani uchun natija yangi qiymat qaytaradi.</li>
              <li>Input ma&apos;lumotlarini tozalash dasturlarda odatiy ishlatiladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-cyan-400 to-sky-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">Mashq 13</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> Matndagi bo&apos;shliqni olib tashlab, harflarni bosh harf bilan chiqaring. Natija <b>Aziz</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'name = "  aziz  "\nprint(name.strip().title())'} expectedOutput={"Aziz"} taskId="python_13" />
        </div>
      </div>
    </main>
  );
}
