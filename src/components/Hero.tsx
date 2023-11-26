import { useState, useEffect } from "react";
import line1 from "../assets/Vector 1.svg";
import line2 from "../assets/Vector 2.svg";
import line3 from "../assets/Vector 3.svg";
import arrow from "../assets/arrow-right.svg";
import arrowBlue from "../assets/arrow-right-blue.svg";
import Subscribe from "./Subscribe";

import { slideAnimation } from "../config/motion";
import { motion } from "framer-motion";

const Hero = () => {
  const [shouldShake, setShouldShake] = useState(true);

  useEffect(() => {
    setShouldShake(true);

    const shakeTimeout = setTimeout(() => {
      setShouldShake(false);
    }, 1000);

    return () => clearTimeout(shakeTimeout);
  }, []);
  return (
    <section className="relative">
      <div className="bg-[url('../assets/pattern.png')] bg-no-repeat bg-left bg-cover px-4 xl:px-[112px] sm:px-[64px] py-[145px] max-w-[1500px] mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <a
            href="#"
            className="relative pl-1 pr-2.5 py-1 bg-primary rounded-2xl justify-start items-center gap-2 flex group"
          >
            <div className="px-2 py-0.5 bg-violet-100 rounded-2xl transition-transform group-hover:translate-x-[156%] duration-300 ease-in-out flex justify-start gap-1">
              <div className="text-center text-primary text-xs font-medium leading-[18px]">
                What’s new
              </div>
              <img
                src={arrowBlue}
                className="w-4 h-4 hidden group-hover:block"
                alt="arrow icon"
              />
            </div>
            <div className="flex justify-start gap-1 transition-transform duration-300 ease-in-out group-hover:-translate-x-[71%]">
              <div className="text-white text-xs font-medium leading-[18px]">
                Check out our latest blog
              </div>
              <img
                src={arrow}
                className="w-4 h-4 group-hover:hidden"
                alt="arrow icon"
              />
            </div>
          </a>
          <div className="space-y-8 sm:space-y-16">
            <div className="max-w-[684px] w-full space-y-6">
              <h1 className="text-center text-white text-3xl sm:text-[46px] font-semibold leading-9 sm:leading-[54px]">
                <span className="relative group">
                  Tokenize
                  <img
                    className={`absolute group-hover:animate-shake inline-block bottom-0 left-0 w-full ${
                      shouldShake ? "animate-shake" : ""
                    }`}
                    src={line1}
                    alt="line art"
                  />
                </span>
                ,
                <span className="relative group">
                  Transfer
                  <img
                    className={`absolute group-hover:animate-shake inline-block bottom-0 left-0 w-full ${
                      shouldShake ? "animate-shake" : ""
                    }`}
                    src={line2}
                    alt="line art"
                  />
                </span>
                <span>, and </span>
                <span className="relative group">
                  Transform
                  <img
                    className={`absolute group-hover:animate-shake inline-block -bottom-2 left-0 w-full ${
                      shouldShake ? "animate-shake" : ""
                    }`}
                    src={line3}
                    alt="line art"
                  />
                </span>
                <span> Your Assets Across Blockchains!</span>
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
              <Subscribe />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
