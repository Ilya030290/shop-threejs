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
    Object_6: THREE.Mesh;
  }
  materials: {
    Glass_Clear: THREE.MeshPhysicalMaterial;
    ['Glass_-_Heavy_Color']: THREE.MeshStandardMaterial;
    ['Plastic_-_Translucent_Glossy_White']: THREE.MeshStandardMaterial;
    ['Aluminum_-_Anodized_Glossy_Red']: THREE.MeshStandardMaterial;
    ['Steel_-_Satin']: THREE.MeshStandardMaterial;
  }
}

function IPhone14(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
      '/iPhone14/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}
             scale={0.24}
      >
        <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.Glass_Clear}
        />
        <mesh
            geometry={nodes.Object_3.geometry}
            material={materials['Glass_-_Heavy_Color']}
        />
        <mesh geometry={nodes.Object_4.geometry}
              material={materials['Plastic_-_Translucent_Glossy_White']}
        />
        <mesh
            geometry={nodes.Object_5.geometry}
            material={materials['Aluminum_-_Anodized_Glossy_Red']}
        />
        <mesh
            geometry={nodes.Object_6.geometry}
            material={materials['Steel_-_Satin']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/iPhone14/scene.gltf');

export default IPhone14;
