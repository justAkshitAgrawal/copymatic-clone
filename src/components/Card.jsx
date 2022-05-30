import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

export default function Card({ title }) {
  return (
    <div className="flex flex-col p-4 mb-5 mr-10 transition bg-white rounded-md shadow-md cursor-pointer delay-50 hover:scale-105">
      <div className="flex mb-4 space-x-40">
        <div className="p-2 bg-[#14B885]/20 rounded-md">
          <MdArticle className="text-[#14B885]" />
        </div>
        <div>
          <BsArrowUpRight className="text-gray-400" />
        </div>
      </div>
      <div>
        <h1 className="mb-2 font-extrabold text-md">{title}</h1>
        <h2 className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </div>
    </div>
  );
}
