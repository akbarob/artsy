import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
const wallet = [
  "/images/MetaMask.png",
  "/images/Coinbase.png",
  "/images/WalletConnect.png",
  "/images/Phantom.png",
  "/images/add-wallet.png",
];
const style = {
  details_div: "flex justify-between items-center w-full md:mb-[32px]",
  p: "text-[#888888] text-[20px]",
  span: "w-20 text-[20px] font-bold font-cardo text-black",
  label: "text-[18px] leadding-[24px] text-[#888888] mb-[15px] mt-[30px]",
  input:
    "border-[0.5px] border-[#747474] border-solid bg-[#F2F2F2] rounded-[10px] w-full h-[50px] indent-3 outline-none",
};

const PaymentDetails = ({ userData }) => {
  const count = useSelector((state) => state.cart.qty);
  const cart = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const Shipping = 4.2;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between mb-[30px]">
        <p className="hidden lg:block">Payment Method</p>
        <p>Secure server</p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h2>Select your wallet</h2>
          <h4 className="text-[16px] text-[#616161] leading-[25.22px]">
            Connect with one of our available wallet providers or add and
            connect a new wallet.{" "}
          </h4>
          <div className="flex gap-x-[26px] justify-center">
            {wallet.map((item, i) => (
              <img
                alt=""
                src={item}
                key={i}
                className="w-[42px] h-[42px] object-fill"
              />
            ))}
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>
                  <p className={style.label}>Wallet</p>
                  <input
                    {...register("fullname", { required: true, maxLength: 25 })}
                    className={style.input}
                  />
                </label>
              </div>
              <div>
                <label>
                  <p className={style.label}>Key</p>
                  <input
                    {...register("fullname", { required: true, maxLength: 25 })}
                    className={style.input}
                  />
                </label>
              </div>
              <div>
                <label>
                  <p className={style.label}>Expiry date</p>
                  <input
                    {...register("fullname", { required: true, maxLength: 25 })}
                    className={style.input}
                  />
                </label>
              </div>
              <div>
                <label>
                  <p className={style.label}>Safe code</p>
                  <input
                    {...register("fullname", { required: true, maxLength: 25 })}
                    className={style.input}
                  />
                  <label className="mt-[10px] flex">
                    {" "}
                    <input type="checkbox" {...register("news")} />{" "}
                    <p className="text-[13px]  text-[#888888] ml-2">
                      Save my wallet details & information for future
                      transactions{" "}
                    </p>
                  </label>
                </label>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center mt-[45px] md:mt-0">
            <Link href="/Checkout/success">
              <button className="text-white bg-[#3341C1] flex justify-center items-center w-[278px] h-[60px] md:w-[534px] md:h-[107px] md:text-[32px]">
                Confirm
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <div>
            <h2>Payment summary</h2>
          </div>
          <div>
            <p>MetaMask Wallet</p>
            <p>Actively linked to .......</p>
          </div>
          <div>
            <p>MetaMask Wallet</p>
            <p>Actively linked to .......</p>
          </div>
          <div>
            <p>MetaMask Wallet</p>
            <p>Actively linked to .......</p>
          </div>
          <div className="md:w-[534px]  md:ml-32">
            <div className={style.details_div}>
              <p className={style.p}>Products in cart :</p>
              <span className={style.span}>{totalQuantity} items </span>
            </div>

            <div className={style.details_div}>
              <p className={style.p}>Shipping :</p>
              <span className={style.span}>${Shipping}</span>
            </div>

            <div className={style.details_div}>
              <p className={style.p}>Total :</p>
              <span className={style.span}>
                {" "}
                $ {Math.round(totalPrice * 100) / 100}{" "}
              </span>
            </div>

            <div className={`${style.details_div} border-dashed border-t-2`}>
              <p className={style.p}>GrandTotal :</p>
              <span className={style.span}>
                {" "}
                $ {Math.round((totalPrice + Shipping) * 100) / 100}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
