import React from "react";
import { createRoot } from "react-dom/client";
// import "webflow/Webflowcomponent";
// import Body from "./Body";
import "./index.css";

const App = () => {
  return <div className="container">{/* <Body /> */}</div>;
};
const root = createRoot(document.getElementById("app") as Element);
root.render(<App />);
