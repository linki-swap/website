import Header from "../Header";
import { Outlet } from "react-router";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
