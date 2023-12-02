interface MenuItems {
  key: number;
  name: string;
  where: string;
}

export const menuItems: MenuItems[] = [
  {
    key: 1,
    name: "Home",
    where: "/",
  },
  {
    key: 2,
    name: "Developers",
    where: "developers",
  },
  {
    key: 3,
    name: "Coin Swap",
    where: "/coinswap",
  },
  {
    key: 4,
    name: "Blog",
    where: "#",
  },
  {
    key: 5,
    name: "FAQ",
    where: "faq",
  },
];
