import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Openmarket from "./Openmarket";

const App = () => (
  <div className="container">
    <Openmarket />
  </div>
);
// ReactDOM.render(<App />, document.getElementById("app"));
const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);
