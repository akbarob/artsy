import Image from "next/image";
import React, { useState } from "react";
import MarketCard from "../../components/MarketCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { client } from "../../lib/client";

const Marketplace = ({ product }) => {
  const [Bycategory, setBycategory] = useState(false);
  const [ByPrice, setByPrice] = useState(false);
  const [ByArtist, setByArtist] = useState(false);
  const [ByYear, setByYear] = useState(false);

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
        <div className="flex flex-col justify-start items-start w-[300px] mr-5">
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
          <div className="flex justify-center items-center my-32">
            <button className="w-[249px] h-[73px] rounded-[10px] border-2 border-black">
              See more
            </button>
          </div>
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
