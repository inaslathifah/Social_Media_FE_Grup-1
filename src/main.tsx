import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/";
import "./styles/index.css";
import { TokenProvider } from "./utils/contexts/token";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TokenProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TokenProvider>
);
