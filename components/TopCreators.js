import Image from "next/image";
import React, { useEffect, useState } from "react";
const CreatorsImages = [
  "/images/top creators/Rectangle 299.png",
  "/images/top creators/Rectangle 300.png",
  "/images/top creators/Rectangle 301.png",
];

const TopCreators = () => {
  return (
    <div className="w-full h-[251px] md:h-[822px] bg-[#E2E2E2] mt-20 relative px-10">
      <div className="flex justify-between items-center ">
        <h1 className="text-[24px] md:text-[55px] font-semibold text-[#161616] max-w-[264px] md:max-w-[535px] font-clashDisplay">
          TOP CREATORS OF THE WEEK
        </h1>
        <div className="flex">
          <div className="h-full bg-black w-[10px]"></div>
          <ul>
            {["Editorials", "Fashion", "Lifestyle", " Blueprint"].map(
              (item) => (
                <li key={item} className="font-clashDisplay text-[40px]">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <p>
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>

      <div className="absolute bottom- right-10 z-20">
        <div className="z-20">
          <Image
            src="/images/top creators/Rectangle 299.png "
            alt="arrow-right"
            height={832}
            width={832}
          />
        </div>
      </div>
      <div className=" absolute bottom-20 right-5 flex flex-col -mt-32 ml-44 z-10">
        <h6 className="font-bold font-clashDisplay text-[75px]">Cicra</h6>
        <h6 className="font-bold font-clashDisplay text-[170px]">1995</h6>
      </div>
    </div>
  );
};

export default TopCreators;
