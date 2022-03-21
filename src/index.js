import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./context/CartContext.js";
import { LoadingContextProvider } from "./context/LoadingContext.js";
import { PaginationContextProvider } from "./context/PaginationContext.js";

ReactDOM.render(
  <React.StrictMode>
    <LoadingContextProvider>
      <CartContextProvider>
        <PaginationContextProvider>
          <App />
        </PaginationContextProvider>
      </CartContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
