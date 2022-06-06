import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootHtml = document.getElementById("root");
const root = ReactDOM.createRoot(rootHtml);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
