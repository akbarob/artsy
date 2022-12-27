import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import Image from "next/image";
const CarouselImages = [
  "/images/image-230.png",
  "/images/image-231.png",
  "/images/image-232.png",
  "/images/image-233.png",
  "/images/image-234.png",
];
const Carousel = () => {
  return (
    <div className="w-[80%] px-2 md:px-0">
      <div className=" hidden md:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {CarouselImages.map((image, i) => (
            <SwiperSlide key={i}>
              <Image
                src={image}
                alt=""
                width={100}
                height={30}
                className="object-contain w-full h-[300px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" px-10 md:hidden my-10">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper z-10"
        >
          {CarouselImages.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                src={image}
                alt=""
                width={100}
                height={30}
                className="object-fit w-full h-[300px] z-10"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
