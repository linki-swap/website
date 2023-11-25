import { TeamItems } from "../data/teamMembers";
import { twitter, instagram, linkedin } from "../assets/socials";

import AnimateWords from "../config/textAnimation";
import { motion } from "framer-motion";
import { zoomAnimation } from "../config/motion";

const Team = () => {
  return (
    <section
      className="relative px-4 xl:px-[112px] sm:px-[64px] py-16 lg:py-24 space-y-8 sm:space-y-16 max-w-[1500px] mx-auto"
      id="developers"
    >
      <div className="space-y-4 text-center sm:space-y-6 max-w-[768px] w-full mx-auto">
        <h1 className="text-white text-[38px] font-semibold leading-[44px] max-sm:text-3xl max-sm:leading-9">
          <AnimateWords text="Meet Our Team" />
        </h1>
        <p className="text-gray-200 text-lg font-normal leading-[27px] tracking-wide max-sm:text-base max-sm:leading-normal max-sm:tracking-tight">
          At the heart of our mission to revolutionize the crypto trading
          experience is our dedicated and passionate team of experts. With
          diverse backgrounds and a shared vision for innovation, we work
          tirelessly to make your crypto journey seamless and secure.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[50px] gap-y-8 align-top">
        {TeamItems.map((item, index) => (
          <motion.div {...zoomAnimation()} key={index} className="space-y-2">
            <div className="relative cursor-pointer group bg-violet-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-w-[274px]"
              />
              <div className="absolute font-Inter top-0 bottom-0 left-0 right-0 z-10 w-full h-full p-4 transition-opacity duration-300 ease-in-out bg-gray-200 bg-opacity-60 opacity-0 group-hover:opacity-100">
                <p className="text-sm font-normal leading-[21px] tracking-tight text-slate-950">
                  {item.about}
                </p>
                <div className="absolute bottom-[5.5px] right-4">
                  <div className="flex justify-end gap-x-4">
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform scale-100 hover:scale-125 transition-transform"
                    >
                      <img
                        src={twitter}
                        alt="twitter"
                        className="w-[17.50px] h-[17.50px]"
                      />
                    </a>
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform scale-100 hover:scale-125 transition-transform"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-[17.50px] h-[17.50px]"
                      />
                    </a>
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform scale-100 hover:scale-125 transition-transform"
                    >
                      <img
                        src={instagram}
                        alt="instagram"
                        className="w-[17.50px] h-[17.50px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white text-lg font-semibold leading-[27px] tracking-wide">
              {item.name}
            </p>
            <p className="text-white text-lg font-semibold leading-[27px] tracking-wide">
              {item.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
