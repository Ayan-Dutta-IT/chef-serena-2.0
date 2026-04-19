'use client'
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useRouter } from "next/navigation";

export default function BackgroundGradientAnimationDemo() {
  const router = useRouter()
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 flex-col gap-15 md:mt-5 md:gap-0 justify-center md:flex-row flex items-center md:justify-between min-h-screen w-full text-white font-bold p-10">
        <div className="flex flex-col items-center md:block">
          <h1 className="text-5xl text-center md:text-left md:text-5xl font-bold">Chef Serena</h1>
          <p className="text-[9px] text-center md:text-left md:text-[12px] mt-2 font-light font-mono pl-2 text-zinc-400">Get Started. Add your ingredients. Generate Recipe. <br /> Wait for few seconds. Get yourself a recipe from our AI Chef</p>
          <div className="flex gap-2 mt-5">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={()=>router.push('/recipe')}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">Try Now &rarr;
           </span>
           </button>
           <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={()=>router.push('/about')}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-5 py-1 text-sm font-medium text-black backdrop-blur-3xl">Learn more
           </span>
           </button>
          </div>
        </div>
        <div className=" border-5 border-white h-auto w-90 md:h-auto md:w-150 bg-white rounded-xl overflow-hidden">
          <div className="flex gap-2 p-2">
            <div className="bg-green-500 rounded-full h-5 w-5"></div>
            <div className="bg-yellow-500 rounded-full h-5 w-5"></div>
            <div className="bg-red-500 rounded-full h-5 w-5"></div>
          </div>
          <div className="shadow-2xl drop-shadow-2xl border-t-2 bg-zinc-200 w-full">
            
             <video preload="none" autoPlay muted loop className="w-full">
             <source src="/chefserena.mp4" type="video/mp4" />
             </video>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
