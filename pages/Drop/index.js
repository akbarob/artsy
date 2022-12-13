import React from "react";
import { Accordion } from "flowbite-react";
import { client } from "../../lib/client";
import Drops from "../../components/Drops";
import Breadcrumb from "../../components/Breadcrumb";
const Drop = ({ drops }) => {
  return (
    <div className="flex flex-col">
      <Breadcrumb second="Auctions" name="Live bid" final="Drop" />

      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-blacl text-[30px] font-bold mb-[20px]">
          Upcoming drops
        </h1>
        <p className="text-[18px] mb-[20px] w-[291px] md:w-full text-center">
          You may turn on notifications so that no drop will miss you.
        </p>
        <button className="border-2 flex justify-center items-center text-black w-[262px] h-[52.5px] rounded-[15px] text-[22px] font-medium">
          Notify me
        </button>
      </div>

      <div className="flex justify-end pr-8 mt-[20px]">
        <select>
          <option>Sort by</option>
        </select>
      </div>
      <div className=" ">
        {drops.map((item, i) => (
          <Drops drops={item} key={i} />
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = `*[_type == 'drops']`;
  const drops = await client.fetch(query);
  return {
    props: { drops },
  };
};
export default Drop;
