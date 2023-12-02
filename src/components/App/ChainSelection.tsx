import Dropdown from "./Dropdown";
import Button from "../Button";
import { coinData } from "../../data/coinData";
import transfer from "../../assets/icon/transfer.svg";

const ChainSelection = () => {
  return (
    <div className="flex max-lg:flex-col gap-y-8 justify-between gap-x-10 w-full">
      <div className="rounded-3xl lg:max-w-[631px] w-full bg-white p-6 sm:p-14">
        <div className="space-y-4">
          <h2 className="text-center text-gray-950 text-lg sm:text-[32px] font-medium sm:leading-10">
            Swap your coin
          </h2>
          <p className="text-center text-gray-950 text-sm sm:text-base font-normal leading-normal tracking-wide">
            Fill out the transaction form to start swapping your coin
          </p>
        </div>
        <div className="space-y-6 mb-[48px] mt-8">
          <div className="flex max-md:flex-col gap-y-4 justify-between gap-x-4">
            <div className="space-y-2">
              <div className="text-gray-950 text-sm font-medium leading-tight">
                From
              </div>
              <div className="justify-start border rounded-lg border-gray-400 flex items-center">
                <Dropdown options={coinData} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-gray-950 text-sm font-medium leading-tight">
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
            <img src={transfer} alt="transfer icon" className="w-10 h-10" />
          </div>
          <div className="flex max-md:flex-col gap-y-4 justify-between gap-x-4">
            <div className="space-y-2">
              <div className="text-gray-950 text-sm font-medium leading-tight">
                From
              </div>
              <div className="justify-start border  rounded-lg border-gray-400 flex items-center">
                <Dropdown options={coinData} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-gray-950 text-sm font-medium leading-tight">
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
        <div className="flex justify-center w-full">
          <Button text="Connect your wallet" link="/" classname="w-[326px]" />
        </div>
      </div>
      <div className="rounded-3xl h-max bg-white p-6 sm:p-14 space-y-4">
        <h2 className="text-gray-950 text-lg sm:text-2xl font-medium leading-loose">
          Transaction journey
        </h2>
        <div className="w-full h-px bg-zinc-300" />
        <p className="w-[308px] text-gray-950 text-sm sm:text-base font-normal leading-normal tracking-wide">
          Complete transaction form to see the process
        </p>
      </div>
    </div>
  );
};

export default ChainSelection;
