import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FAQSection from "../components/FAQs/FAQSection";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useDisclosure } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="p-6">
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div>
      {!isOpen && (
        <>
          <HeroSection />
          <FAQSection />
          <Footer />
        </>
      )}
      <SideBar isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Home;
