import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import { MoviesApp } from "./MoviesApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/challenge-nosis">
      <MoviesApp />
    </BrowserRouter>
  </React.StrictMode>
);
