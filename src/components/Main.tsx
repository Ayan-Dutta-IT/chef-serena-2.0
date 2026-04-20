'use client'
import { MouseEventHandler, useState } from "react"
import Ingredients from "./Ingredients"
import axios from "axios"
import { convertServerPatchToFullTree } from "next/dist/client/components/segment-cache/navigation"
import { useRouter } from "next/navigation"
import { motion } from 'motion/react'
let addedIngredients: any[] = []
export default function Main(){
    let [ingredients, setIngredients] = useState<any>([])
    let [recipe, setRecipe] = useState(false)
    const router = useRouter()
    function addItems(formData:any){
        const input = formData.get("ingredient")
        if(input===""){
            return
        }
        const listInput = input.charAt(0).toUpperCase()+input.slice(1)
        let isAdded = false
        addedIngredients.forEach((item)=>{
            if(item===listInput){
                isAdded=true
            }
            console.log(item+" "+listInput)
        })
        if(isAdded){
            return
        }
        addedIngredients.push(listInput)
        console.log(addedIngredients)
        setIngredients([...ingredients, <div className="flex justify-between p-2 border-[1px] border-zinc-500 rounded-xl m-2"><li className="flex items-center font-mono">{listInput}</li></div>])

    }
    
    async function showRecipe(e:any){
        setRecipe(true)
        e.target.disabled=true
        e.target.style.opacity=0.5
        await axios.post(`/api/generate`,{
            "ingredientsList": addedIngredients
        })
        e.target.disabled=false
        e.target.style.opacity=1
        router.push('/generate')
        setRecipe(false)
    }
    return (
        <motion.div
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1}}
        className="flex justify-center">
        <main className="my-45 flex flex-col p-5 shadow-xl drop-shadow-2xl bg-amber-50 w-[90%] rounded-xl min-h-50">
            <form className="addIngredientForm w-full flex flex-col md:flex-row gap-2"
            action={addItems}>
                <input className="md:w-[80%] border-2 rounded-xl px-5 py-2" type="text" placeholder="e.g. oregano" name="ingredient"></input>
                <button className="md:w-[20%] py-2  bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white rounded-xl" type="submit">+ Add ingredient</button>
            </form>
            <p className="mt-2 text-gray-400 font-mono w-full text-center mb-5">Add atleast four items to start generating recipe...</p>
            <div>
            <Ingredients item={ingredients} recipe={showRecipe}/>
            <div className="mt-10 mb-5 w-full flex justify-center">{ recipe &&
            <div className="flex gap-2">
                <motion.div
                initial={{y:0}}
                animate={{y:[0, 1, 2, 3, 4, 5, 4, 3, 2,1, 0]}}
                transition={{duration:2, repeat:Infinity}}
                className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 w-5 h-5 rounded-full"></motion.div>
                <motion.div
                initial={{y:0}}
                animate={{y:[0, 1, 2, 3, 4, 5, 4, 3, 2,1, 0]}}
                transition={{duration:2, repeat:Infinity, delay:0.5}}
                className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 w-5 h-5 rounded-full"></motion.div>
                <motion.div
                initial={{y:0}}
                animate={{y:[0, 1, 2, 3, 4, 5, 4, 3, 2,1, 0]}}
                transition={{duration:2, repeat:Infinity, delay:1}}
                className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 w-5 h-5 rounded-full"></motion.div>
            </div>
            }</div>
            </div>
        </main>
        </motion.div>
    )
}