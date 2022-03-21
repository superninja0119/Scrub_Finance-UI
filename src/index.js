import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
