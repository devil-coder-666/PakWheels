import Image from "next/image";
import Link from "next/link";
import cellphone from "./project images/cellphone.png";
import logo from "./project images/images-removebg-preview.png";
export default function Navbar() {
  return (
    <nav>
    
      <div className="h-32 bg-[#000812f7] shadow-gray-400 shadow-lg">
        <div className="h-11 bg-[#00060D] w-[90%] ml-14 border-b">
          <div className="flex justify-between">
            <ul className="flex">
              <Image
                src={cellphone}
                alt="cell phone"
                height={13}
                width={15}
                className="mt-2 cursor-pointer "
              />
              <li className="text-white ml-2 mt-2 cursor-pointer">
                Download App via SMS
              </li>
            </ul>
            <ul className="flex">
              <li className="text-red-500 mt-2 cursor-pointer hover:underline">
                اردو
              </li>
              <li className="text-white ml-4 border-l pl-4 mt-2 cursor-pointer hover:underline">
                Sign Up
              </li>
              <li className="text-white ml-4 border-l pl-4 mt-2 cursor-pointer hover:underline mr-2">
                Sign In
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <Link href={"../"}>
              {" "}
              <Image
                src={logo}
                alt="logo"
                className=" absolute top-[-30px] ml-10 cursor-pointer"
              />
            </Link>
          </div>

          <ul className="flex justify-center  ml-80 justify-evenly ">
            <li className="text-white mt-8 cursor-pointer hover:underline">
              Used Car
            </li>
            <li className="text-white mt-8 cursor-pointer hover:underline">
              New Cars
            </li>
            <li className="text-white mt-8 cursor-pointer hover:underline">
              Bikes
            </li>
            <li className="text-white mt-8 cursor-pointer hover:underline">
              Auto Store
            </li>
            <li className="text-white mt-8 cursor-pointer hover:underline">
              Vedio
            </li>
            <li className="text-white mt-8 cursor-pointer hover:underline">
              More
            </li>
            <li className="text-white bg-red-500 px-12 py-3 mt-5 ml-20 rounded-md cursor-pointer hover:border-2 hover:border-white">
              Post an AD
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
