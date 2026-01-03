import { UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Link href={'/dashboard'}>
        <Image src={'/log.svg'} width={60} height={60} alt="Logo" />
      </Link>

      <div className="flex items-center gap-5">
        {/* Classic Version Button with Tooltip */}
        <div className="relative group">
          <Link href="https://course-maker-nu.vercel.app/courses">
            <div className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white border border-dashed border-primary text-gray-700 hover:bg-gray-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 7v6h-6" />
                <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
              </svg>
              Legacy Version
            </div>
          </Link>

          <div className="absolute top-full right-0 mt-2 w-48 p-3 rounded-md bg-black text-white text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
            <div className="absolute -top-1 right-4 w-2 h-2 bg-black transform rotate-45"></div>
            Access the legacy version of our course generation platform
          </div>
        </div>

        {/* User Button */}
        <UserButton />
      </div>
    </div>
  )
}

export default Header