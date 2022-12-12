/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    iPad_Mini_BaseColor_0: THREE.Mesh;
    iPad_Mini_BaseColorMatte_0: THREE.Mesh;
    iPad_Mini_CamGray_0: THREE.Mesh;
    iPad_Mini_SpeakerMic_0: THREE.Mesh;
    iPad_Mini_Flash_0: THREE.Mesh;
    iPad_Mini_Bezel_0: THREE.Mesh;
    iPad_Mini_CamGlass_0: THREE.Mesh;
    iPad_Mini_Cam1_0: THREE.Mesh;
    iPad_Mini_CamBlack_0: THREE.Mesh;
    iPad_Mini_Port_0: THREE.Mesh;
    iPad_Mini_Screen_0: THREE.Mesh;
    iPad_Mini_Lens_0: THREE.Mesh;
    iPad_Mini_BaseColorLogo_0: THREE.Mesh;
  }
  materials: {
    BaseColor: THREE.MeshStandardMaterial;
    BaseColorMatte: THREE.MeshStandardMaterial;
    CamGray: THREE.MeshStandardMaterial;
    SpeakerMic: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    CamGlass: THREE.MeshStandardMaterial;
    Cam1: THREE.MeshStandardMaterial;
    CamBlack: THREE.MeshStandardMaterial;
    Port: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    BaseColorLogo: THREE.MeshStandardMaterial;
  }
}

function IPadMini(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
      '/iPadMini/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <group
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.035}
        >
          <group
              rotation={[-Math.PI / 2, Math.PI, 0]}
              scale={100}
          >
            <mesh
                geometry={nodes.iPad_Mini_BaseColor_0.geometry}
                material={materials.BaseColor}
            />
            <mesh
                geometry={nodes.iPad_Mini_BaseColorMatte_0.geometry}
                material={materials.BaseColorMatte}
            />
            <mesh
                geometry={nodes.iPad_Mini_CamGray_0.geometry}
                material={materials.CamGray}
            />
            <mesh
                geometry={nodes.iPad_Mini_SpeakerMic_0.geometry}
                material={materials.SpeakerMic}
            />
            <mesh
                geometry={nodes.iPad_Mini_Flash_0.geometry}
                material={materials.Flash}
            />
            <mesh
                geometry={nodes.iPad_Mini_Bezel_0.geometry}
                material={materials.Bezel}
            />
            <mesh
                geometry={nodes.iPad_Mini_CamGlass_0.geometry}
                material={materials.CamGlass}
            />
            <mesh
                geometry={nodes.iPad_Mini_Cam1_0.geometry}
                material={materials.Cam1}
            />
            <mesh
                geometry={nodes.iPad_Mini_CamBlack_0.geometry}
                material={materials.CamBlack}
            />
            <mesh
                geometry={nodes.iPad_Mini_Port_0.geometry}
                material={materials.Port}
            />
            <mesh
                geometry={nodes.iPad_Mini_Screen_0.geometry}
                material={materials.Screen}
            />
            <mesh
                geometry={nodes.iPad_Mini_Lens_0.geometry}
                material={materials.Lens}
            />
            <mesh
                geometry={nodes.iPad_Mini_BaseColorLogo_0.geometry}
                material={materials.BaseColorLogo}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/iPadMini/scene.gltf');

export default IPadMini;
