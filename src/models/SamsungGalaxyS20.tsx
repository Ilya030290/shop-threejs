/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
  }
  materials: {
    Bezel: THREE.MeshStandardMaterial;
    Antenna_Plastic: THREE.MeshStandardMaterial;
    Back_Cover_Glass: THREE.MeshStandardMaterial;
    Black_hole: THREE.MeshStandardMaterial;
    SAMSUNG_LOGO: THREE.MeshStandardMaterial;
    Usb_1: THREE.MeshStandardMaterial;
    Usb_2: THREE.MeshStandardMaterial;
    Display_ActiveArea: THREE.MeshStandardMaterial;
    Big_Cam_Glass: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Flash_Glass: THREE.MeshStandardMaterial;
    Front_Cam_Glass: THREE.MeshStandardMaterial;
    material_13: THREE.MeshStandardMaterial;
    Back_Cam_GlassCover_Black_Panel: THREE.MeshStandardMaterial;
    Cam_Glass: THREE.MeshStandardMaterial;
    Rearcase: THREE.MeshStandardMaterial;
  }
}

function SamsungGalaxyS20(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/galaxyS20/samsung_galaxy_s20.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.25}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Bezel} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Antenna_Plastic} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.Back_Cover_Glass} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.Black_hole} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.SAMSUNG_LOGO} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Object_18.geometry} material={materials.Display_ActiveArea} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.Big_Cam_Glass} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.material} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_28.geometry} material={materials.Front_Cam_Glass} />
          </group>
          <group position={[0, -1.9, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={0.25}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.material_13} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Object_32.geometry} material={materials.Back_Cam_GlassCover_Black_Panel} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Object_34.geometry} material={materials.Cam_Glass} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.Rearcase} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/galaxyS20/samsung_galaxy_s20.glb');

export default SamsungGalaxyS20;
