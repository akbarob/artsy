import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="flex flex-col justify-center items-center border-t-[2px] border-t-black w-full mt-20">
      {["Explore marketplace", "See auctions"].map((item) => (
        <div
          className="flex justify-between items-center py-6 border-b-[2px] border-b-black w-full px-5 "
          key={item}
        >
          <h4 className="text-[24px] font-medium">{item}</h4>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            height={53}
            width={54}
            className="cursor-pointer "
          />
        </div>
      ))}
    </div>
  );
};

export default Explore;
