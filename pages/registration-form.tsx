import React, { useState } from "react";
import RegisterFormVector from "../components/Icons/RegisterFormVector";
import NavbarLogo from "../components/Icons/NavbarLogo";
import CrossIcon from "../components/Icons/CrossIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import InvalidIcon from "../components/Icons/InvalidIcon";
import RegistrationSuccess from "../components/RegistrationSuccess";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState<number>(5);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email address")
      .max(255),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async () => {
    setIsFormSubmitted(true);
    startCountdown(5);
  };

  function startCountdown(seconds: number) {
    let counter = seconds;

    const interval = setInterval(() => {
      counter--; // Decrement the counter
      setCountDown(counter); // Update the state with the new counter value

      if (counter <= 0) {
        router?.replace("/");
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFFFF]">
      <div className="fixed top-[32px] w-full flex items-center justify-between px-[52px]">
        <NavbarLogo />
        {!isFormSubmitted && (
          <button
            onClick={() => router?.replace("/")}
            className="hover:scale-110 transition duration-400"
          >
            <CrossIcon />
          </button>
        )}
      </div>
      {!isFormSubmitted ? (
        <div className="max-w-[588px] w-full relative">
          <div className="text-center mb-[62px] flex justify-center items-center flex-col">
            <RegisterFormVector />
            <h3 className="text-[56px] manrope-600 text-[#1C1C1C] leading-[67.2px]">
              Start your success Journey here!
            </h3>
          </div>

          <form className="px-[86px]" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              style={{
                border: "1px solid rgba(0, 0, 0, 0.02)",
              }}
              autoComplete="off"
              type="text"
              placeholder="Enter your name"
              className="h-[75px] rounded-[64px] w-full px-9 bg-[#EFEFEF] placeholder:text-[20px] outline-none leading-[27.32px] manrope-500 text-[20px] text-[#1C1C1C] focus-within:ring-[1px] focus-within:ring-[#537FF1]  hover:ring-[1px] hover:ring-[#537FF1] focus-within:bg-[#F5F8FF] transition duration-400"
            />
            {errors?.name && (
              <div className="flex items-center gap-[7px] text-[#FF0808] text-[16px] manrope-600 mt-3">
                <InvalidIcon />
                {errors?.name?.message}
              </div>
            )}
            <input
              {...register("email")}
              autoComplete="off"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.02)",
              }}
              type="text"
              placeholder="Enter your email"
              className="h-[75px] rounded-[64px] w-full px-9 bg-[#EFEFEF] placeholder:text-[20px] outline-none leading-[27.32px] manrope-500 text-[20px] text-[#1C1C1C] focus-within:ring-[1px] focus-within:ring-[#537FF1] hover:ring-[1px] hover:ring-[#537FF1] focus-within:bg-[#F5F8FF] transition duration-400 mt-6"
            />
            {errors?.email && (
              <div className="flex items-center gap-[7px] text-[#FF0808] text-[16px] manrope-600 mt-3">
                <InvalidIcon />
                {errors?.email?.message}
              </div>
            )}
            <button
              disabled={!isValid}
              type="submit"
              className="w-full h-[77.22px] bg-[#1C1C1C] rounded-[107.06px] text-[18px] manrope-600 text-[#FFFFFF] mt-[47px] disabled:bg-[#C9C9C9] disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <RegistrationSuccess countDown={countDown} />
      )}
    </div>
  );
};

export default RegistrationForm;
