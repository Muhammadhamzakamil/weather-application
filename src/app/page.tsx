import Weather from '@/components/Weather'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    {/* img overlay */}
    <div
    className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]'
    />
    {/* background img */}
    <Image src={"https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80"}
     alt='background-image'
    layout='fill'
    className='object-cover'
     />
     {/* weather data here */}
     <div className='relative z-10 mt-10 '>
      <Weather />
     </div>
       {/* attribute */}
       <div className="absolute bottom-0 right-0 z-[1] text-white">
            <Link href="https://lordicon.com/" target='_blank'>Icons by Lordicon.com</Link>
        </div>
   </div>
  )
}
