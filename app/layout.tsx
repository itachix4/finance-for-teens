import "./globals.css"

export const metadata = {
  title: "Finance For Teens",
  description: "Learn investing early. Build wealth smarter.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">

        <nav className="flex justify-between items-center px-10 py-5 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="font-bold text-lg tracking-tight">
            Finance For Teens
          </div>

          <div className="flex gap-8 text-slate-600">
            <a href="/" className="hover:text-emerald-600 transition">Home</a>
            <a href="/tools" className="hover:text-emerald-600 transition">Tools</a>
            <a href="/about" className="hover:text-emerald-600 transition">About</a>
            <a href="/login" className="hover:text-emerald-600 transition">Login</a>
          </div>
        </nav>

        {children}

        <footer className="mt-32 py-10 text-center text-slate-500 border-t border-slate-200">
          © 2026 Finance For Teens
        </footer>

      </body>
    </html>
  )
}