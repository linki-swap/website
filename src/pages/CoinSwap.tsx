import ChainSelection from "../components/App/ChainSelection";
import state from "../store";
import { useSnapshot } from "valtio";

import logo from "../assets/Frame 93.svg";

import transfer from "../assets/icon/transfer.svg";

const CoinSwap = () => {
  const snap = useSnapshot(state);
  return (
    <section className="relative bg-[#E6E6E9] h-full sm:h-screen">
      <div className="flex max-lg:flex-col gap-y-8 justify-center gap-x-10 w-full px-4 xl:px-[112px] sm:px-[64px] py-14 max-w-[1500px] mx-auto">
        <ChainSelection />
        <div className="rounded-3xl h-max bg-white p-6 sm:p-14 space-y-4">
          <h2 className="text-gray-950 text-lg sm:text-2xl font-medium leading-loose">
            Transaction journey
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
                <img src={transfer} alt="transfer icon" className="w-6 h-6" />
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
                <img src={transfer} alt="transfer icon" className="w-6 h-6" />
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
      </div>
    </section>
  );
};

export default CoinSwap;
