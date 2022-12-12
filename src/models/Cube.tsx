/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    Chrome: THREE.MeshStandardMaterial
  }
}

export function Cube(props: JSX.IntrinsicElements['group']) {

  const group = useRef<THREE.Group>(null!) as React.MutableRefObject<THREE.Group>;

  useFrame(() => {
    group.current.rotation.y -= 0.006;
    group.current.position.y = -1.3;
  });

  const { nodes, materials } = useGLTF(
    '/cube/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.005}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Chrome}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Chrome}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/cube/scene.gltf');
