import React, { useState, useEffect } from "react";
// import dropdown from "../../assets/icon/chevron-down (1).svg";
import dropdown from "../../assets/icon/chevron-down.svg";
import dropdownLight from "../../assets/icon/chevron-down (1).svg";
import placeholder from "../../assets/3.svg";

export interface Option {
  name: string;
  icon: string;
}

interface DropdownProps {
  options: Option[];
  onOptionSelect: (option: Option) => void;
  text: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onOptionSelect,
  text,
}) => {
  const [isHome, setIsHome] = useState(false);
  const placeholderOption = { name: text, icon: placeholder };
  const [selectedOption, setSelectedOption] =
    useState<Option>(placeholderOption);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
    }
  });

  return (
    <div className="relative space-x-[14px] text-left w-max">
      <div className="relative px-2 py-[10px] sm:px-[14px]">
        <div>
          <button
            type="button"
            className="inline-flex justify-center items-center w-full gap-x-2"
            id="options-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex space-x-1 sm:space-x-2 justify-start items-center">
              <img
                src={selectedOption.icon}
                alt={selectedOption.name}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <div
                className={`text-sm sm:text-base font-normal leading-normal ${
                  selectedOption === placeholderOption
                    ? "text-gray-400"
                    : isHome
                    ? "text-white"
                    : "text-gray-950"
                }`}
              >
                {selectedOption.name}
              </div>
            </div>
            <img
              src={isHome ? dropdownLight : dropdown}
              alt="dropdown icon"
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-right z-10 max-h-[150px] coins overflow-y-scroll absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  <div className="flex space-x-1 sm:space-x-2 justify-start items-center">
                    <img
                      src={option.icon}
                      alt={option.name}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <div>{option.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
