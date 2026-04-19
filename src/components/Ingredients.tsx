import { useState } from "react"


export default function Ingredients(props:any){
    if(props.item.length>=1){
            return (
            <section className="ingredients">
            <div className="ingredients-list">
                <ul>
                    <h1 className="font-bold text-xl">Ingredients added:</h1>
                    {props.item}
                </ul>
            { props.item.length>=4 &&
                <div className="bottom-box gap-2 flex flex-col md:flex-row justify-between items-center p-5 mt-15 border-[1px] border-gray-500  rounded-xl">
                    <div className="flex">
                        <h5 className="font-bold text-[12px] md:text-[15px]">Generate a recipe from your list of ingredients</h5>
                    </div>
                    <button onClick = {props.recipe} className="md:w-[20%] text-[12px] md:text-[15px] w-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-xl py-2 px-5">Get a recipe</button>
                </div>
            }
            </div>
            </section>
            )
        }
}