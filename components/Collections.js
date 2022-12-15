import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const Collections = ({ image, name, price, slug }) => {
  return (
    <div className="w-[429px] h-[469px] border-[1px]  border-[#333333] flex flex-col p-6">
      <Link href={`/Product/${slug.current}`}>
        <img
          src="/heart-icon.svg"
          alt="heart-icon"
          className="w-[53px] h-[48px]"
        />
        <img
          src={urlFor(image)}
          alt={name}
          className="w-[346px] h-[321px] max-w-none"
        />
        <div className="flex justify-between items-center">
          <p className="text-[26px] font-medium">{name} </p>
          <div className="flex">
            <img
              src="/cypto-icon.svg"
              alt="icon"
              className="w-[40px] h-[46px]"
            />
            <p className="text-[30px] font-medium">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Collections;
