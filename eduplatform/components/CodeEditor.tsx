"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({
  taskId,
  initialCode,
  expectedOutput,
}: {
  taskId: string;
  initialCode: string;
  expectedOutput?: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (!taskId) return;

    const saved = window.localStorage.getItem(`task_${taskId}`);

    if (saved === "true") {
      setIsCorrect(true);
      setStatus("success");
      setOutput(expectedOutput ?? "Kutilgan natija allaqachon bajarilgan.");
    }
  }, [expectedOutput, taskId]);

  const runCode = async () => {
    setLoading(true);
    setOutput("Ishlayapti...");
    setStatus("idle");

    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language: "python" }),
      });

      const data = await res.json();
      const resultOutput = (data.output ?? data.error ?? "Hech narsa chiqmadi.").trim();
      setOutput(resultOutput);

      if (expectedOutput) {
        const normalizedActual = resultOutput.replace(/\r/g, "").trim();
        const normalizedExpected = expectedOutput.trim();

        const matched =
          normalizedExpected === "5"
            ? /(^|\s|\n)5($|\s|\n)/.test(normalizedActual)
            : normalizedActual === normalizedExpected;

        setStatus(matched ? "success" : "error");
        setIsCorrect(matched);

        if (matched) {
          window.localStorage.setItem(`task_${taskId}`, "true");
          window.dispatchEvent(new Event("progress_updated"));
        }
      }
    } catch (err) {
      setOutput("Xatolik yuz berdi! Iltimos, qayta urinib ko'ring.");
      setStatus("error");
      setIsCorrect(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg border border-gray-700">
        <Editor
          height="250px"
          defaultLanguage="python"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            padding: { top: 16 },
          }}
        />
      </div>

      {output && (
        <div
          className={[
            "overflow-hidden rounded-xl border shadow-sm",
            status === "success"
              ? "border-green-200 bg-gradient-to-r from-green-50 to-emerald-50"
              : status === "error"
                ? "border-red-200 bg-gradient-to-r from-red-50 to-rose-50"
                : "border-slate-200 bg-gradient-to-r from-slate-50 to-gray-50",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-current/10 bg-white/30 px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Natija
            </span>
            <span
              className={[
                "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                status === "success"
                  ? "bg-green-100 text-green-700"
                  : status === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-slate-200 text-slate-600",
              ].join(" ")}
            >
              {status === "success" ? "Yutdi" : status === "error" ? "Xato" : "Kutilmoqda"}
            </span>
          </div>

          <div className="p-4">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-800">
              {output}
            </pre>
          </div>
        </div>
      )}

      {expectedOutput && status === "success" && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 shadow-sm">
          ✅ To'g'ri javob! Sizning chiqishingiz kutilgan natijaga mos keladi.
        </div>
      )}

      {isCorrect && expectedOutput && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 shadow-sm">
          ✅ Bu dars muvaffaqiyatli yakunlandi.
        </div>
      )}

      {expectedOutput && status === "error" && output && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-sm">
          ❌ Chiqish noto'g'ri. {expectedOutput === "5" ? "Natijada faqat 5 soni bo'lishi kerak." : "Kutilgan natijaga mos kelmadi."}
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={runCode}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Kutilmoqda..." : "▶ Kodni tekshirish"}
        </button>
      </div>
    </div>
  );
}