import { useState, useEffect } from "react";

import Dropdown from "./Dropdown";
import Button from "../Button";
import { coinData } from "../../data/coinData";
import transfer from "../../assets/icon/transfer.svg";
import transferLight from "../../assets/icon/transferLight.svg";
import bg from "../../assets/color.svg";

const ChainSelection = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
    }
  }, [isHome]);

  return (
    <div className="">
      <div
        className={`relative overflow-hidden rounded-3xl lg:max-w-[631px] w-full p-6 sm:p-141 ${
          isHome ? "bg-[#000516]" : "bg-white"
        }`}
      >
        <div className=" relative z-50 space-y-4">
          <h2
            className={`text-center text-lg sm:text-[32px] font-medium sm:leading-10 ${
              isHome ? "text-white" : "text-gray-950"
            }`}
          >
            Swap your coin
          </h2>
          <p
            className={`text-center text-sm sm:text-base font-normal leading-normal tracking-wide ${
              isHome ? "text-white" : "text-gray-950"
            }`}
          >
            Fill out the transaction form to start swapping your coin
          </p>
        </div>
        <div className="space-y-6 relative z-50 mb-[48px] mt-8">
          <div className="flex max-md:flex-col gap-y-4 justify-between gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                From
              </div>
              <div className="justify-start border rounded-lg border-gray-400 flex items-center">
                <Dropdown options={coinData} />
              </div>
            </div>
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                You will pay
              </div>
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown options={coinData} />
                </div>
                <div className="w-[35%]">
                  <input
                    type="number"
                    name="figure"
                    placeholder="Amount"
                    className="p-[6px] w-full bg-transparent text-gray-950 max-sm:focus-visible:outline-none"
                    id="figure"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={isHome ? transferLight : transfer}
              alt="transfer icon"
              className="w-10 h-10"
            />
          </div>
          <div className="flex max-md:flex-col gap-y-4 justify-between gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                From
              </div>
              <div className="justify-start border  rounded-lg border-gray-400 flex items-center">
                <Dropdown options={coinData} />
              </div>
            </div>
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                You will receive
              </div>
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown options={coinData} />
                </div>
                <div className="w-[35%]">
                  <input
                    type="number"
                    name="figure"
                    placeholder="Amount"
                    className="p-[6px] w-full bg-transparent text-gray-950 max-sm:focus-visible:outline-none"
                    id="figure"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  relative z-50 justify-center w-full">
          <Button text="Connect your wallet" link="/" classname="w-[326px]" />
        </div>
        {isHome && (
          <img
            src={bg}
            alt="bg-colo"
            className="h-full w-auto absolute top-0 left-0"
          />
        )}
      </div>
    </div>
  );
};

export default ChainSelection;
