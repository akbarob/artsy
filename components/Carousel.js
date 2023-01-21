import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
const CarouselImages1 = [
  "/images/image-231.png",
  "/images/image-232.png",
  "/images/image-233.png",
  "/images/image-234.png",
  "/images/image-230.png",
];
const CarouselImages2 = [
  "/images/image-232.png",
  "/images/image-233.png",
  "/images/image-234.png",
  "/images/image-230.png",
  "/images/image-231.png",
];
const CarouselImages3 = [
  "/images/image-233.png",
  "/images/image-234.png",
  "/images/image-230.png",
  "/images/image-231.png",
  "/images/image-232.png",
];
const CarouselImages4 = [
  "/images/image-234.png",
  "/images/image-230.png",
  "/images/image-231.png",
  "/images/image-232.png",
  "/images/image-233.png",
];
const Carousel = () => {
  const [index, setindex] = useState(0);
  const [index1, setindex1] = useState(1);
  const [index2, setindex2] = useState(2);
  const [index3, setindex3] = useState(3);
  const [index4, setindex4] = useState(4);

  function handleNext() {
    if (index === 4) {
      setindex(0);
      // setindex1(1);
      // setindex2(2);
      // setindex3(3);
      // setindex4(4);
    } else {
      setindex(index + 1);
      // setindex1(index1 + 1);
      // setindex2(index2 + 1);
      // setindex3(index3 + 1);
      // setindex4(index4 + 1);
    }
    console.log(index);
  }
  function handleNext1() {
    if (index4 === 4) {
      setindex4(0);
    } else {
      setindex4(index4 + 1);
    }
    console.log(index);
  }
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
      handleNext1();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="w-[80%] lg:w-[95%] px-2 md:px-0">
      {/* <div className=" hidden md:block">
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
      </div> */}

      <div className=" px-10 lg:hidden my-10">
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

      <div className="hidden lg:flex justify-evenly gap-x-2 w-full h-[500px]">
        {/* <div>
          <AnimatePresence>
            <motion.img
              className="w-full h-full object-contain "
              src={CarouselImages[index]}
              key={CarouselImages[index]}
              alt="creator"
              initial={{ opacity: 1 }}
              animate={{ x: -30, transitionDuration: 0.3 }}
              exit={{ x: 30, opacity: [1, 1, 0] }}
            />
          </AnimatePresence>
        </div> */}

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper "
        >
          {CarouselImages.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img src={image} alt="" className="object-contain w-[360px] " />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {CarouselImages1.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img src={image} alt="" className="object-contain w-[360px] " />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {CarouselImages2.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img src={image} alt="" className="object-contain w-[360px] " />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {CarouselImages3.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img src={image} alt="" className="object-contain w-[360px] " />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {CarouselImages4.map((image, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <img src={image} alt="" className="object-contain w-[360px] " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;

// , transitionDuration: 0.3
