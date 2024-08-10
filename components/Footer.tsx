import React from "react";

const Footer = () => {
  return (
    <div className="px-6 md:px-8 pb-5 md:pb-8 pt-3 md:pt-5">
      <div className="bg-[#F5F5F5] py-6 md:py-[60px] px-[48px] rounded-[24px] md:rounded-[40px] flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
        <div className="manrope-600 text-12 md:text-[18px] text-[#1C1C1C] flex items-center gap-[10px]">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7877 9.42773C15.913 7.97351 14.3195 7 12.5 7C9.73999 7 7.5 9.23999 7.5 12C7.5 14.76 9.73999 17 12.5 17C14.3195 17 15.913 16.0265 16.7877 14.5723L15.0729 13.5442C14.5483 14.4166 13.5927 15 12.5 15C10.8425 15 9.5 13.6575 9.5 12C9.5 10.3425 10.8425 9 12.5 9C13.593 9 14.5491 9.58386 15.0735 10.4568L16.7877 9.42773ZM22.5 12C22.5 6.47998 18.02 2 12.5 2C6.97998 2 2.5 6.47998 2.5 12C2.5 17.52 6.97998 22 12.5 22C18.02 22 22.5 17.52 22.5 12ZM4.5 12C4.5 7.57996 8.07996 4 12.5 4C16.92 4 20.5 7.57996 20.5 12C20.5 16.42 16.92 20 12.5 20C8.07996 20 4.5 16.42 4.5 12Z"
              fill="#1C1C1C"
            />
          </svg>
          Talup 2023. All rights reserved
        </div>
        <div className="manrope-400 text-10 md:text-[18px] text-[#1C1C1C] flex items-center gap-[52px]">
          <div className="underline cursor-pointer">Terms & Conditions</div>
          <div className="underline cursor-pointer">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
