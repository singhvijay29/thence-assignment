import React from "react";
import Accordion from "./Accordion";
import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../../lib/data";
import UnionSvg from "../Icons/UnionSvg";
import WhatsOnMind from "../Icons/WhatsOnMind";

const FAQSection = () => {
  const [expanded, setExpanded] = useState<number | false>(2);

  return (
    <div className="p-8">
      <div className="bg-[#E8EEE7] rounded-[40px] h-[749px] flex justify-between">
        <div className="self-end">
          <div className="pl-[96px] mb-[84px]">
            <WhatsOnMind />
            <div className="manrope-600 text-[60px] text-[#1C1C1C]">
              Ask Questions
            </div>
          </div>
          <UnionSvg />
        </div>
        <section className="flex h-auto flex-col sm:px-10 sm:pt-[30px] w-[581px] mt-[104px] pb-[74px]">
          <div className="relative h-full w-full divide-y divide-[#D7D7D7]">
            {faqs.map((faq, index) => (
              <Accordion
                key={faq.id}
                index={index}
                expanded={expanded}
                setExpanded={setExpanded}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQSection;
