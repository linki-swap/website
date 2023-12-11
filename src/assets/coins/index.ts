import one from "./01.png";
import two from "./ethereum.png";
import three from "./03.png";
import four from "./04.png";
import five from "./05.png";
import six from "./06.png";
import seven from "./07.png";
import eight from "./08.png";
import nine from "./09.png";
import ten from "./10.png";
import ethereum from "./ethereum.png";
import avalanche from "./avalanche.png";
import base from "./base.png";
import bnb from "./bnb.png";
import optimism from "./optimism.png";
import polygon from "./polygon.png";
import link from "./link.png";
import usdc from "./usdc.png"


interface CoinImages {
  [key: string]: string;
}

const coinImages: CoinImages = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
  10: ten,
  // for compatibility
  ethereum: ethereum,
  avalanche: avalanche,
  base: base,
  bnb: bnb,
  optimism: optimism,
  polygon: polygon,
  usdc: usdc,
  link: link,
};

export default coinImages;
