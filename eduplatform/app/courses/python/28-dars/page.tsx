import Link from "next/link";
import CodeEditor from "@/components/CodeEditor";

export default function PythonLesson28() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          Kurs dasturiga qaytish
        </Link>

        <div className="mb-8 border-b pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">28-Bob</span>
            <span className="text-sm text-gray-500">~ 25 daqiqa o&apos;qish</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            SQLite va ma&apos;lumotlar bazasi
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            SQLite — kichik va keng tarqalgan lokal ma&apos;lumotlar bazasi. U kichik loyihalar uchun ideal bo&apos;lib, ma&apos;lumotlarni saqlash va ularni qayta olishni osonlashtiradi.
          </p>
        </div>

        <section className="mb-10 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Dars maqsadi</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">1</p><p className="mt-2 text-sm text-gray-700">Baza va table tushunchasi.</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">2</p><p className="mt-2 text-sm text-gray-700">connect(), execute(), commit().</p></div>
            <div className="rounded-xl bg-white/80 p-4"><p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">3</p><p className="mt-2 text-sm text-gray-700">Ma&apos;lumotlarni saqlash va olish.</p></div>
          </div>
        </section>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-teal-600">28.1.</span> Baza nima?</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Ma&apos;lumotlar bazasi — bu ma&apos;lumotlarni doimiy ravishda saqlash uchun ishlatiladi. SQLite bu juda qulay va oson ishlatiladigan baza tizimidir.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-teal-600">28.2.</span> Misol</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-400">{`import sqlite3
conn = sqlite3.connect('school.db')
cur = conn.cursor()
cur.execute('CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT)')
print('ok')`}</pre>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900"><span className="text-teal-600">28.3.</span> Qoidalar</h2>
            <div className="rounded-r-lg border-l-4 border-teal-500 bg-teal-50 p-5">
              <p className="m-0 font-medium text-teal-900"><strong>Qoidalar:</strong> ma&apos;lumotlarni saqlashda table va column nomlarini aniq belgilash hamma narsa uchun muhim. O&apos;zgarmaydigan ma&apos;lumotlar baza ichida to&apos;g&apos;ri saqlanadi.</p>
            </div>
          </section>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-teal-400 to-cyan-600"></div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">💻 Amaliyot vaqti!</h2>
            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Mashq 28</span>
          </div>
          <p className="mb-6 text-lg text-gray-700"><b>Vazifa:</b> SQLite da ishlatiladigan asosiy obyekt nomini chiqaring. Natija <b>conn</b> bo&apos;lishi kerak.</p>
          <CodeEditor initialCode={'conn = "conn"\nprint(conn)'} expectedOutput={"conn"} taskId="python_28" />
        </div>
      </div>
    </main>
  );
}
