import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensure the root element exists
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);