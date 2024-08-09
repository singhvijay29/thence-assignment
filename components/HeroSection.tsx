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
      fortyPercent.style.transform = `translateY(${scrollPosition * 0.075}px)`;
    }
    if (tenDays) {
      tenDays.style.transform = `translateY(${scrollPosition * 0.075}px)`;
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
    <div className="py-[79px] pr-[64px] xLarge:pr-[145px] pl-[62px] mx-auto w-full relative mt-[80px]">
      <Image
        src={"/grid_bg.avif"}
        height={572}
        width={500}
        alt=""
        className="absolute right-0 top-[300px]"
      />
      <div className="w-fit mx-auto flex flex-col gap-4 justify-center items-center">
        <SuccessStories />
        <div className="mx-auto text-center manrope-600 text-[#1C1C1C] text-[56px]">
          Every success journey <br />
          we’ve encountered.
        </div>
      </div>
      <div className="w-full mt-[112px] flex flex-col deskTop:flex-row">
        <div className="h-[596px] w-[728px] relative mx-auto deskTop:mx-0 self-start">
          <Image
            src={"/hero_section_girl.avif"}
            height={572}
            width={500}
            alt=""
            className="absolute z-[1] top-0 right-[74px]"
          />
          <div className="absolute top-[0px] left-[-46px] z-[2] fortyPercent">
            <FortyPercent />
          </div>
          <div className="absolute bottom-[80px] left-[54px] z-[2] tenDays">
            <TenDays />
          </div>
          <div className="absolute bottom-[0px] right-[-40px] z-[2] halfMillion">
            <HalfMillion />
          </div>
        </div>
        <div className="max-w-[400px] mx-auto deskTop:mx-0 relative mt-[38px] pl-[84px]">
          <div className="w-[398px]">
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
              onSwiper={(swiper) => {
                console.log("Initial index:", swiper.activeIndex);
              }}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              {textCarousalText?.map((el, i) => (
                <SwiperSlide key={i}>
                  <div
                    key={i}
                    className="manrope-600 text-[40px] text-[#1C1C1C] bg-white"
                  >
                    {el?.text}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center gap-3 mt-[54px]">
            {textCarousalText?.map((el, i) => (
              <div
                key={i}
                style={{
                  background: currentIndex === i ? "#2DA950" : "#E4E3E3",
                }}
                className="h-[10.75px] w-[10.75px] rounded-full"
              ></div>
            ))}
          </div>

          <button className="rounded-[100px] bg-neutral-950 flex gap-[8px] items-center justify-center w-[245px] h-[88px] group no-splash mt-[124px] hover:bg-opacity-85 transition duration-400">
            <p className="manrope-600 text-20 text-[#FFFFFF]">Explore more</p>
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
