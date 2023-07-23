'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (


    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  ${inter.className}`}
    >

      <nav>
        <li>
          <Link href={'/usersServer'}>
            Users Server
          </Link>
        </li>
        <li>
          <Link href={'/usersClient'}>
            Users Client
          </Link>
        </li>
      </nav>
      <h1 className="text-red bg-[#55584b] before:content-['hello\_world']">hello</h1>


    </main>
  )
}
