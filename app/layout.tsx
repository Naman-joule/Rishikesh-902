import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'गीता माहात्म्य',
  description: 'A digital platform for reading and sharing Hindu scriptures',
  generator: 'Next.js',
  icons: {
    icon: 'https://media.istockphoto.com/id/1400072011/vector/om-religious-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H5reYb2LP7W8w2DYYSn43FKJNZ-lgbPtV6UH9u5RQ18=',
    apple: 'https://media.istockphoto.com/id/1400072011/vector/om-religious-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H5reYb2LP7W8w2DYYSn43FKJNZ-lgbPtV6UH9u5RQ18=',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="https://media.istockphoto.com/id/1400072011/vector/om-religious-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H5reYb2LP7W8w2DYYSn43FKJNZ-lgbPtV6UH9u5RQ18=" sizes="any" />
        <link rel="apple-touch-icon" href="https://media.istockphoto.com/id/1400072011/vector/om-religious-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H5reYb2LP7W8w2DYYSn43FKJNZ-lgbPtV6UH9u5RQ18=" />
        <link rel="manifest" href="https://media.istockphoto.com/id/1400072011/vector/om-religious-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H5reYb2LP7W8w2DYYSn43FKJNZ-lgbPtV6UH9u5RQ18=" />
      </head>
      <body>{children}</body>
    </html>
  )
}
