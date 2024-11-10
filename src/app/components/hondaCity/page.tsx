import Link from "next/link"
import Image from "next/image"
import Footer from "../Footer"
import Main from "../Main"
import city from "@/app/components/project images/fd59a8433b56e7839d34451b770f6311__1_-removebg-preview.png"
export default function game (){
  return(
  <main className="bg-[#F2F3F3] h-[465px]">
    <div className=" flex ml-24">
     <div className="h-[300px] bg-white w-[400px] mt-16 ml-8 rounded-[50px] cursor-zoom-in shadow-lg shadow-gray-600  " >
      <Image src={city} alt="corola car " width={550} height={450} className="mt-6"/>

     </div>
     <div className="">
      <h1 className=" text-3xl font-bold text-#001835 font-mono ml-28 mt-16 ">Honda City</h1>
      <p className="ml-28 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quo in! <br /> Tempora, neque doloremque! Laboriosam aliquid ipsum repudiandae <br />deserunt assumenda.</p>
      
      <p className="ml-28 mt-2 text-[#FFC83D] text-[25px]">★★★★★</p>
      <br />
      <p className="ml-28 mt-1 bg-white py-3 font-semibold px-6 inline rounded-lg shadow-md shadow-gray-500  cursor-pointer">ENGINE
      
      </p>
      <span className="ml-12 bg-white px-8 py-3 rounded-md font-semibold shadow-gray-500 shadow-md  cursor-pointer">1498 cc </span>
      <span className="ml-12 bg-white px-8 py-3 rounded-md text-green-700 font-semibold font-medium shadow-md shadow-gray-500 cursor-pointer "> PKR \ 58.5 lac</span>
     <Link href={"/components/details"}>
      <p className="ml-56 px-12 py-4 mt-12 text-white bg-blue-500 inline-block  rounded-lg shadow-lg shadow-gray-600 cursor-pointer hover:border-#F2F3F3 hover:border-4 hover:underline font-semibold text-lg">MAKE PAYMENT</p>
      </Link>
     </div>
    </div>
 <Main />
 <Footer />
  </main>
  
  )
}