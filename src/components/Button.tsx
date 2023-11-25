import React from "react";
import { Link } from "react-scroll";

interface ButtonProps {
  link?: string;
  text: string;
  option?: "submit";
}

const Button: React.FC<ButtonProps> = ({ link, text, option }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button
            type={option}
            className="py-[10px] px-[18px] text-white bg-[#0334F2]  border border-[#0334F2] rounded-lg color-slide w-full"
          >
            <p>{text}</p>
          </button>
        </Link>
      ) : (
        <button
          type={option}
          className="py-[10px] px-[18px] text-white bg-[#0334F2] border border-[#0334F2] rounded-lg color-slide w-full"
        >
          <p>{text}</p>
        </button>
      )}
    </>
  );
};

export default Button;
