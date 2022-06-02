import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { AppContextProvider } from "./Redux/AppContextProvider";
import { store } from "./Redux/store";

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider store={store}>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
