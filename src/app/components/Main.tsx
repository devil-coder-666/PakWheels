import Image from "next/image";
import Link from "next/link";
import corola from "./project images/png-transparent-2018-toyota-corolla-car-2017-toyota-corolla-toyota-vitz-toyota-compact-car-sedan-headlamp-thumbnail-removebg-preview.png";
import alto from "./project images/Suzuki_Alto_-_PNG-removebg-preview.png"
import civik from "./project images/319-3193505_2018-honda-civic-si-sedan-honda-civic-si-removebg-preview.png"
import city from "./project images/fd59a8433b56e7839d34451b770f6311__1_-removebg-preview.png"
export default function Main() {
  return (
    <main>
    <div className="h-[530px] bg-[#F2F3F3] shadow-xl">
      <div>
        <div className="flex justify-around ">
          <h2 className="mt-14 text-2xl font-medium mr-[150px]">
            Feature New Car
          </h2>
          <Link
            href={""}
            className="mt-16  text-[#0969DA] hover:underline ml-28"
          >
            Veiw All New Car
          </Link>
        </div>
        <div className="ml-44 mt-4">
          <Link
            href={""}
            className="font-normal  text-lg border-[#0969DA] border-b-[2px] pb-2 pr-2"
          >
            Popular
          </Link>
          <Link
            href={""}
            className="font-normal border-transparent text-lg ml-5 hover:border-b-[#0969DA] hover:border-[2px] pb-2 pr-2"
          >
            Upcoming
          </Link>
          <Link
            href={""}
            className="font-normal border-transparent text-lg ml-5  hover:border-b-[#0969DA] hover:border-[2px] pb-2 pr-2"
          >
            Newly Launched
          </Link>
        </div>
        <div className="flex ml-24 mt-12">
          <div className="flex  ml-[-7px] ">
            <div className="bg-white hover:border-gray-300 hover:border-2 rounded-lg ">
              
              <div className="mt-[-30px] ">
                
              <Link href={"/components/corola"} >  <Image src={corola} alt="corola car" height={250} className="text-center"/>
              </Link>
                <h4 className="mt-[-45px] text-center font-semibold text-[#345B96] mr-4">
                  Toyota Corolla
                </h4>
                <h4 className=" text-center font-medium text-green-400 mr-1">
                  PKR 59.7 - 75.5 lac{" "}
                </h4>
                <p className="ml-[70px] mt-[-10px] text-[#FFC83D] text-[25px]">★★★★★</p>
              </div>
              
            </div>
            <Link href={"/components/alto"}>
            <div className="flex  ml-5  hover:border-gray-300 hover:border-2 rounded-lg">
          <div className= "bg-white border-white h-72 rounded-lg ">
          <div className="mt-[-px] "><Image src={alto} alt="corola car"height={200} className=""/>
          <h4 className="mt-[-20px] text-center font-semibold text-[#345B96] mr-4">Suzuki Alto</h4>
          <h4 className=" text-center font-medium text-green-400 mr-1">PKR 23.3 - 30.5 lac </h4>
          <p className="ml-20 text-[25px] flex text-[#FFC83D] mt-[-10px]">★★★ <span className="text-gray-500">★★</span></p>
          </div>
          
          </div>
          </div>
          </Link>
<Link href="/components/civic">
          <div className="flex  ml-5  hover:border-gray-300 hover:border-2 rounded-lg">
          <div className= "bg-white border-white h-72 rounded-lg ">
          <div className="mt-[32px] p-2 "><Image src={civik} alt="corola car"height={140} width={250}/>
          <h4 className="mt-[6px] text-center font-semibold text-[#345B96] mr-4">Honda Civic</h4>
          <h4 className=" text-center font-medium text-green-400 mr-1">PKR 86.6 - 99.0 lac </h4>
          <p className="ml-16 text-[25px] flex text-[#FFC83D] mt-[-10px]">★★★★ <span className="text-gray-500">★</span></p>
          </div>
          
          </div>
          </div>
          </Link>
          <Link href="/components/hondaCity ">
          <div className="flex  ml-5 hover:border-gray-300 hover:border-2 rounded-lg" >
          <div className= "bg-white border-white h-72 rounded-lg ">
          <div className="mt-[23px] "> <Image src={city} alt=" car"height={250} width={250} className="mr-2 "/>
          <h4 className="mt-[5px] text-center font-semibold text-[#345B96] mr-4">Honda City</h4>
          <h4 className=" text-center font-medium text-green-400 mr-1">PKR 46.5 - 58.5 lac </h4>
          <p className="ml-[70px] mt-[-10px] text-[#FFC83D] text-[25px]">★★★★★</p>
          </div>
          
          </div>
          
          </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
    
    </main>
    
  );
}
