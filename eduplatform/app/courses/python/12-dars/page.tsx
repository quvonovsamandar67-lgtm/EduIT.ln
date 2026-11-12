import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson12() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">12-Bob</span>
            <span className="text-sm text-gray-500">~ 18 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Set <span className="text-emerald-600">(takrorlanmas to&apos;plam)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Set - bu takrorlanmas elementlar to&apos;plami bo&apos;lib, unda bitta qiymat bir marta ishlatiladi. U ma&apos;lumotlarni bir-biridan ajratish va takrorlarni olib tashlashda juda foydali bo&apos;ladi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">1</p><p className="mt-2 text-sm text-gray-700">Setning list va tuple bilan farqini tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">2</p><p className="mt-2 text-sm text-gray-700">add(), remove() va union kabi metodlarni bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">3</p><p className="mt-2 text-sm text-gray-700">Takrorlarni olib tashlash uchun setdan foydalanishni ko&apos;rish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-emerald-600">12.1.</span> Set qanday yaratiladi?</h2>
            <p className="text-lg leading-relaxed text-gray-700">Set yaratish uchun qavslardan emas, balki jingalak qavslar yoki <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">set()</code> funksiyasidan foydalanamiz. Masalan: <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">{`languages = {"Python", "Java", "C++"}`}</code>.</p>
            <div className="mt-4 rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50 p-5">
              <p className="m-0 font-medium text-emerald-900"><strong>Qoidalar:</strong> set ichida takrorlanuvchi qiymatlar saqlanmaydi. Agar bir xil elementni ikkinchi marta qo&apos;shsangiz, u avtomatik tarzda bir martagina qoladi.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-emerald-600">12.2.</span> Set bilan ishlash buyruqlari</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Asosiy buyruqlar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><code className="font-mono text-pink-600">set_name.add(x)</code> — yangi element qo&apos;shadi.</li>
                  <li><code className="font-mono text-pink-600">set_name.remove(x)</code> — elementni olib tashlaydi.</li>
                  <li><code className="font-mono text-pink-600">len(set_name)</code> — uzunlikni bilar.</li>
                  <li><code className="font-mono text-pink-600">x in set_name</code> — element mavjudligini tekshiradi.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-yellow-800">Murakkab holat</h3>
                <p className="text-sm text-yellow-900">Setlarda tartib (ordering) mavjud emas. Shuning uchun elementlarni ketma-ket yozib chiqarsangiz, ularni identik tartibda ko&apos;ramasligimiz mumkin.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-emerald-600">12.3.</span> Real hayotdagi foydasi</h2>
            <p className="text-lg leading-relaxed text-gray-700">Set foydali bo&apos;ladi, chunki u biror sahnadagi takrorlangan ma&apos;lumotlarni tezkor ravishda ajratib olishga yordam beradi. Masalan, saytga yozilgan ko&apos;plab xabarlar ichida takrorlanuvchi foydalanuvchi nomlarini aniqlash yoki ro&apos;yxatdagi takrorlarni olib tashlash.</p>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
              <p className="text-yellow-900">Takrorlar kerak emas bo&apos;lganda, set ishlatish eng tezkor echimdir. Bu kodni ham soddaroq, ham tezroq qiladi.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Setda takrorlanmas elementlar saqlanadi.</li>
              <li>Set vazifasi ma&apos;lumotlarni tozalash va ajratishdir.</li>
              <li>add(), remove() va in operatori setda ishlatiladi.</li>
              <li>Set ichidagi tartib kafolatlanmaydi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-emerald-400 to-green-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Mashq 12</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> Quyidagi setda “Python” elementi mavjudligini tekshiring. Natijada <b>True</b> chiqishi kerak.</p>
          <CodeEditor initialCode={'languages = {"Python", "Java", "C++"}\nprint("Python" in languages)'} expectedOutput={"True"} taskId="python_12" />
        </div>
      </div>
    </main>
  );
}
