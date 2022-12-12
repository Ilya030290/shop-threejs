/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
  }
  materials: {
    None: THREE.MeshStandardMaterial;
    antena_bands: THREE.MeshStandardMaterial;
    back: THREE.LineBasicMaterial;
    black_bars: THREE.MeshStandardMaterial;
    camera_lens: THREE.MeshStandardMaterial;
    flash: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    gold: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    sidebars: THREE.MeshStandardMaterial;
    speaker_grill: THREE.MeshStandardMaterial;
  }
}

function OnePlus7Pro(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/onePlus7Pro/one_plus_7_pro.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.1} position={[0, -1.5, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.antena_bands} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.antena_bands} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.antena_bands} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.back} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.black_bars} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.camera_lens} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.flash} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.flash} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.gold} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.screen} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.sidebars} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.sidebars} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.sidebars} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.speaker_grill} />
      </group>
    </group>
  );
}

useGLTF.preload('/onePlus7Pro/one_plus_7_pro.glb');

export default OnePlus7Pro;
