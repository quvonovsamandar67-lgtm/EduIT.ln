import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson35() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">35-Bob</span>
            <span className="text-sm text-gray-500">~ 30 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Mini loyiha — To-do app
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            To-do application — bu vazifalarni qo&apos;shish, ko&apos;rish va o&apos;chirish kabi amallarni o&apos;rgatadi. Bu real app ishlashini tushunish uchun yaxshi loyiha bo&apos;ladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-red-700">1</p><p className="mt-2 text-sm text-gray-700">Vazifalarni saqlash.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-red-700">2</p><p className="mt-2 text-sm text-gray-700">Qo&apos;shish va o&apos;chirish amallari.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-red-700">3</p><p className="mt-2 text-sm text-gray-700">Kichik app arxitekturasi.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-red-600">35.1.</span> To-do app tuzilishi</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Bu appda vazifa ro&apos;yxati, qo&apos;shish funksiyasi va tugatish/o&apos;chirish logikasi bo&apos;ladi. Bu oddiy yuritish uchun yetarli bo&apos;ladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-red-600">35.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`tasks = ['read', 'write']
tasks.append('study')
print(tasks)`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-red-600">35.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-5">
              <p className="m-0 font-medium text-red-900"><strong>Qoidalar:</strong> vazifalarni saqlashda ro&apos;yxat yoki dict ishlatish oson va qulaydir. Bu ma&apos;lumotlarni boshqarishni kuchaytiradi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-red-400 to-orange-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">Mashq 35</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> vazifa ro&apos;yxatiga yangi element qo&apos;shing. Natija <b>['read', 'write', 'study']</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'tasks = ["read", "write"]\ntasks.append("study")\nprint(tasks)'} expectedOutput={"['read', 'write', 'study']"} taskId="python_35" />
        </div>
      </div>
    </main>
  );
}
