import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { BrowserRouter } from "react-router-dom";
import MenuProvider from "./store/menu-context";

ReactDOM.render(
  <AuthContextProvider>
    <MenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
