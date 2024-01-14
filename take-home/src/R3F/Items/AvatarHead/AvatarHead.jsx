import * as THREE from "three";
import React, { memo, useMemo, useRef } from "react";
import { SoftShadows, useGLTF, useTexture } from "@react-three/drei";

const AvatarHead = (props) => {
  const { nodes } = useGLTF("/models/head.glb");

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

  return (
    <group {...props} dispose={null}>
      <mesh
        name="eggy_head"
        castShadow
        receiveShadow
        geometry={nodes.eggy_head.geometry}
        material={AvatarMaterial}
        position={[0, 1.1233639717, 0.0418835282]}
        userData={{ name: "eggy_head" }}
        frustumCulled={true}
      />
      <mesh
        name="hat"
        castShadow
        receiveShadow
        geometry={nodes.hat.geometry}
        material={AvatarMaterial}
        position={[0, 1.1233639717, 0.0418835282]}
        userData={{ name: "hat" }}
        frustumCulled={false}
      />

      <mesh
        name="hair"
        castShadow
        receiveShadow
        geometry={nodes.hair.geometry}
        material={AvatarMaterial}
        position={[0, 1.1233639717, 0.0418835282]}
        userData={{ name: "hair" }}
        frustumCulled={true}
      />
      <mesh
        position={[0, 1, 0]}
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
