import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='lg:flex justify-between p-4 px-8'>
        <Link href="/" className='my-auto'>
            <Image
                src="/img/logo.png"
                width="140"
                height="80"
                alt="Tiranga Games"
                className='drop-shadow-lg mb-3 mx-auto lg:m-0'
            />
        </Link>
        <nav className='flex justify-center lg:justify-end'>
            <Link href="https://tirangaapk.com/#/register?invitationCode=86627546976" className='cta-btn px-6 font-semibold py-2 animated-border bg-green-500 text-white rounded-md my-auto me-2'>Register Now</Link>
            <Link href="https://tirangaapk.com/#/register?invitationCode=86627546976" className='cta-btn px-6 font-semibold py-2 animated-border bg-blue-500 text-white rounded-md my-auto me-2'>Login</Link>
        </nav>
    </header>
  )
}

export default Navbar