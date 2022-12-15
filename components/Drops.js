import React from "react";
import { urlFor } from "../lib/client";

const Drops = ({
  drops: { name, image, status, date, description, creator },
}) => {
  //   const { name, image, status } = drops;

  function color(status) {
    if (status == "Ended") return "bg-[#999EA5]";
    else if (status == "Upcoming") return "bg-[#4693ED]";
    else {
      return "bg-[#3EA03B]";
    }
  }
  console.log(color());
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[398px] md:w-full lg:max-w-[1350px] my-4 md:my-8 md:px-4">
      <div className="relative w-[94%] md:w-2/3 flex justify-center items-center">
        <img
          src={urlFor(image)}
          className="h-[224px] md:h-[250px] w-full lg:h-full md:w-[683px] object-fit rounded-[15px]"
        />{" "}
        <div className="p-4 absolute inset-x-0 inset-y-0 flex flex-col justify-between md:justify-end h-[224px] md:h-[250px] lg:h-full w-full md:max-w-[683px]">
          <div className="flex justify-end items-end md:hidden">
            <div
              className={`w-[103px] h-[24px] ${color(
                status
              )} rounded-[5px] text-center text-white `}
            >
              {status}
            </div>
          </div>
          <div className="h-[72px] w-full border-2 bg-white/30 rounded-[8px]  flex flex-col justify-center pl-8 text-white">
            <p className="text-[16px] font-normal"> Time remaining</p>
            <p className="text-[22px]"> {date}</p>
          </div>
        </div>
      </div>

      <div className=" w-[94%] md:w-3/5 lg: max-w-[443px] p-2 md:pl-4">
        <div
          className={`w-[189px] h-[43px] ${color(
            status
          )} rounded-[5px] text-center text-white hidden md:flex justify-center items-center text-[18px]`}
        >
          {status}
        </div>
        <p className="my-[30px] md:my-[5px] lg:my-[30px]">{date}</p>
        <p className="mb-[30px] md:my-[5px] lg:my-[30px] text-black font-semibold text-[24px]">
          {name}
        </p>
        <p className="mb-[30px] md:my-[5px] lg:my-[30px]">{description}</p>
        <p className="mb-[30px]  md:my-[5px] lg:my-[30px] font-semibold text-[20px] text-black">
          Creator :{" "}
          <span className="text-[#4693ED] text-[20px]">{creator}</span>{" "}
        </p>

        <div>
          <p className="text-[#4693ED] text-[20px] underline underline-offset-4">
            Get notified
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drops;
