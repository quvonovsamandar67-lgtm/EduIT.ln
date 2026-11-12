"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    type: "Amaliy",
    question: "Ekranga ma'lumot chiqarish uchun qaysi funksiya ishlatiladi?",
    options: ["echo()", "print()", "console.log()", "write()"],
    correct: 1,
  },
  {
    id: 2,
    type: "Nazariya",
    question: "O'zgaruvchi nomi to'g'ri yozilgan variantni tanlang.",
    options: ["1ism", "mening ismim", "mening_ismim", "print"],
    correct: 2,
  },
  {
    id: 3,
    type: "Nazariya",
    question: "Qaysi ma'lumot turi mantiqiy qiymatni (True/False) saqlaydi?",
    options: ["String", "Integer", "Float", "Boolean"],
    correct: 3,
  },
  {
    id: 4,
    type: "Amaliy",
    question: "Quyidagi kodning natijasi nima bo'ladi?\nprint(5 + 3)",
    options: ["8", "53", "5 + 3", "Error"],
    correct: 0,
  },
  {
    id: 5,
    type: "Nazariya",
    question: "Python tilida qator (string) qanday qavs ichiga olinadi?",
    options: ["()", "[]", "{}", "\"\" yoki ''"],
    correct: 3,
  },
  {
    id: 6,
    type: "Amaliy",
    question: "Quyidagi kodning natijasi nima bo'ladi?\nname = 'Ali'\nprint(name)",
    options: ["Ali", "name", "Error", "None"],
    correct: 0,
  },
  {
    id: 7,
    type: "Nazariya",
    question: "Python dasturida kommentariya qaysi belgi bilan boshlanadi?",
    options: ["//", "#", "/*", "--"],
    correct: 1,
  },
  {
    id: 8,
    type: "Amaliy",
    question: "Quyidagi kodda x = 10 bo'lsa, print(x * 2) natijasi qanday bo'ladi?",
    options: ["12", "20", "102", "x2"],
    correct: 1,
  },
  {
    id: 9,
    type: "Nazariya",
    question: "Python dasturida `input()` funksiyasi nima uchun ishlatiladi?",
    options: ["Ekranga chiroq yoqish", "Foydalanuvchidan ma'lumot olish", "Raqamlarni yig'ish", "Yangi fayl yaratish"],
    correct: 1,
  },
  {
    id: 10,
    type: "Amaliy",
    question: "Quyidagi kodni bajarganda nima chiqadi?\nprint('Python' + ' kurs')",
    options: ["Python kurs", "Pythonkurs", "Python + kurs", "Error"],
    correct: 0,
  },
  {
    id: 11,
    type: "Nazariya",
    question: "Dasturlashda `if` ning maqsadi nima?",
    options: ["Takrorlash", "Shart tekshirish", "Qatorni o'chirish", "O'zgaruvchini yaratish"],
    correct: 1,
  },
  {
    id: 12,
    type: "Amaliy",
    question: "Quyidagi kod natijasi nima bo'ladi?\nnum = 7\nif num % 2 == 0:\n    print('juft')\nelse:\n    print('toq')",
    options: ["juft", "toq", "7", "Error"],
    correct: 1,
  },
  {
    id: 13,
    type: "Nazariya",
    question: "`for` sikli qaysi vazifani bajaradi?",
    options: ["Faylni o'chirish", "Takrorlanadigan amallarni bajarish", "Raqamni o'zgartirish", "Iltimos bilan ishlash"],
    correct: 1,
  },
  {
    id: 14,
    type: "Amaliy",
    question: "Quyidagi kodning natijasi nima bo'ladi?\nfor i in range(3):\n    print(i)",
    options: ["0 1 2", "1 2 3", "3 2 1", "Error"],
    correct: 0,
  },
  {
    id: 15,
    type: "Nazariya",
    question: "Python dasturida `list` nima bo'ladi?",
    options: ["Qatorlarni saqlovchi ob'ekt", "Ro'yxat yoki to'plam", "Bitta son", "Funksiya"],
    correct: 1,
  },
];

