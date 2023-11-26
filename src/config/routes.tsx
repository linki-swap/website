import { RouteObject, useRoutes } from "react-router";
import { SharedLayout } from "../components/layout/SharedLayout";
import ScrollToTop from "../components/ScrollToTop";

import Home from "../pages/Home";
import App from "../pages/App";

export function Routes() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <>
          <SharedLayout />
          <ScrollToTop />
        </>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/app", element: <App /> },
      ],
    },
  ];
  return useRoutes(routes);
}
