import Image from "next/image";
import React from "react";

const Article = ({ image, title, text }) => {
  return (
    <div className="flex flex-col md:flex-row  md:odd:flex-row-reverse justify-center items-center border-[#333333] border-t-[0.5px] mt-[54px] pt-[74px] even:mr-[37px]">
      <div className="mx-[37px] group cursor-pointer relative">
        <Image src={image} alt={image} height={305} width={610} />
        <div
          className={`bg-black/60 hidden opacity-80 justify-evenly items-center absolute inset-y-0 inset-x-0 w-full h-full md:group-hover:flex px-4 text-white`}
        >
          <p>View Product</p>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            height={78}
            width={78}
            className="cursor-pointer "
          />
        </div>
        <div className="absolute inset-y-0 inset-x-0 flex flex-col justify-center items-center bg-black/50 py-3">
          <h4 className="font-bold text-[20px] font-clashDisplay text-white text-center">
            {title}
          </h4>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            height={78}
            width={78}
            className="cursor-pointer ml-40"
          />
        </div>
      </div>
      <div className="flex flex-col h-full ">
        <h3 className="hidden md:flex font-bold text-[40px] font-clashDisplay text-left ">
          {title}
        </h3>
        <p className="max-w-[600px] text-[15px] md:text-2xl mt-10 font-normal">
          {text}
        </p>
        <div className="flex flex-row items-center md:justify-between w-full  mt-10">
          <Image
            src="/images/Group 526.png"
            alt="arrow-right"
            height={51}
            width={171}
            className="object-contain "
          />
          <h6 className="text-[16px] md:text-2xl max-w-[200px] font-medium ml-5">
            64 major creators
          </h6>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            height={78}
            width={78}
            className="cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
