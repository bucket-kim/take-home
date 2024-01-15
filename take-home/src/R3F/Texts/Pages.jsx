import { Html, Scroll } from "@react-three/drei";
import React, { Fragment, useRef } from "react";
import Page_01 from "./Page_01";
import Page_02 from "./Page_02";
import Page_03 from "./Page_03";
import Page_04 from "./Page_04";
import Page_05 from "./Page_05";
import Page_06 from "./Page_06";
import Page_07 from "./Page_07";
import Page_08 from "./Page_08";
import Page_09 from "./Page_09";
import Page_10 from "./Page_10";
import Page_11 from "./Page_11";
import Page_12 from "./Page_12";
import Page_13 from "./Page_13";
import Page_15 from "./Page_15";
import Page_14 from "./Page_14";
import Page_16 from "./Page_16";
import Page_17 from "./Page_17";
import Page_18 from "./Page_18";
import Page_19 from "./Page_19";
import Page_20 from "./Page_20";

const Pages = () => {
  return (
    <Fragment>
      <Scroll html style={{ width: "100%", color: "black" }}>
        <Page_01 />
        <Page_02 />
        <Page_03 />
        <Page_04 />
        <Page_05 />
        <Page_06 />
        <Page_07 />
        <Page_08 />
        <Page_09 />
        <Page_10 />
        <Page_12 />
        <Page_14 />
        <Page_15 />
        <Page_17 />
        <Page_18 />
        <Page_19 />
        <Page_20 />
      </Scroll>
    </Fragment>
  );
};

export default Pages;