export default function PythonTest1() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const checkAnswers = () => setShowResult(true);

  const calculateScore = () =>
    questions.reduce((score, question) => {
      if (selectedAnswers[question.id] === question.correct) {
        return score + 1;
      }
      return score;
    }, 0);

  const score = calculateScore();
  const percent = Math.round((score / questions.length) * 100);

  const getResultMessage = () => {
    if (percent >= 90) return "Ajoyib! Siz mavzuni yaxshi o'zlashtirgansiz.";
    if (percent >= 70) return "Yaxshi natija! Bir oz chuqurroq takrorlang.";
    if (percent >= 50) return "Qoniqarli, lekin yana tayyorlanishingiz kerak.";
    return "Ko'p ishlash kerak. Darslarni yana qayta ko'rib chiqing.";
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/courses/python" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
          ← Kurs dasturiga qaytish
        </Link>

        <div className="mb-10 border-b pb-8 text-center">
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Oraliq Test: Python asoslari
          </h1>
          <p className="text-gray-600">
            Jami {questions.length} ta savol. Ularning {questions.filter((q) => q.type === "Amaliy").length} tasi amaliy, {questions.filter((q) => q.type === "Nazariya").length} tasi nazariy.
          </p>
        </div>

        <div className="space-y-8">
          {questions.map((question, index) => {
            const selectedOption = selectedAnswers[question.id];
            const isCorrect = selectedOption === question.correct;

            return (
              <div key={question.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    <span className="mr-2 text-blue-600">{index + 1}.</span>
                    {question.question}
                  </h2>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${question.type === "Amaliy" ? "bg-blue-100 text-blue-700" : "bg-violet-100 text-violet-700"}`}>
                    {question.type}
                  </span>
                </div>

                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => {
                    let optionClass = "border-gray-200 bg-white hover:border-blue-400 cursor-pointer";

                    if (selectedOption === optionIndex) {
                      optionClass = "border-blue-500 bg-blue-50 cursor-pointer";
                    }

                    if (showResult) {
                      if (optionIndex === question.correct) {
                        optionClass = "border-green-500 bg-green-50 border-2";
                      } else if (selectedOption === optionIndex && !isCorrect) {
                        optionClass = "border-red-500 bg-red-50 border-2";
                      } else {
                        optionClass = "border-gray-200 bg-white opacity-60";
                      }
                    }

                    return (
                      <div
                        key={optionIndex}
                        onClick={() => handleSelect(question.id, optionIndex)}
                        className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 ${optionClass}`}
                      >
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold ${
                            selectedOption === optionIndex
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-gray-300 text-transparent"
                          }`}
                        >
                          {selectedOption === optionIndex ? "✓" : ""}
                        </div>
                        <span className="text-base text-gray-800">{option}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
          {!showResult ? (
            <button
              onClick={checkAnswers}
              disabled={Object.keys(selectedAnswers).length !== questions.length}
              className="w-full rounded-xl bg-blue-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
            >
              Javoblarni tekshirish
            </button>
          ) : (
            <div>
              <h3 className="mb-2 text-2xl font-bold">Sizning natijangiz:</h3>
              <p className="mb-6 text-4xl font-extrabold text-blue-600">
                {score} / {questions.length}
              </p>

              <div className="mb-6 rounded-xl bg-blue-50 p-4 text-lg font-medium text-blue-800">
                {percent}% • {getResultMessage()}
              </div>

              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <Link href="/courses/python" className="rounded-lg bg-gray-200 px-6 py-2 font-bold text-gray-800 transition hover:bg-gray-300">
                  Kursga qaytish
                </Link>
                {percent >= 70 && (
                  <Link href="/courses/python/2-dars" className="rounded-lg bg-green-600 px-6 py-2 font-bold text-white transition hover:bg-green-700">
                    Keyingi darsga o'tish →
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}