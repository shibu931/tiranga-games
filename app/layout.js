import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import DialogComponent from '@/components/shared/DialogComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tiranga Games',
  description: 'Experience the adrenaline rush of color prediction gaming with Trianga Game! Predict colors in real-time, compete globally, and win big. Secure transactions and seamless gameplay await. Join us for an exhilarating journey to unlock fortunes!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+'w-svw h-svh'}>
      <Navbar/>
        {children}
        
      <DialogComponent/>
      <Footer/>
      </body>
    </html>
  )
}
