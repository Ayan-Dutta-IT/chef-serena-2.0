'use client'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
function Generate() {
    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: [] as string[],
        instructions: [] as string[],
    })
    useEffect(()=>{
        async function recipe(){
       const recipeMarkdown = await axios.get("/api/generate")
       const recipeData=JSON.parse(recipeMarkdown.data)
       setRecipe(recipeData)
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
    className='mt-50 pb-50'>
      <div className="mx-auto w-[90%] max-w-3xl overflow-hidden rounded-3xl border border-white/50 bg-amber-50 shadow-2xl shadow-purple-950/30">
        <div className="h-2 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500" />
        <div className="p-6 md:p-10">
          <header className="mb-8 border-b border-amber-200 pb-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-purple-700">
              Chef Serena recommends
            </p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {recipe.title}
            </h1>
          </header>
          <section className="mb-8">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
              <span aria-hidden="true" className="h-6 w-1.5 rounded-full bg-purple-500" />
              Ingredients
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
            {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3 rounded-xl border border-amber-100 bg-white/80 p-3 text-slate-700 shadow-sm">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                  <span>{ingredient}</span>
                </li>
            ))}
            </ul>
          </section>
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-800">
              <span aria-hidden="true" className="h-6 w-1.5 rounded-full bg-indigo-500" />
              Instructions
            </h2>
            <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4 rounded-xl bg-white/70 p-4 text-slate-700 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-relaxed">{instruction}</span>
                </li>
            ))}
            </ol>
          </section>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default Generate
