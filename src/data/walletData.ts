import {
  wallet1,
  wallet2,
  wallet3,
  wallet4,
  wallet5,
} from "../assets/icon/wallet";
interface walletData {
  icon: string;
  name: string;
}

export const walletData: walletData[] = [
  {
    icon: wallet1,
    name: "Metamask",
  },
  {
    icon: wallet2,
    name: "WalletConnect",
  },
  {
    icon: wallet3,
    name: "Coinbase",
  },
  {
    icon: wallet4,
    name: "Fortmatic",
  },
  {
    icon: wallet5,
    name: "Portis",
  },
];
