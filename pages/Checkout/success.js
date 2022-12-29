import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFooterVisibility,
  setNavbarVisibility,
} from "../../Redux/generalSlice";

const Success = () => {
  const dispatch = useDispatch();
  const navbarVisible = useSelector((state) => state.general.navbarVisible);
  const footerVisible = useSelector((state) => state.general.footerVisible);
  const userData = useSelector((state) => state.general.userData);
  console.log(userData);
  useEffect(() => {
    // dispatch(setNavbarVisibility(false));
    dispatch(setFooterVisibility(false));
    localStorage.clear();
    return () => {
      // dispatch(setNavbarVisibility(true));
      dispatch(setFooterVisibility(true));
    };
  }, [dispatch]);
  console.log(navbarVisible, footerVisible, "visibility");
  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">
      <img src="/images/successImage.png" className="" alt="" />
      <h2 className="text-[18px] font-[500px] leading-[28.21px] mt-[75px] mb-[20px]">
        Hey {userData.fullname}, thank you for your purchase.{" "}
      </h2>
      <p className="text-[16px] leading-[24.07px] text-[#616161]">
        You are amazing. Cheers to being
        <span className="  bg-clip-text bg-gradient-to-r from-[#006CA2] to-[#C056097D]/50 text-transparent ">
          {" "}
          ARTSY!
        </span>
      </p>
      <div className="mt-10">
        <Link href="/Home">
          <p className="underline-offset-2 underline">Back to Home</p>
        </Link>
      </div>
    </div>
  );
};

export default Success;
