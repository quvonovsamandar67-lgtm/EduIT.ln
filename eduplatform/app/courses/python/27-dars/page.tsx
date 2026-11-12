import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson27() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700">27-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Debugging va xatolarni topish
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Har bir dasturchi xatoliklar bilan ishlaydi. Xatolarni tezda aniqlash va tuzatish jarayoni debugging deb ataladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">1</p><p className="mt-2 text-sm text-gray-700">Xato turlarini bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">2</p><p className="mt-2 text-sm text-gray-700">print va debag orqali tekshirish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">3</p><p className="mt-2 text-sm text-gray-700">Loyihada tezda tuzatish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">27.1.</span> Xatolar qanday chiqadi?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              SyntaxError, NameError, TypeError va ValueError kabi xatolar dasturchining ishini sekinlashtiradi, lekin to&apos;g&apos;ri usullar bilan ularni tez tuzatish mumkin.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">27.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`name = "Ali"
print(name)
# agar nom xato bo'lsa, tekshirish ishlatiladi`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-cyan-600">27.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
              <p className="m-0 font-medium text-cyan-900"><strong>Qoidalar:</strong> xato paydo bo&apos;lganda, dasturni kichik-qadamli tekshiring. print va o&apos;zgaruvchilar qiymati natijasini ko&apos;rib chiqish debuggingning asosiy usuli.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-cyan-400 to-sky-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">Mashq 27</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> debug qilish jarayonidagi muhim vositani chiqaring. Natija <b>print</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'debug_tool = "print"\nprint(debug_tool)'} expectedOutput={"print"} taskId="python_27" />
        </div>
      </div>
    </main>
  );
}
