import React from "react";
import { urlFor } from "../lib/client";
import { useDispatch } from "react-redux";
import { TogglecartQty, Remove } from "../Redux/cartSlice";
const Cartitem = ({ product }) => {
  const { name, image, price, quantity, creator, _id } = product;
  const dispatch = useDispatch();
  console.log(product);
  return (
    <div className="flex justify-between items-start w-full mb-[50px] pb-14 border-b-2 mt-6 px-2 ">
      <img
        alt=""
        src={image && urlFor(image)}
        className="h-[126px] w-[126px] md:w-[210px] md:h-[196px] object-contain"
      />
      <div className="flex justify-between  h-[126px] md:h-[196px] w-full">
        <div className="flex flex-col justify-between items-start ml-6">
          <h4 className="text-[22px] font-bold font-cardo">{name}</h4>
          <h4 className="text-[22px] font-bold font-cardo">{creator}</h4>

          <div className="h-[32px] w-[127px] rounded-[10px] border-black border-2 flex justify-evenly items-center">
            <button
              onClick={() => dispatch(TogglecartQty({ _id, value: "dec" }))}
            >
              {" "}
              -{" "}
            </button>{" "}
            <p className="border-x-2 px-4 text-center font-semibold">
              {quantity}
            </p>
            <button
              onClick={() => dispatch(TogglecartQty({ _id, value: "inc" }))}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-full">
          <img
            src="/cartRemove-icons.svg"
            alt="remove_icon"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              dispatch(Remove(product));
            }}
          />
          <p className="font-cardo font-bold text-[24px]"> ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
