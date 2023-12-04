import { slideAnimation } from "../config/motion";
import { motion } from "framer-motion";

import ChainSelection from "./App/ChainSelection";

const Hero = () => {
  return (
    <section className="relative">
      <div className="bg-[url('../assets/pattern.png')] bg-no-repeat bg-left bg-cover px-4 xl:px-[112px] sm:px-[64px] pt-[64.5px] py-[145px] max-w-[1500px] mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="space-y-8 sm:space-y-16">
            <div className="max-w-[1044px] w-full space-y-6">
              <h1 className="text-center text-white text-3xl sm:text-[58px] font-semibold leading-9 tracking-wide sm:leading-[87px]">
                Exchange Your Assets Across Blockchains!
              </h1>
              <motion.p
                {...slideAnimation("left")}
                className="text-center text-gray-400 text-base sm:text-lg font-normal leading-[27px] tracking-tight sm:tracking-wide"
              >
                Experience a seamless, secure, and fast solution for moving
                assets between blockchains. Our Cross-Chain Asset Bridge is
                redefining decentralized finance. Subscribe to our newsletter
                now to stay updated on our journey!
              </motion.p>
            </div>
            <motion.div
              {...slideAnimation("up")}
              className="flex justify-center"
            >
              <ChainSelection />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
