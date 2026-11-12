import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson29() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-fuchsia-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fuchsia-700">29-Bob</span>
            <span className="text-sm text-gray-500">~ 30 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Kengaytirilgan OOP
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            OOPni kengaytirish uchun inheritance, polymorphism va encapsulation tushunchalari muhim bo&apos;ladi. Bu qodda kodni qayta ishlatish, kengaytirish va yanada toza qilishga yordam beradi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-pink-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">1</p><p className="mt-2 text-sm text-gray-700">Inheritance tushunchasi.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">2</p><p className="mt-2 text-sm text-gray-700">Polymorphism va encapsulation.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">3</p><p className="mt-2 text-sm text-gray-700">Kengaytirilgan kod qurilishi.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-fuchsia-600">29.1.</span> Inheritance</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Inheritance — bu bir klassdan boshqasini meros qilib olish. Bu orqali umumiy xususiyatlar qayta-qayta yozilmaydi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-fuchsia-600">29.2.</span> Polymorphism</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Bitta metod turli klasslarda turlicha ishlashi polymorphism deyiladi. Bu dasturni moslashuvchan qiladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-fuchsia-600">29.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-fuchsia-500 bg-fuchsia-50 p-5">
              <p className="m-0 font-medium text-fuchsia-900"><strong>Qoidalar:</strong> klasslar o&apos;rtasidagi bog&apos;lanish maqsadli va aniq bo&apos;lishi kerak. Shunda kod oson tushuniladi va kengaytiriladi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-fuchsia-400 to-pink-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-bold text-fuchsia-700">Mashq 29</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> meros olish tushunchasi uchun qaysi kalit so&apos;z ishlatilishini chiqaring. Natija <b>class</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'keyword = "class"\nprint(keyword)'} expectedOutput={"class"} taskId="python_29" />
        </div>
      </div>
    </main>
  );
}
