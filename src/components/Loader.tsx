"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Animation from "../../public/loader.json"
import Lottie from "lottie-react";



const Loader = () => {
   
  return (
    <div className='w-full mx-auto'>
        {/* input and button */}
        <div className="w-[70%] border border-gray-300 rounded-md mx-auto flex items-center p-2">
            {/* input */}
            <Input type="text"
            className="bg-transparent focus:ring-transparent border-none text-xl placeholder:text-gray-300 text-white " placeholder="Search City Here..." />
            {/* button */}
            <Button variant="ghost" className="hover:bg-transparent text-white hover:text-gray-500 duration-300 " size="icon"
            >
      <Search className="h-6 w-6" />
    </Button>
        </div>
        {/* weather data */}

        <div className="mx-auto">
        <div className="mt-20 flex items-center justify-center">
      <div className="flex flex-col bg-black/60 rounded p-4 w-full max-w-xs">
   <Lottie animationData={Animation} />
      </div>
               </div>
            </div>
        </div>
  )
}

export default Loader;