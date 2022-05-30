import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

function Filters() {
  return (
    <div className="flex items-center justify-center pt-8 space-x-28">
      <div className="flex items-center space-x-4">
        <div className="px-4 py-1 text-[#2E17E7] bg-[#2E17E7]/10 rounded-2xl cursor-pointer">
          All
        </div>
        <div className="px-4 py-1 bg-white border-2 rounded-2xl hover:text-[#2E17E7] cursor-pointer">
          Blog Content
        </div>
        <div className="px-4 py-1 bg-white border-2 rounded-2xl hover:text-[#2E17E7] cursor-pointer">
          Website Copy and SEO
        </div>
        <div className="px-4 py-1 bg-white border-2 rounded-2xl hover:text-[#2E17E7] cursor-pointer">
          Social Media and Ads
        </div>
        <div className="px-4 py-1 bg-white border-2 rounded-2xl hover:text-[#2E17E7] cursor-pointer">
          Marketing
        </div>
        <div className="px-4 py-1 bg-white border-2 rounded-2xl hover:text-[#2E17E7] cursor-pointer">
          More Tools
        </div>
      </div>
      <div>
        <div className="p-2 bg-white border-2 rounded-full">
          <AiOutlineSearch className="w-5 h-5 cursor-pointer hover:text-[#2E17E7]" />
        </div>
      </div>
    </div>
  );
}

export default Filters;
