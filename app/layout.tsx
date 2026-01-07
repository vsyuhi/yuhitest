import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Buenard as Pretendard } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _pretendard = Pretendard({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "수업 자료실 - AI 디지털교과서",
  description: "중학교 1학년 수학 교사를 위한 빠른 수업 자료 선택 플랫폼",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${_pretendard.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
