import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headContainerAnimation } from "../../config/motion";
import { plus, minus } from "../../assets/icon";
import { fadeAnimation } from "../../config/motion";

interface faqItem {
  question: string;
  answer: string;
  index: number;
}

const FAQ: React.FC<faqItem> = ({ index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="pt-6 border-t border-solid border-primary">
      <div
        className="flex items-center justify-between mb-2 text-base font-medium tracking-normal cursor-pointer sm:text-lg font-inter"
        onClick={toggleOpen}
      >
        <motion.div
          {...headContainerAnimation()}
          className="text-white text-base sm:text-[26px] font-semibold leading-normal sm:leading-[39px] tracking-tight sm:tracking-wide"
        >
          {question}
        </motion.div>
        <AnimatePresence>
          {isOpen ? (
            <motion.img
              {...fadeAnimation}
              src={minus}
              alt="icon"
              className="w-6 ms-6"
            />
          ) : (
            <motion.img
              {...fadeAnimation}
              src={plus}
              alt="icon"
              className="w-6 ms-6"
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-gray-200 text-base font-normal leading-normal tracking-tight sm:text-lg sm:leading-[27px] sm:tracking-wide"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
