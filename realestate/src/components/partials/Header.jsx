import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { TbMenu2 } from "react-icons/tb";

const Header = () => {

    const [open, setOpen] = useState(false);

  return (
    <header className="mt-4">
      {/* Desktop Header */}
      <nav className="hidden lg:flex items-center h-28  justify-between w-full px-16">
        <img src={logo} alt="Company Logo" className="w-28 h-18" />
        <ul className="list-none flex space-x-16 font-medium text-lg text-gray-600">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex gap-6">
          <button className="bg-black text-white font-semibold px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="text-gray-600">Signup</button>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="flex items-center justify-between lg:hidden p-4">
        <img src={logo} alt="Company Logo" className="w-28 h-18" />
        <TbMenu2 className="text-3xl text-gray-500 cursor-pointer" onClick = {() => {setOpen(!open)}}/>
      </div>
      <div className={`${open ? "w-full absolute z-20" : "hidden"} duration-1000 bg-white bg-opacity-80`}>
        <div className="flex gap-8 justify-center">
            <button className="bg-black text-white font-semibold px-4 py-2 rounded-md">Login</button>
            <button>Signup</button>
        </div>
        <div className="flex items-center justify-center mt-4 text-xl">
            <ul className="list:none flex flex-col gap-4">
                <li>Home</li>
                <li>Services</li>
                <li>Properties</li>
                <li>Contact</li>
            </ul>
        </div>
    
      </div>
    </header>
  );
};

export default Header;
