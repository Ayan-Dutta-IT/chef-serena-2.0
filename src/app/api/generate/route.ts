import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai"
let recipe:any
export async function POST(req:NextRequest){
     const SYSTEM_PROMPT = `
        You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe may include a few additional ingredients they didn't mention. Format your response in below valid json format without any wrapping code fences just the json object should be given,
        {
            "title": "Recipe Title",
            "ingredients": [ingredient1, ingredient2, .....],
            "instructions": [first step, second step, .....]
        }

        `
        const genAI = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})
        
        async function getRecipeFromGemini(ingredientsArr:any) {
            const ingredientsString = ingredientsArr.join(", ")
            try {
                const systemMessage = `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}.Please give me a recipe you'd recommend I make!`
                
                const response = await genAI.models.generateContent({
                     model: "gemini-3.5-flash-lite",
                     contents: systemMessage,
                });
                return response.text
            } catch (err:any) {
                return NextResponse.json({'message':err})
            }
        }
        recipe = await getRecipeFromGemini((await req.json()).ingredientsList)
        return NextResponse.json(recipe)
}

export async function GET(req:NextRequest){
    return NextResponse.json(recipe)
}
