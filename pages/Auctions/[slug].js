import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client, urlFor } from "../../lib/client";
import {
  setNavbarVisibility,
  setFooterVisibility,
} from "../../Redux/generalSlice";
const livestream = ({ auction, slug }) => {
  console.log(auction);
  const dispatch = useDispatch();
  const navbarVisible = useSelector((state) => state.general.navbarVisible);
  const footerVisible = useSelector((state) => state.general.footerVisible);
  useEffect(() => {
    dispatch(setNavbarVisibility(false));
    dispatch(setFooterVisibility(false));
    return () => {
      dispatch(setNavbarVisibility(true));
      dispatch(setFooterVisibility(true));
    };
  }, []);
  console.log(navbarVisible, footerVisible, "visibility");
  // console.log(auction);
  return (
    <div className=" flex flex-col justify-between h-screen ">
      <img
        src={urlFor(auction.image)}
        className="absolute z-30 w-full h-full object-fit "
      />
      <div className="absolute z-40 bg-black/70 w-full h-full"></div>
      <div className="z-50 flex flex-col justify-between p-6 h-full">
        <div className="flex justify-between items-center">
          <p className="text-white">Tag: Lost or Wither</p>
          <div className="flex justify-between items-center gap-x-[20px]">
            <div className="w-[49px] h-[27px] bg-[#006CA2] flex justify-center items-center text-white rounded-[5px]">
              LIVE
            </div>
            <div className="w-[49px] h-[27px] bg-white/40 flex justify-center items-center text-white rounded-[5px]">
              <img src="/eyes-icon.svg" />
              <span>546</span>
            </div>
            <Link href="/Auctions">
              {" "}
              <img src="/Close.svg" className="stroke-white" />{" "}
            </Link>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className=" flex justify-between">
          <div className="rounded-[15px] flex justify-between border-2 border-white px-4 w-[305px] h-[35px]">
            <input
              placeholder="Join conversation "
              className="bg-transparent outline-none w-full text-white"
            />
            <button>
              <img src="/Send.svg" />
            </button>
          </div>

          <div>
            {" "}
            <img src="/LiveLove-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type == 'auction'] {
    slug{
        current
    }
}`;
  const auctions = await client.fetch(query);
  const paths = auctions.map((auction) => ({
    params: {
      slug: auction.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'auction' && slug.current == '${slug}'][0]`;

  const auction = await client.fetch(query);

  return {
    props: { auction, slug },
  };
};
export default livestream;
