import React from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  link?: string;
  text: string;
  option?: "submit";
  classname?: string;
}
const Button: React.FC<ButtonProps> = ({ link, text, option, classname }) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button
            type={option}
            className={twMerge(
              `py-[10px]  px-[18px] text-white bg-primary border border-primary rounded-lg color-slide w-full`,
              classname
            )}
          >
            <p className="text-base font-semibold">{text}</p>
          </button>
        </Link>
      ) : (
        <button
          type={option}
          className="py-[10px] px-[18px] text-white bg-primaryorder border-primary rounded-lg color-slide w-full"
        >
          <p>{text}</p>
        </button>
      )}
    </>
  );
};

export default Button;
