import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "../../config/motion";

import Dropdown, { Option } from "./Dropdown";
import Button from "../Button";
import { coinData } from "../../data/coinData";
import transfer from "../../assets/icon/transfer.svg";
import transferLight from "../../assets/icon/transferLight.svg";
import bg from "../../assets/color.svg";
import { walletData } from "../../data/walletData";
import x from "../../assets/icon/x.svg";

import state from "../../store";

const ChainSelection = () => {
  const [isHome, setIsHome] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Connect your wallet");
  const [pay, setPay] = useState("");
  const [receive, setReceive] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    fromPay: null as Option | null,
    payCoin: null as Option | null,
    fromReceive: null as Option | null,
    receiveCoin: null as Option | null,
  });

  const isButtonDisabled =
    !pay ||
    !receive ||
    !selectedOptions.fromPay ||
    !selectedOptions.payCoin ||
    !selectedOptions.fromReceive ||
    !selectedOptions.receiveCoin;

  const connect = () => {
    setText("Swap coin");
    setIsOpen(false);

    state.processing = true;
  };

  useEffect(() => {
    state.payCoin = selectedOptions.payCoin;
    state.receiveCoin = selectedOptions.receiveCoin;
  }, [selectedOptions]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHome(true);
    }
  }, [isHome]);

  return (
    <div className="relative">
      {isOpen && (
        <motion.div
          {...fadeAnimation}
          className="overflow-hidden max-xl:h-full max-h-max z-50 flex justify-center h-screen pt-[140px] md:pt-[176px] pb-[80px] max-md:px-7 w-screen fixed top-0 left-0 bottom-0 bg-opacity-40 bg-[#171717]"
        >
          <div className="bg-white w-full max-w-[631px] rounded-3xl overflow-scroll xl:overflow-hidden small h-full max-md:px-3 p-[56px] pt-[48px]">
            <div className="flex justify-end mb-8 sm:mb-2">
              <button onClick={() => setIsOpen(false)}>
                <img src={x} alt="close icon" className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-[40px]">
              <div className="space-y-4">
                <h1 className="text-center text-gray-950 text-lg sm:text-[32px] font-medium leading-10">
                  Connect your wallet
                </h1>
                <p className="text-center text-gray-950 text-base font-normal leading-normal tracking-wide">
                  Connect your wallet to continue swapping your coin
                </p>
              </div>
              <div className="space-y-3 flex justify-center flex-col items-center">
                {walletData.map((item, index) => (
                  <button
                    key={index}
                    onClick={connect}
                    className="max-w-[325px] w-full py-3 rounded-lg border border-gray-400 justify-center items-center gap-2 inline-flex"
                  >
                    <img className="w-6 h-6" src={item.icon} />
                    <p className="text-gray-950 text-sm sm:text-base font-semibold leading-normal">
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div
        className={`relative overflow-hidden rounded-3xl lg:max-w-[631px] w-full p-6 sm:p-141 ${
          isHome ? "bg-[#000516]" : "bg-white"
        }`}
      >
        <div className=" relative z-40 space-y-4">
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
        <div className="space-y-6 relative z-40 mb-[48px] mt-8">
          <div className="flex max-md:flex-col gap-y-4 justify-start gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                From
              </div>
              <div className="justify-start border rounded-lg border-gray-400 flex items-center">
                <Dropdown
                  options={coinData}
                  onOptionSelect={(option) =>
                    setSelectedOptions({ ...selectedOptions, fromPay: option })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                You will pay
              </div>
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown
                    options={coinData}
                    onOptionSelect={(option) => {
                      setSelectedOptions({
                        ...selectedOptions,
                        payCoin: option,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    name="figure"
                    placeholder="Amount"
                    value={pay}
                    onChange={(e) => setPay(e.target.value)}
                    className="p-[6px] w-full bg-transparent text-gray-950 focus-visible:outline-none"
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
          <div className="flex max-md:flex-col gap-y-4 justify-start gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                From
              </div>
              <div className="justify-start border  rounded-lg border-gray-400 flex items-center">
                <Dropdown
                  options={coinData}
                  onOptionSelect={(option) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      fromReceive: option,
                    })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                You will receive
              </div>
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown
                    options={coinData}
                    onOptionSelect={(option) => {
                      setSelectedOptions({
                        ...selectedOptions,
                        receiveCoin: option,
                      });
                    }}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="number"
                    name="figure"
                    placeholder="Amount"
                    value={receive}
                    onChange={(e) => setReceive(e.target.value)}
                    className="p-[6px] w-full bg-transparent text-gray-950 focus-visible:outline-none"
                    id="figure"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  relative z-30 justify-center w-full">
          <Button
            text={text}
            classname="w-[326px]"
            onClick={() => setIsOpen(true)}
            disabled={isButtonDisabled}
          />
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
