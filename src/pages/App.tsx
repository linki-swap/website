import ChainSelection from "../components/App/ChainSelection";

const App = () => {
  return (
    <section className="relative bg-[#E6E6E9] h-screen px-4 xl:px-[112px] sm:px-[64px] py-14 space-y-8 sm:space-y-16 max-w-[1500px] mx-auto">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
        <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full border-2 border-primary" />
        <p className="text-gray-950 max-md:max-w-[60px] text-sm sm:text-base font-semibold leading-normal">
          Enter exchange details
        </p>
        <div className="w-[24px] sm:w-[49px] h-px bg-neutral-400" />
        <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full border-2 border-neutral-400" />
        <p className="text-neutral-400 max-md:max-w-[60px] text-sm sm:text-base font-semibold leading-normal">
          Confirm exchange
        </p>
        <div className="w-[24px] sm:w-[49px] h-px bg-neutral-400" />
        <div className="w-4 h-4 sm:w-10 sm:h-10 rounded-full border-2 border-neutral-400" />
        <p className="text-neutral-400 max-md:max-w-[60px] text-sm sm:text-base font-semibold leading-normal">
          Complete exchange
        </p>
      </div>
      <div className="flex justify-center w-full">
        <ChainSelection />
      </div>
    </section>
  );
};

export default App;
