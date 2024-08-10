import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

interface AccordionProps {
  index: number;
  expanded: number | false;
  setExpanded: (index: number | false) => void;
  question: string;
  answer: string;
}

export default function Accordion({
  index,
  expanded,
  setExpanded,
  question,
  answer,
}: AccordionProps) {
  const isOpen = index === expanded;
  return (
    <motion.section
      initial={false}
      onClick={() => setExpanded(isOpen ? false : index)}
      className={cn(
        "flex cursor-pointer flex-col py-4",
        index === 0 && "pt-3 sm:pt-4"
      )}
    >
      <motion.h2
        className={cn(
          "transition-all duration-300 bg-right bg-no-repeat py-2 text-16 md:text-[20px] manrope-600 flex justify-between items-center"
        )}
      >
        <div className="w-[80%]">{question}</div>
        {!isOpen ? <PlusIcon /> : <MinusIcon />}
      </motion.h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapse"
            animate="open"
            exit="collapse"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapse: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className=""
          >
            <motion.div className="pb-2 pt-4 text-12 md:text-[15px] manrope-400 text-[#617275]">
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
