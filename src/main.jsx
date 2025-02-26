import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./components/pages/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
