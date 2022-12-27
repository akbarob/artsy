import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { client, urlFor } from "../../lib/client";
import {
  setNavbarVisibility,
  setFooterVisibility,
} from "../../Redux/generalSlice";

const [slug] = () => {
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
  }, [dispatch]);
  console.log(navbarVisible, footerVisible, "visibility");
  return (
    <div>
      <div className="md:hidden flex flex-col justify-between h-screen ">
        <img
          alt=""
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
                <img src="/eyes-icon.svg" alt="" />
                <span>546</span>
              </div>
              <Link href="/Auctions">
                {" "}
                <img alt="" src="/Close.svg" className="stroke-white" />{" "}
              </Link>
            </div>
          </div>
          <div></div>
          <div></div>
          <div className=" flex justify-between">
            <div className="rounded-[15px] flex justify-between border-2 border-white px-4 w-4/5 h-[35px]">
              <input
                placeholder="Join conversation "
                className="bg-transparent outline-none w-full text-white"
              />
              <button>
                <img src="/Send.svg" alt="" />
              </button>
            </div>

            <div>
              {" "}
              <img src="/LiveLove-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center ">
        <div className="w-[1240px] h-[90vh] border-black border-[1px] flex ">
          <div className="w-1/2 relative">
            <img
              src={urlFor(auction.image)}
              className="absolute z-10 w-full h-full object-fit "
            />
            <div className="absolute z-20 flex flex-col w-full h-full justify-between py-16">
              <div className="flex justify-between px-10">
                <Link href="/Auctions">
                  {" "}
                  <img src="/Close.svg" className="stroke-white" alt="" />{" "}
                </Link>
                <div className="w-[49px] h-[27px] bg-[#006CA2] flex justify-center items-center text-white rounded-[5px]">
                  LIVE
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center font-bold text-[46px] text-white absolute">
                  Current Bid
                </p>
              </div>
              <div className="flex justify-start items-center">
                {" "}
                <p className="text-white ml-10">Tag: Lost or Wither</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-end bg-black/20 p-10">
            <div className="my-[11px]">
              <p className="italic text-black/50">Creator</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="rounded-[15px] flex justify-between border-2 border-black px-4 w-[405px] h-[65px] p-10">
                <input
                  placeholder="Join conversation "
                  className="bg-transparent outline-none w-full text-black"
                />
                <button className="grid place-content-center">
                  <img src="/Send.svg" className="w-[54px] h-[51px]" alt="" />
                </button>
              </div>

              <div>
                {" "}
                <img
                  src="/LiveLove-icon.svg"
                  className="w-[59.79px] h-[52.67px]"
                  alt=""
                />
              </div>
            </div>
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
export default [slug];
