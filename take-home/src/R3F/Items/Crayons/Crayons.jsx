import React from "react";
import Crayon from "./Crayon";

const Crayons = (props) => {
  return (
    <group {...props} dispose={null}>
      <Crayon
        texture={"/textures/crayonTexture/crayon_BaseColor.webp"}
        position={[2, 0, 0]}
      />
      <Crayon
        texture={"/textures/crayonTexture/crayon_yellow_BaseColor.png"}
        position={[1, 0, 0]}
      />
      <Crayon
        texture={"/textures/crayonTexture/crayon_green_BaseColor.png"}
        position={[-1, 0, 0]}
      />
      <Crayon
        texture={"/textures/crayonTexture/crayon_blue_BaseColor.png"}
        position={[-2, 0, 0]}
      />
    </group>
  );
};

export default Crayons;
