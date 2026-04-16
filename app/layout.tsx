import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "./globals.css"

export default function SiteLayout({children}: {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-dvh">
        {/* Layout UI*/}
        {/* Place children were you want to render a page or nested layout*/}
        <header><Navbar /></header>
        <main className="flex-1">{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  )
}