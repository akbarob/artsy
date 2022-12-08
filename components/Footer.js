import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscLocation, VscMail } from "react-icons/vsc";
const links = [
  { name: "Home", to: "/home" },
  { name: "Marketplace", to: "/home" },

  { name: "Auctions", to: "/home" },

  { name: "Drop", to: "/drop" },
];
const Footer = () => {
  return (
    <div className="flex flex-col w-full px-10 mt-20">
      <div className="w-full md:h-[320px] md:border-2 md:border-black flex flex-col justify-center items-center">
        <h3 className="text-[30.21px] font-normal font-clashDisplay">
          Newsletter
        </h3>
        <p className="text-[32.21px] font-normal">
          Subscribe to get daily updates on new drops & exciting deals{" "}
        </p>
        <div className="flex mt-[34px]">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-black border-2 mr-[23px] w-[446px] indent-5"
          />
          <button className="h-[80px] w-[181.63px] flex justify-center items-center font-clashDisplay bg-black text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-32 mt-[60px]">
        <div>
          <Image
            src="/ARTSY.svg"
            alt="artsy-logo"
            width={150}
            height={150}
            className="w-[150px] h-[150px]"
          />
        </div>
        <div className="flex">
          <ul>
            {links.map((link) => (
              <li key={link.name} className="text-[26px]">
                <Link href={`/${link.name}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="ml-20">
            {["Blog", "Wallets", "Rates", "High bids"].map((link) => (
              <li key={link} className="text-[26px]">
                <Link href={`/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[26px] font-medium flex justify-start items-center">
            {" "}
            <VscMail className="mr-4" size={40} />
            artsystudios@gmail.com
          </p>
          <address className="text-[26px] font-medium flex justify-start items-center">
            <VscLocation className="mr-4" size={40} />
            Lagos, Nigeria
          </address>
        </div>
      </div>
      <p className="text-center mt-10 text-[24px] font-medium">
        Artsystudios © 2022. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
