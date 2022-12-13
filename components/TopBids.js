import React from "react";
const CarouselImages = [
  "/images/image-230.png",
  "/images/image-231.png",
  "/images/image-232.png",
];
const TopBids = () => {
  return (
    <div className="flex flex-col w-[398px] lg:w-[545px] p-4  ">
      <div className="flex flex-col w-full rounded-[15px] shadow-md border-t-[1px] mb-[30px] px-4">
        <div className="flex justify-end">
          <div className="my-1 w-[30px] h-[30px] rounded-full border-[1px] flex justify-center items-center">
            <img src="/Audition-heartGray.svg" />
          </div>
        </div>
        <div clas>
          <img
            src={CarouselImages[0]}
            className="h-[184px] lg:h-[280px] w-full object-fit rounded-[15px]"
          />{" "}
          <div className="flex justify-between items-center">
            <p className="font-bold text-[20px] ">Out of the box</p>
            <p className="font-bold text-[20px] ">Out of the box</p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <p className="mb-[30px]">
          {" "}
          Creator: <span className="text-[#4693ED] text-[20px]">
            AKbar
          </span>{" "}
        </p>
        <p className="mb-[30px]">
          {" "}
          Date: <span className=" font-bold text-[20px]">12/09/23</span>{" "}
        </p>
        <p className="mb-[30px]">
          {" "}
          Highest bid: <span className=" font-bold text-[20px]">
            0.0987
          </span>{" "}
        </p>{" "}
      </div>
      <div className="flex justify-between items-center w-full  h-[85px] bg-[#F7F4F4] rounded-[10px] px-4">
        <div>
          <h4 className="text-[20px] ">Current bid</h4>
          <p className="font-bold text-[20px] ">0.987 ETH</p>
        </div>
        <div>
          <button className=" h-[46px] w-[157px]  lg:w-[250px] bg-[#3341c1] rounded-[3px] text-white ">
            Place bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBids;
