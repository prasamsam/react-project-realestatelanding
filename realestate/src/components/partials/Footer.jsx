import React from "react";
import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandSnapchat,
  TbBrandTiktokFilled,
  TbBrandXFilled,
} from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-80 lg:h-80 w-full bg-black mt-10">
        <div className="flex lg:w-full flex-col lg:flex-row justify-center lg:justify-between">
          <div className="flex flex-col  w-full justify-center py-12 px-10">
            <p className="text-white text-md lg:text-lg">Subscribe to our Newsletter</p>
            <div className="flex gap-4 py-4">
              <input type="text" placeholder="Enter your email" className="border-none px-4 py-2 focus:outline-none"  />
              <button className="bg-white px-4 py-2 rounded-[25px] font-semibold">Subscribe</button>
            </div>
          </div>
          <div className="flex justify-center items-center px-10">
            <div className="flex gap-4">
              <TbBrandFacebookFilled className="text-white text-3xl" />
              <TbBrandXFilled className="text-white text-3xl" />
              <TbBrandTiktokFilled className="text-white text-3xl" />
              <TbBrandInstagram className="text-white text-3xl" />
              <TbBrandSnapchat className="text-white text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex mt-6 justify-center items-center">
          <p className="text-white text-lg">
            <span className="text-white text-lg">&copy; </span> 2024 Urban Inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
