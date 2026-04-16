import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "./globals.css"

export default function SiteLayout({children}: {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI*/}
        {/* Place children were you want to render a page or nested layout*/}
        <header><Navbar /></header>
        <main className='bg-bl'>{children}</main>
        {/*<footer><Footer /></footer>*/}
      </body>
    </html>
  )
}