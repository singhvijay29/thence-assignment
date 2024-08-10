import React, { useState, useEffect } from "react";
import SuccessStories from "./Icons/SuccessStories";
import Image from "next/image";
import FortyPercent from "./Icons/FortyPercent";
import TenDays from "./Icons/TenDays";
import HalfMillion from "./Icons/HalfMillion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import RightArrowIcon from "./Icons/RightArrowIcon";

const textCarousalText = [
  {
    id: 0,
    text: "Enhance fortune 50 company’s insights teams research capabilities",
  },
  {
    id: 1,
    text: "If unhappy with a project, communicate with the freelancer.",
  },
  {
    id: 2,
    text: "Considering mediation. Review policies, seek collaborative.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const fortyPercent = document.querySelector(".fortyPercent") as HTMLElement;
    const tenDays = document.querySelector(".tenDays") as HTMLElement;
    const halfMillion = document.querySelector(".halfMillion") as HTMLElement;

    if (fortyPercent) {
      fortyPercent.style.transform = `translateY(${scrollPosition * 0.15}px)`;
    }
    if (tenDays) {
      tenDays.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
    if (halfMillion) {
      halfMillion.style.transform = `translateY(${scrollPosition * 0.075}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-10 md:py-[79px] pr-6 md:pr-[64px] xLarge:pr-[145px] pl-6 md:pl-[62px] mx-auto w-full relative mt-[80px]">
      <Image
        src={"/grid_bg.avif"}
        height={572}
        width={500}
        alt=""
        className="absolute right-0 top-[300px]"
      />
      <div className="w-fit mx-auto flex flex-col gap-4 justify-center items-center">
        <SuccessStories />
        <div className="mx-auto text-center manrope-600 text-[#1C1C1C] text-[32px] md:text-[56px] leading-[47.2px] md:leading-[67.2px]">
          Every success journey <br />
          we’ve encountered.
        </div>
      </div>
      <div className="w-full mt-[60px] md:mt-[112px] flex flex-col deskTop:flex-row">
        <div className="h-[420px] md:h-[596px] w-full md:w-[728px] relative mx-auto deskTop:mx-0 self-start">
          <img
            src={"/hero_section_girl.avif"}
            alt=""
            className="absolute z-[1] top-0 left-0 md:left-auto right-0 md:right-[74px] object-left h-full w-full max-w-[500px] max-h-[572px] rounded-[24px] object-cover md:object-contain"
          />
          <div className="absolute top-[10px] md:top-[30px] left-[-18px] md:left-[26px] z-[2] fortyPercent">
            <FortyPercent />
          </div>
          <div className="absolute bottom-[80px] left-[-20px] md:bottom-[150px] md:left-[54px] z-[2] tenDays">
            <TenDays />
          </div>
          <div className="absolute bottom-[0px] md:bottom-[40px] right-[-18px] md:right-[0px] z-[2] halfMillion">
            <HalfMillion />
          </div>
        </div>
        <div className="max-w-[400px] mx-auto deskTop:mx-0 relative mt-[68px] deskTop:pl-[84px]">
          <div className="w-[335px] md:w-[398px]">
            <Swiper
              effect={"fade"}
              navigation={false}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper?.realIndex);
              }}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {textCarousalText?.map((el, i) => (
                <SwiperSlide key={i}>
                  <div
                    key={i}
                    className="manrope-600 text-24 md:text-[40px] text-[#1C1C1C] bg-white"
                  >
                    {el?.text}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center gap-3 mt-[32px] md:mt-[54px]">
            {textCarousalText?.map((el, i) => (
              <div
                key={i}
                style={{
                  background: currentIndex === i ? "#2DA950" : "#E4E3E3",
                }}
                className={`h-[10.75px] w-[10.75px] rounded-full ${
                  currentIndex === i
                    ? "bg-[#2DA950]"
                    : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
                }`}
              ></div>
            ))}
          </div>

          <button className="rounded-[100px] bg-neutral-950 flex gap-[8px] items-center justify-center w-[180px] h-[64px] md:w-[245px] md:h-[88px] group no-splash mt-[64px] md:mt-[124px] hover:bg-opacity-85 transition duration-400">
            <p className="manrope-600 text-16 md:text-20 text-[#FFFFFF]">
              Explore more
            </p>
            <div className="relative flex items-center h-[20px] w-[20px]">
              <div className="hidden deskTop:block bg-white opacity-0 group-hover:opacity-100 w-[2.5px] group-hover:w-[18px] transition-all duration-[200ms] h-[2.1px] rounded-l-full"></div>
              <span className="absolute fill-white deskTop:top-1/2 deskTop:left-1/4 deskTop:-translate-y-1/2 deskTop:-translate-x-1/4 deskTop:group-hover:left-full deskTop:group-hover:-translate-x-3/4 transition-all duration-[200ms]">
                <RightArrowIcon />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
