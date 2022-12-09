import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Collections from "../../components/Collections";
import { client, urlFor } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex ml-32 mt-10">
        <p className="text-[#BCB7B7]">
          <Link href="/"> Home /</Link>
        </p>
        <p className="text-[#BCB7B7]">
          <Link href="/Marketplace"> Marketplace /</Link>
        </p>
        <p className="Capitalize text-black">{product.name}</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[820px] w-[1200px] border-2 flex justify-between items-center">
          <div className="h-[626px] w-[525px] px-4">
            <img
              src={urlFor(product.image)}
              alt={product.name}
              className="w-[535px] h-[626px] object-cover"
            />
          </div>
          <div className="border-l-[2px]  h-full w-1/2">
            <div className="flex justify-between items-center p-10 border-b-2 ">
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
            <div className="py-[60px] pl-10 border-b-2">
              <p className="mb-[30px]">
                {" "}
                Creator:{" "}
                <span className="text-[#4693ED] text-[30px]">
                  {product.creator}
                </span>{" "}
              </p>
              <p className="mb-[30px]"> Made in Italy</p>
              <p className="mb-[30px]">Total Views : 1.8k</p>
              <div className="flex mb-[60px]">
                {" "}
                <span> - </span> <p>0</p>
                <span> + </span>
              </div>
              <div className="flex justify-start items-center">
                <button className="h-[75px] w-[315px] bg-[#3341c1] rounded-[3px] text-white mr-[24px]">
                  Add to cart
                </button>
                <button className="h-[75px] w-[110px] border-[1px] rounded-[3px] text-white flex justify-center items-center">
                  <img
                    src="/heart-icon.svg"
                    alt="heart-icon"
                    className="w-[53px] h-[48px]"
                  />{" "}
                </button>
                <img src="" alt="" />
              </div>
            </div>
            <div className=" h-[70px] border-b-2 flex items-center justify-between px-10">
              <h3>Description</h3>
              <IoIosArrowDown size={36} />
            </div>
            <div className="h-[70px] border-b-2 flex items-center justify-between px-10">
              <h3>Description</h3>
              <IoIosArrowDown size={36} />
            </div>
            <div className="h-[80px] flex  items-center justify-between px-10">
              <h3>Description</h3>
              <IoIosArrowDown size={36} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[1200px] h-[114px] shadow-lg bg-white rounded-[15px] flex justify-between items-center mt-[89px] -shadow-lg px-10">
          <p className="font-medium text-[32px]">
            Explore more from this collection
          </p>
          <div className="flex justify-between items-center">
            <img src="/left-arrow.svg" alt="" />
            <img src="/right-arrow.svg" alt="" className="ml-[35px]" />
          </div>
        </div>
      </div>
      <div className="flex overflow-y-auto w-full gap-x-[40px] px-32 mt-[101px]">
        {products.map((product, i) => (
          <Collections
            key={i}
            image={product.image}
            name={product.name}
            price={product.price}
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
