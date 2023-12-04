import React from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  link?: string;
  text: string;
  option?: "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classname?: string;
  disabled?: boolean; // Add the disabled prop
}

const Button: React.FC<ButtonProps> = ({
  link,
  text,
  option,
  classname,
  disabled,
  onClick,
}) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button
            type={option}
            className={twMerge(
              `py-[10px] px-[18px] text-white bg-primary border border-primary rounded-lg color-slide w-full`,
              classname
            )}
            disabled={disabled}
          >
            <p className="text-base font-semibold">{text}</p>
          </button>
        </Link>
      ) : (
        <button
          type={option}
          onClick={onClick}
          className={twMerge(
            `py-[10px] px-[18px] rounded-lg w-full`,
            disabled
              ? "bg-[#B0B2BA] text-[#545969]"
              : "bg-primary border border-primary text-white color-slide",
            classname
          )}
          disabled={disabled}
        >
          <p>{text}</p>
        </button>
      )}
    </>
  );
};

export default Button;
