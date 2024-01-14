import { Environment } from "@react-three/drei";
import React, { Fragment } from "react";

const Lighting = () => {
  return (
    <Fragment>
      <Environment preset="apartment" />
      <directionalLight position={[0, 4, 2]} intensity={2} castShadow />
    </Fragment>
  );
};

export default Lighting;
