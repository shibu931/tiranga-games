import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between p-4 px-8'>
        <Link href="/" className='my-auto'>
            <Image
                src="/img/logo.png"
                width="140"
                height="80"
                alt="Tiranga Games"
                className='drop-shadow-lg'
            />
        </Link>
        <nav className='flex'>
            <Link href="https://tirangalottery.in/#/register?invitationCode=78411381114" className='cta-btn px-6 font-semibold py-2 animated-border bg-green-500 text-white rounded-md my-auto me-2'>Register Now</Link>
            <Link href="https://tirangalottery.in/#/register?invitationCode=78411381114" className='cta-btn px-6 font-semibold py-2 animated-border bg-blue-500 text-white rounded-md my-auto me-2'>Login</Link>
        </nav>
    </header>
  )
}

export default Navbar