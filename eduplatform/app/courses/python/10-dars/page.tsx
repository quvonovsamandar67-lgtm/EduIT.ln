import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson10() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">10-Bob</span>
            <span className="text-sm text-gray-500">~ 15 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Lug&apos;atlar <span className="text-blue-600">(Dictionaries)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Lug&apos;atlar ma&apos;lumotlarni kalit so&apos;zlar va qiymatlar ko&apos;rinishida saqlaydi. Bu ma&apos;lumotlarni tartibli va oson ishlatish imkonini beradi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-violet-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-fuchsia-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">1</p>
              <p className="mt-2 text-sm text-gray-700">Lug'atning ma'lumotlarni kalit-qiymat shaklida saqlashini tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">2</p>
              <p className="mt-2 text-sm text-gray-700">Kalit so'zlar orqali qiymatlarga murojaat qilish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Real loyihalarda ma'lumotlar bazasi va profil ma'lumotlarini saqlash.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">10.1.</span> Lug&apos;at nima?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Lug&apos;at - bu qaysi bir qiymat qaysi kalitga tegishli ekanligini ko&apos;rsatadigan ma&apos;lumotlar tuzilmasi. Ular ro&apos;yxatlardan farqli o&apos;laroq, indekslar bilan emas, kalit so&apos;zlar bilan ishlaydi.
              </p>
              <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-5">
                <p className="m-0 font-medium text-blue-900">
                  <strong>Misol:</strong> <code className="rounded bg-blue-100 px-1 font-mono">{`student = {"ism": "Aziz", "yosh": 18}`}</code>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">10.2.</span> Kalit va qiymat
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Lug&apos;atda har bir yozuv ikki qismdan iborat: <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">kalit</code> va <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">qiymat</code>. Masalan, <code className="rounded bg-gray-100 px-2 py-1 font-mono">"ism"</code> kalit, <code className="rounded bg-gray-100 px-2 py-1 font-mono">"Aziz"</code> qiymatdir.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-green-200 bg-white shadow-sm">
                  <div className="border-b-2 border-green-200 bg-green-100 px-4 py-2">
                    <h3 className="font-bold text-green-800">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <div>{`student = {"ism": "Aziz", "yosh": 18}`}</div>
                    <div>{`print(student["ism"])`}</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border-2 border-red-200 bg-white shadow-sm">
                  <div className="border-b-2 border-red-200 bg-red-100 px-4 py-2">
                    <h3 className="font-bold text-red-800">❌ Xato yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-red-400">
                    <div>{`student = {"ism": "Aziz", "yosh": 18}`}</div>
                    <div>{`print(student["name"])`}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">10.3.</span> Lug&apos;at bilan ishlash
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Lug&apos;atdagi ma&apos;lumotlarni o&apos;zgaritish, qo&apos;shish yoki o&apos;chirish ham oson. Masalan, yangi kalit yozish yoki mavjud qiymatlarni yangilash mumkin.
              </p>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
                <p className="text-yellow-900">
                  Lug&apos;atlardagi kalitlar o&apos;ziga xos bo&apos;ladi. Uni to&apos;g&apos;ri yozmasangiz, Python ma&apos;lumotni topa olmaydi va xato beradi.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>Lug&apos;at kalit-va-qiymat juftligidan tashkil topadi.</li>
              <li>Qiymatlarga kalit orqali murojat qilinadi.</li>
              <li>Lug&apos;atlar ma&apos;lumotlarni turlari va nomlari bilan saqlashda qulay.</li>
              <li>Ular real loyihalarda user ma&apos;lumotlari va konfiguratsiyalar uchun keng ishlatiladi.</li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Mashq 10</span>
          </div>

          <p className="mb-6 text-lg text-gray-700">
            <b>Vazifa:</b> Quyidagi lug&apos;atdan foydalanuvchining ismini chiqarish kerak. Natija <b>Aziz</b> bo&apos;lishi kerak.
          </p>

          <CodeEditor
            initialCode={'student = {"ism": "Aziz", "yosh": 18}\nprint(student["ism"])'}
            expectedOutput={"Aziz"}
            taskId="python_10"
          />
        </div>
      </div>
    </main>
  );
}
