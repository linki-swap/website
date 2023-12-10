import { useState, useEffect } from "react";
import { useSDK } from "@metamask/sdk-react";

import { motion } from "framer-motion";
import { fadeAnimation } from "../../config/motion";

import Dropdown, { Option } from "./Dropdown";
import Button from "../Button";
import { coinData } from "../../data/coinData";
import transfer from "../../assets/icon/transfer.svg";
// import transferLight from "../../assets/icon/transferLight.svg";
import bg from "../../assets/color.svg";
import { walletData } from "../../data/walletData";
import x from "../../assets/icon/x.svg";

import axios from "axios";

import state from "../../store";
interface WalletItem {
  name: string;
  icon: string;
}

const ChainSelection = () => {
  const [account, setAccount] = useState<string | undefined>();
  const { sdk, connected, chainId } = useSDK();

  const [conversionResult, setConversionResult] = useState<number | undefined>(
    undefined
  );

  const connectMetamask = async () => {
    try {
      const result = await sdk?.connect();

      if (result != null) {
        const accounts = result as string[]; // Type assertion
        setAccount(accounts[0]);
      } else {
        // Handle the case when result is null or undefined
      }
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  const [isHome, setIsHome] = useState(false);
  const swapClick = () => (state.success = true);
  const connectClick = () => setIsOpen(true);
  const [onClick, setOnclick] = useState(() => connectClick);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Connect your wallet");
  const [pay, setPay] = useState<number | undefined>(undefined);
  const [selectedOptions, setSelectedOptions] = useState({
    fromPay: null as Option | null,
    payCoin: null as Option | null,
    fromReceive: null as Option | null,
    receiveCoin: null as Option | null,
  });

  useEffect(() => {
    const endpoint = "live";
    const accessKey = import.meta.env.VITE_ACCESS_KEY;

    const fetchData = async () => {
      try {
        const receiveCoinCode = selectedOptions.receiveCoin?.tag;
        const payCoinCode = selectedOptions.payCoin?.tag;

        if (
          pay === undefined ||
          receiveCoinCode === undefined ||
          receiveCoinCode === null ||
          payCoinCode === undefined ||
          payCoinCode === null
        )
          return;
        const response = await axios.get(
          `http://api.coinlayer.com/api/${endpoint}?access_key=${accessKey}&from=${selectedOptions.payCoin?.tag}&to=${selectedOptions.receiveCoin?.tag}&amount=${pay}`
        );

        const exchangeRates = response.data.rates;
        let receiveRate: number | undefined;
        let payRate: number | undefined;
        let result: number | undefined;

        if (receiveCoinCode !== undefined && receiveCoinCode !== null) {
          receiveRate = exchangeRates?.[receiveCoinCode];
        }
        if (payCoinCode !== undefined && payCoinCode !== null) {
          payRate = exchangeRates?.[payCoinCode];
        }

        if (
          receiveRate !== undefined &&
          payRate !== undefined &&
          pay !== undefined
        ) {
          // Perform the conversion
          result = (payRate / receiveRate) * pay;

          // Update state with the result if needed
          setConversionResult(result);
        } else {
          console.error("Insufficient data for conversion");
        }
      } catch (error) {
        console.error("Error fetching conversion:", error);
      }
    };

    fetchData();
  }, [pay, selectedOptions]);

  const isButtonDisabled =
    !pay ||
    !selectedOptions.fromPay ||
    !selectedOptions.payCoin ||
    !selectedOptions.fromReceive ||
    !selectedOptions.receiveCoin;

  const connect = (item: WalletItem) => {
    if (item.name === "Metamask") {
      connectMetamask();
    }
    setText("Swap coin");
    setIsOpen(false);
    setOnclick(() => swapClick);
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
                    onClick={() => connect(item)}
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
          <div className="flex sm:items-end max-md:flex-col gap-y-4 justify-start gap-x-4">
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
                  text="Select network"
                  onOptionSelect={(option) =>
                    setSelectedOptions({ ...selectedOptions, fromPay: option })
                  }
                />
              </div>
            </div>
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown
                    options={coinData}
                    text="Select token"
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
                    value={pay === undefined ? "" : pay.toString()}
                    onChange={(e) =>
                      setPay(
                        e.target.value !== ""
                          ? parseFloat(e.target.value)
                          : undefined
                      )
                    }
                    className={`p-[6px] w-full bg-transparent ${
                      isHome ? "text-white" : "text-gray-950"
                    } focus-visible:outline-none`}
                    id="figure"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={transfer} alt="transfer icon" className="w-10 h-10" />
          </div>
          <div className="flex sm:items-end max-md:flex-col gap-y-4 justify-start gap-x-4">
            <div className="space-y-2">
              <div
                className={`text-sm font-medium leading-tight ${
                  isHome ? "text-white" : "text-gray-950"
                }`}
              >
                To
              </div>
              <div className="justify-start border  rounded-lg border-gray-400 flex items-center">
                <Dropdown
                  options={coinData}
                  text="Select network"
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
              <div className="flex items-center justify-start rounded-lg border border-gray-400">
                <div className="border-r-gray-400 border-r flex-2">
                  <Dropdown
                    options={coinData}
                    text="Select token"
                    onOptionSelect={(option) => {
                      setSelectedOptions({
                        ...selectedOptions,
                        receiveCoin: option,
                      });
                    }}
                  />
                </div>
                <div
                  className={`p-[6px] w-full bg-transparent ${
                    isHome ? "text-white" : "text-gray-950"
                  }`}
                >
                  {conversionResult}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative z-30 justify-center w-full">
          <Button
            text={text}
            classname="max-w-[326px]"
            onClick={onClick}
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
        {connected && (
          <div>
            <>
              {chainId && `Connected chain: ${chainId}`}
              <p></p>
              {account && `Connected account: ${account}`}
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChainSelection;
