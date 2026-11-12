import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson14() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-700">14-Bob</span>
            <span className="text-sm text-gray-500">~ 20 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Type conversion <span className="text-violet-600">(turlarni aylantirish)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Ba&apos;zan bir turdagi ma&apos;lumotni boshqa turga aylantirish kerak bo&apos;ladi. Masalan, sonni matnga aylantirish yoki matnni songa aylantirish. Bunday holatlar dasturlashda juda tez-tez uchraydi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">1</p><p className="mt-2 text-sm text-gray-700">Turli ma&apos;lumotlar turlarini farqlashni o&apos;rganish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">2</p><p className="mt-2 text-sm text-gray-700">int(), float(), str(), bool() ni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">3</p><p className="mt-2 text-sm text-gray-700">Aylantirishda xatoliklarni oldini olish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">14.1.</span> Nega turlarni aylantirish kerak?</h2>
            <p className="text-lg leading-relaxed text-gray-700">Insonlar va kompyuterlar turli ma&apos;lumotlarni turlicha ko&apos;radilar. Misol uchun, foydalanuvchi kiritgan ma&apos;lumotlar asosan str (matn) bo&apos;ladi. Ammo biz ularni matematika amallari bilan ishlash uchun int yoki float turiga aylantirishimiz kerak.</p>
            <div className="mt-4 rounded-r-lg border-l-4 border-violet-500 bg-violet-50 p-5">
              <p className="m-0 font-medium text-violet-900"><strong>Qoidalar:</strong> ma&apos;lumot turini o&apos;zgartirishni xohlasangiz, Python&apos;ning maxsus funksiyalaridan foydalaning: <code className="rounded bg-violet-100 px-1 font-mono">str()</code>, <code className="rounded bg-violet-100 px-1 font-mono">int()</code>, <code className="rounded bg-violet-100 px-1 font-mono">float()</code>, <code className="rounded bg-violet-100 px-1 font-mono">bool()</code>.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">14.2.</span> Asosiy conversion funksiyalari</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Misollar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><code className="font-mono text-pink-600">int("20")</code> → <code className="font-mono">20</code></li>
                  <li><code className="font-mono text-pink-600">float("3.14")</code> → <code className="font-mono">3.14</code></li>
                  <li><code className="font-mono text-pink-600">str(25)</code> → <code className="font-mono">"25"</code></li>
                  <li><code className="font-mono text-pink-600">bool(1)</code> → <code className="font-mono">True</code></li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-red-800">Xatoliklar</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li><code className="font-mono">int("salom")</code> xatolik beradi.</li>
                  <li>Qator son bo&apos;lmagan hollarda matematik amallar qabul qilinmaydi.</li>
                  <li>float() bo&apos;shliq yoki harf bilan ishlaganda ham xatolik chiqishi mumkin.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-violet-600">14.3.</span> Bugungi amaliyotda qanaqa foydalanamiz?</h2>
            <p className="text-lg leading-relaxed text-gray-700">Foydalanuvchi uchun formalarni ishlatganda inputlar odatda string turi bo&apos;ladi. Lekin biz ularni son sifatida ishlatmoqchi bo&apos;lsak, avval int yoki float ga aylantiramiz. Bu esa dasturimizdagi hisob-kitoblarni ishlashi uchun zarur.</p>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
              <p className="text-yellow-900">Har doim ma&apos;lumot kiritilgan qiymatni turini tekshiring; aks holda dastur “ValueError” yoki “TypeError” bilan ishlamay qolishi mumkin.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Type conversion ma&apos;lumot turini boshqa turga aylantirishdir.</li>
              <li>str(), int(), float(), bool() asosiy konvertatsiya funksiyalaridir.</li>
              <li>Foydalanuvchi kiritgan qiymat ko&apos;pincha str turidadir.</li>
              <li>To&apos;g&apos;ri konvertatsiya qilish dastur xavfsizligini oshiradi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-violet-400 to-purple-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">Mashq 14</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> Matn ko&apos;rinishidagi sonni raqamga aylantirib, yig&apos;indini chiqarish kerak. Natija <b>30</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'a = int("10")\nb = int("20")\nprint(a + b)'} expectedOutput={"30"} taskId="python_14" />
        </div>
      </div>
    </main>
  );
}
