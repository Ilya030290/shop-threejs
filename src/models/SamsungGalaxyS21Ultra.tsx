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
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
  }
  materials: {
    Usb_2: THREE.MeshStandardMaterial;
    Usb_1: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Rearcase: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    cam_mt: THREE.MeshStandardMaterial;
    BackCamDeco2: THREE.MeshStandardMaterial;
    Cam_Glass: THREE.MeshStandardMaterial;
    Back_Cover_Glass: THREE.MeshStandardMaterial;
    Flash_Cam_Glass: THREE.MeshStandardMaterial;
    Display_ActiveArea: THREE.MeshStandardMaterial;
    SAMSUNG_LOGO: THREE.MeshStandardMaterial;
    BackCamDeco: THREE.MeshStandardMaterial;
    Antenna_Plastic: THREE.MeshStandardMaterial;
    black_hole: THREE.MeshStandardMaterial;
  }
}

function SamsungGalaxyS21Ultra(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/galaxyS21Ultra/samsung_galaxy_s21_ultra_phantom_titanium.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Usb_2} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Usb_1} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.material} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.material} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Flash} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.material} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_16.geometry} material={materials.Rearcase} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_18.geometry} material={materials.Rearcase} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.Bezel} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.cam_mt} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.BackCamDeco2} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_26.geometry} material={materials.Cam_Glass} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_28.geometry} material={materials.Back_Cover_Glass} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.Flash_Cam_Glass} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_32.geometry} material={materials.Display_ActiveArea} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_34.geometry} material={materials.SAMSUNG_LOGO} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_36.geometry} material={materials.BackCamDeco} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_38.geometry} material={materials.Rearcase} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_40.geometry} material={materials.Antenna_Plastic} />
          </group>
          <group scale={0.23}>
            <mesh geometry={nodes.Object_42.geometry} material={materials.black_hole} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/galaxyS21Ultra/samsung_galaxy_s21_ultra_phantom_titanium.glb');

export default SamsungGalaxyS21Ultra;
