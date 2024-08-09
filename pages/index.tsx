import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FAQSection from "../components/FAQs/FAQSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="p-6 ">
        <Navbar />
      </div>
      <HeroSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
