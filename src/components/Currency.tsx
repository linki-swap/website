import coinImages from "../assets/coins";
import empty from "../assets/coins/space.png";

const Currency = () => {
  const identifiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="relative sm:h-[73.64px] h-[55.23px]">
      <div className="text-animation comingSoon1">
        <div className="flex justify-start space-x-10 sm:space-x-[104px]">
          {identifiers.map((identifier) => (
            <img
              key={identifier}
              src={coinImages[identifier]}
              alt={`Coin ${identifier}`}
              className="sm:w-[73.64px] sm:h-[73.64px] w-[55.23px] h-[55.23px]"
            />
          ))}
          <img
            src={empty}
            alt="Coins"
            className="sm:w-[73.64px] sm:h-[73.64px] w-[55.23px] h-[55.23px]"
          />
        </div>
      </div>
      <div className="text-animation comingSoon2">
        <div className="flex justify-start space-x-10 sm:space-x-[104px]">
          {identifiers.map((identifier) => (
            <img
              key={identifier}
              src={coinImages[identifier]}
              alt={`Coin ${identifier}`}
              className="sm:w-[73.64px] sm:h-[73.64px] w-[55.23px] h-[55.23px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currency;
