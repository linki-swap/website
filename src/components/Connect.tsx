import Currency from "./Currency";
import Button from "./Button";
import AnimateWords from "../config/textAnimation";

const Connect = () => {
  return (
    <section className="relative px-4 xl:px-[112px] sm:px-[64px] py-16 sm:py-24 space-y-8 sm:space-y-16 max-w-[1500px] mx-auto">
      <div className="space-y-6 max-w-[768px] mx-auto w-full text-center">
        <div className="space-y-3">
          <p className="text-blue-700 text-sm sm:text-base font-semibold leading-[21px] sm:leading-normal tracking-tight">
            Integrations
          </p>
          <h1 className="text-white text-3xl sm:text-[38px] font-semibold font leading-9 sm:leading-[44px]">
            <AnimateWords text="Seamlessly Connect Your Ecosystem" />
          </h1>
        </div>
        <p className="text-center text-gray-400 text-base sm:text-lg font-normal font-['Inter'] sm:leading-[27px] leading-normal tracking-tight sm:tracking-wide">
          Our platform is engineered to integrate effortlessly with a wide range
          of blockchain networks, DeFi applications, and services.
        </p>
      </div>
      <Currency />
      <div className="flex flex-col items-center">
        <div className="w-fit">
          <Button text="View all integrations" link="#" />
        </div>
      </div>
    </section>
  );
};

export default Connect;
