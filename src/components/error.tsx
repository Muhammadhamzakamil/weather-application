import React from 'react'
import Lottie from "lottie-react";
import Animation from "../../public/error.json"
const ErrorText = () => {
  return (
    <div className="mx-auto">
    <div className="mt-20 flex flex-col items-center justify-center">
  <div className="flex flex-col bg-black/60 rounded p-4 w-full max-w-xs">
<Lottie animationData={Animation} />
<h1 className="text-base text-white text-center font-semibold tracking-tight">
    Please make sure you have write correct city name
  </h1>
  </div>
 
           </div>
        </div>
  )
}

export default ErrorText