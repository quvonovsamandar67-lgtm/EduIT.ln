import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson15() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">15-Bob</span>
            <span className="text-sm text-gray-500">~ 22 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Exception handling <span className="text-rose-600">(xatolarga qarshi himoya)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Dastur ishlayotganda xatoliklar ko&apos;p uchraydi. Python bu xatoliklarni tutib olish va foydalanuvchiga tushunarli javob qaytarishga imkon beradi. Bu usul dasturlarning ishonchli ishlashini ta&apos;minlaydi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">1</p><p className="mt-2 text-sm text-gray-700">Xatolik nima ekanini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">2</p><p className="mt-2 text-sm text-gray-700">try/except bloklarini qo&apos;llashni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">3</p><p className="mt-2 text-sm text-gray-700">Foydalanuvchi uchun tushunarli xabar berishni o&apos;rganish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-rose-600">15.1.</span> Xatoliklar nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">Dastur yozishda kod to&apos;g&apos;ri ishlamasligi mumkin. Masalan, sonni matnga bo&apos;lish, mavjud bo&apos;lmagan indeksga murojaat qilish yoki qatorni intga aylantirish. Bunday vakiyalar dasturlarda exception (istisno) deb ataladi.</p>
            <div className="mt-4 rounded-r-lg border-l-4 border-rose-500 bg-rose-50 p-5">
              <p className="m-0 font-medium text-rose-900"><strong>Qoidalar:</strong> xatolik yuz berganda dastur to&apos;xtab qolmasligi uchun <code className="rounded bg-rose-100 px-1 font-mono">try</code> va <code className="rounded bg-rose-100 px-1 font-mono">except</code> bloklaridan foydalaniladi.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-rose-600">15.2.</span> try/except sintaksisi</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Asosiy misol</h3>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">
{`try:
    x = int("abc")
except ValueError:
    print("Son kiritishda xatolik yuz berdi")`}
                </pre>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-red-800">Nima sodir bo&apos;ladi?</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li><code className="font-mono">try</code> ichidagi kod bajariladi.</li>
                  <li>Agar xatolik yuz bersa, <code className="font-mono">except</code> ishlaydi.</li>
                  <li>Dastur to&apos;xtamaydi va foydalanuvchiga tushunarli xabar chiqadi.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-rose-600">15.3.</span> Foydalanuvchiga yaxshiroq tajriba</h2>
            <p className="text-lg leading-relaxed text-gray-700">Dastur ishlab chiqishda xatoni savatga yig&apos;ib qo&apos;ymaslik kerak. Buning o&apos;rniga, foydalanuvchiga nimada xatolik borligini tushuntirish yaxshi usuldir.</p>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
              <p className="text-yellow-900">except blokda “ko&apos;rsatma” yoki “sozlashda xatolik” kabi aniq va foydali xabar yozish kerak. Chunki foydalanuvchi qaysi qismda xatolik ekanini bilishi muhim.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Xatoliklar dasturlashda tabiiy hodisadir.</li>
              <li>try/except bajariladigan kodni himoya qiladi.</li>
              <li>Foydalanuvchiga tushunarli xabar berish kasbiy amaliyotdir.</li>
              <li>Exception handling ishlaydigan dastur ishonchliroq bo&apos;ladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-rose-400 to-pink-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-700">Mashq 15</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> Son kiritishda xatolik bo&apos;lsa, foydalanuvchiga tushunarli xabar chiqishi kerak. Natija <b>Son kiritishda xatolik yuz berdi</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'try:\n    x = int("abc")\nexcept ValueError:\n    print("Son kiritishda xatolik yuz berdi")'} expectedOutput={"Son kiritishda xatolik yuz berdi"} taskId="python_15" />
        </div>
      </div>
    </main>
  );
}
