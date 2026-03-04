import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { gsap } from "gsap";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);