import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">
      <img src="/images/successImage.png" className="" />
      <h2 className="text-[18px] font-[500px] leading-[28.21px] mt-[75px] mb-[20px]">
        Hey Celestina, thank you for your purchase.{" "}
      </h2>
      <p className="text-[16px] leading-[24.07px] text-[#616161]">
        You are amazing. Cheers to being
        <span className="  bg-clip-text bg-gradient-to-r from-[#006CA2] to-[#C056097D]/50 text-transparent ">
          {" "}
          ARTSY!
        </span>
      </p>
    </div>
  );
};

export default Success;
