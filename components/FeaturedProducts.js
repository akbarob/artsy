import React from "react";
import Article from "./Article";

const content = [
  {
    image: "/images/ArticleImage1.png",
    title: "The Boolean Egyptian",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor pur",
  },
  {
    image: "/images/ArticleImage3.png",
    title: "Are We There Yet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor pur",
  },
  {
    image: "/images/ArticleImage2.png",
    title: "Oloibiri 1997",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor pur",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="w-full p-6 md:p-10">
      <h3 className="text-left font-medium text-[28px] leading-[43.88px] lg:text-[48px]">
        Featured Products
      </h3>
      {content.map((content, i) => (
        <Article
          key={i}
          image={content.image}
          title={content.title}
          text={content.text}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
