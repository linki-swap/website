import one from "./01.png";
import two from "./etherium.png";
import three from "./03.png";
import four from "./04.png";
import five from "./05.png";
import six from "./06.png";
import seven from "./07.png";
import eight from "./08.png";
import nine from "./09.png";
import ten from "./10.png";

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
};

export default coinImages;
