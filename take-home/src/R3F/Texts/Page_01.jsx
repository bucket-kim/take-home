import React, { memo } from "react";
import "./Page_01.css";

const Page_01 = () => {
  return (
    <div className="page01">
      <div className="text">
        <h1>This is the story of</h1>
        <h1>BRIAN KIM</h1>
      </div>
    </div>
  );
};

export default memo(Page_01);
