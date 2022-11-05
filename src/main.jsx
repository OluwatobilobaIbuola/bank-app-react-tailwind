import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EventValuesContext } from "./context/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventValuesContext>
      <App />
    </EventValuesContext>
  </React.StrictMode>
);
