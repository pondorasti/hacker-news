import "./globals.css"
import { Inter } from "@next/font/google"
import clsx from "clsx"

const inter = Inter({ variable: "--font-inter", display: "swap" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx("bg-gray-50 dark:bg-black", inter.variable)}>
      <head />
      <body>
        <main className="mx-auto flex max-w-2xl flex-col items-center justify-center justify-items-stretch bg-white py-12 px-4 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100">Hacker News</h1>
          {/* TODO: aria for ordered list */}
          <div className="mt-8 flex w-full flex-col justify-items-stretch">{children}</div>
        </main>
      </body>
    </html>
  )
}
