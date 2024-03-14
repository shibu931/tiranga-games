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
  metadataBase: new URL('https://tiranga-games.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Uncovering the Colors of Triumph: Aviator Gaming & Tiranga Color Prediction - Your Passport to Excitement and Benefits!',
    description: 'Enter the thrilling world of Aviator Gaming and Tiranga Color Prediction, where strategy and excitement collide. Savor the thrill of making color predictions and navigating thrilling adventures as you compete for amazing prizes. Come play with us for a unique gaming experience where every choice you make could result in success. Are you prepared to accept the challenge and take off?',
    url: 'https://tiranga-games.vercel.app/',
    siteName: 'Tiranga Games',
    images: [
      {
        url: 'https://tiranga-games.vercel.app/og-img.png', 
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiranga Game Color prediction color trading aviator',
    description: '🚀 Enter the world of Tiranga Color Prediction & Aviator Gaming! 🎮 Dive into thrilling predictions and high-flying adventures for your shot at victory and rewards. Are you ready to take on the challenge? #TirangaGaming #Aviator #PredictAndWin',
    siteId: '1467726470533754880',
    creator: '@tirangagame',
    creatorId: '1467726470533754880',
    images: ['https://tiranga-games.vercel.app/og-img.png'], // Must be an absolute URL
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
