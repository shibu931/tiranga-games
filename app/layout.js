import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import DialogComponent from '@/components/shared/DialogComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tiranga Games',
  description: 'Experience the adrenaline rush of color prediction gaming with Trianga Game! Predict colors in real-time, compete globally, and win big. Secure transactions and seamless gameplay await. Join us for an exhilarating journey to unlock fortunes!',
  generator: 'Tiranga Games',
  applicationName: 'Tiranga Games',
  referrer: 'origin-when-cross-origin',
  keywords: ['Tiranga Games', 'Color Prediction Game', 'Daman Game','91Club',"avitator game",'color trading','bounty games'],
  authors: [{ name: 'Rahul Kumar' }, { name: 'Rahul Kumar', url: 'https://tiranga-games.vercel.app/' }],
  creator: 'Rahul Kumar',
  publisher: 'Tiranga Game App',
  formatDetection: {
    email: 'tirangagames@gmail.com',
    address: false,
    telephone: false,
  },
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
