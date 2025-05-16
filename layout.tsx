import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Paymax Minimal",
  description: "Минималистичный аналог Paymax — Личный Кабинет",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f4f7fa] min-h-screen text-neutral-900 antialiased">
        <header className="w-full flex items-center justify-between bg-[#eceff1] px-8 h-16 border-b border-neutral-200">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold tracking-widest select-none font-mono">PAYSIMPLE</span>
            <nav className="flex gap-6 items-center">
              <Link href="/dashboard" className="text-base font-medium px-1 hover:text-black text-neutral-500">Dashboard</Link>
              <Link href="/merchants" className="text-base font-medium px-1 hover:text-black text-neutral-500">Merchants</Link>
              <Link href="/history" className="text-base font-medium px-1 hover:text-black text-neutral-500">History</Link>
              <Link href="/settings" className="text-base font-medium px-1 hover:text-black text-neutral-500">Settings</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500">test@example.com</span>
            <form method="post" action="/logout">
              <button type="submit" className="border bg-white rounded-md px-3 py-1 text-sm hover:bg-neutral-100">Выйти</button>
            </form>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 min-h-[75vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
