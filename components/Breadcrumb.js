import Link from "next/link";
import React from "react";

const Breadcrumb = ({ second, name, final }) => {
  return (
    <div className="flex justify-start ml-4s lg:ml-32 my-10  border-b-2 md:border-none ">
      <p className="text-[#BCB7B7]">
        <Link href="/"> Home /</Link>
      </p>
      <p className="text-[#BCB7B7]">
        <Link
          href={`/${second}`}
          className={`${name ? "" : "font-bold text-black"}`}
        >
          {" "}
          {second}{" "}
        </Link>
      </p>
      {name && (
        <p className={`${final ? "text-[#BCB7B7]" : "text-black"} `}>/{name}</p>
      )}
      {final && <p className="Capitalize text-black">/ {final}</p>}
    </div>
  );
};

export default Breadcrumb;
