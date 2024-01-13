import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import Page_01 from "../Texts/Page_01";
import Page_02 from "../Texts/Page_02";
import Page_03 from "../Texts/Page_03";
import Page_04 from "../Texts/Page_04";
import Page_05 from "../Texts/Page_05";
import Page_06 from "../Texts/Page_06";

const Experience = () => {
  return (
    <ScrollControls damping={0.1} pages={6}>
      <Scroll html style={{ width: "100%" }}>
        <Page_01 />
        <Page_02 />
        <Page_03 />
        <Page_04 />
        <Page_05 />
        <Page_06 />
      </Scroll>
    </ScrollControls>
  );
};

export default Experience;
