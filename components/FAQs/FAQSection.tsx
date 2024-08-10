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
    <div className="p-6 md:p-8">
      <div className="bg-[#E8EEE7] rounded-[24px] md:rounded-[40px] h-fit deskTop:h-[749px] flex justify-between flex-col deskTop:flex-row overflow-hidden">
        <div className="deskTop:self-end mt-12 deskTop:mt-0">
          <div className="pl-6 deskTop:pl-[96px] mb-[48px] deskTop:mb-[84px]">
            <WhatsOnMind />

            <div className="manrope-600 text-32 md:text-48 deskTop:text-[60px] text-[#1C1C1C]">
              Ask Questions
            </div>
          </div>

          <div className="h-[160px] md:h-fit">
            <UnionSvg />
          </div>
        </div>
        <section className="flex h-auto flex-col px-6 md:px-10 sm:pt-[30px] deskTop:w-[581px] deskTop:mt-[104px] pb-[74px]">
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
