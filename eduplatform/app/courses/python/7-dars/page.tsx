import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson7() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">7-Bob</span>
            <span className="text-sm text-gray-500">~ 12 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Ro&apos;yxatlar <span className="text-blue-600">(Lists) - 1-qism</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Ro&apos;yxatlar bir nechta ma&apos;lumotni bir joyga yig&apos;ib qo&apos;yib, ularga indekslar orqali murojaat qilish imkonini beradi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">1</p>
              <p className="mt-2 text-sm text-gray-700">Ro'yxatning qaysi maqsadga xizmat qilishini tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">2</p>
              <p className="mt-2 text-sm text-gray-700">Indekslar orqali elementlarga murojaat qilish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">3</p>
              <p className="mt-2 text-sm text-gray-700">len() yordamida uzunlikni aniqlash.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">7.1.</span> Ro&apos;yxat nima?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Ro&apos;yxatlar bir nechta qiymatni o&apos;z ichiga oladi. Ular qutichalar kabi ishlaydi, faqat ichida bir nechta element bo&apos;ladi. Masalan, do&apos;konning mahsulotlari, talabalar nomlari yoki sonlar ketma-ketligi ro&apos;yxat sifatida saqlanishi mumkin.
              </p>
              <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-5">
                <p className="m-0 font-medium text-blue-900">
                  <strong>Misol:</strong> <code className="rounded bg-blue-100 px-1 font-mono">fruits = ["olma", "anor", "uzum"]</code>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">7.2.</span> Indekslar va elementlarga murojaat
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Ro&apos;yxatdagi har bir elementning o&apos;z raqami (indeksi) bo&apos;ladi. Python&apos;da indeks 0 dan boshlanadi. Shuning uchun birinchi element <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">[0]</code>, ikkinchi <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">[1]</code> kabi.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-green-200 bg-white shadow-sm">
                  <div className="border-b-2 border-green-200 bg-green-100 px-4 py-2">
                    <h3 className="font-bold text-green-800">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <div>fruits = ["olma", "anor", "uzum"]</div>
                    <div>print(fruits[1])</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border-2 border-red-200 bg-white shadow-sm">
                  <div className="border-b-2 border-red-200 bg-red-100 px-4 py-2">
                    <h3 className="font-bold text-red-800">❌ Xato yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-red-400">
                    <div>fruits = ["olma", "anor", "uzum"]</div>
                    <div>print(fruits[3])</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">7.3.</span> Ro&apos;yxat uzunligi va ishlatish
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Ro&apos;yxatdagi elementlar sonini bilish uchun <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">len()</code> funksiyasidan foydalanamiz. Bu juda foydali, ayniqsa ro&apos;yxatdagi ma&apos;lumotlarni dasturiy tarzda ishlatganda.
              </p>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
                <p className="text-yellow-900">
                  Indexlar 0 dan boshlanishi muhim. Agar siz 1-kodni olmoqchi bo&apos;lsangiz, <code className="rounded bg-yellow-100 px-1 font-mono">[0]</code> emas, <code className="rounded bg-yellow-100 px-1 font-mono">[1]</code> ishlatishingiz kerak.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Ro&apos;yxatlar bir nechta ma&apos;lumotni bir joyga yig&apos;adi.</li>
              <li>Elementlarga indekslar orqali murojat qilinadi.</li>
              <li>Indekslar 0 dan boshlanadi.</li>
              <li>len() funksiyasi uzunlikni qaytaradi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Mashq 7</span>
          </div>

          <p className="mb-6 text-lg text-gray-700">
            <b>Vazifa:</b> Quyidagi ro&apos;yxatda ikkinchi elementni chiqarish kerak. Natija <b>anor</b> bo&apos;lishi kerak.
          </p>

          <CodeEditor
            initialCode={'fruits = ["olma", "anor", "uzum"]\nprint(fruits[1])'}
            expectedOutput={"anor"}
            taskId="python_7"
          />
        </div>
      </div>
    </main>
  );
}
