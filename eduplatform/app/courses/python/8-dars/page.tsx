import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson8() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">8-Bob</span>
            <span className="text-sm text-gray-500">~ 14 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Ro&apos;yxatlar <span className="text-blue-600">(Lists) - 2-qism</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Ro&apos;yxatlarni o&apos;zgartirish, element qo&apos;shish va o&apos;chirish uchun metodlardan foydalanamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-lime-200 bg-gradient-to-r from-lime-50 to-emerald-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-lime-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-lime-700">1</p>
              <p className="mt-2 text-sm text-gray-700">append(), remove() va pop() metodlarini tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-lime-700">2</p>
              <p className="mt-2 text-sm text-gray-700">Ro'yxatni dinamik ravishda yangilash yondashuvlarini bilish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-lime-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Element mavjudligiga qarab xatolarni oldini olish.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">8.1.</span> append(), remove(), pop()
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Ro&apos;yxatlar dinamik obyektlardir: ularning ichiga yangi elementlar qo&apos;shishimiz, eski elementlarni o&apos;chirishimiz mumkin. Buning uchun bitta nechta foydali metodlar bor.
              </p>
              <ul className="list-disc space-y-2 pl-5 font-medium">
                <li><code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">append()</code> — oxiriga yangi element qo&apos;shadi.</li>
                <li><code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">remove()</code> — ma&apos;lum qiymatni olib tashlaydi.</li>
                <li><code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">pop()</code> — oxirgi elementni olib tashlaydi.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">8.2.</span> Metodlarni ishlatish
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-green-200 bg-white shadow-sm">
                  <div className="border-b-2 border-green-200 bg-green-100 px-4 py-2">
                    <h3 className="font-bold text-green-800">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <div>cars = ["BMW", "Tesla"]</div>
                    <div>cars.append("Mercedes")</div>
                    <div>cars.remove("Tesla")</div>
                    <div>print(cars)</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border-2 border-red-200 bg-white shadow-sm">
                  <div className="border-b-2 border-red-200 bg-red-100 px-4 py-2">
                    <h3 className="font-bold text-red-800">❌ Xato yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-red-400">
                    <div>cars = ["BMW", "Tesla"]</div>
                    <div>cars.remove("Mercedes")</div>
                    <div>print(cars)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">8.3.</span> Dasturiy lo&apos;zim bo&apos;lganda ro&apos;yxatni sortlash
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Ro&apos;yxatlarni boshqarish juda muhim, ayniqsa ma&apos;lumotlar soni ko&apos;paygan vaqtda. Biz elementlarni qo&apos;shish, o&apos;chirish yoki tartibga solish uchun metodlardan foydalanamiz.
              </p>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
                <p className="text-yellow-900">
                  O&apos;chirishdan oldin element mavjudligiga ishonch hosil qiling, aks holda <code className="rounded bg-yellow-100 px-1 font-mono">ValueError</code> xatosi chiqadi.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>append() - oxiriga yangi element qo&apos;shadi.</li>
              <li>remove() - ma&apos;lum elementni olib tashlaydi.</li>
              <li>pop() - oxirgi elementni olib tashlaydi.</li>
              <li>Ro&apos;yxatlarni o&apos;zgartirish uchun metodlar ishlatiladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Mashq 8</span>
          </div>

          <p className="mb-6 text-lg text-gray-700">
            <b>Vazifa:</b> Quyidagi ro&apos;yxatga yangi avtomobil qo&apos;shib, keyin Tesla&apos;ni olib tashlang. Natija <b>[&apos;BMW&apos;, &apos;Mercedes&apos;]</b> bo&apos;lishi kerak.
          </p>

          <CodeEditor
            initialCode={'cars = ["BMW", "Tesla"]\ncars.append("Mercedes")\ncars.remove("Tesla")\nprint(cars)'}
            expectedOutput={"['BMW', 'Mercedes']"}
            taskId="python_8"
          />
        </div>
      </div>
    </main>
  );
}
