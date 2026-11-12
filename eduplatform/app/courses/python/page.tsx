"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PYTHON_LESSON_COUNT, PYTHON_LESSON_IDS } from "@/app/lib/course-progress";

export default function PythonSyllabus() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const allLessons = PYTHON_LESSON_IDS;

  const completedCount = completedTasks.length;
  const progressPercent = Math.round((completedCount / allLessons.length) * 100);
  const nextLesson = allLessons.find((taskId) => !completedTasks.includes(taskId));

  useEffect(() => {
    const loadCompletedTasks = () => {
      const tasks = allLessons.filter((taskId) => window.localStorage.getItem(`task_${taskId}`) === "true");

      setCompletedTasks(tasks);
    };

    loadCompletedTasks();

    const handleProgressUpdate = () => {
      loadCompletedTasks();
    };

    window.addEventListener("progress_updated", handleProgressUpdate);

    return () => {
      window.removeEventListener("progress_updated", handleProgressUpdate);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/courses" className="text-blue-600 hover:underline mb-6 inline-block font-medium">
          ← Barcha kurslarga qaytish
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.761S0 5.842 0 12.059c0 6.218 3.28 6.012 3.28 6.012h1.957v-2.885s-.105-3.28 3.227-3.28h5.558s3.122.05 3.122-3.018V3.139S17.727 0 11.914 0zM8.698 1.815a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12z" fill="#3776AB"/>
            <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.26S24 18.158 24 11.941c0-6.218-3.28-6.012-3.28-6.012h-1.957v2.885s.105 3.28-3.227 3.28H9.978s-3.122-.05-3.122 3.018v6.749S6.273 24 12.086 24zm3.216-1.815a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12z" fill="#FFE873"/>
          </svg>
          <h1 className="text-4xl font-bold text-gray-900">Python Dasturlash</h1>
        </div>

        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">O&apos;qituvchi strategiyasi</p>
              <h2 className="mt-2 text-2xl font-bold text-blue-900">Har darsda 4 bosqich bo&apos;lishi kerak</h2>
            </div>
            <div className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
              {progressPercent}% yakunlandi
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Yakunlangan</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">{completedCount}/{PYTHON_LESSON_COUNT}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Keyingi dars</p>
              <p className="mt-2 text-lg font-bold text-gray-900">{nextLesson ? nextLesson.replace("python_", "") + "-dars" : "Barcha darslar tugadi"}</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Nazariya</p>
              <p className="mt-2 text-lg font-bold text-gray-900">Maqsad + qoidalar</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Amaliyot</p>
              <p className="mt-2 text-lg font-bold text-gray-900">Misol + vazifa</p>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900">O&apos;qituvchi ko&apos;rsatmasi</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• Har darsni o&apos;qib chiqqach, birinchi bo&apos;lib qoidalarni eslab oling.</li>
            <li>• Misolni yozing, keyin o&apos;zingiz o&apos;xshash vazifani bajaring.</li>
            <li>• Kodni faqat ko&apos;chirib qo&apos;ymang, tushuntirishni o&apos;zingiz so&apos;z bilan ayting.</li>
            <li>• Dars tugagach, natija panelini tekshirib, keyingi darsga o&apos;ting.</li>
          </ul>
        </div>

        <div className="mb-4 rounded-2xl border border-violet-200 bg-violet-50 p-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">1-bosqich</p>
          <p className="mt-2 text-base font-medium text-violet-900">Asoslar, sikllar, shartlar, ro&apos;yxatlar, lug&apos;atlar va asosiy amaliyot.</p>
        </div>

        <div className="space-y-4">
          <Link href="/courses/python/1-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">1-dars: Kirish va print()</h2>
                <p className="text-gray-600 mt-1">Birinchi kodni yozamiz va xatolarni tuzatamiz.</p>
              </div>
              {completedTasks.includes("python_1") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/2-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">2-dars: O'zgaruvchilar</h2>
                <p className="text-gray-600 mt-1">Ma'lumotlarni qanday saqlashni o'rganamiz.</p>
              </div>
              {completedTasks.includes("python_2") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">Ochiq</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/3-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">3-dars: Sikllar</h2>
                <p className="text-gray-600 mt-1">Bir xil buyruqlarni qayta-qayta ishlatishni o'rganamiz.</p>
              </div>
              {completedTasks.includes("python_3") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/4-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">4-dars: while va break</h2>
                <p className="text-gray-600 mt-1">Shartga asoslangan sikllar.</p>
              </div>
              {completedTasks.includes("python_4") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">Ochiq</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/5-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">5-dars: Shartlar</h2>
                <p className="text-gray-600 mt-1">if / else va qaror qabul qilish.</p>
              </div>
              {completedTasks.includes("python_5") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/6-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">6-dars: Funksiyalar</h2>
                <p className="text-gray-600 mt-1">def va return bilan kodni qayta ishlatish.</p>
              </div>
              {completedTasks.includes("python_6") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/7-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">7-dars: Ro&apos;yxatlar (1-qism)</h2>
                <p className="text-gray-600 mt-1">Yaratish, indekslar va elementlarga murojaat.</p>
              </div>
              {completedTasks.includes("python_7") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/8-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">8-dars: Ro&apos;yxatlar (2-qism)</h2>
                <p className="text-gray-600 mt-1">append, remove va pop metodlari.</p>
              </div>
              {completedTasks.includes("python_8") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/9-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">9-dars: Tsikl va ro&apos;yxat</h2>
                <p className="text-gray-600 mt-1">for sikli bilan ro&apos;yxatni aylanish.</p>
              </div>
              {completedTasks.includes("python_9") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/10-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">10-dars: Lug&apos;atlar</h2>
                <p className="text-gray-600 mt-1">Kalit va qiymat bilan ma&apos;lumotlarni saqlash.</p>
              </div>
              {completedTasks.includes("python_10") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/11-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">11-dars: Tuple</h2>
                <p className="text-gray-600 mt-1">O&apos;zgarmas ro&apos;yxatlar va barqaror ma&apos;lumotlar.</p>
              </div>
              {completedTasks.includes("python_11") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/12-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">12-dars: Set</h2>
                <p className="text-gray-600 mt-1">Takrorlanmas to&apos;plam va ma&apos;lumotlarni ajratish.</p>
              </div>
              {completedTasks.includes("python_12") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/13-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">13-dars: String metodlari</h2>
                <p className="text-gray-600 mt-1">Matn ustida ishlash va tozalash.</p>
              </div>
              {completedTasks.includes("python_13") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/14-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">14-dars: Type conversion</h2>
                <p className="text-gray-600 mt-1">Turli turdagi ma&apos;lumotlarni aylantirish.</p>
              </div>
              {completedTasks.includes("python_14") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/15-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">15-dars: Exception handling</h2>
                <p className="text-gray-600 mt-1">Xatolarga qarshi himoya va oqilona javob.</p>
              </div>
              {completedTasks.includes("python_15") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Boshlash</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/1-test" className="block bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200 hover:border-indigo-500 transition cursor-pointer mt-4">
            <div className="flex justify-between items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Oraliq test (1, 15) — 1-bosqich testi
                </h2>
                <p className="text-indigo-700 mt-1">1–15 darslar bo&apos;yicha asosiy bilimlarni tekshirish.</p>
              </div>
              <span className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">Testni boshlash</span>
            </div>
          </Link>

          <div className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">2-bosqich</p>
            <p className="mt-2 text-base font-medium text-violet-900">Qiyinroq mavzular: modullar, comprehensions, lambda, fayllar, OOP va loyiha uslubidagi yechimlar.</p>
          </div>

          <Link href="/courses/python/16-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">16-dars: Modullar va paketlar</h2>
                <p className="text-gray-600 mt-1">Standart kutubxonalar va import bilan ishlash.</p>
              </div>
              {completedTasks.includes("python_16") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/17-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">17-dars: Comprehension</h2>
                <p className="text-gray-600 mt-1">Sodda va samarali ro&apos;yxat va dict yaratish.</p>
              </div>
              {completedTasks.includes("python_17") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/18-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">18-dars: Lambda, map, filter</h2>
                <p className="text-gray-600 mt-1">Funktsiyalarni qisqa va kuchli tarzda ishlatish.</p>
              </div>
              {completedTasks.includes("python_18") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/19-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">19-dars: Fayllar bilan ishlash</h2>
                <p className="text-gray-600 mt-1">Matn fayllarini yozish, o&apos;qish va saqlash.</p>
              </div>
              {completedTasks.includes("python_19") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/20-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">20-dars: Nested dict va set amaliyoti</h2>
                <p className="text-gray-600 mt-1">Ichma-ich ma&apos;lumotlar tuzilmalari va tezkor qidiruv.</p>
              </div>
              {completedTasks.includes("python_20") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/21-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">21-dars: OOP asoslari</h2>
                <p className="text-gray-600 mt-1">Class, object va __init__ bilan real strukturani yaratish.</p>
              </div>
              {completedTasks.includes("python_21") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/22-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-violet-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">22-dars: Loyiha uslubidagi mini vazifa</h2>
                <p className="text-gray-600 mt-1">Kirish, ma&apos;lumotlar, funksiyalar va sinflarni birlashtirish.</p>
              </div>
              {completedTasks.includes("python_22") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">Qiyin bosqich</span>
              )}
            </div>
          </Link>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">Super daraja</p>
            <p className="mt-2 text-base font-medium text-amber-900">Bu bosqichda nazariya, misollar va buyruqlar to&apos;liq tushuntiriladi. Har bir dars real loyihaviy amaliyot, qoidalar va to&apos;liq nazariya asosida yasaladi.</p>
          </div>

          <Link href="/courses/python/23-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">23-dars: JSON va ma&apos;lumotlarni parse qilish</h2>
                <p className="text-gray-600 mt-1">JSON, dict va listlar bilan real ma&apos;lumotlar bilan ishlash.</p>
              </div>
              {completedTasks.includes("python_23") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/24-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">24-dars: requests va API</h2>
                <p className="text-gray-600 mt-1">Veb-so&apos;rovlar va tashqi ma&apos;lumotlarni olib kelish.</p>
              </div>
              {completedTasks.includes("python_24") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/25-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">25-dars: Virtual environment</h2>
                <p className="text-gray-600 mt-1">Loyiha uchun mustaqil va toza muhit yaratish.</p>
              </div>
              {completedTasks.includes("python_25") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/26-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">26-dars: Paketlar va pip</h2>
                <p className="text-gray-600 mt-1">Kutubxonalar o&apos;rnatish, yangilash va boshqarish.</p>
              </div>
              {completedTasks.includes("python_26") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/27-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">27-dars: Debugging va xatolarni aniqlash</h2>
                <p className="text-gray-600 mt-1">print, traceback, breakpoints va tahlil usullari.</p>
              </div>
              {completedTasks.includes("python_27") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/28-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">28-dars: SQLite va ma&apos;lumotlar bazasi</h2>
                <p className="text-gray-600 mt-1">Mikro bazalar bilan ishlash va ma&apos;lumotlarni saqlash.</p>
              </div>
              {completedTasks.includes("python_28") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/29-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">29-dars: Kengaytirilgan OOP</h2>
                <p className="text-gray-600 mt-1">Inheritance, polymorphism, encapsulation va classlar.</p>
              </div>
              {completedTasks.includes("python_29") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/30-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">30-dars: CLI dasturlar va argumentlar</h2>
                <p className="text-gray-600 mt-1">Terminal orqali interaktiv dasturlar yaratish.</p>
              </div>
              {completedTasks.includes("python_30") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/31-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">31-dars: Date, time va datetime</h2>
                <p className="text-gray-600 mt-1">Sana, vaqt va hisob-kitoblar.</p>
              </div>
              {completedTasks.includes("python_31") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/32-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">32-dars: Regular expressions</h2>
                <p className="text-gray-600 mt-1">Matn qidirish, moslik tekshirish va formatlar.</p>
              </div>
              {completedTasks.includes("python_32") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/33-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">33-dars: Decorators</h2>
                <p className="text-gray-600 mt-1">Funksiyalarni o&apos;ramlash va qayta ishlatish.</p>
              </div>
              {completedTasks.includes("python_33") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/34-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">34-dars: Iterators va generators</h2>
                <p className="text-gray-600 mt-1">Qisqa va samarali ma&apos;lumotlarni ketma-ketlik orqali ishlash.</p>
              </div>
              {completedTasks.includes("python_34") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/35-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">35-dars: Mini loyiha — To-do app</h2>
                <p className="text-gray-600 mt-1">Vazifalarni saqlash, qo&apos;shish va o&apos;chirish.</p>
              </div>
              {completedTasks.includes("python_35") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

          <Link href="/courses/python/36-dars" className="block bg-white p-6 rounded-xl shadow-sm border hover:border-amber-500 transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">36-dars: Final loyiha — Student Management</h2>
                <p className="text-gray-600 mt-1">Project architecture, CRUD, ma&apos;lumotlar bilan ishlash va yakuniy amaliyot.</p>
              </div>
              {completedTasks.includes("python_36") ? (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Tugatilgan ✅</span>
              ) : (
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">Super daraja</span>
              )}
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}