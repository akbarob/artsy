import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { urlFor } from "../lib/client";
import Link from "next/link";

const AuctionCard = ({ auction }) => {
  // console.log(auction);
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-screen h-[250px] lg:hidden max-w-[500px]"
      >
        {auction.map((item, i) => (
          <SwiperSlide key={i} className="relative">
            <Link href={`/Auctions/${item.slug.current}`}>
              <div className="w-[228px] relative">
                {" "}
                <img
                  alt=""
                  src={urlFor(item.image)}
                  className="w-full rounded-[15px]"
                />
                <div className="absolute bottom-5 w-[200px] mx-[13px] h-[43px] border-[0.5px] border-white backdrop-blur-[1.5px] rounded-[8px] flex justify-center items-center">
                  <p className="text-white text-[20px] leading-[25px]">
                    {item.time}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-screen h-[496px] hidden lg:flex xl:hidden"
      >
        {auction.map((item, i) => (
          <SwiperSlide key={i} className="relative">
            <Link href={`/Auctions/${item.slug.current}`}>
              <div className="w-[485px] relative">
                {" "}
                <img
                  alt=""
                  src={urlFor(item.image)}
                  className="w-[485px] h-full rounded-[15px] object-cover"
                />
                <div className="absolute bottom-5 w-[200px] mx-[13px] h-[43px] border-[0.5px] border-white backdrop-blur-[1.5px] rounded-[8px] flex justify-center items-center">
                  <p className="text-white text-[20px] leading-[25px]">
                    {item.time}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-screen h-[496px] hidden xl:flex"
      >
        {auction.map((item, i) => (
          <SwiperSlide key={i} className="relative">
            <Link href={`/Auctions/${item.slug.current}`}>
              <div className="w-[485px] relative">
                {" "}
                <img
                  alt=""
                  src={urlFor(item.image)}
                  className="w-[485px] h-full rounded-[15px] object-cover"
                />
                <div className="absolute bottom-5 w-[200px] mx-[13px] h-[43px] border-[0.5px] border-white backdrop-blur-[1.5px] rounded-[8px] flex justify-center items-center">
                  <p className="text-white text-[20px] leading-[25px]">
                    {item.time}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AuctionCard;
