import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";
import LessonTheoryPanel from "@/components/LessonTheoryPanel";

export default function PythonLesson1() {
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
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">1-Bob</span>
            <span className="text-gray-500 text-sm">~ 10 daqiqa o'qish</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Kirish va <code className="text-blue-600 font-mono text-3xl md:text-4xl">print()</code> funksiyasi
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ushbu bobda biz Python dasturlash tiliga ilk qadamni qo'yamiz, kompyuterga qanday qilib buyruq berishni va ekranga ma'lumot chiqarishni o'rganamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">1</p>
              <p className="mt-2 text-sm text-gray-700">Python tilining asosiy ishlash tamoyilini tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">2</p>
              <p className="mt-2 text-sm text-gray-700">print() funksiyasi orqali chiqishni boshqarishni ko'rish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Dasturlashga xos yozish qoidalarini o'zlashtirish.</p>
            </div>
          </div>
        </section>
        
        {/* Kuchaytirilgan Nazariya (Darslik shaklida) */}
        <div className="space-y-10">
          
          {/* 1-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">1.1.</span> Dasturlash nima?
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Dasturlash — bu kompyuterga muayyan vazifalarni bajarish uchun ketma-ket buyruqlar (ko'rsatmalar) berish jarayonidir. 
                Kompyuter o'zi hech narsani o'ylab topmaydi, u faqat biz yozgan kodni harfma-harf bajaradi.
              </p>
              <p>
                <strong>Python</strong> — bu inson tiliga eng yaqin, o'qish va tushunish oson bo'lgan dasturlash tili. U sun'iy intellekt, veb-saytlar va ma'lumotlar tahlili kabi sohalarda eng ko'p ishlatiladi.
              </p>
            </div>
          </section>

          {/* 2-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">1.2.</span> print() funksiyasi bilan tanishuv
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Dasturlashni o'rganishda birinchi qadam — kodimiz ishlayotganini ko'rishdir. Buning uchun biz <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono text-base">print()</code> funksiyasidan foydalanamiz.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <p className="text-blue-900 font-medium m-0">
                  <strong>Qoida:</strong> print() so'zi ingliz tilidagi "chop etish" (print) so'zidan olingan bo'lib, qavs ichidagi ma'lumotni ekranga chiqarib beradi.
                </p>
              </div>
            </div>
          </section>

          {/* 3-bo'lim (Sintaksis va Misollar) */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">1.3.</span> Yozish qoidalari va misollar
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <p>Pythonda matnlarni yozishda qo'shtirnoq (<code className="font-mono">&quot;&quot;</code>) yoki bittalik qo'shtirnoq (<code className="font-mono">&apos;&apos;</code>) ishlatiladi. Keling, to'g'ri va noto'g'ri yozilishini ko'raylik:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* To'g'ri */}
                <div className="bg-white border-2 border-green-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-green-100 px-4 py-2 border-b-2 border-green-200">
                    <h3 className="font-bold text-green-800 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      To&apos;g&apos;ri yozilishi
                    </h3>
                  </div>
                  <div className="p-4 space-y-3 font-mono text-sm bg-gray-900 text-green-400">
                    <div>print(&quot;Assalomu alaykum!&quot;)</div>
                    <div>print(&apos;Men Python o&apos;rganyapman&apos;)</div>
                    <div>print(2026)</div>
                  </div>
                </div>

                {/* Noto'g'ri */}
                <div className="bg-white border-2 border-red-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-red-100 px-4 py-2 border-b-2 border-red-200">
                    <h3 className="font-bold text-red-800 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      Xato yozilishi
                    </h3>
                  </div>
                  <div className="p-4 space-y-3 font-mono text-sm bg-gray-900 text-red-400">
                    <div><span className="line-through opacity-50">Print(&quot;Salom&quot;)</span> <span className="text-xs text-gray-500 ml-2">// katta harf</span></div>
                    <div><span className="line-through opacity-50">print(Salom)</span> <span className="text-xs text-gray-500 ml-2">// qo&apos;shtirnoqsiz</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4-bo'lim (Muhim eslatma) */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                Muhim eslatma!
              </h3>
              <p className="text-yellow-900">
                Python tilida katta va kichik harflar (Print va print) butunlay boshqa ma'noni anglatadi. Funksiya nomlari har doim kichik harflar bilan yozilishi shart. Bunga <strong>case-sensitive</strong> (harf sezgir) deyiladi.
              </p>
            </div>
          </section>

          {/* Xulosa */}
          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📝 Bob bo'yicha xulosa</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>print() funksiyasi matn yoki sonlarni ekranga chiqarish uchun xizmat qiladi.</li>
              <li>Funksiya nomidan keyin doim qavslar () qo'yilishi kerak.</li>
              <li>Matnlar albatta qo'shtirnoqlar ichida bo'lishi lozim.</li>
            </ul>
          </section>

        </div>

        <LessonTheoryPanel
          title="Asosiy nazariya va amaliy ko'rsatmalar"
          accent="blue"
          deepNotes={[
            "Python dasturi yuqori darajadagi kodni o'qishni osonlashtiradigan til bo'lib, buyruqlar ketma-ket bajariladi.",
            "print() funksiyasi ekranga ma'lumotni chiqarish uchun xizmat qiladi va dasturning natijasini ko'rish uchun muhim vositadir.",
            "Har bir buyruq va funksiya nomi aniq, kichik harf bilan yozilishi va sintaksisga rioya qilinishi kerak.",
            "Dastur ishlashini tekshirish uchun hamma vaqt print() bilan test qilish yaxshi amaliyotdir."
          ]}
          examples={[
            "print(\"Assalomu alaykum\") — matnni ekranga chiqaradi.",
            "print(2026) — sonni ekranga chiqaradi.",
            "print(\"Yosh:\", 20) — matn va sonni birga chiqaradi.",
            "print(\"Salom\") va print('Salom') bir xil natija beradi."
          ]}
          quiz={[
            {
              question: "print() funksiyasi nima uchun kerak?",
              options: ["Ma'lumotni ekranga chiqarish", "Fayl yaratish", "Raqamni hisoblash"],
              answer: "Ma'lumotni ekranga chiqarish",
              explanation: "print() ekranga natija ko'rsatishda ishlatiladi."
            },
            {
              question: "Qaysi yozuv to'g'ri?",
              options: ["print(\"Salom\")", "Print(\"Salom\")", "print(Salom)"],
              answer: "print(\"Salom\")",
              explanation: "Matn qo'shtirnoq ichida bo'lishi kerak, va funksiya nomi kichkina print bo'ladi."
            },
            {
              question: "Python kodida qanday Belgilar ishlatiladi?",
              options: ["Qo'shtirnoq ichida matn", "Faqat raqamlar", "Yagona ibora"],
              answer: "Qo'shtirnoq ichida matn",
              explanation: "Matn qo'shtirnoq ichida yoziladi, son esa qo'shtirnoqsiz bo'lishi mumkin."
            }
          ]}
        />

        <hr className="my-12 border-gray-200" />

        {/* Amaliyot qismi */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              💻 Amaliyot vaqti!
            </h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Mashq 1</span>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            Darslikda o&apos;rgangan bilimlaringizni mustahkamlang. Quyidagi kod ekranga <b>&quot;Salom, Dunyo!&quot;</b> chiqarishi kerak edi, lekin yopiluvchi qavs unutilgan. Kodingizdagi xatoni toping va uni to&apos;g&apos;rilang.
          </p>
          
          <CodeEditor taskId="python_1" initialCode={'print("Salom, Dunyo!"'} expectedOutput={"Salom, Dunyo!"} />
        </div>

      </div>
    </main>
  );
}