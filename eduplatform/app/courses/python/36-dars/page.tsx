import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson36() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">36-Bob</span>
            <span className="text-sm text-gray-500">~ 35 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Final loyiha — Student Management
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Final loyiha sizga butun kurs davomida o&apos;rganilgan narsalarni birlashtirish imkonini beradi: classlar, ro&apos;yxatlar, fayllar, CRUD, matn va ma&apos;lumotlar bazasi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-lime-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">1</p><p className="mt-2 text-sm text-gray-700">Project structure yaratish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">2</p><p className="mt-2 text-sm text-gray-700">CRUD operatsiyalarini ishlatish.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">3</p><p className="mt-2 text-sm text-gray-700">Real loyiha fikrini shakllantirish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-emerald-600">36.1.</span> Project structure</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Har bir loyiha ma&apos;lumotlar, funksiyalar va interfeysning aniq bo&apos;linishini talab qiladi. Student Management tizimida studentlar ro&apos;yxati, qo&apos;shish, o&apos;chirish va yangilash amallari bo&apos;ladi.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-emerald-600">36.2.</span> CRUD</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              CRUD — Create, Read, Update, Delete. Bu amallar har qanday ma&apos;lumotlar boshqaruvi tizimining asosidir.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-emerald-600">36.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50 p-5">
              <p className="m-0 font-medium text-emerald-900"><strong>Qoidalar:</strong> ma&apos;lumotlarni saqlashda, foydalanuvchi tajribasida va kodni tashkil qilishda aniq struktura bo&apos;lishi kerak. Shunda loyiha chiroyli va oson kengaytiriladi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-emerald-400 to-lime-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">Mashq 36</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> final loyiha nomini chiqaring. Natija <b>Student Management</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'project_name = "Student Management"\nprint(project_name)'} expectedOutput={"Student Management"} taskId="python_36" />
        </div>
      </div>
    </main>
  );
}
