import React, { useState, useEffect } from "react";
import NavbarLogo from "./Icons/NavbarLogo";
import HamburgerIcon from "./Icons/HamburgerIcon";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = ({ onOpen, isOpen, onClose }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function menuBtnFunction(menuBtn: HTMLElement) {
    isOpen ? onClose() : onOpen();
    menuBtn.classList.toggle("active");
  }

  return (
    <>
      <div
        className={`border-[1px] border-[#EAEAEA] rounded-[65.28px] py-4 pl-6 md:pl-[52px] pr-5 flex items-center justify-between md:h-[111.17px] fixed top-6 left-6 right-6 z-[99] transition duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-[20px]"
            : "bg-white bg-opacity-50 backdrop-blur-[20px]"
        }`}
      >
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <NavbarLogo />
        </button>

        <div className="hidden md:flex items-center gap-4 ">
          <button className="border-[1.31px] border-[#EAEAEA] rounded-[107.06px] w-[189.56px] h-[77.22px] manrope-500 bg-white text-[18px] hover:bg-[#F1F1F1] transition duration-400">
            Get projects
          </button>
          <button className="border-[1.31px] border-[#EAEAEA] rounded-[107.06px]  w-[223.39px] h-[77.22px] bg-[#1C1C1C] text-[#FFFFFF] text-[18px] hover:bg-[#4E4E4E] transition duration-400">
            Onboard Talent
          </button>
        </div>
        <div className="all-btn block md:hidden pr-2">
          <div
            className="menu-btn-1"
            onClick={(e) => menuBtnFunction(e.currentTarget)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
