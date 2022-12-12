/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    cam_mt_1: THREE.Mesh;
    Rearcase_1: THREE.Mesh;
    Antenna_Plastic_1: THREE.Mesh;
    SAMSUNG_LOGO_1: THREE.Mesh;
    usb_1_1: THREE.Mesh;
    usb_2_1: THREE.Mesh;
    usb_siver_1: THREE.Mesh;
    Cam_1: THREE.Mesh;
    cam_mt2_1: THREE.Mesh;
    cam_mt4_1: THREE.Mesh;
    Flash_1: THREE.Mesh;
    Flash_Glass_1: THREE.Mesh;
    Bezel_1: THREE.Mesh;
    black_hole_1: THREE.Mesh;
    Display_ActiveArea_1: THREE.Mesh;
    BackCover_Glass_1: THREE.Mesh;
    BackCover_Glass_2_1: THREE.Mesh;
    cam_mt3_1: THREE.Mesh;
    Cam_Glass_1: THREE.Mesh;
  }
  materials: {
    Cam_mt: THREE.MeshStandardMaterial;
    Rearcase: THREE.MeshStandardMaterial;
    Antenna_Plastic: THREE.MeshStandardMaterial;
    SAMSUNG_LOGO: THREE.MeshStandardMaterial;
    Usb_1: THREE.MeshStandardMaterial;
    Usb_2: THREE.MeshStandardMaterial;
    Black_hole: THREE.MeshStandardMaterial;
    Cam_001: THREE.MeshStandardMaterial;
    cam_mt2: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Flash_Glass: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    Display_ActiveArea: THREE.MeshStandardMaterial;
    Back_Cover_Glass: THREE.MeshStandardMaterial;
    Back_Cover_Glass_2: THREE.MeshStandardMaterial;
    Cam_Glass: THREE.MeshStandardMaterial;
  }
}

function SamsungGalaxyS21(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/galaxyS21/samsung-galaxy-s21-bluetm.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.25}>
            <mesh geometry={nodes.cam_mt_1.geometry} material={materials.Cam_mt} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Rearcase_1.geometry} material={materials.Rearcase} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Antenna_Plastic_1.geometry} material={materials.Antenna_Plastic} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.SAMSUNG_LOGO_1.geometry} material={materials.SAMSUNG_LOGO} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.usb_1_1.geometry} material={materials.Usb_1} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.usb_2_1.geometry} material={materials.Usb_2} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.usb_siver_1.geometry} material={materials.Black_hole} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Cam_1.geometry} material={materials.Cam_001} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.cam_mt2_1.geometry} material={materials.cam_mt2} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.cam_mt4_1.geometry} material={materials.cam_mt2} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Flash_1.geometry} material={materials.Flash} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Flash_Glass_1.geometry} material={materials.Flash_Glass} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Bezel_1.geometry} material={materials.Bezel} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.black_hole_1.geometry} material={materials.Black_hole} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Display_ActiveArea_1.geometry} material={materials.Display_ActiveArea} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.BackCover_Glass_1.geometry} material={materials.Back_Cover_Glass} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.BackCover_Glass_2_1.geometry} material={materials.Back_Cover_Glass_2} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.cam_mt3_1.geometry} material={materials.cam_mt2} />
          </group>
          <group scale={0.25}>
            <mesh geometry={nodes.Cam_Glass_1.geometry} material={materials.Cam_Glass} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/galaxyS21/samsung-galaxy-s21-bluetm.glb');

export default SamsungGalaxyS21;
