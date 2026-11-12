import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson19() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">19-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Fayllar bilan ishlash <span className="text-orange-600">(write, read, save, data)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Dasturlar ma&apos;lumotni doimiy saqlash uchun fayllardan foydalanadi. Fayllar bilan ishlash orqali biz ma&apos;lumotlarni uzaytirib, keyin qayta ishlatishimiz mumkin.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-orange-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">1</p><p className="mt-2 text-sm text-gray-700">Faylga yozishni tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">2</p><p className="mt-2 text-sm text-gray-700">Fayldan o&apos;qishni o&apos;rganish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">3</p><p className="mt-2 text-sm text-gray-700">Dasturda ma&apos;lumotlarni saqlashdan foydalangan holda ishlash.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-orange-600">19.1.</span> Faylga yozish</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Python faylga yozish uchun <code className="rounded bg-gray-100 px-2 py-1 font-mono text-orange-600">open()</code> funksiyasidan foydalanadi. <code className="rounded bg-gray-100 px-2 py-1 font-mono text-orange-600">"w"</code> rejimi faylni yozish uchun ishlatiladi.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`with open("notes.txt", "w") as file:
    file.write("Python")`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-orange-600">19.2.</span> Fayldan o&apos;qish</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Misol</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`with open("notes.txt", "r") as file:
    content = file.read()
    print(content)`}</pre>
              </div>
              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-orange-800">Muhim nuqtalar</h3>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>with yordamida fayl avtomatik yopiladi.</li>
                  <li>read() butun faylni o&apos;qib beradi.</li>
                  <li>write() faylga ma&apos;lumot yozadi.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-orange-600">19.3.</span> Nega muhim?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Fayllar orqali xabarlar, ro&apos;yxatlar, hisobotlar, ma&apos;lumotlar bazasi kabi muhim ma&apos;lumotlarni saqlash mumkin. Bu dasturlarni real hayotdagi tizimlarga yaqinlashtiradi.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-5">
              <p className="m-0 font-medium text-orange-900"><strong>Qoidalar:</strong> faylni yozgandan so&apos;ng, uni qayta o&apos;qish yaxshiroq. Shunda yozilgan ma&apos;lumotlar to&apos;g&apos;ri kelganini tekshirish mumkin.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Fayllar ma&apos;lumotlarni doimiy saqlash uchun ishlatiladi.</li>
              <li>open(..., "w") bilan yozish, open(..., "r") bilan o&apos;qish amalga oshiriladi.</li>
              <li>with blokidan foydalanish xavfsiz va toza kod yaratadi.</li>
              <li>Real loyihalarda ma&apos;lumotlarni fayllarda saqlash ko&apos;p uchraydi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-orange-400 to-yellow-500"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">Mashq 19</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> Faylga <b>Python</b> yozing va uni qayta o&apos;qib chiqaring. Natija <b>Python</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'with open("notes.txt", "w") as file:\n    file.write("Python")\n\nwith open("notes.txt", "r") as file:\n    print(file.read())'} expectedOutput={"Python"} taskId="python_19" />
        </div>
      </div>
    </main>
  );
}
