import ChainSelection from "../components/App/ChainSelection";
import state from "../store";
import { useSnapshot } from "valtio";

import logo from "../assets/Frame 93.svg";
import congrats from "../assets/congrats.svg";

import transfer from "../assets/icon/transfer.svg";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const CoinSwap = () => {
  const snap = useSnapshot(state);
  return (
    <section className="relative bg-[#E6E6E9] h-full sm:h-screen">
      <div className="flex max-lg:flex-col gap-y-8 justify-center gap-x-10 w-full px-4 xl:px-[112px] sm:px-[64px] py-14 max-w-[1500px] mx-auto">
        {snap.success ? (
          <div className="rounded-3xl h-max bg-white p-6 sm:p-14 flex justify-center flex-col items-center">
            <img
              src={congrats}
              alt="success image"
              className="h-28 w-auto mb-8"
            />
            <div className="space-y-4 mb-12">
              <h2 className="text-center text-gray-950 text-lg sm:text-[32px] font-medium leading-10">
                Congratulations
              </h2>
              <p className="text-center text-gray-950 text-sm sm:text-base font-normal leading-normal tracking-wide">
                Your coins have been swapped,
                <br />
                check your wallet to see your{" "}
                <span>{snap.receiveCoin?.name}</span>
              </p>
            </div>
            <div className="flex max-md:flex-col gap-y-6 justify-center gap-x-6">
              <NavLink to="/">
                <button
                  className={`py-[10px] px-[18px] text-primary bg-transparent border-transparent border hover:border-primary rounded-lg w-full`}
                >
                  <p className="text-base font-semibold">Go back home</p>
                </button>
              </NavLink>
              <Button link="/" text="Transaction history" />
            </div>
          </div>
        ) : (
          <>
            <ChainSelection />
            <div className="rounded-3xl h-max bg-white p-6 sm:p-14 space-y-4">
              <h2 className="text-gray-950 text-lg sm:text-2xl font-medium leading-loose">
                Summary
              </h2>
              <div className="w-full h-px bg-zinc-300" />
              {snap.processing ? (
                <div className="space-y-8">
                  <div className="flex justify-start gap-x-4">
                    <img
                      src={snap.payCoin?.icon}
                      alt={snap.payCoin?.name}
                      className="w-12 h-12"
                    />
                    <div>
                      <h2 className="text-gray-950 text-lg sm:text-2xl font-medium leading-loose">
                        {snap.payCoin?.name}
                      </h2>
                      <p className="text-gray-400 text-[11px] font-semibold leading-none tracking-wide">
                        ETH
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={transfer}
                      alt="transfer icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex justify-start gap-x-4">
                    <img src={logo} alt="LinkiSwap log" className="w-12 h-12" />
                    <div>
                      <h2 className="text-gray-950 text-lg sm:text-2xl font-medium leading-loose">
                        LinkiSwap
                      </h2>
                    </div>
                  </div>
                  <div>
                    <img
                      src={transfer}
                      alt="transfer icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex justify-start gap-x-4">
                    <img
                      src={snap.receiveCoin?.icon}
                      alt={snap.receiveCoin?.name}
                      className="w-12 h-12"
                    />
                    <div>
                      <h2 className="text-gray-950 text-lg sm:text-2xl font-medium leading-loose">
                        {snap.receiveCoin?.name}
                      </h2>
                      <p className="text-gray-400 text-[11px] font-semibold leading-none tracking-wide">
                        BSC
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="w-[308px] text-gray-950 text-sm sm:text-base font-normal leading-normal tracking-wide">
                  Complete transaction form to see the process
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CoinSwap;
