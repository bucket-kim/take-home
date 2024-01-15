import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import Pages from "../Texts/Pages";
import Items from "../Items/Items";

const Experience = () => {
  return (
    <ScrollControls damping={0.1} pages={17}>
      <Items />
      <Pages />
    </ScrollControls>
  );
};

export default Experience;
