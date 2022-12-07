import Image from "next/image";
import React from "react";

const Article = ({ image, title, text }) => {
  return (
    <div className=" flex odd:flex-row-reverse justify-center items-center border-[#333333] border-t-[0.5px] mt-[54px] pt-[74px] even:mr-[37px]">
      <div className="mx-[37px]">
        <Image src={image} alt={image} height={305} width={610} />
      </div>
      <div className="flex flex-col h-full ">
        <h3 className="font-bold text-[40px] font-clashDisplay text-left ">
          {title}
        </h3>
        <p className="max-w-[600px] text-2xl mt-10 font-normal">{text}</p>
        <div className="flex flex-row items-center justify-between w-full  mt-10">
          <Image
            src="/images/Group 526.png"
            alt="arrow-right"
            height={51}
            width={171}
            className="object-contain"
          />
          <h6 className="text-2xl max-w-[200px] font-medium">
            64 major creators
          </h6>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            height={78}
            width={78}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
