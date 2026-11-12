import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson9() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">9-Bob</span>
            <span className="text-sm text-gray-500">~ 15 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Tsikl va ro&apos;yxat <span className="text-blue-600">(for loop bilan)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Ro&apos;yxatdagi har bir elementni ketma-ket ishlatish uchun <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">for</code> siklidan foydalanamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">1</p>
              <p className="mt-2 text-sm text-gray-700">for siklini ro'yxat bilan ishlatishni o'rganish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">2</p>
              <p className="mt-2 text-sm text-gray-700">Har bir elementni ketma-ket ishlatishni tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Real holatlar uchun sikl va ma'lumotlar tuzilmasini birlashtirish.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">9.1.</span> Ro&apos;yxat bilan sikl ishlatish
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Agar dasturda bir nechta ism yoki raqamlar ro&apos;yxati bo&apos;lsa, ularni bitta-ikki qadamda ishlatish uchun for siklidan foydalanamiz. Bu kodni qisqartiradi va o&apos;qishni osonlashtiradi.
              </p>
              <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-5">
                <p className="m-0 font-medium text-blue-900">
                  <strong>Misol:</strong> <code className="rounded bg-blue-100 px-1 font-mono">for student in students:</code>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">9.2.</span> Kod misoli
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-green-200 bg-white shadow-sm">
                  <div className="border-b-2 border-green-200 bg-green-100 px-4 py-2">
                    <h3 className="font-bold text-green-800">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <div>students = ["Ali", "Laylo", "Sardor"]</div>
                    <div>for student in students:</div>
                    <div className="pl-4">print(student)</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border-2 border-red-200 bg-white shadow-sm">
                  <div className="border-b-2 border-red-200 bg-red-100 px-4 py-2">
                    <h3 className="font-bold text-red-800">❌ Xato yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-red-400">
                    <div>students = ["Ali", "Laylo", "Sardor"]</div>
                    <div>for student in students</div>
                    <div className="pl-4">print(student)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">9.3.</span> Real hayotdan misol
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Masalan, talabalarning ismlari ro&apos;yxatida birma-bir aylanib, ularning nomini ekraniga chiqarish mumkin. Bu usul maktab, ofis yoki online platformalar uchun ham qulay.
              </p>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
                <p className="text-yellow-900">
                  <code className="rounded bg-yellow-100 px-1 font-mono">for</code> siklida qadam nomi (masalan, <code className="rounded bg-yellow-100 px-1 font-mono">student</code>) ixtiyoriy bo&apos;lishi mumkin, lekin o&apos;qilishi qulay bo&apos;lishi kerak.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>for sikli ro&apos;yxat elementlari ustida aylanadi.</li>
              <li>Har bir element uchun bitta qadam ishlaydi.</li>
              <li>for va ro&apos;yxat birgalikda real ma&apos;lumotlarni qayta-qayta ishlashda ishlatiladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Mashq 9</span>
          </div>

          <p className="mb-6 text-lg text-gray-700">
            <b>Vazifa:</b> Quyidagi ro&apos;yxatdagi har bir ismni alohida-alohida ekranga chiqarish kerak. Natija <b>Ali</b>, <b>Laylo</b>, <b>Sardor</b> ko&apos;rinishida bo&apos;lishi kerak.
          </p>

          <CodeEditor
            initialCode={'students = ["Ali", "Laylo", "Sardor"]\nfor student in students:\n    print(student)'}
            expectedOutput={"Ali\nLaylo\nSardor"}
            taskId="python_9"
          />
        </div>
      </div>
    </main>
  );
}
