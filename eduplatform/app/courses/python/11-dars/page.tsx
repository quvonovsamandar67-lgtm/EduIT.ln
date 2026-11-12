import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson11() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">11-Bob</span>
            <span className="text-sm text-gray-500">~ 18 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Tuple <span className="text-indigo-600">(o&apos;zgarmas ro&apos;yxatlar)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Tuple ma&apos;lumotlarni saqlashning barqaror usuli bo&apos;lib, u ro&apos;yxatga o&apos;xshash bo&apos;lsa-da, o&apos;zgartirilmaydi. Bu xususiyat ko&apos;p hollarda ma&apos;lumotning xavfsizligini ta&apos;minlaydi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-violet-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">1</p><p className="mt-2 text-sm text-gray-700">Tuple va list orasidagi farqni tushunish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">2</p><p className="mt-2 text-sm text-gray-700">Tuple yaratish va indekslash qoidalarini bilish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">3</p><p className="mt-2 text-sm text-gray-700">Nega tuple ba&apos;zi dasturlar uchun xavfsizroq ekanini tushunish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-indigo-600">11.1.</span> Tuple nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Tuple - bu o&apos;zgarmas ketma-ketlik. U qavslar ichiga yoziladi: <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">("Ali", "Laylo")</code>. Listdan farqli o&apos;laroq, tuple elementlarini keyinroq o&apos;zgartirish mumkin emas.
            </p>
            <div className="mt-4 rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-5">
              <p className="m-0 font-medium text-indigo-900"><strong>Qoidalar:</strong> tuple yaratishda qavslar ishlatiladi, lekin ba&apos;zi hollarda ular bo&apos;lmasa ham tuple yaratilishi mumkin. Masalan: <code className="rounded bg-indigo-100 px-1 font-mono">a = (1, 2, 3)</code>.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-indigo-600">11.2.</span> Tuple bilan ishlash buyruqlari</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-gray-900">Asosiy buyruqlar</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><code className="font-mono text-pink-600">tuple_name[0]</code> — birinchi elementni oladi.</li>
                  <li><code className="font-mono text-pink-600">len(tuple_name)</code> — uzunlikni hisoblaydi.</li>
                  <li><code className="font-mono text-pink-600">tuple_name.count(x)</code> — elementning necha marta takrorlanganini sanaydi.</li>
                  <li><code className="font-mono text-pink-600">tuple_name.index(x)</code> — elementning indeksini topadi.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
                <h3 className="mb-3 font-bold text-red-800">Eslatmalar</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>Tuple o&apos;zgarmas bo&apos;lgani uchun uni “ma&apos;lumotning barqaror qismi” deb qarash mumkin.</li>
                  <li>Tuplega yangi element qo&apos;shish yoki o&apos;chirish mumkin emas.</li>
                  <li>Ammo tuple ichidagi obyektlarni o&apos;zgartirishning o&apos;zi boshqa holatlardagi masalalar bilan bog&apos;liq bo&apos;lishi mumkin.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-indigo-600">11.3.</span> Qanday qilib tuple qo&apos;llanadi?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Ko&apos;pgina dasturlar ma&apos;lumotlar to&apos;plamini o&apos;zgartirishni xohlamaydi. Masalan, hafta kunlari, oylar, o&apos;quvchilar nomlari yoki biror konstant qiymat. Tuple bunday holatlar uchun mukammal tanlovdir.
            </p>
            <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
              <p className="text-yellow-900">Agar ma&apos;lumotni o&apos;zgartirmaysiz deb ishonchsangiz, list o&apos;rniga tuple ishlatish yaxshiroqdir. Bu kodni ancha ishonchli qiladi.</p>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Tuple ma&apos;lumotlarni o&apos;zgarmas holda saqlaydi.</li>
              <li>Tuple yaratishda qavslar ishlatiladi.</li>
              <li>Tuplega yangi element qo&apos;shish mumkin emas, lekin uni o&apos;qish mumkin.</li>
              <li>index(), len() va count() tuple bilan tez ishlatiladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-indigo-400 to-violet-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">Mashq 11</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> Quyidagi tuple ichidan birinchi elementni chiqarib berish kerak. Natija <b>Ali</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'students = ("Ali", "Laylo", "Sardor")\nprint(students[0])'} expectedOutput={"Ali"} taskId="python_11" />
        </div>
      </div>
    </main>
  );
}
