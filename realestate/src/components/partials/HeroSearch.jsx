import React from "react";
import { TbSearch } from "react-icons/tb";

const HeroSearch = () => {
  return (
    <div className="bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2  w-5/6 hidden lg:block  h-[200px] rounded-[25px]">
      <div className="flex gap-8 ml-8 items-center mt-8">
        <button className="text-2xl font-semibold border-b-2 border-black text-black">
          Buy
        </button>
        <button className="text-2xl font-semibold text-gray-600">Rent</button>
      </div>
      <div className="flex justify-center items-center mt-8 w-full">
        <div className="flex flex-col gap-2 justify-center border-r-2 border-r-gray-400 w-1/4 px-8">
          <label className="text-gray-600 font-semibold">Location</label>
          <select
            name=""
            id=""
            className="text-xl font-semibold bg-transparent outline-none"
          >
            <option value="">New York</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 justify-center border-r-2 border-r-gray-400 w-1/4 px-8">
          <label className="text-gray-600 font-semibold">Property Type</label>
          <select
            name=""
            id=""
            className="text-xl font-semibold bg-transparent outline-none"
          >
            <option value="">Duplex House</option>
          </select>
        </div>
        <div className="flex flex-col gap-4 justify-center w-1/4 px-8">
          <label className="text-gray-600 font-semibold">Price Range</label>
          <select
            name=""
            id=""
            className="text-xl font-semibold bg-transparent outline-none"
          >
            <option value="">$25,000-$100,000</option>
          </select>
        </div>
        <div className="w-1/4 px-8 flex justify-center">
          <button className="bg-black text-white px-10 py-4 rounded-lg font-semibold flex gap-2 items-center">
            {" "}
            <TbSearch className="text-3xl" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
