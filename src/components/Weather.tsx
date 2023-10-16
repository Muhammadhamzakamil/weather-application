"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import WeatherData from "../components/WeatherData";
import useSWR from "swr";
import {useState} from "react"
import Loader from "../components/Loader";
import Lottie from "lottie-react";
import Animation from "../../public/search.json"


const Weather = () => {
    // use state for search
    const [search,setSearch] = useState("");
    const [city,setCity] = useState("Karachi");
    
    //featcher function

    let apiLink:string = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
    const fetcher = (url:string) => fetch(url).then((res) => res.json());

    //SWR Library

    const { data, error, isLoading } = useSWR(apiLink, fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <Loader/>;
  return (
    <div className='w-full mx-auto'>
        {/* input and button */}
        <div className="w-[70%] border border-gray-300 rounded-md mx-auto flex items-center p-2">
            {/* input */}
            <Input type="text"
            value={search}
            onChange={(e)=>{setSearch(e.target.value);}}
            className="bg-transparent focus:ring-transparent border-none text-xl placeholder:text-gray-300 text-white " placeholder="Search City Here..." />
            {/* button */}
            <Button variant="ghost" className="hover:bg-transparent text-white hover:text-gray-500 duration-300 " size="icon" 
            onClick={()=>{
              if(search.length == 0){
                return;
              }
              setCity(search)
              setSearch("");
            }}
            >
     
      <Lottie animationData={Animation} className="w-7 h-7 "/>
    </Button>
        </div>
        {/* weather data */}

        <div className="mx-auto">
<WeatherData data={data} />
        </div>
    </div>
  )
}

export default Weather