import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import GlobalStyles from "./lib/styles/GlobalStyles";

const rootElement = document.getElementById("root");

if (rootElement !== null && rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </BrowserRouter>,
    rootElement
  );
}
