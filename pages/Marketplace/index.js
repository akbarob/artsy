import Image from "next/image";
import React, { useState } from "react";
import MarketCard from "../../components/MarketCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { client } from "../../lib/client";
import Link from "next/link";

const Marketplace = ({ product }) => {
  const [Bycategory, setBycategory] = useState(false);
  const [ByPrice, setByPrice] = useState(false);
  const [ByArtist, setByArtist] = useState(false);
  const [ByYear, setByYear] = useState(false);

  return (
    <div className="flex flex-col justify-center mt-20 px-8 lg:px-16">
      <div className="flex justify-center items-center">
        <input
          placeholder="search"
          className="w-[215px] h-[60px] bg-[#F4F2F2] rounded-[15px] mr-[72px] hidden lg:flex indent-10"
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
      <div className="flex justify-center mt-12">
        <div className="hidden lg:flex flex-col justify-start items-start w-[300px] mr-5">
          <div className="flex justify-start items-start w-[300px] border-b-2 border-b-black">
            <Image
              src="/filter-icon.svg"
              alt="filter-icon"
              height={60}
              width={55}
            />
            <h4 className="text-[32px]">Filter</h4>
          </div>
          <div>
            <div className="my-6">
              <div
                className="flex justify-between items-center px-5 w-[300px]"
                onClick={() => setBycategory((prevState) => !prevState)}
              >
                <h1 className="text-[28px] font-medium">By Category</h1>
                {Bycategory ? (
                  <IoIosArrowUp size={36} />
                ) : (
                  <IoIosArrowDown size={36} />
                )}{" "}
              </div>
              {Bycategory && (
                <div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </div>
              )}
            </div>

            <div className="my-6">
              <div
                className="flex justify-between items-center px-5 w-[300px]"
                onClick={() => setByPrice(!ByPrice)}
              >
                <h1 className="text-[28px] font-medium">By Price</h1>
                {ByPrice ? (
                  <IoIosArrowUp size={36} />
                ) : (
                  <IoIosArrowDown size={36} />
                )}
              </div>
              {ByPrice && (
                <div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </div>
              )}
            </div>

            <div className="my-6">
              <div
                className="flex justify-between items-center px-5 w-[300px] cursor-pointer"
                onClick={() => setByArtist(!ByArtist)}
              >
                <h1 className="text-[28px] font-medium">By Artist</h1>
                {ByArtist ? (
                  <IoIosArrowUp size={36} />
                ) : (
                  <IoIosArrowDown size={36} />
                )}{" "}
              </div>
              {ByArtist && (
                <div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </div>
              )}
            </div>
            <div className="my-6">
              {" "}
              <div
                className="flex justify-between items-center px-5 w-[300px] cursor-pointer"
                onClick={() => setByYear(!ByYear)}
              >
                <h1 className="text-[28px] font-medium">By Colection Year</h1>
                {ByYear ? (
                  <IoIosArrowUp size={36} />
                ) : (
                  <IoIosArrowDown size={36} />
                )}{" "}
              </div>
              {ByYear && (
                <div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-[53px] gap-y-[62px]">
            {product.map((item, i) => (
              <MarketCard
                key={i}
                image={item.image}
                title={item.name}
                price={item.price}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end lg:justify-center items-center my-10 lg:my-32">
        <button className="hidden lg:flex w-[249px] h-[73px] rounded-[10px] border-2 border-black items-center justify-center">
          See more
        </button>
        <div className="flex items-center lg:hidden mr-12">
          <p>Load more</p>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right"
            height={53}
            width={54}
            className="cursor-pointer ml-6"
          />
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
