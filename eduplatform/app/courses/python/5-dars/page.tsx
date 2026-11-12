import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";
import LessonTheoryPanel from "@/components/LessonTheoryPanel";

export default function PythonLesson5() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">5-Bob</span>
            <span className="text-sm text-gray-500">~ 12 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Shartlar <span className="text-blue-600">(if / else)</span>
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Dasturimizni qaror qabul qilishga o&apos;rgatamiz. Shartlar yordamida biz dasturga “agar shunday bo&apos;lsa, unda bunday qilish” deb buyruq beramiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-sky-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">1</p>
              <p className="mt-2 text-sm text-gray-700">Shart tushunchasini real qarorlar bilan bog'lash.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">2</p>
              <p className="mt-2 text-sm text-gray-700">if, else va elif ishlatishni tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Qarorlar orqali dasturni aqlli qilish.</p>
            </div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">5.1.</span> Nega shartlar kerak?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Hayotda har doim qarorlar mavjud: agar yomg&apos;ir yog&apos;sa, soyabon olib chiqaman; aks holda, ko&apos;ylak kiyaman. Dasturlashda ham shunday: agar ma&apos;lum shart bajarilsa, bir qator kod ishlaydi, aks holda boshqasi.
              </p>
              <p>
                Bu qobiliyat dasturlarni aqlli qiladi. Masalan, foydalanuvchi 18 yoshdan katta bo&apos;lsa, kirish mumkin, aks holda kirishga ruxsat yo&apos;q.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">5.2.</span> if, else va elif
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Python&apos;da shart yozish uchun <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">if</code> so&apos;zi ishlatiladi. Agar shart to&apos;g&apos;ri bo&apos;lsa, bir blok ishlaydi; agar yo&apos;q bo&apos;lsa, <code className="rounded bg-gray-100 px-2 py-1 font-mono text-pink-600">else</code> blokiga o&apos;tadi.
              </p>

              <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-5">
                <p className="m-0 font-medium text-blue-900">
                  <strong>Qoida:</strong> shart yozish uchun taqqoslash operatorlari ishlatiladi: <code className="font-mono">==</code>, <code className="font-mono">!=</code>, <code className="font-mono">&gt;</code>, <code className="font-mono">&lt;</code>, <code className="font-mono">&gt;=</code>, <code className="font-mono">&lt;=</code>.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border-2 border-green-200 bg-white shadow-sm">
                  <div className="border-b-2 border-green-200 bg-green-100 px-4 py-2">
                    <h3 className="flex items-center gap-2 font-bold text-green-800">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-green-400">
                    <div>age = 18</div>
                    <div>if age &gt;= 18:</div>
                    <div className="pl-4">print(&quot;Kirish mumkin&quot;)</div>
                    <div>else:</div>
                    <div className="pl-4">print(&quot;Kirish mumkin emas&quot;)</div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border-2 border-red-200 bg-white shadow-sm">
                  <div className="border-b-2 border-red-200 bg-red-100 px-4 py-2">
                    <h3 className="flex items-center gap-2 font-bold text-red-800">❌ Xato yozilishi</h3>
                  </div>
                  <div className="space-y-3 bg-gray-900 p-4 font-mono text-sm text-red-400">
                    <div>if age &gt;= 18</div>
                    <div className="pl-4">print(&quot;Kirish mumkin&quot;)</div>
                    <div>else</div>
                    <div className="pl-4">print(&quot;Kirish mumkin emas&quot;)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="text-blue-600">5.3.</span> Hayotiy misol
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                O&apos;qituvchi talabalarga test topshirishni uyushtirmoqchi. Agar talaba 75 va undan yuqori ball to&apos;plagan bo&apos;lsa, “A’lo”, agar 60 dan 74 gacha bo&apos;lsa, “Yaxshi”, aks holda “Qayta ishlash kerak” yoziladi.
              </p>
              <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-yellow-800">💡 Pro-tip</h3>
                <p className="text-yellow-900">
                  <code className="rounded bg-yellow-100 px-1 font-mono">elif</code> bo&apos;lagi bir nechta shartlarni ketma-ket tekshirish uchun ishlatiladi. Bu kodni o&apos;qishni ancha qulay qiladi.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-3 text-lg font-bold text-gray-900">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 font-medium">
              <li>if sharti to&apos;g&apos;ri bo&apos;lsa, ma&apos;lum kod blokini ishlatamiz.</li>
              <li>else esa shart noto&apos;g&apos;ri bo&apos;lganda ishlaydi.</li>
              <li>elif bir nechta shartlarni ketma-ket tekshirish uchun foydali.</li>
              <li>Shartlar dasturni “aqlli” va dinamik qilishga yordam beradi.</li>
            </ul>
          </section>
        </div>

        <LessonTheoryPanel
          title="Shartlarni tahlil qilish va qaror qabul qilish"
          accent="cyan"
          deepNotes={[
            "Shartlar dasturga versiyalar va alternativalar yaratishga yordam beradi.",
            "if, elif va else bir-biriga bog'langan qarorlar zanjiri bo'lib xizmat qiladi.",
            "Taqqoslash operatorlari shartning to'g'ri yoki noto'g'ri ekanligini aniqlaydi.",
            "Dasturga real hayotdagi qarorlarni aks ettirish uchun shartlar muhim vositadir."
          ]}
          examples={[
            "if age >= 18: print('Kirish mumkin') — foydalanuvchi kattalar uchun.",
            "if score >= 90: print('A') elif score >= 70: print('B') — baholarni tekshirish.",
            "if is_admin: print('Boshqaruv paneli') else: print('Ruxsat yo'q') — ruxsatni boshqarish.",
            "if x == 0: print('Nol') — aniq tenglik tekshiruvi."
          ]}
          quiz={[
            {
              question: "if sharti qachon ishlaydi?",
              options: ["Shart rost bo'lganda", "Har doim", "Raqam bo'lganda"],
              answer: "Shart rost bo'lganda",
              explanation: "if blok faqat shart to'g'ri bo'lsa ishlaydi."
            },
            {
              question: "elif nima uchun kerak?",
              options: ["Bir nechta shartlarni ketma-ket tekshirish", "Faylni ochish", "So'zlarni birlashtirish"],
              answer: "Bir nechta shartlarni ketma-ket tekshirish",
              explanation: "elif if dan keyin yangi shartni tekshirish uchun ishlatiladi."
            },
            {
              question: "== belgisi nima qiladi?",
              options: ["Tenglikni tekshiradi", "Qo'shadi", "Bo'lishni tekshiradi"],
              answer: "Tenglikni tekshiradi",
              explanation: "== ikkalasi bir-biriga tengmi, degan ma'noni bildiradi."
            }
          ]}
        />

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">Mashq 5</span>
          </div>

          <p className="mb-6 text-lg text-gray-700">
            <b>Vazifa:</b> Quyidagi dastur yoshga qarab kirish huquqini tekshiradi. Agar yosh 18 va undan katta bo&apos;lsa, ekranga <b>Kirish mumkin</b> chiqishi kerak.
          </p>

          <CodeEditor
            initialCode={'age = 18\nif age >= 18:\n    print("Kirish mumkin")\nelse:\n    print("Kirish mumkin emas")'}
            expectedOutput={"Kirish mumkin"}
            taskId="python_5"
          />
        </div>
      </div>
    </main>
  );
}
