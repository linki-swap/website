import React from "react";
import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/animation.css";
import { BrowserRouter } from "react-router-dom";

import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            checkInstallationImmediately: false,
            dappMetadata: {
              name: "Demo React App",
              url: window.location.host,
            },
          }}
        >
          <App />
        </MetaMaskProvider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
