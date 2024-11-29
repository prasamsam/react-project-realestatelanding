import React from "react";
import personOne from "../../assets/images/person1.jpg";
import personTwo from "../../assets/images/person2.jpg";
import personThree from "../../assets/images/person3.jpg";
import buildingCard from "../../assets/images/building.jpg";
import heroCard from "../../assets/images/herocard.png";

const HeroCard = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col lg:flex-row space-y-6 px-2 py-6 lg:px-8 lg:py-8 lg:space-x-10">
      <div className="flex w-full lg:mt-6 justify-center items-center lg:w-1/3 h-60 rounded-[25px] bg-slate-300">
        <div className=" flex flex-col justify-center h-full w-1/2 px-8">
          <p className="text-[3rem] lg:text-[4rem] font-medium">10 M+</p>
          <p className="text-[1rem] lg:text-[1.2rem] font-semibold text-gray-600">
            Happy customers
          </p>
        </div>
        <div className="h-full w-1/2 relative">
          <img
            src={personOne}
            alt="person1"
            className="w-14 h-14 rounded-full absolute left-36 top-14"
          />
          <img
            src={personTwo}
            alt="person2"
            className="w-14 h-14 rounded-full absolute left-24 top-28 "
          />
          <img
            src={personThree}
            alt="person3"
            className="w-14 h-14 rounded-full absolute left-40 top-32"
          />
        </div>
      </div>
      <div className="flex w-full lg:w-1/3 h-60 rounded-[25px] relative">
        <div className="absolute z-10 top-12 left-8">
          <p className=" text-white text-[3rem] lg:text-[4rem] font-medium">12 K+ </p>
          <p className=" text-white text-[1rem] lg:text-[1.2rem] font-semibold">Elegant properties</p>
        </div>
        <img
          src={buildingCard}
          alt=""
          className="object-cover h-full w-full rounded-[25px] brightness-50"
        />
      </div>
      <div className=" flex w-full lg:w-1/3 h-60 rounded-[25px] relative ">
      <div className="absolute z-10 top-12 left-8">
          <p className=" text-white text-[3rem] lg:text-[4rem] font-medium">8 + </p>
          <p className=" text-white text-[1rem] lg:text-[1.2rem] font-semibold">Years of service</p>
        </div>
        <img
          src={heroCard}
          alt=""
          className="object-cover h-full w-full rounded-[25px] bg-gray-700"
        />
      </div>
    </div>
  );
};

export default HeroCard;
