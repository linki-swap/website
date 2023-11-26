import Dropdown from "./Dropdown";
import Button from "../Button";
import { coinData } from "../../data/coinData";
import scan from "../../assets/icon/scan.svg";

const ChainSelection = () => {
  return (
    <div className="space-y-6 w-full max-w-[612px]">
      <h2 className="text-gray-950 text-lg sm:text-[26px] font-semibold sm:leading-[39px] sm:tracking-wide">
        Fill the transaction details
      </h2>
      <div className="rounded-3xl bg-white p-6 sm:p-14">
        <div className="relative flex flex-col items-end">
          <div
            id="left"
            className={`rotate-45 w-[3px] rounded-e-lg bg-black duration-300 transform transition-transform h-6`}
          ></div>
          <div
            id="right"
            className={`-rotate-45 w-[3px] absolute top-0 bg-black duration-300 transform transition-transform h-6`}
          ></div>
        </div>
        <div className="space-y-6 mb-[48px]">
          <div className="space-y-[6px]">
            <div className="text-gray-950 mt-8 text-sm font-medium leading-tight">
              You send
            </div>
            <div>
              <Dropdown options={coinData} />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-neutral-400 text-[10px] font-semibold leading-[15px] tracking-tight">
              No hidden fees
            </p>
            <p className="text-neutral-400 text-[10px] font-semibold leading-[15px] tracking-tight">
              Estimated rate: 1 ETH ≈ 21.232 DOGE
            </p>
          </div>
          <div className="space-y-[6px]">
            <div className="text-gray-950 mt-8 text-sm font-medium leading-tight">
              You receive
            </div>
            <div>
              <Dropdown options={coinData} />
            </div>
          </div>
          <div className="space-y-[6px]">
            <div className="text-gray-950 mt-8 text-sm font-medium leading-tight">
              You receive
            </div>
            <div className="relative focus-within:border-black focus-within:border-2 px-[14px] py-[10px] space-x-[14px] text-left rounded-lg w-full border border-gray-950 justify-between flex items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="0x1aBcDeFgH12iJ3KlmNoPqRs4tU5vWxYzAaBcDeFgH"
                  className="w-full focus-visible:outline-none"
                />
              </div>
              <button className="hover:opacity-70">
                <img src={scan} alt="scan" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Button text="Exchange" link="/" classname="w-[326px]" />
        </div>
      </div>
    </div>
  );
};

export default ChainSelection;
