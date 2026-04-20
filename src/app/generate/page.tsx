'use client'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
function Generate() {
    const [recipe, setRecipe] = useState("")
    useEffect(()=>{
        async function recipe(){
       const recipeMarkdown = await axios.get("/api/generate")
       setRecipe(recipeMarkdown.data)
        }
        recipe()
    },[])
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 min-h-screen w-full">
        <Navbar />
    <motion.div
    initial={{y:10, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:1}}
    dangerouslySetInnerHTML={{__html:recipe}} className='mt-50 pb-50'>
    </motion.div>
    </div>
  )
}

export default Generate
