import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import { menuItems } from "../data/menuItems";
import { footerItems } from "../data/footerLinks";

import Subscribe from "./Subscribe";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative px-4 xl:px-[112px] sm:px-[64px] py-16 lg:pt-24 lg:pb-12 space-y-4 sm:space-y-16 max-w-[1500px] mx-auto">
      <div className="space-y-16 sm:space-y-24">
        <div className="flex justify-between max-lg:flex-col max-lg:space-y-8 lg:space-x-16 max-lg:items-center max-lg:text-center">
          <div className="space-y-4">
            <h1 className="text-white text-[38px] font-semibold leading-[44px] max-sm:text-3xl max-sm:leading-9">
              Sign up to our newsletter
            </h1>
            <p className="text-gray-200 text-lg font-normal leading-[27px] tracking-wide max-sm:text-base max-sm:leading-normal max-sm:tracking-tight">
              Be the first to know about releases, industry news and insights.
            </p>
          </div>
          <Subscribe />
        </div>
        <div className="space-y-4 sm:space-y-8">
          <img src={logo} alt="logo" className="h-[15.08px] sm:h-[20.11px]" />
          <div className="flex justify-start space-x-8 text-base max-sm:text-sm font-semibold leading-normal max-sm:leading-[21px] max-sm:tracking-tight cursor-pointer text-neutral-400">
            <a onClick={scrollToTop} className="no-underline hover:underline">
              Home
            </a>
            {menuItems.map((item) => (
              <div key={item.key}>
                {item.name === "Blog" ? (
                  <a href={item.where} className="no-underline hover:underline">
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.where}
                    smooth={true}
                    duration={500}
                    className="no-underline hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4 sm:space-y-8">
        <div className="w-full h-px bg-[#0334F2]" />
        <div className="flex flex-wrap justify-between max-sm:flex-col max-sm:space-y-4 max-sm:items-center">
          <p className="text-gray-400 text-sm max-sm:text-[10px] font-normal leading-[21px] max-sm:leading-[15px] tracking-tight">
            © 2023 LinkiSwap. All rights reserved.
          </p>
          <div className="flex justify-end space-x-4">
            {footerItems.map((item) => (
              <p
                key={item.key}
                className="text-gray-400 text-sm max-sm:text-[10px] font-semibold leading-[21px] tracking-tight no-underline hover:underline"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
