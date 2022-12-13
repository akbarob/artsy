import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import Slug from "../pages/Product/[slug]";

const MarketCard = ({ image, title, price, slug }) => {
  return (
    <div className="lg:bg-white flex flex-col rounded-[15px] lg:shadow-lg p-2 cursor-pointer">
      <Link href={`/Product/${slug.current}`}>
        <img
          src={urlFor(image)}
          alt=""
          height={100}
          width={100}
          className="lg:rounded-[15px] w-[357px] h-[384px] lg:w-[241px] lg:h-[280px] object-cover"
        />
        <div className="flex justify-between md:flex-col mt-4 lg:mt-0">
          <h4 className=" text-[22px]">{title}</h4>
          <p className="font-bold text-[28px]">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default MarketCard;
