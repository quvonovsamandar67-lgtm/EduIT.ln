import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";
import LessonTheoryPanel from "@/components/LessonTheoryPanel";

export default function PythonLesson3() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Navigatsiya */}
        <Link href="/courses/python" className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Kurs dasturiga qaytish
        </Link>
        
        {/* Dars sarlavhasi */}
        <div className="mb-10 border-b pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">3-Bob</span>
            <span className="text-gray-500 text-sm">~ 15 daqiqa o'qish</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Sikllar <span className="text-blue-600">(for loop)</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ushbu bobda biz bir xil kodlarni qayta-qayta yozmaslik uchun sikllardan (takrorlash operatorlaridan) foydalanishni o'rganamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">1</p>
              <p className="mt-2 text-sm text-gray-700">for siklini nima uchun ishlatishni tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">2</p>
              <p className="mt-2 text-sm text-gray-700">range() funksiyasi bilan takrorlash sonini boshqarish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Indentatsiya va sikl blokini noto'g'ri yozishdan saqlanish.</p>
            </div>
          </div>
        </section>
        
        <div className="space-y-10">
          {/* 1-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">3.1.</span> Sikl nima va u nima uchun kerak?
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Tasavvur qiling, sizdan 1 dan 100 gacha bo'lgan sonlarni ekranga chiqarish so'raldi. Buning uchun <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono text-base">print()</code> funksiyasini 100 marta yozasizmi? Albatta yo'q!
              </p>
              <p>
                <strong>Sikl</strong> — bu ma'lum bir kod blokini bir necha marta qayta bajarish uchun ishlatiladigan buyruq. Python'da eng ko'p ishlatiladigan sikllardan biri bu <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono text-base">for</code> siklidir.
              </p>
            </div>
          </section>

          {/* 2-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">3.2.</span> range() funksiyasi
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                <code className="font-mono text-pink-600">for</code> sikli bilan birga ko'pincha <code className="font-mono text-pink-600">range()</code> funksiyasi ishlatiladi. U ma'lum bir oraliqdagi sonlar ketma-ketligini yaratib beradi.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <p className="text-blue-900 font-medium m-0">
                  <strong>Muhim qoida:</strong> <code className="font-mono bg-blue-100 px-1 rounded">range(1, 5)</code> deyilsa, u 1 dan boshlab, 5 gacha bo'lgan sonlarni oladi, lekin <strong>5 ni o'zini qo'shmaydi</strong>. Ya'ni: 1, 2, 3, 4.
                </p>
              </div>
            </div>
          </section>

          {/* 3-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">3.3.</span> Sintaksis va misollar
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <p>Pythonda sikl qanday yoziladi?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-green-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-green-100 px-4 py-2 border-b-2 border-green-200">
                    <h3 className="font-bold text-green-800 flex items-center gap-2">✅ To&apos;g&apos;ri yozilishi</h3>
                  </div>
                  <div className="p-4 space-y-3 font-mono text-sm bg-gray-900 text-green-400">
                    <div>for i in range(3):</div>
                    <div className="pl-4">print(&quot;Salom&quot;)</div>
                  </div>
                  <div className="p-3 bg-green-50 text-sm text-green-800">Natija: &quot;Salom&quot; 3 marta chiqadi.</div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-red-100 px-4 py-2 border-b-2 border-red-200">
                    <h3 className="font-bold text-red-800 flex items-center gap-2">❌ Xato yozilishi</h3>
                  </div>
                  <div className="p-4 space-y-3 font-mono text-sm bg-gray-900 text-red-400">
                    <div><span className="line-through opacity-50">for i in range(3):</span></div>
                    <div><span className="line-through opacity-50">print(&quot;Salom&quot;)</span> <span className="text-xs text-gray-500 ml-2">// xat</span></div>
                  </div>
                  <div className="p-3 bg-red-50 text-sm text-red-800">Sikl ichidagi kod albatta o&apos;ngga surilgan (xat boshi) bo&apos;lishi kerak!</div>
                </div>
              </div>
            </div>
          </section>

          {/* 4-bo'lim (Muhim eslatma) */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                Pro-tip: Cheksiz sikl
              </h3>
              <p className="text-yellow-900">
                Agar sikl shartini noto'g'ri yozsangiz (masalan, <code className="font-mono bg-yellow-100 px-1">while True:</code>), dastur hech qachon to'xtamaydi. Bunga &quot;Cheksiz sikl&quot; (Infinite loop) deyiladi va dastur qotib qolishiga sabab bo&apos;ladi.
              </p>
            </div>
          </section>

          {/* Xulosa */}
          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>Sikllar bir xil amallarni takrorlash uchun ishlatiladi.</li>
              <li>for siklida range() funksiyasi orqali takrorlanish soni belgilanadi.</li>
              <li>Sikl ichidagi kod albatta o&apos;ngga surilgan (indentatsiya qilingan) bo&apos;lishi shart.</li>
            </ul>
          </section>
        </div>

        <LessonTheoryPanel
          title="Siklning mantiqiy asoslari"
          accent="emerald"
          deepNotes={[
            "Sikl ma'lum bir kod blokini bir necha marta qayta-qayta bajarish imkonini beradi.",
            "for sikli ko'pincha ma'lum sonli takrorlanish uchun ishlatiladi, masalan, range(1, 6).",
            "Indentatsiya - yani kodni o'ngga surish - sikl blokini ajratishda juda muhimdir.",
            "Noto'g'ri indentatsiya Python'da xatolikka olib keladi yoki maqsadga mos kelmasligini keltiradi."
          ]}
          examples={[
            "for i in range(3): print(\"Salom\") — 3 marta chiqaradi.",
            "for i in range(1, 6): print(i) — 1,2,3,4,5 chiqaradi.",
            "for harf in \"Python\": print(harf) — harf harf chiqadi.",
            "range(5) 0 dan 4 gacha bo'lgan qiymatlarni yaratadi."
          ]}
          quiz={[
            {
              question: "for sikli nima uchun ishlatiladi?",
              options: ["Bir xil kodni takrorlash", "Fayl ochish", "Matnni o'chirish"],
              answer: "Bir xil kodni takrorlash",
              explanation: "Sikl aynan bir xil kodni qayta-qayta ishlatishni osonlashtiradi."
            },
            {
              question: "range(1, 4) qaysi sonlarni chiqaradi?",
              options: ["1,2,3", "1,2,3,4", "0,1,2"],
              answer: "1,2,3",
              explanation: "range boshlanishi 1, oxiri 4 bo'lib 4 ni o'ziga kiritmaydi."
            },
            {
              question: "Sikl ichidagi kod nimaga bog'liq?",
              options: ["Indentatsiyaga", "Qo'shtirnoqqa", "Raqamga"],
              answer: "Indentatsiyaga",
              explanation: "Python kod bloklari o'ngga surilgan indentatsiya bilan aniqlanadi."
            }
          ]}
        />

        <hr className="my-12 border-gray-200" />

        {/* Amaliyot qismi */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">💻 Amaliyot vaqti!</h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Mashq 3</span>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            <b>Vazifa:</b> Quyidagi kodda sonlar ketma-ketligi to'g'ri shaklda yozilishi kerak. Yakuniy natija ichida faqat <b>5</b> soni bo'lishi kerak, boshqa qiymatlar qabul qilinmaydi.
          </p>
          
          <CodeEditor 
            initialCode={'for i in range(1, 6):\n print(i)'} 
            expectedOutput={"5"} 
            taskId="python_3" 
          />
        </div>
      </div>
    </main>
  );
}