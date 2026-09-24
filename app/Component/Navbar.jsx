"use client"
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  const [searchUser, setSearchUser] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchUser.trim()) {
      router.push(`/${searchUser.trim()}`)
      setSearchUser("")
    }
  }

  return (
    <nav className='bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16 flex-wrap gap-3 py-2 md:py-0'>

      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="/tea.gif" width={44} alt="" />
        <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
      </Link>

      {/* Right side: Search bar side-by-side with Account/Login */}
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        {/* Creator Search Form */}
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              placeholder="Search creator..."
              className="bg-gray-800 text-white placeholder-gray-400 text-xs sm:text-sm rounded-lg pl-3 pr-16 sm:pr-20 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 w-36 sm:w-52 md:w-60"
            />
            <button
              type="submit"
              className="absolute right-1 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-medium rounded-md text-xs px-2.5 sm:px-3 py-1 cursor-pointer transition-all"
            >
              Search
            </button>
          </div>
        </form>

        <div className='relative flex justify-center items-center'>
          {session && <>
            <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
              setTimeout(() => {
                setShowdropdown(false)
              }, 150);
            }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" type="button">Account<svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Sign out</button>
                </li>
              </ul>
            </div></>
          }

          {!session && <Link href={"/login"}>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 sm:px-5 py-2 text-center cursor-pointer'>Login</button></Link>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar