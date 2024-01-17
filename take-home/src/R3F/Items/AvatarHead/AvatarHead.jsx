import * as THREE from "three";
import React, { memo, useEffect, useMemo, useRef } from "react";
import { SoftShadows, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

const AvatarHead = (props) => {
  const { nodes } = useGLTF("/models/head.glb");

  const { width: w, height: h } = useThree((state) => state.viewport);

  const avatarMap = useTexture("/textures/head_BaseColor.png");
  const avatarMatMap = useTexture("/textures/head_Metallic.png");
  const avatarRoughMap = useTexture("/textures/head_Roughness.png");

  avatarMap.flipY = false;
  avatarMatMap.flipY = false;
  avatarRoughMap.flipY = false;

  avatarMap.colorSpace = THREE.SRGBColorSpace;

  const AvatarMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: avatarMap,
      metalnessMap: avatarMatMap,
      roughnessMap: avatarRoughMap,
    });
  }, []);

  const headRef = useRef();

  useEffect(() => {
    if (!headRef.current) return;
    gsap.to(headRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      delay: 2.5,
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    headRef.current.rotation.z = Math.sin(t * 2) * 0.05;
  });

  return (
    <group {...props} dispose={null}>
      <group ref={headRef} scale={0}>
        <mesh
          name="eggy_head"
          castShadow
          receiveShadow
          geometry={nodes.eggy_head.geometry}
          material={AvatarMaterial}
          userData={{ name: "eggy_head" }}
          frustumCulled={true}
        />
        <mesh
          name="hat"
          castShadow
          receiveShadow
          geometry={nodes.hat.geometry}
          material={AvatarMaterial}
          userData={{ name: "hat" }}
          frustumCulled={false}
        />

        <mesh
          name="hair"
          castShadow
          receiveShadow
          geometry={nodes.hair.geometry}
          material={AvatarMaterial}
          userData={{ name: "hair" }}
          frustumCulled={true}
        />
      </group>
      <mesh
        position={[0, -0.25, 0]}
        rotation={[-1.5, 0, 0]}
        scale={2}
        receiveShadow
        castShadow
      >
        <planeGeometry />
        <shadowMaterial opacity={0.2} />
      </mesh>
    </group>
  );
};

export default memo(AvatarHead);

useGLTF.preload("/models/head.glb");
