import Image from "next/image";
import React, { useEffect, useState } from "react";
const CreatorsImages = [
  "/images/top creators/Rectangle 299.png",
  "/images/top creators/Rectangle 300.png",
  "/images/top creators/Rectangle 301.png",
];

const TopCreators = () => {
  const [index, setindex] = useState(0);
  function handleNext() {
    if (index === 2) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
      console.log(index);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="w-full h-[251px] md:h-[822px] bg-[#E2E2E2] mt-20 relative px-10">
      <div className="flex justify-between items-start ">
        <h1 className="text-[24px] md:text-[55px] font-semibold text-[#161616] max-w-[264px] md:max-w-[535px] font-clashDisplay">
          TOP CREATORS OF THE WEEK
        </h1>
        <div className="flex">
          <div className="h-full bg-black w-[10px]"></div>
          <ul>
            {["Editorials", "Fashion", "Lifestyle", " Blueprint"].map(
              (item) => (
                <li
                  key={item}
                  className="font-clashDisplay md:text-[40px] text-[10px]"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <p className="text-[12px] md:text-[32px] text-center font-extralight">
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>

      <div className="absolute -bottom-5 right-10 z-20">
        <div className="z-20">
          <img
            src={CreatorsImages[index]}
            alt="creator"
            className="w-[237px] h-[240] md:w-[832px] transition-all ease-in-out duration-150 "
          />
        </div>
      </div>
      <div className=" absolute bottom-10 right-5 flex flex-col -mt-32 ml-44 z-10 text-right">
        <h6 className="font-bold font-clashDisplay text-[32px] md:text-[75px]">
          Cicra
        </h6>
        <h6 className="font-bold font-clashDisplay text-[64px] md:text-[170px]">
          1995
        </h6>
      </div>
    </div>
  );
};

export default TopCreators;
