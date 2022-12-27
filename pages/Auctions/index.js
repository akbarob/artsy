import Link from "next/link";
import React from "react";
import AuctionCard from "../../components/AuctionCard";
import Breadcrumb from "../../components/Breadcrumb";
import TopBids from "../../components/TopBids";
import { client } from "../../lib/client";

const Auction = ({ auction, product2 }) => {
  console.log(auction, "auc");

  return (
    <div className="flex flex-col px-10">
      <Breadcrumb second="Auction" />
      <h2 className="text-[20px] font-medium font-satoshi">
        Here’s an overview of products actively on auction, explore!
      </h2>
      <div className="w-full mt-[35px]">
        <AuctionCard auction={auction} />
      </div>
      <h2 className="text-[20px] font-medium font-satoshi">
        Top bids from popular creators
      </h2>
      <div className="flex justify-center flex-col md:flex-row gap-x-[110px] gap-y-6">
        <TopBids />
        <TopBids />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == 'auction']`;
  const auction = await client.fetch(query);

  return {
    props: { auction },
  };
};
export default Auction;
