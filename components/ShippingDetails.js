import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const ShippingDetails = ({ setrouteIndex }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const style = {
    label: "text-[18px] leadding-[24px] text-[#888888] mb-[15px] mt-[30px]",
    input:
      "border-[0.5px] border-[#747474] border-solid bg-[#F2F2F2] rounded-[10px] w-full h-[50px] indent-3 outline-none",
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-1/2 w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <p className={style.label}>Your email</p>
              <input
                {...register("fullname", { required: true, maxLength: 25 })}
                className={style.input}
              />
              <label className="mt-[10px] flex">
                {" "}
                <input type="checkbox" {...register("news")} />{" "}
                <p className="text-[13px]  text-[#888888] ml-2">
                  Get updates about new drops & exclusive offers
                </p>
              </label>
            </label>
          </div>
          <div>
            <label>
              <p className={style.label}>Your full name</p>
              <input
                {...register("fullname", { required: true, maxLength: 25 })}
                className={style.input}
              />
            </label>
          </div>

          <div>
            <label>
              <p className={style.label}>Choose a wallet</p>
              <select
                {...register("wallet", { required: true, maxLength: 25 })}
                className={style.input}
              >
                <option className=""></option>
                <option></option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <p className={style.label}>City</p>
              <select
                {...register("wallet", { required: true, maxLength: 25 })}
                className={style.input}
              >
                <option className=""></option>
                <option></option>
              </select>
            </label>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <label>
              <p className={style.label}>Country</p>
              <input
                {...register("fullname", { required: true, maxLength: 25 })}
                className={style.input}
                type="text"
              />
            </label>
            <label>
              <p className={style.label}>Postal code</p>
              <input
                {...register("fullname", { required: true, maxLength: 25 })}
                className={style.input}
              />
            </label>
          </div>
          <div>
            <label>
              <p className={style.label}>Phone number</p>
              <input
                {...register("fullname", { required: true, maxLength: 25 })}
                className={style.input}
                type=""
              />
            </label>
          </div>
        </form>
        <div className="md:order-first">
          <div className="flex flex-col justify-center items-center mt-[45px] ">
            <button
              onClick={() => setrouteIndex(2)}
              className="text-white bg-[#3341C1] flex justify-center items-center w-[278px] h-[60px] md:w-[534px] md:h-[107px] md:text-[32px]"
            >
              Proceed to payment
            </button>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <p
              onClick={() => setrouteIndex(0)}
              className="border-b-2 border-[#006CA2]/80 text-[#006CA2]  cursor-pointer"
            >
              Go back to cart
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">cart</div>
    </div>
  );
};

export default ShippingDetails;
