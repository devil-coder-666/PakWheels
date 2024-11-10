import Link from "next/link";
import Image from "next/image";
import Main from "../Main";
import Footer from "../Footer";
import alto from "@/app/components/project images/Suzuki_Alto_-_PNG-removebg-preview.png";
export default function game() {
  return (
    <main className="bg-[#F2F3F3] h-[465px]">
      <div className=" flex ml-24">
        <div className="h-[300px] bg-white w-[400px] mt-16 ml-8 rounded-[50px] cursor-zoom-in shadow-lg shadow-gray-600 ">
          <Image
            src={alto}
            alt="corola car "
            width={550}
            height={450}
            className="mt-5"
          />
        </div>
        <div className="">
          <h1 className=" text-3xl font-bold text-[#001835] font-mono ml-28 mt-16 ">
            Suzuki Alto
          </h1>
          <p className="ml-28 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quo
            in! <br /> Tempora, neque doloremque! Laboriosam aliquid ipsum
            repudiandae <br />
            deserunt assumenda.
          </p>

          <p className="ml-28 text-[25px] flex text-[#FFC83D] mt-2">
            ★★★ <span className="text-gray-500">★★</span>
          </p>
          <br />
          <p className="ml-28 mt-1 bg-white py-3 px-6 inline font-semibold rounded-lg shadow-md shadow-gray-500 cursor-pointer">
            ENGINE
          </p>
          <span className="ml-12 bg-white px-8 py-3 rounded-md font-semibold shadow-md shadow-gray-500 cursor-pointer">
            658 cc
          </span>
          <span className="ml-12 bg-white px-8 py-3 rounded-md shadow-md text-green-700 shadow-gray-500 cursor-pointer font-semibold">
            {" "}
            PKR \ 30.5 lac
          </span>
          <Link href={"/components/details"}>
            <p className="ml-56 px-12 py-4 mt-12 text-white bg-blue-500 inline-block  rounded-lg shadow-lg shadow-gray-600 cursor-pointer hover:border-[#F2F3F3] hover:border-4 hover:underline font-semibold text-lg">
              MAKE PAYMENT
            </p>
          </Link>
        </div>
      </div>
      <Main />
      <Footer />
    </main>
  );
}
