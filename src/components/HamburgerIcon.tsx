import React from "react";

interface InputProps {
  isOpen: boolean;
}
const HamburgerIcon: React.FC<InputProps> = ({ isOpen }) => {
  const listStyles =
    "h-[3px] bg-[#0334F2] duration-300 transform transition-transform w-7";

  return (
    <div className="relative flex flex-col items-end">
      <div id="left" className={`${listStyles} ${isOpen && "rotate-45"}`}></div>
      <div
        id="hide"
        className={`${listStyles} mt-[6px] ${isOpen && "hidden"}`}
      ></div>
      <div
        id="right"
        className={`${listStyles} ${
          isOpen ? "-rotate-45 absolute top-0" : "mt-[6px]"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
