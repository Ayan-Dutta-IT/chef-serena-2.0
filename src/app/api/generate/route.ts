import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai"
let recipe:any
export async function POST(req:NextRequest){
     const SYSTEM_PROMPT = `
        You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe should not include additional ingredients they didn't mention. Format your response in html starting with div dont write the boilerplate make it look attractive with inline css and remove '''html from start and end to render to a web page
        `
        const genAI = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})
        
        async function getRecipeFromGemini(ingredientsArr:any) {
            const ingredientsString = ingredientsArr.join(", ")
            try {
                const systemMessage = `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
                
                const response = await genAI.models.generateContent({
                     model: "gemini-2.5-flash",
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
