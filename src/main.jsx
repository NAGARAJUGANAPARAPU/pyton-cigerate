import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TitleProvider } from "./TitleContext.jsx";
import Vender from "./pages/Vender.jsx";
import Reporting from "./pages/Reporting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <TitleProvider>
        <Vender />
        <Reporting />
      </TitleProvider> */}
    </BrowserRouter>
  </StrictMode>
);
