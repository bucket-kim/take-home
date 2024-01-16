import { Html, Scroll, useScroll } from "@react-three/drei";
import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Pages.css";
import Page from "./Page";
import PagesData from "./PagesData";

const Pages = () => {
  return (
    <Fragment>
      <Scroll html style={{ width: "100%" }}>
        {PagesData.map((data, index) => (
          <Page
            h1={data.h1}
            h2={data.h2}
            key={index}
            x={data.tX}
            y={data.tY}
            width={data.width}
            size={data.size}
            p={data.p}
          />
        ))}
      </Scroll>
    </Fragment>
  );
};

export default Pages;
