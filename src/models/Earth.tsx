/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Earth_Earth_0: THREE.Mesh;
    Earth_Earth_0_1: THREE.Mesh;
    Earth_Earth_0_2: THREE.Mesh;
  }
  materials: {
    Earth: THREE.MeshStandardMaterial;
  }
}

export function Earth(props: JSX.IntrinsicElements['group']) {

  const group = useRef<THREE.Group>(null!) as React.MutableRefObject<THREE.Group>;

  useFrame(() => {
    group.current.rotation.y -= 0.006;
    group.current.position.y = 0.7;
  });

  const { nodes, materials } = useGLTF(
      '/earth/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model"
               rotation={[-Math.PI / 2, 0, 0]}
               scale={0.013}
        >
          <group name="fc09fa6deb6c45f687e724438fed81adfbx"
                 rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth"
                       rotation={[-Math.PI / 2, 0, 0]}
                       scale={57.39}
                >
                  <mesh name="Earth_Earth_0"
                        geometry={nodes.Earth_Earth_0.geometry}
                        material={materials.Earth}
                  />
                  <mesh name="Earth_Earth_0_1"
                        geometry={nodes.Earth_Earth_0_1.geometry}
                        material={materials.Earth}
                  />
                  <mesh name="Earth_Earth_0_2"
                        geometry={nodes.Earth_Earth_0_2.geometry}
                        material={materials.Earth}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/earth/scene.gltf');
