import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/client";

const MarketCard = ({ image, title, price }) => {
  return (
    <div className="bg-white flex flex-col rounded-[15px] shadow-lg p-2">
      <img
        src={urlFor(image)}
        alt=""
        height={100}
        width={100}
        className="rounded-[15px] w-[241px] h-[280px] object-cover"
      />
      <div className="flex md:flex-col">
        <h4 className=" text-[22px]">{title}</h4>
        <p className="font-bold text-[28px]">${price}</p>
      </div>
    </div>
  );
};

export default MarketCard;
