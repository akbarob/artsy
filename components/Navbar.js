import Image from "next/image";
import React, { useState } from "react";
const links = [
  { name: "Home", to: "/home" },
  { name: "Marketplace", to: "/home" },

  { name: "Auctions", to: "/home" },

  { name: "Drop", to: "/drop" },
];
const icons = [
  { name: "search", to: "/home", icon: "/Search icon.svg" },
  { name: "cart", to: "/home", icon: "/Cart icon.svg" },
  { name: "noti", to: "/home", icon: "/Notification icon.svg" },
];
const Micons = icons.splice(0, 2);
function Navbar() {
  const [MobileNav, setMobileNav] = useState(false);
  function ToggleNav() {
    setMobileNav(!MobileNav);
    console.log(MobileNav);
  }
  return (
    <nav className="relative ">
      {/* Mobile menu */}
      <div className="md:hidden flex items-center  justify-between m-8 ">
        <button onClick={ToggleNav}>
          <Image src="/Hamburger.svg" width={39.03} height={34.5} />
        </button>
        <div>
          <Image src="/ARTSY.svg" alt="artsy-logo" width={100} height={100} />
        </div>
        <div>
          <div className="flex justify-end items-center">
            {Micons.map((icon, i) => (
              // console.log(icon)
              <Image
                key={i.icon}
                src={icon.icon}
                alt={icon.name}
                className="text-black"
                width={28}
                height={28}
              />
            ))}
          </div>
        </div>
        {MobileNav && (
          <div className="absolute inset-y-0 inset-x-0 w-full h-full bg-white ">
            <header className="flex justify-between items-center mx-10">
              <div>
                <Image
                  src="/ARTSY.svg"
                  alt="artsy-logo"
                  width={100}
                  height={100}
                />
              </div>
              <button onClick={ToggleNav}>
                <Image
                  src="/Close.svg"
                  alt="artsy-logo"
                  width={26}
                  height={26}
                />
              </button>
            </header>
            <ul>
              {links.map((link, i) => (
                <li
                  key={i}
                  className="my-20 ml-10 font-satoshi  text-xl cursor-pointer"
                  onClick={ToggleNav}
                >
                  {" "}
                  {link.name}
                </li>
              ))}{" "}
            </ul>
            <div className="w-full flex justify-end pr-10">
              <button onClick={ToggleNav} className="flex ">
                <Image
                  src="/Chat.svg"
                  alt="artsy-logo"
                  width={100}
                  height={100}
                  className=""
                />
              </button>{" "}
            </div>
          </div>
        )}
      </div>
      {/* large menu */}
      <div className="hidden md:flex justify-between items-center mx-20 mt-[40px]">
        <div className="flex justify-start">
          <Image src="/ARTSY.svg" alt="artsy-logo" width={100} height={100} />
        </div>
        <ul className="flex items-start gap-[47px] max-w-[485px] h-[32px]">
          {links.map((link, i) => (
            <li key={i} className="m">
              {" "}
              {link.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center">
          {icons.map((icon, i) => (
            <Image
              key={i.icon}
              src={icon.icon}
              alt={icon.name}
              className="text-black"
              width={28}
              height={28}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
