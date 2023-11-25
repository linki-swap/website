import { featuresData } from "../data/features";
import stack from "../assets/stack.svg";
import AnimateWords from "../config/textAnimation";

import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";

const Features = () => {
  return (
    <section className="relative px-4 xl:px-[112px] sm:px-[64px] py-16 sm:py-24 space-y-8 sm:space-y-16 max-w-[1500px] mx-auto">
      <div className="space-y-6 max-w-[768px]">
        <div className="space-y-3">
          <p className="text-blue-700 text-sm sm:text-base font-semibold leading-[21px] sm:leading-normal tracking-tight">
            Key features
          </p>
          <h1 className="text-white text-3xl sm:text-[38px] font-semibold font leading-9 sm:leading-[44px]">
            <AnimateWords text="Features of Our Cross-Chain Asset Bridge" />
          </h1>
        </div>
        <p className="text-gray-400 text-base sm:text-lg font-normal font-['Inter'] sm:leading-[27px] leading-normal tracking-tight sm:tracking-wide">
          Our platform is engineered to integrate effortlessly with a wide range
          of blockchain networks, DeFi applications, and services.
        </p>
      </div>
      <div className="lg:flex max-lg:space-y-16 max-sm:space-y-8 lg:justify-between lg:items-center lg:gap-16">
        <div className="lg:max-w-[517px] space-y-6 sm:space-y-10 max-h-[670px] overflow-y-scroll editScroll pl-6">
          {featuresData.map((faq, index) => (
            <motion.div
              {...slideAnimation("right")}
              key={index}
              className="space-y-2"
            >
              <h2 className="text-white text-base sm:text-[26px] font-semibold sm:leading-[39px] sm:tracking-wide leading-normal tracking-tight">
                {faq.feature}
              </h2>
              <p className="text-gray-200 text-sm sm:text-base font-normal leading-[21px] sm:leading-normal tracking-tight">
                {faq.about}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div {...slideAnimation("up")}>
          <img src={stack} alt="Digital world" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
