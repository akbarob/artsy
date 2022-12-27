import Link from "next/link";
import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Collections from "../../components/Collections";
import { client, urlFor } from "../../lib/client";
import { increment, decrement, AddToCart, setQty } from "../../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product, products }) => {
  const quantity = useSelector((state) => state.cart.qty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQty(1));
  }, [product, dispatch]);

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-start ml-32 mt-10 border-b-2 md:border-none">
        <p className="text-[#BCB7B7]">
          <Link href="/"> Home /</Link>
        </p>
        <p className="text-[#BCB7B7]">
          <Link href="/Marketplace"> Marketplace /</Link>
        </p>
        <p className="Capitalize text-black">{product.name}</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-[81px]">
        <div className="lg:h-[820px] w-full lg:w-[1200px] lg:border-2 flex flex-col lg:flex-row justify-between items-center">
          <div className=" h-[384px] lg:h-[626px] w-[357px] lg:w-[525px] px-4">
            <img
              src={urlFor(product.image)}
              alt={product.name}
              className="w-[535px] h-[384px] lg:h-[626px] object-cover"
            />
          </div>
          <div className="lg:border-l-[2px] h-full w-full lg:w-1/2 px-10">
            <div className="flex justify-between items-center py-5 lg:p-10 lg:border-b-2 ">
              <p>{product.name}</p>
              <div className="flex">
                <img
                  src="/cypto-icon.svg"
                  alt="icon"
                  className="w-[40px] h-[46px]"
                />
                <p className="text-[30px] font-medium">{product.price}</p>
              </div>
            </div>
            <div className="lg:py-[60px]  border-b-2">
              <p className="mb-[30px]">
                {" "}
                Creator:{" "}
                <span className="text-[#4693ED] text-[30px]">
                  {product.creator}
                </span>{" "}
              </p>
              <p className="mb-[30px]"> Made in Italy</p>
              <p className="mb-[30px]">Total Views : 1.8k</p>
              <div className="flex mb-[60px] w-20 justify-between">
                {" "}
                <button onClick={() => dispatch(decrement())}> - </button>{" "}
                <p>{quantity}</p>
                <button onClick={() => dispatch(increment())}> + </button>
              </div>
              <div className="flex justify-start items-center">
                <button
                  onClick={() => {
                    // window.navigator.vibrate(500);
                    dispatch(AddToCart({ product, quantity }));
                  }}
                  className=" h-[67px] w-[214px] lg:h-[75px] lg:w-[315px] bg-[#3341c1] rounded-[3px] text-white mr-[24px]"
                >
                  Add to cart
                </button>
                <button className=" h-[67px] lg:h-[75px] w-[66px] lg:w-[110px] border-[1px] rounded-[3px] text-white flex justify-center items-center">
                  <img
                    src="/heart-icon.svg"
                    alt="heart-icon"
                    className="w-[53px] h-[48px]"
                  />{" "}
                </button>
                <img src="" alt="" />
              </div>
            </div>
            <div className=" h-[70px] border-b-2 flex items-center justify-between border-t-2 lg:border-t-none mt-[55px] lg:mt-0">
              <h3>Description</h3>
              <IoIosArrowDown size={36} />
            </div>
            <div className="h-[70px] border-b-2 flex items-center justify-between">
              <h3>Description</h3>
              <IoIosArrowDown size={36} />
            </div>
            <div className="h-[80px] flex  items-center justify-between border-b-2 lg:border-none">
              <h3>Description</h3>
              <IoIosArrowDown size={36} />
            </div>
          </div>
        </div>
        <p className="mt-20 lg:hidden text-left">More from this collection </p>
        <div className="hidden lg:flex w-[1200px] h-[114px] shadow-lg bg-white rounded-[15px] justify-between items-center mt-[89px] -shadow-lg px-10">
          <p className="font-medium text-[32px]">
            Explore more from this collection
          </p>
          <div className="flex justify-between items-center">
            <img src="/left-arrow.svg" alt="" />
            <img src="/right-arrow.svg" alt="" className="ml-[35px]" />
          </div>
        </div>

        <div className="flex overflow-y-auto w-full gap-x-[40px] px-32 mt-[101px]">
          {products.map((product, i) => (
            <Collections
              key={i}
              image={product.image}
              name={product.name}
              price={product.price}
              slug={product.slug}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-[109px] bg-gradient-to-r from-[#78A3AD] to-[#C05609]/50 w-[316px] h-[93px] rounded-[16px] mb-32">
          <button className="w-[313px] h-[91px] rounded-[16px] bg-white">
            <p className="text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-[#78A3AD] to-[#C05609]/50">
              Explore All
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == 'marketplace'] {
    slug{
        current
    }
}`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'marketplace' && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "marketplace"]`;

  const product = await client.fetch(query);
  console.log(product);
  const products = await client.fetch(productsQuery);
  //   const slug = `${slug}`;
  return {
    props: { product, products, slug },
  };
};

export default ProductDetails;
