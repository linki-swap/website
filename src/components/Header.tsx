import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  motion,
  useMotionValue,
  useSpring,
  MotionValue,
  useAnimation,
} from "framer-motion";

import HamburgerIcon from "./HamburgerIcon";
import logo from "../assets/logo.svg";
import { menuItems } from "../data/menuItems";
import Button from "./Button";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuHeight: MotionValue<number> = useMotionValue(0);
  const menuSpring = useSpring(menuHeight, { stiffness: 200, damping: 25 });

  const handleNavClick = () => {
    setNavOpen(!navOpen);
    menuHeight.set(navOpen ? 0 : 380 || 0);
    setIsAnimating(!isAnimating);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isAnimating) {
      controls.start({
        opacity: 1,
        x: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        x: "-100%",
      });
    }
  }, [controls, isAnimating]);

  return (
    <header
      className={`w-full z-20 relative border-b border-fuchsia-700 border-opacity-40`}
    >
      <nav>
        <div className="flex justify-between lg:justify-between py-6 items-center px-4 xl:px-[112px] sm:px-[64px] font-poppins mx-auto max-w-[1500px]">
          <Link
            to={"/"}
            onClick={() => {
              setNavOpen(false);
              menuHeight.set(navOpen ? 0 : 0);
              setIsAnimating(false);
              setAnimationKey((prevKey) => prevKey + 1);
              window.location.pathname === "/" && scrollToTop();
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="relative h-[16px] xmd:max-xl:h-[16px] sm:h-5 cursor-pointer z-40"
            />
          </Link>
          {/* Menu */}
          <div className="items-center justify-between hidden menu lg:flex">
            <div>
              <ul className="flex space-x-10 lg:space-x-6 wideScreen:space-x-[61px] xl:space-x-[30px]">
                {menuItems.map((item) => (
                  <li
                    key={item.key}
                    className="text-base font-semibold leading-normal text-[#0334F2] transition-all cursor-pointer font-Inter hover:scale-105"
                  >
                    {item.name === "Blog" ? (
                      <a href={item.where}>{item.name}</a>
                    ) : (
                      <Link to={item.where} smooth={true} duration={500}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <Button text="Register" link="/register" />
          </div>
          {/* Mobile Menu */}
          <div
            className="z-40 cursor-pointer lg:hidden"
            onClick={handleNavClick}
          >
            <div className="mobile-icon">
              <HamburgerIcon isOpen={navOpen} />
            </div>
          </div>
        </div>

        {/* Tab menu */}
        <motion.div
          className="relative overflow-hidden"
          style={{ height: menuSpring }}
          ref={menuRef}
        >
          <ul className="text-left px-7 sm:px-[62px] font-poppins pb-36 pt-4">
            {menuItems.map((item) => (
              <motion.li
                key={`${item.key}-${animationKey}`}
                initial={{ opacity: 0, x: "-100%" }}
                animate={isAnimating ? controls : undefined}
                style={{ transitionDelay: `${item.key * 100}ms` }}
                className={`hover:scale-105 ${
                  !navOpen && "hidden"
                } border-[#0334F2] font-semibold leading-normal cursor-pointer text-[#0334F2] font-Inter hover:scale-105 border-opacity-20 py-3 border-dashed border-b-2 text-2xl transform transition-all ease-in-out duration-500`}
              >
                <span>
                  {item.name === "Blog" ? (
                    <a href={item.where}>{item.name}</a>
                  ) : (
                    <Link
                      to={item.where}
                      smooth={true}
                      duration={500}
                      onClick={() => {
                        setTimeout(() => {
                          setNavOpen(false);
                          menuHeight.set(navOpen ? 0 : 0);
                          setIsAnimating(false);
                          setAnimationKey((prevKey) => prevKey + 1);
                        }, 2000);
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </span>
              </motion.li>
            ))}
          </ul>
          <div className="absolute w-full bottom-10 px-4 sm:px-[64px]">
            <Button text="Register" link="/register" />
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
