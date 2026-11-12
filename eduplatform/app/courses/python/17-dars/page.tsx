import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson17() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-fuchsia-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fuchsia-700">17-Bob</span>
            <span className="text-sm text-gray-500">~ 20 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Comprehension <span className="text-fuchsia-600">(qisqa va tez yaratilgan ro&apos;yxatlar)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Pythonda ro&apos;yxat, set va dict yaratishni qisqa yo&apos;l bilan qilish mumkin. Bu ko&apos;rinishda code ancha kompakt va o&apos;qilishi yengil bo&apos;ladi, ayniqsa katta ma&apos;lumotlar bilan ishlaganda juda foydali bo&apos;ladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">1</p><p className="mt-2 text-sm text-gray-700">Comprehension tuzilishini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">2</p><p className="mt-2 text-sm text-gray-700">Ro&apos;yxat va dict bilan ishlashni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">3</p><p className="mt-2 text-sm text-gray-700">Qisqa va o&apos;qilishi qulay kod yozishni o&apos;rganish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-fuchsia-600">17.1.</span> List comprehension nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              List comprehension yordamida oddiy siklni qisqacha yozish mumkin. Misol uchun, 1 dan 5 gacha sonlarni kvadratga ko&apos;tarib ro&apos;yxat hosil qilamiz.
            </p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`numbers = [1, 2, 3, 4, 5]
squares = [n * n for n in numbers]
print(squares)`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-fuchsia-600">17.2.</span> if bilan birga ishlash</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Misol</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`nums = [1, 2, 3, 4, 5, 6]
filtered = [n for n in nums if n % 2 == 0]
print(filtered)`}</pre>
              </div>
              <div className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-fuchsia-800">Qaysi holatlarda qulay?</h3>
                <ul className="space-y-2 text-sm text-fuchsia-700">
                  <li>Qisqa filtr qilish kerak bo&apos;lganda.</li>
                  <li>Har bir elementni o&apos;zgartirish kerak bo&apos;lganda.</li>
                  <li>Ro&apos;yxatni o&apos;qish va tushunish oson bo&apos;lganda.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-fuchsia-600">17.3.</span> Dict comprehension</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Dict comprehension ham xuddi ro&apos;yxatga o&apos;xshash ishlaydi, faqat kalit va qiymatni bir vaqtda yaratadi. Bu ma&apos;lumotlarni tez va aniq shakllantirishga imkon beradi.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-fuchsia-500 bg-fuchsia-50 p-5">
              <p className="m-0 font-medium text-fuchsia-900"><strong>Qoidalar:</strong> comprehension yaxshi, lekin haddan tashqari uzun bo&apos;lib ketganda o&apos;qish qiyinlashadi. Shuning uchun kerakli paytlarda ishlatish yaxshiroq.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Comprehension eng ko&apos;p ishlatiladigan Python usullaridan biridir.</li>
              <li>U ro&apos;yxat va dictni qisqaroq yozishga yordam beradi.</li>
              <li>If bilan birgalikda filtr qilish ancha qulay bo&apos;ladi.</li>
              <li>Qisqa bo&apos;lsa ham, o&apos;qilishi oson bo&apos;lishiga e&apos;tibor berish kerak.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-fuchsia-400 to-pink-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold text-fuchsia-700">Mashq 17</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> 1 dan 6 gacha juft sonlarni list comprehension orqali chiqarib berish kerak. Natija <b>[2, 4, 6]</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'numbers = [1, 2, 3, 4, 5, 6]\nfiltered = [n for n in numbers if n % 2 == 0]\nprint(filtered)'} expectedOutput={"[2, 4, 6]"} taskId="python_17" />
        </div>
      </div>
    </main>
  );
}
