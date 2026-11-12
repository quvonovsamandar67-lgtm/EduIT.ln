import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson32() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-pink-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink-700">32-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Regular expressions
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Regular expressions (regex) — matnlar ichidan ma&apos;lum shablonlar orqali qidirish va moslik tekshirish uchun ishlatiladigan qudratli vositadir.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">1</p><p className="mt-2 text-sm text-gray-700">Regex tushunchasi.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">2</p><p className="mt-2 text-sm text-gray-700">re.search() va re.findall() ishlatish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">3</p><p className="mt-2 text-sm text-gray-700">Matndagi patternlarni aniqlash.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-pink-600">32.1.</span> Regex nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Regex matn ichidagi biror qator yoki patternni qidirishda ishlatiladi. Masalan, telefon raqam, email yoki so&apos;zlarni topishda foydali bo&apos;ladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-pink-600">32.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`import re
text = 'qwerty123'
print(bool(re.search(r'\d', text)))`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-pink-600">32.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-pink-500 bg-pink-50 p-5">
              <p className="m-0 font-medium text-pink-900"><strong>Qoidalar:</strong> regexlarni o&apos;rganishda shablon va patternlar aniq bo&apos;lishi kerak. Oddiy matnlarni topishda ham ishlatiladi, ammo murakkab holatlarda juda kuchli bo&apos;ladi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-pink-400 to-rose-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">Mashq 32</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> raqamni topish uchun shablonni chiqaring. Natija <b>\d</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'pattern = "\\d"\nprint(pattern)'} expectedOutput={"\\d"} taskId="python_32" />
        </div>
      </div>
    </main>
  );
}
