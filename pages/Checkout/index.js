import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartitem from "../../components/Cartitem";

const routes = ["Shopping Cart", "Shopping Details", "Payment Details"];

const ShoppingCart = () => {
  const count = useSelector((state) => state.cart.qty);
  const cart = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const Shipping = 4.2;

  const dispatch = useDispatch();
  console.log(cart);

  const style = {
    details_div: "flex justify-between items-center w-full md:mb-[32px]",
    p: "text-[#888888] text-[20px]",
    span: "w-20 text-[20px] font-bold font-cardo text-black",
  };
  return (
    <div className="flex flex-col md:px-32 px-4 h-full mb-16">
      {cart.length >= 1 ? (
        <div>
          <div className="flex justify-center items-center">
            {routes.map((item, i) => (
              <h2 key={i} className="border-b-2 px-6">
                {item}
              </h2>
            ))}
          </div>

          <div className="h-[65vh] md:h-[80vh] overflow-y-auto  border-t-2 ">
            {cart.map((item, i) => (
              <Cartitem count={count} product={item} key={i} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between">
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
                <span className={style.span}> ${totalPrice}</span>
              </div>

              <div className={`${style.details_div} border-dashed border-t-2`}>
                <p className={style.p}>GrandTotal :</p>
                <span className={style.span}> ${totalPrice + Shipping} </span>
              </div>
            </div>
            <div className="md:order-first">
              <div className="flex flex-col justify-center items-center mt-[45px] md:mt-0">
                <button className="text-white bg-[#3341C1] flex justify-center items-center w-[278px] h-[60px] md:w-[534px] md:h-[107px] md:text-[32px]">
                  Proceed to checkout
                </button>
              </div>
              <div className="flex justify-center items-center mt-[20px]">
                <Link href="/Marketplace">
                  <p className="border-b-2 border-[#006CA2]/80 text-[#006CA2]  ">
                    Continue shopping
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[70vh] text-xl">
          Your cart is currently empty{" "}
          <p>
            Browse our Various{" "}
            <span className="text-2xl text-black font-bold font-cardo uppercase">
              {" "}
              Arsty
            </span>
            Collection
          </p>
          <div className="flex justify-center items-center mt-[20px]">
            <Link href="/Marketplace">
              <p className=" border-b-2 border-[#006CA2]/80 text-[#006CA2]  ">
                Continue shopping
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
