import React, { useEffect, useState } from "react";
import { TbCircleArrowLeft, TbCircleArrowRightFilled } from "react-icons/tb";
import { capitaliseWord } from "../../utility/utils"; 
import house1 from "../../assets/images/house1.jpg";
import house2 from "../../assets/images/house2.jpg";
import house3 from "../../assets/images/house3.jpg";
import house4 from "../../assets/images/house4.jpg";
import house5 from "../../assets/images/house5.jpg";
import house6 from "../../assets/images/house6.jpg";

const FeaturedListingSlider = () => {
  const cards = [
    {
      id: "1",
      img: house1,
      type: "sale",
      address: "Kathmandu",
    },
    {
      id: "2",
      img: house2,
      type: "sale",
      address: "Lalitpur",
    },
    {
      id: "3",
      img: house3,
      type: "rent",
      address: "Lalitpur",
    },
    {
      id: "4",
      img: house4,
      type: "sale",
      address: "Bhaktapur",
    },
    {
      id: "5",
      img: house5,
      type: "rent",
      address: "Madhyapur",
    },
    {
      id: "6",
      img: house6,
      type: "rent",
      address: "Kathmandu",
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3);
      } else {
        setCardsPerSlide(1);
      }
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="p-10 mt-4">
      <div className="flex justify-between ">
        <div>
          <p className="text-[0.8rem] lg:text-[1.4rem] font-semibold">
            {currentIndex + 1}/{totalSlides}
          </p>
        </div>
        <p className="text-[1.2rem] lg:text-[2.4rem] font-semibold">
          Featured Listings
        </p>
        <div className="space-x-1 lg:space-x-4">
          <button>
            <TbCircleArrowLeft
              className=" text-[20px] lg:text-[40px] cursor-pointer"
              onClick={handlePrev}
            />
          </button>
          <button>
            <TbCircleArrowRightFilled
              className="text-[20px] lg:text-[40px] cursor-pointer"
              onClick={handleNext}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-screen max-w-7xl overflow-hidden flex justify-center items-center">
          <div
            className="w-screen mt-10 flex justify-between transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `100%`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${
                  cardsPerSlide === 3 ? "lg:w-1/3" : "w-full"
                } flex-shrink-0 p-4  flex justify-center items-center relative`}
              >
                <div className="absolute top-10 right-10 z-10 bg-white px-2 py-1 lg:px-4 lg:py-2 rounded-2xl text-sm lg:text-md lg:font-semibold">
                  <p>{capitaliseWord(card.type)}</p>
                </div>
                <div className="absolute z-20 text-white text-lg lg:text-xl font-semibold bottom-8">
                  <p>{capitaliseWord(card.address)}</p>
                </div>
                <img
                  src={card.img}
                  alt="image"
                  className="object-cover w-full h-full rounded-xl brightness-75"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListingSlider;
