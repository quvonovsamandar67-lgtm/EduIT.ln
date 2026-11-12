import Link from "next/link";

export default function Courses() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block font-medium">
          ← Bosh sahifaga qaytish
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Barcha Kurslar</h1>
        
        <div className="space-y-4">
          {/* Python kursi */}
          <Link href="/courses/python" className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border hover:border-blue-500 hover:shadow-md transition cursor-pointer">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.761S0 5.842 0 12.059c0 6.218 3.28 6.012 3.28 6.012h1.957v-2.885s-.105-3.28 3.227-3.28h5.558s3.122.05 3.122-3.018V3.139S17.727 0 11.914 0zM8.698 1.815a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12z" fill="#3776AB"/>
              <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.26S24 18.158 24 11.941c0-6.218-3.28-6.012-3.28-6.012h-1.957v2.885s.105 3.28-3.227 3.28H9.978s-3.122-.05-3.122 3.018v6.749S6.273 24 12.086 24zm3.216-1.815a1.06 1.06 0 1 1 0-2.12 1.06 1.06 0 0 1 0 2.12z" fill="#FFE873"/>
            </svg>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Python Dasturlash</h2>
              <p className="text-gray-600 mt-1">Noldan boshlab professional darajagacha.</p>
            </div>
          </Link>

          {/* JavaScript kursi */}
          <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="#F7DF1E"/>
              <path d="M14.743 17.473C15.207 18.282 15.828 18.881 16.836 18.881C17.683 18.881 18.229 18.458 18.229 17.878C18.229 17.179 17.664 16.933 16.729 16.523L16.221 16.305C14.743 15.678 13.743 14.884 13.743 13.205C13.743 11.664 14.907 10.473 16.743 10.473C18.05 10.473 19.007 10.928 19.693 12.107L18.121 13.121C17.757 12.466 17.364 12.121 16.743 12.121C16.107 12.121 15.714 12.523 15.714 13.121C15.714 13.735 16.107 13.981 16.986 14.366L17.493 14.584C19.229 15.33 20.229 16.096 20.229 17.817C20.229 19.666 18.779 20.63 16.793 20.63C14.85 20.63 13.6 19.707 12.914 18.487L14.743 17.473ZM8.243 17.618C8.586 18.228 8.9 18.743 9.657 18.743C10.379 18.743 10.836 18.458 10.836 17.318V10.63H12.836V17.358C12.836 19.387 11.636 20.31 9.757 20.31C8.05 20.31 7.05 19.42 6.536 18.31L8.243 17.618Z" fill="#000000"/>
            </svg>
            <div>
              <h2 className="text-2xl font-bold text-gray-500">JavaScript</h2>
              <p className="text-gray-400 mt-1">Veb-saytlarga jon kiriting. (Tez kunda...)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}