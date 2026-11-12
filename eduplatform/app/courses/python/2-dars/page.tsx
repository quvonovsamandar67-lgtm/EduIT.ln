import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";
import LessonTheoryPanel from "@/components/LessonTheoryPanel";

export default function PythonLesson2() {
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
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">2-Bob</span>
            <span className="text-gray-500 text-sm">~ 15 daqiqa o&apos;qish</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            O&apos;zgaruvchilar <span className="text-blue-600">(Variables)</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ushbu bobda biz ma&apos;lumotlarni xotirada saqlash, ularga nom berish va kerak bo&apos;lganda chaqirib ishlatishni o&apos;rganamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">1</p>
              <p className="mt-2 text-sm text-gray-700">O'zgaruvchilar yordamida ma'lumotni xotirada saqlash.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">2</p>
              <p className="mt-2 text-sm text-gray-700">Nomlash qoidalarini va harf-raqam ishlatishni o'rganish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">3</p>
              <p className="mt-2 text-sm text-gray-700">Matn, son va mantiqiy qiymatlarni farqlashni mashq qilish.</p>
            </div>
          </div>
        </section>
        
        {/* Kuchaytirilgan Nazariya (Darslik shaklida) */}
        <div className="space-y-10">
          
          {/* 1-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">2.1.</span> O&apos;zgaruvchi nima?
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                O&apos;zgaruvchilarni xuddi <strong>yopiq qutilar</strong> deb tasavvur qiling. Har bir qutining ustiga nom yozib qo&apos;yamiz va ichiga turli xil ma&apos;lumotlarni solamiz. 
                Qachonki bizga shu ma&apos;lumot kerak bo&apos;lsa, qutining nomini aytamiz va ichidagi narsani olamiz.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <p className="text-blue-900 font-medium m-0">
                  <strong>Misol:</strong> <code className="font-mono bg-blue-100 px-1 rounded text-blue-800">yosh = 20</code> deb yozsak, biz <code className="font-mono text-blue-800">yosh</code> nomli quti yaratib, ichiga <code className="font-mono text-blue-800">20</code> sonini joylashtirdik.
                </p>
              </div>
            </div>
          </section>

          {/* 2-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">2.2.</span> Nomlash qoidalari
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>Har qanday qutiga ham nom beravermaymiz. Python tilida o&apos;zgaruvchilarga nom berishning o&apos;z qoidalari bor:</p>
              <ul className="list-decimal pl-6 space-y-3 font-medium">
                <li>Nom faqat <strong>harflar</strong>, <strong>raqamlar</strong> va <strong>pastki chiziq</strong> (<code className="font-mono">_</code>) dan iborat bo&apos;lishi mumkin.</li>
                <li>Nom hech qachon <strong>raqam bilan boshlanmaydi</strong>. (<code className="text-red-500 font-mono">1ism</code> ❌, <code className="text-green-500 font-mono">ism1</code> ✅)</li>
                <li>Bo&apos;sh joy (probel) ishlatilmaydi. Buning o&apos;rniga pastki chiziqcha qo&apos;yiladi. (<code className="text-red-500 font-mono">mening ismim</code> ❌, <code className="text-green-500 font-mono">mening_ismim</code> ✅)</li>
                <li>Python katta va kichik harflarni ajratadi. Ya&apos;ni <code className="font-mono">ism</code> va <code className="font-mono">Ism</code> — bu ikkita butunlay boshqa o&apos;zgaruvchilar.</li>
                <li>Pythonda tayyor turgan maxsus so&apos;zlarni (masalan, <code className="font-mono text-pink-600">print</code>, <code className="font-mono text-pink-600">if</code>) o&apos;zgaruvchi nomi qilib bo&apos;lmaydi.</li>
              </ul>
            </div>
          </section>

          {/* 3-bo'lim (Ma'lumot turlari) */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">2.3.</span> Ma&apos;lumot turlari
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>Qutilarimizga har xil turdagi narsalarni solishimiz mumkin. Eng asosiylari bilan tanishamiz:</p>
              
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800">
                      <th className="p-4 border-b font-bold">Turi</th>
                      <th className="p-4 border-b font-bold">Nomi</th>
                      <th className="p-4 border-b font-bold">Misol</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white font-mono text-sm">
                    <tr>
                      <td className="p-4 border-b text-blue-600 font-bold">String (str)</td>
                      <td className="p-4 border-b font-sans text-gray-600">Matn (qo&apos;shtirnoq ichida)</td>
                      <td className="p-4 border-b">&quot;Salom&quot;, &apos;Ali&apos;</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border-b text-blue-600 font-bold">Integer (int)</td>
                      <td className="p-4 border-b font-sans text-gray-600">Butun son</td>
                      <td className="p-4 border-b">10, -5, 2026</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b text-blue-600 font-bold">Float (float)</td>
                      <td className="p-4 border-b font-sans text-gray-600">Kasr son</td>
                      <td className="p-4 border-b">3.14, -0.5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border-b text-blue-600 font-bold">Boolean (bool)</td>
                      <td className="p-4 border-b font-sans text-gray-600">Mantiqiy (Ha/Yo&apos;q)</td>
                      <td className="p-4 border-b">True, False</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 4-bo'lim (Muhim eslatma) */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                Pro-tip: Dinamiklik
              </h3>
              <p className="text-yellow-900">
                Pythonda bitta o&apos;zgaruvchiga ketma-ket turli xil qiymatlar berish mumkin. Quti ichidagi eski narsa o&apos;chib, yangisi yoziladi.
                <br/><br/>
                <code className="bg-yellow-100 px-2 py-1 rounded font-mono text-sm">x = 5</code> <br/>
                <code className="bg-yellow-100 px-2 py-1 rounded font-mono text-sm">x = &quot;Olma&quot;</code> <br/>
                <span className="text-sm mt-1 block">Bu yerda x ning qiymati oxirgi marta &quot;Olma&quot; bo&apos;lib qoldi.</span>
              </p>
            </div>
          </section>

          {/* Xulosa */}
          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>O&apos;zgaruvchilar ma&apos;lumotlarni xotirada saqlash uchun xizmat qiladi.</li>
              <li>Nomlashda faqat harflar, raqamlar va pastki chiziqdan foydalaniladi, raqam bilan boshlanmaydi.</li>
              <li>Matnlar har doim qo&apos;shtirnoq ichida yozilishi kerak, sonlar esa qo&apos;shtirnoqsiz.</li>
            </ul>
          </section>

        </div>

        <LessonTheoryPanel
          title="O'zgaruvchilar va ma'lumotlar turlari"
          accent="violet"
          deepNotes={[
            "O'zgaruvchi - bu ma'lumotni xotirada saqlaydigan nomlangan quti sifatida tushuniladi.",
            "Nomlashda pastki chiziq, harf va raqam ishlatilishi mumkin, lekin raqam bilan boshlanmaydi.",
            "Matn, son, kasr va True/False kabi qiymatlar turlicha ma'lumot turlarini ifodalaydi.",
            "Bir o'zgaruvchiga keyin boshqa qiymat berish ham mumkin; bu dinamik xususiyatdir."
          ]}
          examples={[
            "ism = \"Ali\" — matn saqlash.",
            "yosh = 20 — butun son saqlash.",
            "balandlik = 1.75 — kasr son.",
            "admin = True — mantiqiy qiymat." 
          ]}
          quiz={[
            {
              question: "Qaysi nom Python o'zgaruvchisi sifatida to'g'ri?",
              options: ["1ism", "ism_1", "mening ism"],
              answer: "ism_1",
              explanation: "O'zgaruvchi nomi harf yoki pastki chiziq bilan boshlanadi, raqam bilan emas."
            },
            {
              question: "True va False qaysi tipga tegishli?",
              options: ["String", "Boolean", "Float"],
              answer: "Boolean",
              explanation: "True/False mantiqiy qiymatlardir."
            },
            {
              question: "x = 5; x = \"Olma\" deganda nima bo'ladi?",
              options: ["x o'zgarmaydi", "x ning yangi qiymati \"Olma\" bo'ladi", "x xato bo'ladi"],
              answer: "x ning yangi qiymati \"Olma\" bo'ladi",
              explanation: "Python dinamik til bo'lgani uchun o'zgaruvchining qiymati yangilanadi."
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
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Mashq 2</span>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            <b>Vazifa:</b> Quyidagi kodda <code className="font-mono text-blue-600">ism</code> nomli o&apos;zgaruvchi yaratilgan, lekin unga qiymat berilmagan. 
            Unga <b>&quot;Sardor&quot;</b> deb qiymat bering (qo&apos;shtirnoq ichida) va kod ishlaganda ekranga <b>Sardor</b> so&apos;zi chiqishiga erishing.
          </p>
          
          {/* Diqqat: initialCode ichida ism = dan keyin bo'sh joy bor, o'quvchi shuni to'ldirishi kerak */}
          <CodeEditor taskId="python_2" initialCode={'ism = \nprint(ism)'} expectedOutput={"Sardor"} />
        </div>

      </div>
    </main>
  );
}