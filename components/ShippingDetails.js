import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/generalSlice";

const Countries = ["Nigeria", "USA", "United Kingdom", "South Africa", "Ghana"];
const ShippingDetails = ({ setrouteIndex }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(watch("fullname"));
  const onSubmit = (data) => {
    dispatch(setUserData(data));
    setrouteIndex(2);
  };
  const style = {
    error: "text-rose-600 text-[10px]",
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
                type="email"
                placeholder="email"
                {...register("email", { required: true, maxLength: 25 })}
                className={style.input}
              />
              {errors.email && (
                <span className={style.error}>
                  Your e-mail address is required
                </span>
              )}
            </label>
            <label className="mt-[10px] flex items-center ">
              {" "}
              <input
                type="checkbox"
                {...register("news")}
                className="rounded-[5px]"
              />
              <p className="text-[13px]  text-[#888888] ml-2">
                Get updates about new drops & exclusive offers
              </p>
            </label>
          </div>
          <div>
            <label>
              <p className={style.label}>Your full name</p>
              <input
                type="text"
                placeholder="Full name"
                {...register("fullname", {
                  required: true,
                })}
                className={style.input}
              />
              {/* errors will return when field validation fails  */}
              {errors.fullname && (
                <span className={style.error}>Your Name is required</span>
              )}
            </label>
          </div>

          <div>
            <label>
              <p className={style.label}>Choose a wallet*</p>
              <select
                {...register("wallet", { required: true, maxLength: 25 })}
                className={style.input}
              >
                <option value="Coinbase" className="">
                  Coinbase
                </option>
                <option value="Metamask">Metamask</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <p className={style.label}>Country</p>
              <select
                {...register("wallet", { required: true })}
                className={style.input}
              >
                {Countries.map((country) => (
                  <option key={country} value={country} className="">
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-[20px] lg:justify-between ">
            <label>
              <p className={style.label}>City</p>
              <input
                type="text"
                {...register("city", { required: true })}
                className={style.input}
              />
              {errors.city && (
                <span className={style.error}>Your city is required</span>
              )}
            </label>
            <label>
              <p className={style.label}>Postal code</p>
              <input
                type="number"
                {...register("postal", { required: true })}
                className={style.input}
              />
              {errors.postal && (
                <span className={style.error}>Your postal is required</span>
              )}
            </label>
          </div>
          <div>
            <label>
              <p className={style.label}>Phone number*</p>
              <input
                type="tel"
                {...register("phone", {
                  required: "phone No is required",
                  maxLength: { value: 11, message: "must be 11 digits" },
                  minLength: { value: 11, message: "must be 11 digits" },
                })}
                className={style.input}
                placeholder="08091112222"
              />
              {errors.phone && (
                <span className={style.error}>{errors.phone.message}</span>
              )}
            </label>
          </div>
          <div className="md:order-first">
            <div className="flex flex-col justify-center items-center mt-[45px] ">
              <button
                type="submit"
                // onClick={() => setrouteIndex(2)}
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
        </form>
      </div>
      <div className="hidden lg:block lg:w-1/2">cart</div>
    </div>
  );
};

export default ShippingDetails;
