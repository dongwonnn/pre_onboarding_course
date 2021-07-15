import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import GlobalStyles from "./lib/styles/GlobalStyles";
import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
