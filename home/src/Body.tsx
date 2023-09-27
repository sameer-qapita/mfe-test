import React, { useState } from "react";
// import Openmarket from "openmarket/Openmarket";
// import Webflowcomponent from "webflow/Webflowcomponent";
import Header from "./Header";

const Body = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <Header />
      {/* <button onClick={() => setToggle(!toggle)}></button> */}
      {/* {toggle ? <Openmarket /> : <Webflowcomponent />} */}
      {/* <Openmarket /> */}
      {/* <Webflowcomponent /> */}
    </>
  );
};
export default Body;
