import ChainSelection from "../components/App/ChainSelection";

const CoinSwap = () => {
  return (
    <section className="relative bg-[#E6E6E9] h-full sm:h-screen">
      <div className="flex max-lg:flex-col gap-y-8 justify-between gap-x-10 w-full px-4 xl:px-[112px] sm:px-[64px] py-14 max-w-[1500px] mx-auto">
        <ChainSelection />
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
    </section>
  );
};

export default CoinSwap;
