import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson18() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-pink-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink-700">18-Bob</span>
            <span className="text-sm text-gray-500">~ 22 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Lambda, map, filter <span className="text-pink-600">(tez va funksional yondashuv)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Python funksional uslub yordamida ma&apos;lumotlar ustida tez ishlash mumkin. lambda qisqa funksiya yaratadi, map ma&apos;lumotlarni o&apos;zgartiradi, filter esa kerakli elementlarni ajratib oladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">1</p><p className="mt-2 text-sm text-gray-700">Lambda funksiyasini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">2</p><p className="mt-2 text-sm text-gray-700">map bilan ma&apos;lumotlarni o&apos;zgartirishni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-pink-700">3</p><p className="mt-2 text-sm text-gray-700">filter orqali kerakli qiymatlarni tanlashni o&apos;rganish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-pink-600">18.1.</span> Lambda nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Lambda — qisqa, bir satrlik funksiya. U ko&apos;pincha kichik ma&apos;lumotlar ustida ishlashda ishlatiladi va boshqa funksiyalarga o&apos;tadi.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`double = lambda x: x * 2
print(double(5))`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-pink-600">18.2.</span> map va filter</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">map</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`nums = [1, 2, 3, 4]
result = list(map(lambda x: x * 2, nums))
print(result)`}</pre>
              </div>
              <div className="rounded-xl border border-pink-200 bg-pink-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-pink-800">filter</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`nums = [1, 2, 3, 4, 5, 6]
result = list(filter(lambda x: x % 2 == 0, nums))
print(result)`}</pre>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-pink-600">18.3.</span> Qachon ishlatiladi?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Katta ma&apos;lumotlar to&apos;plamlarini tez ishlatish, qiymatlarni filtr qilish yoki har bir elementni bir xil tarzda qayta ishlash uchun map va filter juda qulaydir. Bu uslub ko&apos;proq data-processing va avtomatlashtirish jarayonlarida ko&apos;rish mumkin.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-pink-500 bg-pink-50 p-5">
              <p className="m-0 font-medium text-pink-900"><strong>Qoidalar:</strong> lambda oddiy va kichik vazifalar uchun yaxshi, lekin uzun kodlar uchun normal <code className="rounded bg-pink-100 px-1 font-mono">def</code> ishlatish o&apos;qilishi qulayroq bo&apos;ladi.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Lambda qisqa funksiyalar yaratishga yordam beradi.</li>
              <li>map har bir element ustida o&apos;zgartirishni bajaradi.</li>
              <li>filter kerakli elementlarni ajratib oladi.</li>
              <li>Ular ma&apos;lumotlarni tezkor ishlash uchun foydali.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-pink-400 to-rose-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700">Mashq 18</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> <code className="font-mono text-pink-600">filter</code> orqali faqat juft sonlarni chiqarib berish kerak. Natija <b>[2, 4, 6]</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'numbers = [1, 2, 3, 4, 5, 6]\nresult = list(filter(lambda x: x % 2 == 0, numbers))\nprint(result)'} expectedOutput={"[2, 4, 6]"} taskId="python_18" />
        </div>
      </div>
    </main>
  );
}
