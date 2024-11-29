import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandXFilled,
  TbBrandYoutubeFilled,
  TbMapPinFilled,
  TbMenu2,
  TbPhone,
  TbX,
} from "react-icons/tb";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const topBarHeight = 40;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > topBarHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`sticky top-0 left-0 transition-colors z-50 h-28 lg:h-28 w-full ${isScrolled ? 'sticky' : 'absolute'}`}>
        {/* top addressbar starts */}
        <div
          className={`hidden w-full z-30 absolute top-0 left-0 lg:flex lg:justify-between lg:bg-[#c41805] h-10 ${
            isScrolled
              ? "-translate-y-10 duration-300 ease-in-out"
              : "translate-y-0"
          }`}
        >
          <div className="w-full flex items-center">
            <p className="text-white px-10 space-x-2 flex">
              <TbMapPinFilled className="text-lg align-middle" />
              <span>Chome-1-1 Kozudai, Kita Ward, Kobe, Hyogo 651-1515</span>
            </p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div>
              <p className="flex justify-center items-center text-white">
                <TbPhone className="text-xl" /> <span>+812345678</span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 text-white text-xl pr-10">
              <TbBrandFacebookFilled className="text-white rounded" />
              <TbBrandXFilled className="text-white rounded" />
              <TbBrandInstagram className="text white rounded" />
              <TbBrandYoutubeFilled className="text-white rounded" />
            </div>
          </div>
        </div>
        {/* top addressbar ends */}

        {/* desktop navbar starts */}
        <div className="lg:absolute lg:top-10 lg:z-10 h-full w-full">
          <div
            className={`flex h-full items-center justify-between bg-primary ${
              isScrolled
                ? "bg-[#23211f] bg-opacity-80 lg:-translate-y-10 duration-500 ease-in-out"
                : "bg-[#23211f] lg:translate-y-0 duration-300 ease-in out "
            } `}
          >
            <div className="lg:px-10">
              <img
                src={logo}
                alt="logo"
                className="h-20 w-40 lg:h-24 lg:w-44"
              />
            </div>
            <nav className="hidden lg:flex lg:items-center lg:px-20">
              <ul className="list-none flex gap-8 text-lg text-white">
                <li>Home</li>
                <li>About Us</li>
                <li>Menus</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div
              className={`lg:hidden text-4xl px-8 mt-4 text-white ${
                mobileMenuOpen ? "hidden" : "block"
              }`}
              onClick={toggleMenu}
            >
              <TbMenu2 />
            </div>
          </div>
        </div>

        {/* desktop navbar ends */}

        {/* mobile navbar starts */}
        <div
          className={`bg-primary fixed inset-0 transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out md:w-3/4 flex flex-col gap-10`}
        >
          <div className="flex justify-between items-center p-2 text-3xl">
            <div>
              <img src={logo} alt="logo" className="h-24 w-40" />
            </div>
            <TbX
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mt-4 mr-4 text-white"
            />
          </div>
          <div className="px-8">
            <ul className="space-y-4 text-white">
              <li>Home</li>
              <li>About Us</li>
              <li>Menus</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/* mobile navbar ends */}
      </header>
    </>
  );
};

export default Header;
