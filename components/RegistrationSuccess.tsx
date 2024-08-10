import React from "react";
import SuccessIcon from "./Icons/SuccessIcon";
import SuccessSubmitted from "./Icons/SuccessSubmitted";

const RegistrationSuccess = ({ countDown }: any) => {
  return (
    <div className="w-[718px] mx-auto flex flex-col items-center relative h-full">
      <div className="mb-[41px]">
        <SuccessIcon />
      </div>
      <div className="mb-4">
        <SuccessSubmitted />
      </div>
      <h3 className="text-32 md:text-[56px] manrope-600 text-[#1C1C1C] leading-[67.2px] mb-5">
        Congratulations
      </h3>
      <div className="Manrope-500 text-16 md:text-[27px] leading-[35.1px] text-[#727272] text-center px-6">
        Your request has been successfully submitted to us. We will validate
        your information and reach out to your shortly with updates
      </div>
      <div className="Manrope-400 text-16 md:text-[20px] text-[#727272] fixed bottom-[42px] px-6">
        Redirecting you to Homepage in{" "}
        <span className="manrope-600 text-[#1C1C1C] w-full">
          {countDown} Seconds
        </span>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
