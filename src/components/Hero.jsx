import React from "react";
import Filters from "./Filters";
import Card from "./Card";

function Hero() {
  const arr = [
    "Blog Post Writer",
    "Article Generator",
    "Paragraph Writer",
    "Article Writer",
    "Blog Section",
    "Blog Titles",
    "Blog Ideas",
    "Blog Intros",
    "Blog Post Writer",
    "Article Generator",
    "Paragraph Writer",
    "Article Writer",
    "Blog Section",
    "Blog Titles",
    "Blog Ideas",
    "Blog Intros",
  ];
  return (
    <div className="flex flex-col items-center">
      <Filters />
      <div className="grid items-center grid-cols-4 mt-5 mx-72">
        {arr.map((item, index) => (
          <Card key={index} title={item} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
