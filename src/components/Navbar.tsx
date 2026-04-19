'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import chefserena from "@/assets/chef-claude-icon.png"
function Navbar() {
    const router = useRouter()
  return (
    <div className="flex justify-center">
    <div className="fixed z-5000 border-gray-300 text-white font-bold align-middle min-h-15 mt-2 text-[12px] md:text-[15px] border-[1px] rounded-xl backdrop-blur-2xl flex justify-between p-5 w-[95%] items-center">
      <div className="flex gap-2 justify-center items-center">
        <Image src={chefserena} alt="chefserena" className="w-5"/>
      <h1>chef-serena</h1>
      </div>
      <ul className="flex cursor-pointer gap-[12px] md:gap-5">
        <li onClick={()=>router.push('/')}>Home</li>
        <li onClick={()=>router.push('/recipe')}>Recipes</li>
        <li onClick={()=> router.push('/about')}>About</li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
