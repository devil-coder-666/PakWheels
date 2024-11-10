import Link from "next/link"
export default function details (){
  return(
    <div className="bg-[#F2F3F3] h-[465px] pt-7 ">
    <div className="">

      
      <h1 className="text-center font-semibold font-mono text-3xl">Enter Your Details</h1>
    
      
        <form className="flex flex-col items-center mt-10">
        <input type="text" placeholder="Enter Your Name" className="h-10 w-[500px] pl-2 shadow-md ml-5 hover:border-2 hover:border-gray-300" ></input>
        <input type="email" placeholder="Enter Your Email" className="h-10 w-[450px] pl-2 mt-5 shadow-md ml-5 hover:border-2 hover:border-gray-300"  ></input>
        <input type="text" placeholder="Card Number" className="h-10 w-[400px] pl-2 mt-5 shadow-md ml-5 hover:border-2 hover:border-gray-300"></input>
        <input type="password" placeholder="Enter Your Password" className="h-10 pl-2 w-[350px] mt-5 shadow-md ml-5 hover:border-2 hover:border-gray-300"></input>
        </form>
        <Link href={"/components/thankyou"}>
       <button className="ml-[555px] shadow-md shadow-gray-600 bg-blue-500 p-3 px-8 mt-8 rounded-md hover:border-2 hover:border-white text-white hover:underline">Place Your Order</button></Link>
    </div>
    </div>
  )
}