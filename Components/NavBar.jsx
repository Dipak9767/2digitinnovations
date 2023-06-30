"use client"

import Link from "next/link";
import { useState } from "react"
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [active, setActive] = useState(false)
    return (
        <main className="min-w-screen bg-white">
            <nav className='min-w-screen  bg-white text-black border-b-2 border-gray-300 '>
                <div className='md:max-w-5xl max-w-screen py-1 px-2 md:p-0 mx-auto flex items-center justify-between '>
                    <div>
                        <img className=' w-[8rem] md:w-[11rem]'
                            src='/Logo 1.png' alt="image" />

                    </div>
                    <div className=' items-center justify-end gap-10 hidden md:flex'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/app-portfolio'}>App Protfolio</Link>
                        <Link href={'/web-portfolio'}>Web Portfolio</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/blogs'}>Blogs</Link>
                        <Link href={'/career'}>Career</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                    {
                        active ? <FaTimes className="text-2xl md:hidden block cursor-pointer" onClick={() => setActive(!active)} />
                            : <FaBars className="text-2xl md:hidden block cursor-pointer" onClick={() => setActive(!active)} />
                    }
                </div>
                {
                    active &&
                    <div className='w-full items-center justify-end gap-2  flex flex-col md:hidden'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/app-portfolio'}>App Protfolio</Link>
                        <Link href={'/web-portfolio'}>Web Portfolio</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/blogs'}>Blogs</Link>
                        <Link href={'/career'}>Career</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                }
            </nav>
        </main>
    )
}

export default NavBar