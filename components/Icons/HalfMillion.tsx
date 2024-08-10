import React from "react";

const HalfMillion = () => {
  return (
    <div className="pr-6 pl-5 pt-[20px] md:pr-[32px] md:pl-[36px] md:pt-[34px] pb-6 w-[180px] md:w-[290.49px] md:h-[239px] border-[1.18px] border-[#3D3D3D] rounded-[28.36px] bg-[#002E18] flex flex-col gap-2 md:gap-5 shadow-2xl hover:shadow-xl transform transition duration-[300ms] ease-in-out hover:scale-105 hover:bg-[#004029]">
      <div className="flex md:h-[76px] items-end gap-1 md:gap-[11px]">
        <div className="text-[40px] md:text-[63.37px] text-[#FFFFFF] switzer-500 font-semibold">
          $0.5
        </div>
        <div className="leading-[31.94px] text-[#A6A3A0] text-[16px] md:text-[22.81px] uppercase mb-2 md:mb-5">
          million
        </div>
      </div>
      <div className="manrope-500 text-10 md:text-[18px] leading-[13.4px] md:leading-[23.4px] text-[#CCCCCC]">
        Reduced client expenses by saving on hiring and employee costs.
      </div>
    </div>
  );
};

export default HalfMillion;
