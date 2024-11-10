import Image from "next/image"
import Link from "next/link"

import pakwheels from "@/app/components/project images/download__1_-removebg-preview.png"
export default function thankyou(){
  return (
    <div >
      <div className="flex justify-center"> 
        <Image src={pakwheels} alt="thankyou" height={900} width={900} className="mt-[-145px]  "></Image>
      </div>
      <div className="flex justify-center ">
        <h1 className="text-6xl absolute top-[286px] font-bold  ml-7 text-[#001732]" >THANK YOU FOR SHOPPING!!!</h1>
        <p className="mt-[-350px] font-semibold "> Your Order will be delivered in 3 Business days</p>
      </div >
      <div className="flex justify-center mt-[-30px] ml-2 ">
       <Link href={"../"}>
        <button className="bg-blue-500 py-4 px-8 rounded-md ml-[-79px] hover:underline  text-white shadow-md shadow-gray-600 font-semibold
       absolute top-[400px]  "><span className="font-bold">🡄 </span>Go Home</button>
       </Link>
      </div>
    </div>
  )
}