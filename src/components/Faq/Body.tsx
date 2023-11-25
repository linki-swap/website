import FAQ from "./FAQ";
import AnimateWords from "../../config/textAnimation";
import { faqData } from "../../data/faqData";

import design from "../../assets/Chain.webp";

const Body = () => {
  return (
    <section className={`relative`} id="faq">
      <div className="px-4 relative z-10 sm:max-lg:px-[64px] w-full lg:w-3/5 py-16 lg:py-24 space-y-8 sm:space-y-16 max-w-[1500px] mx-auto">
        <div className="space-y-5 text-center">
          <h1 className="text-white text-3xl sm:text-[38px] font-semibold leading-9 sm:leading-[44px]">
            <AnimateWords text="Frequently asked questions" />
          </h1>
          <p className="text-gray-200 text-base font-normal leading-normal tracking-tight sm:text-lg sm:leading-[27px] sm:tracking-wide">
            We answered questions so you don't have to ask them.
          </p>
        </div>
        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <FAQ
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
      <div className="w-full absolute -top-24 sm:-top-40 opacity-30">
        <img src={design} alt="decoration" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Body;
