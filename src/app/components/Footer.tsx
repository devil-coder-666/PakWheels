import insta from "./project images/instagram_1384015.png"
import Image from "next/image"
import email from "./project images/email_6244710.png"
import github from "./project images/github_5968896.png"
import vercel from "./project images/vercel.256x225.png"
import Link from "next/link"
export default function Footer(){
  return (
    <footer className="mt-2 ">
      <div className="h-11 bg-black border-b shadow-lg shadow-gray-600">
        <h1 className="text-white text-center pt-2 ">Copyright © 2024-2025 Pakwheels (pvt) Ltd.</h1>
      </div>
      <div className="h-[240px] bg-[#23292F] flex justify-evenly pt-5
       ">
        <div >
        
          <h1 className="text-white mt-1">Cars By Make
          </h1>
          <ul className="text-[#999999] text-sm flex flex-col m"> 
          <li className="mt-1" >Toyota Cars for Sale</li>
          <li className="mt-1"> Suzuki Cars for Sale</li>
          <li className="mt-1">Honda Cars for Sale</li>
          <li className="mt-1"> Daihatsu Cars for Sale</li>
          <li className="mt-1">Mitsubishi Cars for Sale</li>
          <li className="mt-1">Nissan Cars for Sale</li>
          <li className="mt-1">Mercedes Cars for Sale</li>
          </ul>
        </div>
        <div>
        
        <h1 className="text-white mt-1">Cars By City

        </h1>
        <ul className="text-[#999999] text-sm flex flex-col "> 
        <li className="mt-1" > Cars in Karachi</li>
        <li className="mt-1"> Cars in Lahore</li>
        <li className="mt-1">Cars in Rawalpindi</li>
        <li className="mt-1">Cars in Peshawar</li>
        <li className="mt-1">Cars in Faisalabad</li>
        <li className="mt-1">Cars in Multan</li>
        <li className="mt-1">Cars in Sargodha</li>
        </ul>
      </div>  

      <div>
        
        <h1 className="text-white mt-1">PakWheels.com

        </h1>
        <ul className="text-[#999999] text-sm flex flex-col "> 
        <li className="mt-1" >About PakWheels.com</li>
        <li className="mt-1"> Our Products</li>
        <li className="mt-1">Advertise With Us</li>
        <li className="mt-1">How To Pay</li>
        <li className="mt-1">CFAQs </li>
        <li className="mt-1">Refunds & Returns</li>
        <li className="mt-1">Contact Us</li>
        </ul>
      </div>  

      <div className="">
        
        
        
        <h1 className=" mt-1 ml- font-semibold font-mono bg-white rounded-md shadow-lg shadow-black pl-5 py-1 mr-14">About Me

        </h1>
        <ul className=" text-sm flex flex-col mt-2 "> 
          <Link href={"https://www.instagram.com/mr.falseofficial/"}>
        <li className="mt-1 flex hover:underline bg-white rounded-md shadow-lg shadow-black px-2 py-1" > <Image src={insta} alt="instagram logo" height={20} width={20} className="mr-2 "/> mr.falseofficial</li></Link>
        <Link href={""}>
        <li className="mt-3 flex hover:underline  bg-white rounded-md shadow-lg shadow-black px-2 py-1"> <Image src={email} alt="instagram logo" height={20} width={20} className="mr-2"/>easyvash@gmail.com</li></Link>
        <Link href={"https://github.com/devil-coder-666"}>
        <li className="mt-3 flex hover:underline  bg-white rounded-md shadow-lg shadow-black px-2 py-1">  <Image src={github} alt="instagram logo" height={20} width={20} className="mr-2"/>devil-coder-666</li></Link>
        <Link href={"https://vercel.com/subhans-projects-183a0f77"}>
        <li className="mt-3 flex hover:underline  bg-white rounded-md shadow-lg shadow-black px-2 py-1"> <Image src={vercel} alt="instagram logo" height={20} width={20} className="mr-2"/>devil-coder-666 </li></Link>
        
        </ul>
      </div>  

        
     
  


      </div>
    </footer>
  )
}