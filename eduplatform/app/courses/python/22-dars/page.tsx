import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson22() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700">22-Bob</span>
            <span className="text-sm text-gray-500">~ 35 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Loyiha uslubidagi mini vazifa <span className="text-sky-600">(kirish, ma&apos;lumot, funksiyalar, class)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Bu darsda siz oldingi barcha mavzularni bitta loyihada birlashtirasiz: ma&apos;lumotlar, funksiyalar, shartlar va classlar birgalikda ishlaydi. Bu real dasturlashdagi asosiy yondashuvdir.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">1</p><p className="mt-2 text-sm text-gray-700">Loyihani qismlarga ajratishni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">2</p><p className="mt-2 text-sm text-gray-700">Funksiya va classlarni birga ishlatishni o&apos;rganish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-700">3</p><p className="mt-2 text-sm text-gray-700">Kichik loyiha yechimlari yaratishni boshlash.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-sky-600">22.1.</span> Loyiha qanday tuziladi?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Katta loyiha — bu bir necha kichik qismlardan iborat bo&apos;ladi: ma&apos;lumotlar, funksiyalar, tekshiruvlar va xulosalar. Shuning uchun boshlang&apos;ich qadamda oylamdagi vazifalarni alohida-funksiyalar orqali ajratish muhim.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def status(self):
        return "Pass" if self.score >= 70 else "Fail"

student = Student("Ali", 82)
print(student.status())`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-sky-600">22.2.</span> Qanday qilib yechim yaratish kerak?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">1-qadam</h3>
                <p className="text-sm text-gray-700">Maqsadni tushunish: nimani yaratishingiz kerak?</p>
              </div>
              <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-sky-800">2-qadam</h3>
                <p className="text-sm text-sky-700">Ma&apos;lumot va metodlarni ajratish.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-sky-600">22.3.</span> Real daraja</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Loyiha uslubidagi qarorlar dasturchini yanada professional qiladi. Katta dasturda funksiyalar, classlar va ma&apos;lumotlar birga ishlashi tabiiy holdir. Bu ko&apos;nikma keyingi bosqichda eng muhim hisoblanadi.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-sky-500 bg-sky-50 p-5">
              <p className="m-0 font-medium text-sky-900"><strong>Qoidalar:</strong> loyiha chiroyli va oson tushunarli bo&apos;lishi uchun kodni bo&apos;laklarga ajratish, nomlash va soddalikni saqlash muhimi.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Loyihalar ko&apos;p komponentlardan iborat bo&apos;ladi.</li>
              <li>Funksiya va class birgalikda ishlashi odatiy hol.</li>
              <li>Ma&apos;lumotlar, tekshiruv va natija bir-biriga bog&apos;liq bo&apos;ladi.</li>
              <li>Bu ko&apos;nikma professional dasturlashning asosidir.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-sky-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">Mashq 22</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> <code className="font-mono text-sky-600">Student("Ali", 82).status()</code> natijasini chiqarish kerak. Natija <b>Pass</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def status(self):\n        return "Pass" if self.score >= 70 else "Fail"\n\nstudent = Student("Ali", 82)\nprint(student.status())'} expectedOutput={"Pass"} taskId="python_22" />
        </div>
      </div>
    </main>
  );
}
