import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900">
      <head />
      <body>
        <main className="flex flex-col justify-center items-center max-w-xl mx-auto mt-8">
          <h1 className="text-4xl font-medium text-gray-50 mb-8">Hacker News</h1>
          {/* <div className="flex flex-col space-y-4 mt-8 w-full justify-items-stretch"> */}
          {children}
        </main>
      </body>
    </html>
  )
}
