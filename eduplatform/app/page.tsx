import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex flex-col items-center justify-center mt-20 px-4 text-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          An&apos;anaviy ta&apos;limdan <span className="text-blue-600">zamonaviy</span> o&apos;rganishga
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-[var(--muted)]">
          Videolar emas, balki haqiqiy kod yozish va uni tuzatish orqali AI, Python va JavaScript tillarini o&apos;rganing.
        </p>
        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          Bepul boshlash
        </Link>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 px-4 pb-20 md:grid-cols-3">
        {/* Python */}
        <Link href="/courses/python" className="block cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:border-blue-500 hover:shadow-md">
          <div className="mb-2 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.761S0 5.842 0 12.059c0 6.218 3.28 6.012 3.28 6.012h1.957v-2.885s-.105-3.28 3.227-3.28h5.558s3.122.05 3.122-3.018V3.139S17.727 0 11.914 0zM8.698 1.815a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12z" fill="#3776AB"/>
              <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.26S24 18.158 24 11.941c0-6.218-3.28-6.012-3.28-6.012h-1.957v2.885s.105 3.28-3.227 3.28H9.978s-3.122-.05-3.122 3.018v6.749S6.273 24 12.086 24zm3.216-1.815a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12z" fill="#FFE873"/>
            </svg>
            <h3 className="text-xl font-bold text-[var(--foreground)]">Python asoslari</h3>
          </div>
          <p className="text-[var(--muted)]">Buzilgan kodlarni tuzatish orqali mantiqiy fikrlashni o&apos;rganing.</p>
        </Link>

        {/* JavaScript */}
        <div className="cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:border-yellow-500 hover:shadow-md">
          <div className="mb-2 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="#F7DF1E"/>
              <path d="M14.743 17.473C15.207 18.282 15.828 18.881 16.836 18.881C17.683 18.881 18.229 18.458 18.229 17.878C18.229 17.179 17.664 16.933 16.729 16.523L16.221 16.305C14.743 15.678 13.743 14.884 13.743 13.205C13.743 11.664 14.907 10.473 16.743 10.473C18.05 10.473 19.007 10.928 19.693 12.107L18.121 13.121C17.757 12.466 17.364 12.121 16.743 12.121C16.107 12.121 15.714 12.523 15.714 13.121C15.714 13.735 16.107 13.981 16.986 14.366L17.493 14.584C19.229 15.33 20.229 16.096 20.229 17.817C20.229 19.666 18.779 20.63 16.793 20.63C14.85 20.63 13.6 19.707 12.914 18.487L14.743 17.473ZM8.243 17.618C8.586 18.228 8.9 18.743 9.657 18.743C10.379 18.743 10.836 18.458 10.836 17.318V10.63H12.836V17.358C12.836 19.387 11.636 20.31 9.757 20.31C8.05 20.31 7.05 19.42 6.536 18.31L8.243 17.618Z" fill="#000000"/>
            </svg>
            <h3 className="text-xl font-bold text-[var(--foreground)]">JavaScript</h3>
          </div>
          <p className="text-[var(--muted)]">Veb-saytlar uchun interaktivlik va dinamik xususiyatlar yaratish.</p>
        </div>

        {/* AI */}
        <div className="cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:border-purple-500 hover:shadow-md">
          <div className="mb-2 flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
              <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              <path d="M12 12 2.1 12"></path>
              <path d="M12 12 18.5 18.5"></path>
            </svg>
            <h3 className="text-xl font-bold text-[var(--foreground)]">Sun&apos;iy Intellekt</h3>
          </div>
          <p className="text-[var(--muted)]">Kelajak texnologiyalari va AI modellari bilan ishlashni boshlang.</p>
        </div>
      </div>
    </main>
  );
}