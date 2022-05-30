import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BsChevronDown, BsQuestionCircle } from "react-icons/bs";
import { BiBell, BiRefresh } from "react-icons/bi";

function Header() {
  return (
    <div className="flex items-center justify-between px-12 pt-6 pb-4 border-b-[1px]">
      <div>
        <img
          src="https://cdn.copymatic.ai/static/logo.svg"
          alt=""
          className="cursor-pointer w-36"
        />
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-1 font-semibold text-[#2E17E7] bg-[#2E17E7]/5 p-2 rounded-lg cursor-pointer">
          <MdOutlineDashboard />
          <h1>Dashboard</h1>
        </div>
        <div className="flex items-center space-x-1 font-semibold hover:text-[#2E17E7] cursor-pointer">
          <RiStackLine />
          <h1>All Tools</h1>
        </div>
        <div className="flex items-center space-x-1 font-semibold hover:text-[#2E17E7] cursor-pointer">
          <TiDocumentText />
          <h1>My Content</h1>
        </div>
        <div className="flex items-center space-x-1 font-semibold hover:text-[#2E17E7] cursor-pointer">
          <BsQuestionCircle />
          <h1>How it works</h1>
        </div>
        <div className="flex items-center space-x-1 font-semibold hover:text-[#2E17E7] cursor-pointer">
          <BiBell />
          <h1>What's new</h1>
          <span class="inline-block w-2 h-2 mr-2 bg-[#2E17E7] rounded-full self-start"></span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center px-2 py-1 rounded-3xl cursor-pointer border-2 border-[#2E17E7]">
          <BiRefresh className="mr-1 w-4 text-[#2E17E7]" />
          <h1 className="text-[#2E17E7] text-xs font-bold">10</h1>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt=""
            className="w-8 border-2 border-black rounded-full"
          />
          <h1>My account</h1>
          <BsChevronDown className="w-3 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Header;
