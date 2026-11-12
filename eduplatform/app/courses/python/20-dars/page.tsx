import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson20() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">20-Bob</span>
            <span className="text-sm text-gray-500">~ 28 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Nested dict va set amaliyoti <span className="text-teal-600">(murakkab ma&apos;lumotlar tuzilmalari)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Real dasturlarda ma&apos;lumotlar bir tekis qatorda emas, balki ichma-ich tuzilmalarda bo&apos;ladi. dict ichidagi dict, setlar va bir nechta turdagi ma&apos;lumotlar birlashtirilgan holda ishlatiladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">1</p><p className="mt-2 text-sm text-gray-700">Nested dict nima ekanini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">2</p><p className="mt-2 text-sm text-gray-700">Set bilan ishlashni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">3</p><p className="mt-2 text-sm text-gray-700">Murakkab ma&apos;lumotlarni tahlil qilishni o&apos;rganish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-teal-600">20.1.</span> Nested dict</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Nested dict — bu dict ichida yana dict bo&apos;lgan ma&apos;lumotlar tuzilmasi. Bu holatda foydalanuvchining ismi, yoshi, shahri va o&apos;qish darajasi birlashtirilgan bo&apos;ladi.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`students = {
    "ali": {"yosh": 20, "shahar": "Toshkent"},
    "laylo": {"yosh": 19, "shahar": "Samarkand"}
}
print(students["ali"]["shahar"])`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-teal-600">20.2.</span> Set</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Asosiy ma&apos;lumotlar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>set takrorlanmas elementlardan iborat.</li>
                  <li>tartib saqlamaydi.</li>
                  <li>birikma, farq va kesishma amallarini tez bajara oladi.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-teal-800">Misol</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)`}</pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-teal-600">20.3.</span> Nima uchun bu muhim?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Dasturga kiruvchi ma&apos;lumotlar ko&apos;pincha bir-biriga bog&apos;liq bo&apos;ladi: foydalanuvchilar, mahsulotlar, tenglamalar, ro&apos;yxatlar. Nested dict va set bu murakkab strukturalarni oson boshqarishga, qidirishga va tekshirishga yordam beradi.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-teal-500 bg-teal-50 p-5">
              <p className="m-0 font-medium text-teal-900"><strong>Qoidalar:</strong> dict va setni faqat vazifa bo&apos;yicha ishlatishingiz kerak; agar tartib muhim bo&apos;lsa, list yoki tuple ishlatish yaxshi.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Nested dict ma&apos;lumotlarni ichma-ich tarzda saqlaydi.</li>
              <li>Set takrorlanmas elementlar to&apos;plamidir.</li>
              <li>Set bilan birikma va kesishma tez bajariladi.</li>
              <li>Real loyihalarda bu strukturalardan ko&apos;p foydalaniladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-teal-400 to-cyan-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Mashq 20</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> <code className="font-mono text-teal-600">students["ali"]["shahar"]</code> qiymatini chiqarish kerak. Natija <b>Toshkent</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'students = {\n    "ali": {"yosh": 20, "shahar": "Toshkent"},\n    "laylo": {"yosh": 19, "shahar": "Samarkand"}\n}\nprint(students["ali"]["shahar"])'} expectedOutput={"Toshkent"} taskId="python_20" />
        </div>
      </div>
    </main>
  );
}
