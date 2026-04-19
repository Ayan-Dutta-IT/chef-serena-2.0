'use client'
import Navbar from '@/components/Navbar'
import Recipe from '@/components/Recipe'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div
    dangerouslySetInnerHTML={{__html:recipe}} className='mt-50 pb-50'>
    </div>
    </div>
  )
}

export default Generate
