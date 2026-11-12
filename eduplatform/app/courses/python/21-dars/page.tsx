import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson21() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700">21-Bob</span>
            <span className="text-sm text-gray-500">~ 30 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            OOP asoslari <span className="text-cyan-600">(Class, object, __init__)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            OOP (Object-Oriented Programming) dasturning qismlarini turli ob&apos;ektlar sifatida ko&apos;rish usulidir. Har bir obyekt o&apos;zining xususiyatlari va metodlari bilan ishlaydi; bu murakkab dasturlarni ancha tartibli qiladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">1</p><p className="mt-2 text-sm text-gray-700">Class va object tushunchasini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">2</p><p className="mt-2 text-sm text-gray-700">__init__ uchun nimani bilishni o&apos;rganish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">3</p><p className="mt-2 text-sm text-gray-700">Ob&apos;ektga yo&apos;naltirilgan kod yozishni boshlash.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">21.1.</span> Class nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Class — bu qo&apos;llaniladigan model yoki shablon. Misol uchun, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-cyan-600">Car</code> klassi avtomobillarni ifodalash uchun ishlatiladi. Har bir avtomobil obyekt bo&apos;ladi.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`class Car:
    def __init__(self, model):
        self.model = model

car1 = Car("Tesla")
print(car1.model)`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">21.2.</span> __init__ usuli</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Nima uchun kerak?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>U obyekt yaratilganda boshlang&apos;ich qiymatlarni berishga yordam beradi.</li>
                  <li>Har bir obyekt o&apos;zining xususiyatlariga ega bo&apos;ladi.</li>
                  <li>OOP kodini strukturali qiladi.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-cyan-800">Asosiy tamoyil</h3>
                <p className="text-sm text-cyan-700">Class — umumiy shablon, object — haqiqiy namunalar. Ularning orasidagi farq kerakli xususiyatlarni maqsadli tarzda boshqarishga yordam beradi.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">21.3.</span> Metodlar bilan ishlash</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Klass ichida funksiyalar yaratish mumkin. Bu funksiyalar metodlar deb ataladi va obyektga xos harakatlarni bajaradi. Masalan, avtomobilni tekshirish, yo&apos;nalishni ko&apos;rsatish yoki tezlikni oshirish.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
              <p className="m-0 font-medium text-cyan-900"><strong>Qoidalar:</strong> OOP dasturlashda ma&apos;lumot va harakat birga jamlanadi. Bu kodni o&apos;qishni va kengaytirishni osonlashtiradi.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Class umumiy shakldir, object esa konkret namuna.</li>
              <li>__init__ obyekt yaratilganda qiymatlarni beradi.</li>
              <li>Metodlar obyektning harakatlarini ko&apos;rsatadi.</li>
              <li>OOP murakkab dasturlarni ko&apos;proq tartibli va kengaytiriladigan qiladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-cyan-400 to-sky-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">Mashq 21</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> <code className="font-mono text-cyan-600">Car("Tesla")</code> obyektini yaratib, model nomini chiqaring. Natija <b>Tesla</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'class Car:\n    def __init__(self, model):\n        self.model = model\n\ncar1 = Car("Tesla")\nprint(car1.model)'} expectedOutput={"Tesla"} taskId="python_21" />
        </div>
      </div>
    </main>
  );
}
