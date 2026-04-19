'use client'
import { MouseEventHandler, useState } from "react"
import Recipe from "./Recipe"
import Ingredients from "./Ingredients"
import axios from "axios"
import { convertServerPatchToFullTree } from "next/dist/client/components/segment-cache/navigation"
import { useRouter } from "next/navigation"
let addedIngredients: any[] = []
export default function Main(){
    let [ingredients, setIngredients] = useState<any>([])
    let [recipe, setRecipe] = useState("")
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
        setRecipe("Loading...")
        await axios.post(`/api/generate`,{
            "ingredientsList": addedIngredients
        })
        router.push('/generate')
        setRecipe("Loaded")
    }
    return (
        <div className="flex justify-center">
        <main className="my-45 flex flex-col p-5 shadow-xl drop-shadow-2xl bg-amber-50 w-[90%] rounded-xl min-h-50">
            <form className="addIngredientForm w-full flex flex-col md:flex-row gap-2"
            action={addItems}>
                <input className="md:w-[80%] border-2 rounded-xl px-5 py-2" type="text" placeholder="e.g. oregano" name="ingredient"></input>
                <button className="md:w-[20%] py-2  bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white rounded-xl" type="submit">+ Add ingredient</button>
            </form>
            <p className="mt-2 text-gray-400 font-mono w-full text-center mb-5">Add atleast four items to start generating recipe...</p>
            <div>
            <Ingredients item={ingredients} recipe={showRecipe}/>
            <div>{ recipe 
            }</div>
            </div>
        </main>
        </div>
    )
}