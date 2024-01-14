import React, { Fragment, memo } from "react";
import "./Page_01.css";

const Page_01 = () => {
  return (
    <Fragment>
      <div className="page01">
        <div className="text">
          <h1>The Journey of </h1>
          <h1>Brian Kim</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Page_01);
