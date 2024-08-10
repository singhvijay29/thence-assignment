import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const SideBar = ({ isOpen, onClose }: any) => {
  const router = useRouter();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent height={"100vh"} background={"#E8EEE7"}>
        <DrawerBody>
          <div className="flex items-center flex-col gap-4 mt-[160px] px-6">
            <button
              onClick={() => router?.push("/registration-form")}
              className="border-[1.31px] border-[#EAEAEA] rounded-[107.06px] w-full h-[77.22px] manrope-500 bg-white text-[18px] hover:bg-[#F1F1F1] transition duration-400"
            >
              Get projects
            </button>
            <button className="border-[1.31px] border-[#EAEAEA] rounded-[107.06px] w-full h-[77.22px] bg-[#1C1C1C] text-[#FFFFFF] text-[18px] hover:bg-[#4E4E4E] transition duration-400">
              Onboard Talent
            </button>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideBar;
