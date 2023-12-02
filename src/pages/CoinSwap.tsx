import ChainSelection from "../components/App/ChainSelection";

const CoinSwap = () => {
  return (
    <section className="relative bg-[#E6E6E9] h-full sm:h-screen">
      <div className="flex justify-center w-full px-4 xl:px-[112px] sm:px-[64px] py-14 max-w-[1500px] mx-auto">
        <ChainSelection />
      </div>
    </section>
  );
};

export default CoinSwap;
