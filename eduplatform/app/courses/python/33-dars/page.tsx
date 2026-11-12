import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson33() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-700">33-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Decorators
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Decorator — bu funksiyani o&apos;ramlab, unga qo&apos;shimcha xatti-harakat qo&apos;shish uchun ishlatiladigan qulay usuldir. Bu, ayniqsa, tez-tez ishlatiladigan xususiyatlarni qayta ishlatishda foydalidir.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">1</p><p className="mt-2 text-sm text-gray-700">Decorator nima ekanini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">2</p><p className="mt-2 text-sm text-gray-700">@wrapper usulidan foydalanish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">3</p><p className="mt-2 text-sm text-gray-700">Kodni qayta ishlatib ishlash.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">33.1.</span> Decorator tushunchasi</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Decorator funksiyani uzatib, uning oldidan yoki keyin qo&apos;shimcha amallarni bajaradi. Bu foydalanuvchilarga qo&apos;shimcha xususiyatlarni berishda juda qulaydir.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">33.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`def decorator(func):
    def wrapper():
        print('before')
        func()
        print('after')
    return wrapper

@decorator
def hello():
    print('hi')

hello()`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">33.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-violet-500 bg-violet-50 p-5">
              <p className="m-0 font-medium text-violet-900"><strong>Qoidalar:</strong> decorator yozishda funksiyani to&apos;g&apos;ri qaytarish va wrapper ichida func() chaqirish muhim. Bu kodning ishlashini saqlaydi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-violet-400 to-indigo-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">Mashq 33</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> decorator uchun ishlatiladigan asosiy funksiya nomini chiqaring. Natija <b>wrapper</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'wrapper = "wrapper"\nprint(wrapper)'} expectedOutput={"wrapper"} taskId="python_33" />
        </div>
      </div>
    </main>
  );
}
