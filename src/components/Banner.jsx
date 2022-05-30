import React from "react";

function Banner() {
  return (
    <div className="flex justify-center cursor-default">
      <div className="flex items-center px-4 py-2 mt-8 text-center bg-white border-[1px] rounded-lg w-fit space-x-28">
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-[#2E17E7] rounded-lg text-white text-md font-bold">
            Upgrade now
          </button>
          <h1 className="text-md">
            <span className="font-extrabold"> Get 20% off</span> if you upgrade
            within 24h, use the code{" "}
            <span className="font-extrabold "> 20TODAY </span> at checkout 🎉
          </h1>
        </div>
        <div className="flex flex-col divide-y-2">
          <div className="flex items-center mb-2 space-x-10">
            <h1 className="font-extrabold text-md">Free Trial</h1>
            <h1 className="text-xs font-extralight">
              <span className="font-bold">0</span> of 10 credits used
            </h1>
          </div>
          <div>
            <hr className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
