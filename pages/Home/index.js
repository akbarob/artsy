import React from "react";
import Carousel from "../../components/Carousel";
import FeaturedProducts from "../../components/FeaturedProducts";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-clashDisplay font-semibold text-[32px] md:text-[80px] text-center max-w-[1068px]">
        Photography is poetry & beautiful untold stories
      </h1>
      <p className="max-w-[926px] font-satoshi">
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>
      <div>
        <Carousel />
      </div>
      <FeaturedProducts />
    </div>
  );
};

export default index;
