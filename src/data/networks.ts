import coinImages from "../assets/coins";

interface networksData {
  icon: string;
  name: string;
  tag: string;
}

export const networksData: networksData[] = [
  {
    icon: coinImages["ethereum"],
    name: "Sepolia testnet",
    tag: "ETH",
  },
  {
    icon: coinImages["optimism"],
    name: "Optimism Goerli testnet",
    tag: "OP",
  },
  {
    icon: coinImages["polygon"],
    name: "Mumbai testnet",
    tag: "MATIC",
  },
  {
    icon: coinImages["avalanche"],
    name: "Avalanche",
    tag: "Avax",
  },
  {
    icon: coinImages["bnb"],
    name: "BNB Chain testnet",
    tag: "BNB",
  },
  {
    icon: coinImages["base"],
    name: "Base Goerli testnet",
    tag: "Base",
  },
];
