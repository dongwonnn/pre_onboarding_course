import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./lib/styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById("root")
);
