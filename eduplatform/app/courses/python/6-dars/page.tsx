import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson6() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">6-Bob</span>
            <span className="text-sm text-gray-500">~ 14 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Funksiyalar <span className="text-blue-600">(def va return)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Funksiyalar yordamida kodni takrorlanadigan va qayta foydalaniladigan kichik bloklarga ajratamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">1</p>
              <p className="mt-2 text-sm text-gray-700">Funksiya tushunchasini va uning foydali tomonlarini bilish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">2</p>
              <p className="mt-2 text-sm text-gray-700">def bilan funksiyani yaratishni o'rganish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">3</p>
              <p className="mt-2 text-sm text-gray-700">return orqali qiymatni qaytarishni tushunish.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">6.1.</span> Funksiya nima?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Funksiya - bu ma&apos;lum bir vazifani bajaradigan kod bloki. Dasturda bir xil amallarni bir necha marta yozish o&apos;rniga, bitta funksiya yozib, kerak bo&apos;lganda uni chaqirish mumkin.
              </p>
              <p>
                Masalan, “summa hisoblash”, “salom berish”, “sonlarni tekshirish” - bularning hammasi funksiya bo&apos;lishi mumkin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">6.2.</span> def va return
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Python&apos;da funksiya <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">def</code> kalit so&apos;zi bilan boshlanadi. Agar funksiya natija qaytarmoqchi bo&apos;lsa, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">return</code> dan foydalanamiz.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-green-200 bg-white shadow-sm">
                  <div className="border-b-2 border-green-200 bg-green-100 px-4 py-2">
                    <h3 className="font-bold text-green-800">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <div>def add(a, b):</div>
                    <div className="pl-4">return a + b</div>
                    <div>print(add(3, 5))</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border-2 border-red-200 bg-white shadow-sm">
                  <div className="border-b-2 border-red-200 bg-red-100 px-4 py-2">
                    <h3 className="font-bold text-red-800">❌ Xato yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-red-400">
                    <div>def add(a, b):</div>
                    <div className="pl-4">print(a + b)</div>
                    <div>add(3, 5)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">6.3.</span> Nima uchun return kerak?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                `print()` funksiyasi ma&apos;lumotni ekranga chiqaradi, lekin natijani qaytarmaydi. Agar biz qiymatni boshqa joyda ishlatmoqchi bo&apos;lsak, unda <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">return</code> ishlatamiz.
              </p>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
                <p className="text-yellow-900">
                  Katta dasturlarni tuzishda funksiyalar kodni soddalashtiradi va uni o&apos;qishni yengillashtiradi. Har bir funksiya bir maqsadga xizmat qilishi kerak.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>def orqali yangi funksiya yaratamiz.</li>
              <li>return orqali funksiya natija qaytaradi.</li>
              <li>print() faqat ekranga chiqaradi, lekin qaytarmaydi.</li>
              <li>Funksiyalar kodni yig&apos;ishib va qayta ishlatishni osonlashtiradi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Mashq 6</span>
          </div>

          <p className="mb-6 text-lg text-gray-700">
            <b>Vazifa:</b> Quyidagi funksiya ikkita sonni qo&apos;shib natija qaytarishi kerak. Natija ekranga <b>18</b> sifatida chiqishi kerak.
          </p>

          <CodeEditor
            initialCode={'def add(a, b):\n    return a + b\n\nprint(add(7, 11))'}
            expectedOutput={"18"}
            taskId="python_6"
          />
        </div>
      </div>
    </main>
  );
}
