"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <div className='bg-gray-900 text-white flex justify-between items-center px-4 h-16 sticky top-0 z-50'>
            <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center gap-1">
                <img className='w-12' src="/tea.gif" alt="GetMeAChai Logo" />
                <span> GetMeAChai </span>
            </Link>

            <div className="flex items-center gap-3">
                {session ? (
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-300 hidden sm:inline">
                            {session.user?.name || session.user?.email}
                        </span>
                        <button
                            onClick={() => signOut()}
                            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5'
                        >
                            Sign out
                        </button>
                    </div>
                ) : (
                    <Link href={"/login"}>
                        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm m-2 px-4 py-2.5 text-center leading-5'>
                            Login
                        </button>
                    </Link>
                )}
            </div>

        </div>
    )
}

export default Navbar