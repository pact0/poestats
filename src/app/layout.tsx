import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import tftIcon from "../assets/images/TFTExtension-128x128.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Poestats',
  description: 'Poestats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex bg-blue-400 shadow-indigo-200 p-10 justify-between'>

          <div className='flex w-1/2'>
            <Image
              src={tftIcon}
              alt=''
              placeholder='empty'
              width={128 / 2}
              height={128 / 2}
            // className='transition-opacity opacity-0 duration-[1s]'
            // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />

            <h1 className='text-indigo-50'>Poestats</h1>
            <h2 className='px-10'>text</h2>
          </div>


          <div className='flex w-1/2 justify-between'>

            <Link href={"/"}>
              Home
            </Link>

            <Link href={"/strats"}>
              Strats
            </Link>

            <Link href={"/login"}>
              Login
            </Link>

            <Link href={"/register"}>
              Register
            </Link>

          </div>

        </div>

        {children}</body>
    </html>
  )
}
