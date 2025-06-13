import Image from "next/image";
import React from "react";

// react icons
import { BsArrowRight } from "react-icons/bs";

interface CardProps {
  imgUrl?: string;
  name?: string;
}

const Card = ({imgUrl, name} : CardProps) => {
  return (
    <div className=" border mt-10 md:min-w-[5%] dark:bg-slate-800 w-full md:max-w-[25%] relative bg-white boxShadow rounded-xl">
        <div className="bg-white rounded-t-xl">
            
      <Image
      width={500}
      height={300}
        src={imgUrl || "/default-image.jpg"}
        alt="image"
        className="w-full h-[200px] object-contain rounded-t-xl"
      />
        </div>

      <div className="p-5">
        <h1 className="text-[1.3rem] font-bold dark:text-[#abc2d3] leading-[24px]">
          {name || "Paints"}
        </h1>

        <button className="py-2.5 px-4 bg-gray-300 dark:bg-slate-700 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] dark:text-[#abc2d3] group">
          More Products
          <BsArrowRight className="text-[1.3rem] text-gray-600 dark:text-[#abc2d3] group-hover:ml-2 transition-all duration-200" />
        </button>
      </div>
    </div>
  );
};

export default Card;
