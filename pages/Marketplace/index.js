import Image from "next/image";
import React from "react";
import MarketCard from "../../components/MarketCard";
import { client } from "../../lib/client";
const content = [
  {
    image: "/images/ArticleImage1.png",
    title: "The Boolean Egyptian",
    price: "3.90",
  },
  {
    image: "/images/ArticleImage3.png",
    title: "Are We There Yet?",
    price: "3.90",
  },
  {
    image: "/images/ArticleImage2.png",
    title: "Oloibiri 1997",
    price: "3.90",
  },
];
const Marketplace = ({ product }) => {
  return (
    <div className="flex flex-col justify-between items-center mt-20 ">
      <div className="flex justify-between">
        <input
          placeholder="search"
          className="w-[215px] h-[60px] bg-[#F4F2F2] rounded-[15px] mr-[72px]"
        />
        <div className="bg-white rounded-[15px] border-t-2 shadow-md w-[913px] h-[60px] flex justify-between items-center px-5">
          <p className="text-[18px] text-black font-normal">
            See 1-6 of 15 results
          </p>

          <select className="border-black border-2 rounded-md px-3 py-1">
            <option>Sortby</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <div className="flex justify-start items-start w-[300px] mr-5">
          <div className="flex justify-start items-start w-[300px] border-b-2 border-b-black">
            <Image
              src="/filter-icon.svg"
              alt="filter-icon"
              height={60}
              width={55}
            />
            <h4 className="text-[32px]">Filter</h4>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-[53px] gap-y-[62px]">
          {product.map((item, i) => (
            <MarketCard
              key={i}
              image={item.image}
              title={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "marketplace"]`;
  const product = await client.fetch(query);

  return {
    props: { product },
  };
};
export default Marketplace;
