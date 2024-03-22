import ReactDOM from "react-dom/client";
import App from "./routes/";
import "./styles/index.css";
import { TokenProvider } from "./utils/contexts/token";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TokenProvider>
    <App />
    <Toaster />
  </TokenProvider>
);
