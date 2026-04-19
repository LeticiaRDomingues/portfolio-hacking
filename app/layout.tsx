import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "./globals.css"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex min-h-dvh flex-col">
        {/* Layout UI*/}
        {/* Place children were you want to render a page or nested layout*/}
        <header><Navbar /></header>
        <main className="flex-1 bg-black text-white px-8">{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  )
}