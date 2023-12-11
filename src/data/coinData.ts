import coinImages from "../assets/coins";

interface coinData {
  icon: string;
  name: string;
  tag: string;
}

export const coinData: coinData[] = [
  {
    icon: coinImages["link"],
    name: "LINK",
    tag: "LINK",
  },
  {
    icon: coinImages["usdc"],
    name: "USDC",
    tag: "USDC",
  },
];
