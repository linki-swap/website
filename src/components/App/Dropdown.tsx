import React, { useState } from "react";
import dropdown from "../../assets/icon/chevron-down.svg";

interface Option {
  name: string;
  icon: string;
}

interface DropdownProps {
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative space-x-[14px] text-left rounded-lg w-full border border-gray-950 justify-start flex items-center">
      <div className="border-r-gray-950 relative border-r px-2 sm:py-[10px] sm:px-[14px]">
        <div>
          <button
            type="button"
            className="inline-flex justify-center items-center w-full gap-x-2 text-sm sm:text-base font-normal leading-normal text-gray-950"
            id="options-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex space-x-1 sm:space-x-2 justify-start items-center">
              <img
                src={selectedOption.icon}
                alt={selectedOption.name}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <div>{selectedOption.name}</div>
            </div>
            <img
              src={dropdown}
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
      <div className="w-[60%] sm:w-[66%]">
        <input
          type="number"
          name="figure"
          placeholder="232"
          className="p-[6px] max-sm:focus-visible:outline-none w-full"
          id="figure"
        />
      </div>
    </div>
  );
};

export default Dropdown;