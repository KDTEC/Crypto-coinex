import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'react-alice-carousel/lib/alice-carousel.css';

import { BrowserRouter } from "react-router-dom";
import CryptoContext from "./CryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);


