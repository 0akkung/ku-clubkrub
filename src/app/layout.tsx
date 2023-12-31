import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { inter, kanit } from "@/assets/fonts"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanit.className}>
      {children}
      <Toaster />
      </body>
    </html>
  )
}
