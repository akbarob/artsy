import React from "react";
import Carousel from "../../components/Carousel";
import Explore from "../../components/Explore";
import FeaturedProducts from "../../components/FeaturedProducts";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import TopCreators from "../../components/TopCreators";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-clashDisplay font-semibold text-[32px] md:text-[80px] text-center max-w-[362px] md:max-w-[1068px]">
        Photography is poetry & beautiful untold stories
      </h1>
      <p className=" mt-[30px] max-w-[344px] text-center md:max-w-[926px] font-satoshi">
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>

      <Carousel />
      <FeaturedProducts />
      <Section />
      <Explore />
      <TopCreators />
    </div>
  );
};

export default index;
