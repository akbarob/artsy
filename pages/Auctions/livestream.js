import React from "react";
const livestream = () => {
  return (
    <div className=" flex flex-col  justify-between h-screen bg-rose-300">
      <div className="flex justify-between items-center">
        <p className="text-white">Tag: Lost or Wither</p>
        <div className="flex justify-between items-center gap-x-[20px]">
          <div className="w-[49px] h-[27px] bg-[#006CA2] flex justify-center items-center text-white rounded-[5px]">
            LIVE
          </div>
          <div className="w-[49px] h-[27px] bg-white/40 flex justify-center items-center text-white rounded-[5px]">
            <img src="/eyes-icon.svg" />
            <span>546</span>
          </div>
          <img src="/Close.svg" className="stroke-white" />{" "}
        </div>
      </div>
      <div></div>
      <div></div>
      <div className=" flex justify-between">
        <div className="rounded-[15px] flex justify-between border-2 border-white px-4 w-[305px] h-[35px]">
          <p>Join conversation..</p>
          <button>
            <img src="/Send.svg" />
          </button>
        </div>

        <div>
          {" "}
          <img src="/LiveLove-icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default livestream;
