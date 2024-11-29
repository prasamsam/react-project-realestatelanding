import React, { useEffect, useState } from "react";
import { TbCircleArrowRightFilled, TbCircleArrowLeft } from "react-icons/tb";
import testiOne from "../../assets/images/person1.jpg";
import testiTwo from "../../assets/images/person2.jpg";
import testiThree from "../../assets/images/person3.jpg";
import { capitaliseWord } from "../../utility/utils";

const TestimonialSlider = () => {
  const cards = [
    {
      id: "1",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiOne,
    },
    {
      id: "2",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiTwo,
    },
    {
      id: "3",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiThree,
    },
    {
      id: "4",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiOne,
    },
    {
      id: "5",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiThree,
    },
    {
      id: "6",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiTwo,
    },
    {
      id: "7",
      author: "john doe",
      testimony:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: testiOne,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);
  const [activeTestimonyId, setActiveTestimonyId] = useState(null);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(4);
      } else {
        setCardsPerSlide(1);
      }
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlide = Math.ceil(cards.length / cardsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlide) % totalSlide);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlide);
  };

  const handleClickTestimony = (id) => {
    setActiveTestimonyId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="flex justify-between items-center px-10 mt-8">
        <div className="text-[0.8rem] lg:text-[1.4rem] font-semibold">
          {currentIndex + 1}/{totalSlide}
        </div>
        <div>
          <p className="text-[1.2rem] lg:text-[2.4rem] font-semibold">
            What our clients say
          </p>
        </div>
        <div className="space-x-1 lg:space-x-4">
          <button onClick={handlePrev}>
            <TbCircleArrowLeft className="text-[20px] lg:text-[40px] cursor-pointer" />
          </button>
          <button onClick={handleNext}>
            <TbCircleArrowRightFilled className="text-[20px] lg:text-[40px] cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <div className="w-full overflow-hidden max-w-7xl flex justify-center items-center">
          <div
            className="w-full flex justify-between transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `100%`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${
                  cardsPerSlide === 4 ? "lg:w-1/4" : "w-full"
                } flex flex-shrink-0 p-4 justify-center items-center relative h-[500px]`}
              >
                <div className="absolute z-10 text-white bottom-7 text-lg font-semibold">
                  {capitaliseWord(card.author)}
                </div>
                <div
                  className={`absolute flex flex-col justify-center items-center bottom-8 w-full max-w-[80%] left-1/2 -translate-x-1/2 p-2 lg:p-4 text-justify  bg-white text-black rounded-xl transition-all duration-300 ease-in-out transform ${
                    activeTestimonyId == card.id
                      ? "translate-y-0 z-10"
                      : "translate-y-full z-0"
                  } `}
                >
                  <span className="text-[3.2rem] font-bold">"</span>
                  <p className="p-2">{card.testimony}</p>
                </div>
                <img
                  src={card.img}
                  alt="image"
                  className="h-full w-full rounded-xl relative brightness-50 object-fit"
                  onClick={() => handleClickTestimony(card.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
