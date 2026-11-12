"use client";

import { useMemo, useState } from "react";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export default function LessonTheoryPanel({
  title,
  deepNotes,
  examples,
  quiz,
  accent,
}: {
  title: string;
  deepNotes: string[];
  examples: string[];
  quiz: QuizQuestion[];
  accent?: "amber" | "rose" | "emerald" | "indigo" | "cyan" | "teal" | "fuchsia" | "orange" | "pink" | "violet" | "lime" | "sky" | "red" | "blue";
}) {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const accentMap = useMemo(
    () => ({
      blue: { bg: "from-blue-50 to-indigo-50", border: "border-blue-200", badge: "bg-blue-600", text: "text-blue-700", soft: "bg-blue-50" },
      amber: { bg: "from-amber-50 to-yellow-50", border: "border-amber-200", badge: "bg-amber-600", text: "text-amber-700", soft: "bg-amber-50" },
      rose: { bg: "from-rose-50 to-pink-50", border: "border-rose-200", badge: "bg-rose-600", text: "text-rose-700", soft: "bg-rose-50" },
      emerald: { bg: "from-emerald-50 to-teal-50", border: "border-emerald-200", badge: "bg-emerald-600", text: "text-emerald-700", soft: "bg-emerald-50" },
      indigo: { bg: "from-indigo-50 to-violet-50", border: "border-indigo-200", badge: "bg-indigo-600", text: "text-indigo-700", soft: "bg-indigo-50" },
      cyan: { bg: "from-cyan-50 to-sky-50", border: "border-cyan-200", badge: "bg-cyan-600", text: "text-cyan-700", soft: "bg-cyan-50" },
      teal: { bg: "from-teal-50 to-cyan-50", border: "border-teal-200", badge: "bg-teal-600", text: "text-teal-700", soft: "bg-teal-50" },
      fuchsia: { bg: "from-fuchsia-50 to-pink-50", border: "border-fuchsia-200", badge: "bg-fuchsia-600", text: "text-fuchsia-700", soft: "bg-fuchsia-50" },
      orange: { bg: "from-orange-50 to-amber-50", border: "border-orange-200", badge: "bg-orange-600", text: "text-orange-700", soft: "bg-orange-50" },
      pink: { bg: "from-pink-50 to-rose-50", border: "border-pink-200", badge: "bg-pink-600", text: "text-pink-700", soft: "bg-pink-50" },
      violet: { bg: "from-violet-50 to-indigo-50", border: "border-violet-200", badge: "bg-violet-600", text: "text-violet-700", soft: "bg-violet-50" },
      lime: { bg: "from-lime-50 to-emerald-50", border: "border-lime-200", badge: "bg-lime-600", text: "text-lime-700", soft: "bg-lime-50" },
      sky: { bg: "from-sky-50 to-blue-50", border: "border-sky-200", badge: "bg-sky-600", text: "text-sky-700", soft: "bg-sky-50" },
      red: { bg: "from-red-50 to-orange-50", border: "border-red-200", badge: "bg-red-600", text: "text-red-700", soft: "bg-red-50" },
    }),
    []
  );

  const palette = accentMap[accent ?? "amber"];

  const score = useMemo(
    () => quiz.reduce((total, item, index) => total + (selected[index] === item.answer ? 1 : 0), 0),
    [quiz, selected]
  );

  const handleAnswer = (index: number, value: string) => {
    setSelected((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <section className={`mt-10 rounded-2xl border ${palette.border} bg-gradient-to-r ${palette.bg} p-6 shadow-sm`}>
      <div className="mb-5 flex items-center gap-3">
        <span className={`rounded-full ${palette.badge} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white`}>
          Katta nazariya
        </span>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-white/80 bg-white/80 p-5 shadow-sm">
          <h4 className="mb-3 text-lg font-bold text-gray-900">Nazaridan ko&apos;rish</h4>
          <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
            {deepNotes.map((note, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-500" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/80 bg-white/80 p-5 shadow-sm">
          <h4 className="mb-3 text-lg font-bold text-gray-900">Misollar</h4>
          <ul className="space-y-3 text-sm leading-relaxed text-gray-700">
            {examples.map((example, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/80 bg-white/80 p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h4 className="text-lg font-bold text-gray-900">Oraliq test</h4>
          {showResults && (
            <span className={`rounded-full ${palette.soft} px-3 py-1 text-xs font-bold ${palette.text}`}>
              Natija: {score}/{quiz.length}
            </span>
          )}
        </div>

        <div className="space-y-5">
          {quiz.map((item, index) => (
            <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="mb-3 font-medium text-gray-900">{index + 1}. {item.question}</p>
              <div className="grid gap-2 md:grid-cols-2">
                {item.options.map((option) => {
                  const isSelected = selected[index] === option;
                  const isCorrect = option === item.answer;
                  const showCorrect = showResults && isCorrect;
                  const showWrong = showResults && isSelected && !isCorrect;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswer(index, option)}
                      className={[
                        "rounded-lg border px-3 py-2 text-left text-sm transition",
                        isSelected ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300",
                        showCorrect ? "border-green-500 bg-green-50 text-green-700" : "",
                        showWrong ? "border-red-500 bg-red-50 text-red-700" : "",
                      ].join(" ")}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {showResults && (
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-semibold">Izoh:</span> {item.explanation}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setShowResults(true)}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Javoblarni tekshirish
          </button>
          <button
            type="button"
            onClick={() => { setSelected({}); setShowResults(false); }}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Qayta boshlash
          </button>
        </div>
      </div>
    </section>
  );
}
