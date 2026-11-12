import { NextResponse } from "next/server";

const JUDGE0_URL = "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "API ishlayapti",
    data: {
      status: "running",
      app: "eduplatform",
    },
  });
}

export async function POST(req: Request) {
  try {
    const { code, language } = await req.json();

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        { ok: false, error: "code bo'sh bo'lishi mumkin emas" },
        { status: 400 }
      );
    }

    const languageId = language === "python" ? 71 : 63;

    const response = await fetch(JUDGE0_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_code: code,
        language_id: languageId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          ok: false,
          error: "Judge0 xizmatiga ulanishda xatolik yuz berdi",
          details: errorText,
        },
        { status: 500 }
      );
    }

    const result = await response.json();
    const status = result?.status?.description ?? "Unknown";
    const stdout = result?.stdout ?? "";
    const stderr = result?.stderr ?? "";
    const compileOutput = result?.compile_output ?? "";

    const output = stdout || stderr || compileOutput || "No output";
    const isAccepted = result?.status?.id === 3;

    return NextResponse.json({
      ok: isAccepted,
      output,
      error: isAccepted ? null : status,
      status,
      raw: result,
    });
  } catch (error) {
    console.error("Code runner xatosi:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Serverda ichki xatolik yuz berdi",
      },
      { status: 500 }
    );
  }
}
