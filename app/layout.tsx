import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900">
      <head />
      <body>
        <main className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center">
          <h1 className="mb-8 text-4xl font-medium text-gray-50">Hacker News</h1>
          {children}
        </main>
      </body>
    </html>
  )
}
