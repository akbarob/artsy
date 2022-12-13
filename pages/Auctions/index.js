import Link from "next/link";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TopBids from "../../components/TopBids";

const Auction = () => {
  return (
    <div className="flex flex-col px-10">
      <Breadcrumb second="Auction" />
      <h2 className="text-[20px] font-medium font-satoshi">
        Here’s an overview of products actively on auction, explore!
      </h2>
      <div className="h-[400px] w-full bg-rose-300">
        <Link href="/Auctions/livestream">LIve</Link>
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

export default Auction;
