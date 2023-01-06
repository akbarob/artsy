import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import MarketCard from "../../components/MarketCard";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { client } from "../../lib/client";
import Link from "next/link";
import { set, useForm } from "react-hook-form";

const Marketplace = ({ product }) => {
  const [Bycategory, setBycategory] = useState(false);
  const [ByPrice, setByPrice] = useState(false);
  const [ByArtist, setByArtist] = useState(false);
  const [ByYear, setByYear] = useState(false);

  const [filtered, setFiltered] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const CheckList = [
    { value: "Art", name: "Art & Museum" },
    { value: "editorials", name: "Editorials" },
    { value: "fashion", name: "Fashion" },
    { value: "Nature", name: "Nature" },
    { value: "Optics", name: "Optics" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Categories = [];
  const onSubmit = (data) => {
    dispatch(setUserData(data));
    setrouteIndex(2);
  };

  function handleChange(e) {
    if (e.target.checked) {
      setFiltered([...filtered, e.target.value.toLowerCase()]);
    } else {
      setFiltered(filtered.filter((list) => list !== e.target.value));
    }
    console.log("chnage");
  }

  const filteredData = product.filter((list) =>
    filtered.length > 0
      ? filtered.some((item) => list.category.includes(item))
      : product
  );

  function Ascending() {
    setFiltered(filteredData.sort((a, b) => a.name.localeCompare(b.name)));
    console.log(asc);
  }
  function Descending() {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }
  return (
    <div className="flex flex-col justify-center mt-20 px-8 lg:px-16">
      <p className="mb-2 md:hiddentext-[18px] text-black font-normal">
        See 1-6 of 15 results
      </p>
      <div className="flex justify-center items-center">
        <input
          placeholder="search"
          className="w-[215px] h-[60px] bg-[#F4F2F2] rounded-[15px] mr-[72px] hidden lg:flex indent-10"
        />
        <div className="bg-white rounded-[15px] border-t-2 shadow-md w-[913px] h-[60px] flex justify-between items-center px-5">
          <p className="hidden md:flex text-[18px] text-black font-normal">
            See 1-6 of 15 results
          </p>
          <select className="lg:hidden border-black border-2 rounded-md px-2 py-1">
            <option>Filter</option>
            <option>Art </option>
            <option>Editorials</option>
            <option>Fashion</option>
            <option>Nature</option>
            <option>Optics</option>
          </select>
          <select className="border-black border-2 rounded-md px-6 py-1">
            <option disabled>Sortby</option>
            <option onClick={() => Ascending()}>asc</option>
            <option onClick={Descending}>dsce</option>
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
                <div className="pl-6 pt-4">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center gap-y-3"
                  >
                    {CheckList.map((item, i) => (
                      <label
                        className="flex justify-start items-center"
                        key={i}
                      >
                        <input
                          id="Art"
                          value={item.value.toLowerCase()}
                          type="checkbox"
                          {...register("Art", {
                            onChange: (e) => {
                              console.log(e), handleChange(e);
                            },
                          })}
                          className="rounded-[5px] accent-slate-400 focus:accent-pink-500"
                        />{" "}
                        <p className="ml-2">{item.name}</p>
                      </label>
                    ))}
                  </form>
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
                  <form onSubmit={handleSubmit(onSubmit)} className="px-4">
                    <label className="">
                      <p>0 - 1000</p>
                      <input
                        type="range"
                        {...register("rangeslider")}
                        className="rounded-[5px]  w-full"
                      />
                    </label>
                  </form>
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
                  <p className="mb-2 text-gray-500 dark:text-gray-400">All</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Below ---
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
                    lorien ispirom
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {filteredData.length === 0 && (
          <div className="w-full  flex justify-center items-center">
            <p className="text-3xl">No item found for entry</p>
          </div>
        )}
        <div className="flex flex-col">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-[53px] gap-y-[62px]">
            {filteredData.length >= 1 &&
              filteredData?.map((item, i) => (
                <MarketCard
                  key={i}
                  image={item?.image}
                  title={item?.name}
                  price={item?.price}
                  slug={item?.slug}
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

  // const Price = `*[_type == "marketplace" ] `;
  // const QueryByPrice = await client.fetch(Price);

  console.log(product);

  return {
    props: { product },
  };
};
export default Marketplace;
