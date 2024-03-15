import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-green-700 p-8 lg:flex text-black text-center justify-between'>
      <div className='text-lg'>
        <p><Link href="/">Tiranga Games</Link> @ Copyright 2024</p>
      </div>
      <div className='text-lg'>
        <p><strong>Email: </strong>tirangagames@gamil.com</p>
      </div>
    </footer>
  )
}

export default Footer