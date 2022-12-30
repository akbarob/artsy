import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
const Images = [
  "/images/Section-Img.png",
  "/images/Section-Img2.png",
  "/images/Section-Img3.png",
];
const Section = () => {
  const [index, setindex] = useState(0);
  function handleNext() {
    if (index === 2) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }
  function handlePrev() {
    if (index === 0) {
      setindex(2);
    } else {
      setindex(index - 1);
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-r from-[#4693ED] via-[#79C2D2] to-[#C05609]/50 px-20">
      <div className="ml-20 hidden md:block mb-[21px]">
        <p className="leading-[54px] text-[40px] font-medium text-white border-b-2 border-b-white w-[730px] py-2">
          See Upcoming Auctions and Exhibitions
        </p>
      </div>

      <div className="">
        <div className="relative flex flex-col justify-center items-center h-[269px] lg:h-[546px]">
          <AnimatePresence>
            <motion.img
              className="w-full h-full object-cover "
              src={Images[index]}
              key={Images[index]}
              alt="creator"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 1], transitionDuration: 0.5 }}
              // exit={{ opacity: 0 }}
            />
          </AnimatePresence>
          {/* <img
            className="h-[269] lg:h-[546px]"
            alt="sec"
            src="/images/Section-Img.png"
          /> */}
          <div className="absolute bottom-8 text-white h-1/3 w-[80%]">
            <div className="flex  h-full w-full">
              <div className="flex justify-center items-center h-full ">
                <p className="text-[67px] font-clashDisplay">0{index}</p>
              </div>
              <div className="ml-[20px] flex flex-col justify-evenly items-start  w-full">
                <p className="uppercase lg:text-[30pxks] lg:max-w-[356px] font-clashDisplay">
                  Monalisa Redefined in style
                </p>
                <p className="text-[13.46px] ">Start on : 08:00 GMT Monday</p>
                <div className="flex w-full justify-between items-center">
                  <p className="font-[500] text-[15px] lg:max-w-[428px]">
                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                    HIGHEST AND LOWEST BIDS.
                  </p>
                  <div className="flex justify-between items-center">
                    <p>See more</p>
                    <button className="ml-[29px] rounded-[10px] border-white border-[2px] h-[62px] w-[181px]">
                      Set a reminder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mx-20 my-4">
          <div>
            <input type="range" value={index} max={2} />
          </div>
          <div className="flex">
            <img
              src="/leftexplore.svg"
              onClick={handlePrev}
              className="cursor-pointer"
            />
            <img
              src="/rightexplore.svg"
              onClick={handleNext}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
