import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%", transition: { delay: 0.5 } },
};
const container = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const Itemvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
const links = [
  { name: "Home", to: "home" },
  { name: "Marketplace", to: "Marketplace" },
  { name: "Auctions", to: "Auctions" },

  { name: "Drop", to: "/Drop" },
];
const icons = [
  { name: "search", to: "home", icon: "/Search icon.svg" },
  { name: "cart", to: "Checkout", icon: "/Cart icon.svg" },
  { name: "noti", to: "home", icon: "/Notification icon.svg" },
];
const Micons = [
  { name: "search", to: "home", icon: "/Search icon.svg" },
  { name: "cart", to: "Checkout", icon: "/Cart icon.svg" },
  // { name: "noti", to: "/home", icon: "/Notification icon.svg" },
];
function Navbar({ MobileNav, setMobileNav }) {
  const router = useRouter();
  function ToggleNav() {
    setMobileNav(!MobileNav);
    console.log(MobileNav);
  }
  return (
    <nav className="backdrop-blur-sm ">
      {/* Mobile menu */}
      <div className="md:hidden flex items-center justify-between p-8 w-full">
        <button onClick={ToggleNav}>
          <Image src="/Hamburger.svg" alt="" width={39.03} height={34.5} />
        </button>
        <div>
          <Link href="/Home">
            <Image src="/ARTSY.svg" alt="artsy-logo" width={100} height={100} />
          </Link>
        </div>
        <div>
          <div className="flex justify-end items-center">
            {Micons.map((icon, i) => (
              <Link href={`/${icon.to}`} key={i}>
                <Image
                  src={icon.icon}
                  alt={icon.name}
                  className="text-black"
                  width={28}
                  height={28}
                />
              </Link>
            ))}
          </div>
        </div>
        <motion.nav
          initial={false}
          animate={MobileNav ? "open" : "closed"}
          variants={variants}
          className="z-50 fixed inset-y-0 inset-x-0 w-full h-screen bg-white p-8 overscroll-none overflow-y-hidden"
        >
          <header className="flex justify-between items-center mx-10">
            <div>
              <Image
                src="/ARTSY.svg"
                alt="artsy-logo"
                width={100}
                height={100}
              />
            </div>
            <motion.button
              onClick={ToggleNav}
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src="/Close.svg" alt="closeIcon" width={26} height={26} />
            </motion.button>
          </header>
          <motion.ul variants={container}>
            {links.map((link, i) => (
              <motion.li
                key={i}
                className="my-20 ml-10 font-satoshi text-xl cursor-pointer "
                onClick={ToggleNav}
                variants={Itemvariants}
              >
                <Link href={`/${link.name}`}>{link.name}</Link>
              </motion.li>
            ))}{" "}
          </motion.ul>
          <div className="w-full flex justify-end pr-10">
            <button onClick={ToggleNav} className="flex ">
              <Image
                src="/Chat.svg"
                alt="artsy-logo"
                width={100}
                height={100}
              />
            </button>
          </div>
        </motion.nav>
      </div>
      {/* large menu */}
      <div className="hidden md:flex justify-between items-center mx-20 mt-[40px]">
        <div className="flex justify-start">
          <Link href="/Home">
            <Image src="/ARTSY.svg" alt="artsy-logo" width={100} height={100} />
          </Link>
        </div>
        <ul className="flex items-start gap-[47px] max-w-[485px] h-[32px]">
          {links.map((link, i) => (
            <li key={i} className="m">
              <Link href={`/${link.name}`}>
                <h1
                  className={
                    router.pathname == `/${link.name}`
                      ? "border-b-2 border-[#333333]/75"
                      : ""
                  }
                >
                  {/* {console.log(router.pathname)} */}
                  {link.name}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center">
          {icons.map((icon, i) => (
            <Link key={i} href={`/${icon.to}`} className="cursor-pointer">
              <Image
                src={icon.icon}
                alt={icon.name}
                className="text-black"
                width={28}
                height={28}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
