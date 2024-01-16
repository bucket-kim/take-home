import React, { useRef, useState } from "react";
import Crayon from "./Crayon";
import { Float } from "@react-three/drei";
import gsap from "gsap";

const Crayons = (props) => {
  const crayon01Ref = useRef(null);
  const crayon02Ref = useRef(null);
  const crayon03Ref = useRef(null);
  const crayon04Ref = useRef(null);

  const [crayon01Click, setCrayon01Click] = useState(false);
  const [crayon02Click, setCrayon02Click] = useState(false);
  const [crayon03Click, setCrayon03Click] = useState(false);
  const [crayon04Click, setCrayon04Click] = useState(false);

  const crayon001Handle = () => {
    if (!crayon01Ref.current) return;
    setCrayon01Click((prev) => !prev);
    gsap.to(crayon01Ref.current.position, {
      x: crayon01Click ? 1 : 0,
      y: 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
    gsap.to(crayon01Ref.current.rotation, {
      x: 0,
      y: crayon01Click ? Math.PI : 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
  };
  const crayon002Handle = () => {
    if (!crayon02Ref.current) return;
    setCrayon02Click((prev) => !prev);
    gsap.to(crayon02Ref.current.position, {
      x: crayon02Click ? 1 : 0,
      y: 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
    gsap.to(crayon02Ref.current.rotation, {
      x: 0,
      y: crayon02Click ? Math.PI : 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
  };
  const crayon003Handle = () => {
    if (!crayon03Ref.current) return;
    setCrayon03Click((prev) => !prev);
    gsap.to(crayon03Ref.current.position, {
      x: crayon03Click ? -1 : 0,
      y: 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
    gsap.to(crayon03Ref.current.rotation, {
      x: 0,
      y: crayon03Click ? -Math.PI : 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
  };
  const crayon004Handle = () => {
    if (!crayon04Ref.current) return;
    setCrayon04Click((prev) => !prev);
    gsap.to(crayon04Ref.current.position, {
      x: crayon04Click ? 1 : 0,
      y: 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
    gsap.to(crayon04Ref.current.rotation, {
      x: 0,
      y: crayon04Click ? Math.PI : 0,
      z: 0,
      overwrite: true,
      ease: "power1.out",
    });
  };

  return (
    <group {...props} dispose={null}>
      <Float>
        <group rotation={[0, 0, -0.5]} position={[4, 2, 0]} scale={1.5}>
          <Crayon
            handleDown={crayon001Handle}
            ref={crayon01Ref}
            texture={"/textures/crayonTexture/crayon_BaseColor.webp"}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
          />
        </group>
      </Float>
      <Float>
        <group position={[1, 0, 0]} scale={1.5} rotation={[0, 0, 0.2]}>
          <Crayon
            handleDown={crayon002Handle}
            ref={crayon02Ref}
            texture={"/textures/crayonTexture/crayon_yellow_BaseColor.png"}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
          />
        </group>
      </Float>

      <Float>
        <group position={[-3, -1.5, 0]} scale={1.5} rotation={[0, 0, -1]}>
          <Crayon
            handleDown={crayon003Handle}
            ref={crayon03Ref}
            texture={"/textures/crayonTexture/crayon_green_BaseColor.png"}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
          />
        </group>
      </Float>
      <Float>
        <group scale={1.5} rotation={[0, 0, 0.1]} position={[-1, -4, 0]}>
          <Crayon
            handleDown={crayon004Handle}
            ref={crayon04Ref}
            texture={"/textures/crayonTexture/crayon_blue_BaseColor.png"}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
          />
        </group>
      </Float>
    </group>
  );
};

export default Crayons;
