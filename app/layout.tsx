import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <head />
      <body>
        <main className="mx-auto flex max-w-2xl flex-col items-center justify-center justify-items-stretch bg-white py-16 px-4 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <h1 className="text-4xl font-medium text-gray-50">Hacker News</h1>
          <div className="mt-8 flex w-full flex-col justify-items-stretch">{children}</div>
        </main>
      </body>
    </html>
  )
}
