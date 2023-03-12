import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
