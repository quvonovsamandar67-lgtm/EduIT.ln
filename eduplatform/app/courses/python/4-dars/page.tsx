import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";
import LessonTheoryPanel from "@/components/LessonTheoryPanel";

export default function PythonLesson4() {
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
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">4-Bob</span>
            <span className="text-gray-500 text-sm">~ 15 daqiqa o'qish</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            while sikli va <span className="text-blue-600">break</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ushbu bobda biz shartga asoslangan holda ishlaydigan <code className="font-mono text-pink-600">while</code> siklini va sikl ishini boshqarish usullarini o&apos;rganamiz.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">1</p>
              <p className="mt-2 text-sm text-gray-700">while siklining for siklidan qanday farqini tushunish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">2</p>
              <p className="mt-2 text-sm text-gray-700">Cheksiz sikl xavfi va shart yangilashni bilish.</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">3</p>
              <p className="mt-2 text-sm text-gray-700">break va continue kabi boshqaruv operatorlarini qo'llash.</p>
            </div>
          </div>
        </section>
        
        <div className="space-y-10">
          {/* 1-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">4.1.</span> while siklini for siklidan farqi
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                Biz <code className="font-mono text-pink-600">for</code> siklida qancha marta takrorlanishini oldindan bilamiz. 
                Lekin ba&apos;zida qachon to&apos;xtashini oldindan bilmaymiz, faqatgina ma&apos;lum bir shart bajarilgunga qadar aylanishi kerak bo&apos;ladi. Bunda <code className="font-mono text-pink-600">while</code> siklidan foydalanamiz.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <p className="text-blue-900 font-medium m-0">
                  <strong>Qoida:</strong> while siklida berilgan shart <b>True</b> (rost) bo&apos;lguncha ichidagi kod bajarilaveradi. Shart <b>False</b> (yolg&apos;on) bo&apos;lishi bilan sikl to&apos;xtaydi.
                </p>
              </div>
            </div>
          </section>

          {/* 2-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">4.2.</span> Cheksiz sikl (Infinite Loop) xavfi
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                while siklida eng ko&apos;p qilinadigan xato — bu sikl ichidagi shartni o&apos;zgartirib borishni unutishdir. Agar shart hech qachon False bo&apos;lmasa, dastur abadiy ishlab qoladi va qotib qoladi.
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="text-gray-500 mb-2"># Xato yozilgan kod (Cheksiz sikl)</div>
                <div>son = 1</div>
                <div>while son &lt;= 3:</div>
                <div className="pl-4">print(son)</div>
                <div className="pl-4 text-red-400"># son = son + 1 yozish unutilgan!</div>
              </div>
            </div>
          </section>

          {/* 3-bo'lim */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">4.3.</span> break va continue
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>Ba&apos;zida sikl ishini tashqaridan boshqarish kerak bo&apos;ladi:</p>
              <ul className="list-disc pl-6 space-y-2 font-medium">
                <li><code className="text-pink-600 font-mono">break</code> — sikl ishini butunlay to&apos;xtatadi va sikldan chiqib ketadi.</li>
                <li><code className="text-pink-600 font-mono">continue</code> — siklning hozirgi qadamini tashlab yuborib, keyingi qadamga o&apos;tadi.</li>
              </ul>
            </div>
          </section>

          {/* Xulosa */}
          <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📝 Bob bo&apos;yicha xulosa</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-medium">
              <li>while sikli shart True bo&apos;lguncha ishlaydi.</li>
              <li>Qachon to&apos;xtashini oldindan bilmasak while ishlatamiz.</li>
              <li>Sikl ichida hisoblagichni o&apos;zgartirishni (masalan, son += 1) unutmang.</li>
            </ul>
          </section>
        </div>

        <LessonTheoryPanel
          title="while ning logikasi va boshqaruv operatorlari"
          accent="amber"
          deepNotes={[
            "while sikli shart rost bo'lganda ishlaydi, shart yolg'on bo'lganda to'xtaydi.",
            "while ichida o'zgaruvchining qiymatini o'zgartirish muhim, aks holda cheksiz sikl bo'ladi.",
            "break siklni to'liq to'xtatadi, continue esa hozirgi iteratsiyani o'tkazib yuboradi.",
            "Bu operatorlar dasturni moslashuvchan va boshqariladigan qiladi."
          ]}
          examples={[
            "son = 1; while son <= 3: print(son); son += 1 — 1,2,3 ni chiqaradi.",
            "break — shart bajarilganda sikldan chiqadi.",
            "continue — qiymatni qabul qilmay, keyingi qadamga o'tadi.",
            "while True: ... — ehtiyotkorlik bilan ishlatiladi, cheksiz sikl xavfi mavjud."
          ]}
          quiz={[
            {
              question: "while sikli qachon ishlaydi?",
              options: ["Shart True bo'lganda", "Har doim", "Faqat bir marta"],
              answer: "Shart True bo'lganda",
              explanation: "while shart rost bo'lganda ishlashni davom ettiradi."
            },
            {
              question: "break nima qiladi?",
              options: ["Siklni to'xtatadi", "Bir qadam o'tkazib yuboradi", "Faylni ochadi"],
              answer: "Siklni to'xtatadi",
              explanation: "break operatori siklni vaziyatga ko'ra butunlay tugatadi."
            },
            {
              question: "while siklida nima xavfli?",
              options: ["Cheksiz sikl", "Matnlarni chop etish", "Raqamlarni to'plash"],
              answer: "Cheksiz sikl",
              explanation: "Agar shart o'zgarmasa, sikl abadiy davom etadi."
            }
          ]}
        />

        <hr className="my-12 border-gray-200" />

        {/* Amaliyot qismi */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">💻 Amaliyot vaqti!</h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Mashq 4</span>
          </div>
          
          <p className="text-gray-700 mb-6 text-lg">
            <b>Vazifa:</b> Quyidagi kod 1, 2, 3 sonlarini ekranga chiqarishi kerak. Lekin kodda cheksiz sikl xatosi bor. 
            Sikl ichiga <b>son += 1</b> (sonni 1 ga oshirish) buyrug&apos;ini qo&apos;shib, xatoni to&apos;g&apos;rilang. Natija: 1, 2, 3 bo&apos;lishi kerak.
          </p>
          
          <CodeEditor 
            initialCode={'son = 1\nwhile son <= 3:\n print(son)'} 
            expectedOutput={"1\n2\n3"} 
            taskId="python_4" 
          />
        </div>
      </div>
    </main>
  );
}