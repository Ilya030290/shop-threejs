/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_45: THREE.Mesh;
  }
  materials: {
    shouji: THREE.MeshPhysicalMaterial;
    BOLI: THREE.MeshStandardMaterial;
  }
}

function HuaweiP40Pro(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/huaweiP40Pro/huawei_p40_pro.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} scale={2.0}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.shouji} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.shouji} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.shouji} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.shouji} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.shouji} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.shouji} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_27.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_33.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_36.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_39.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.BOLI} />
            <mesh geometry={nodes.Object_45.geometry} material={materials.BOLI} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/huaweiP40Pro/huawei_p40_pro.glb');

export default HuaweiP40Pro;
