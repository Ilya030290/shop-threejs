/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    ['IP_SE_3_-_2022_MicSpeaker_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Flash_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Camera_GRAY_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Camera_RED_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Bezel_BLACK_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Body_RED_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Body_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Apple_Logo_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Sensor_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Camera_BLACK_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Camera_GLASS_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Frame_RED_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Camera_GLOSS__0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Wallpaper_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Camera_LENS_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_GRAY_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_BLACK_0']: THREE.Mesh;
    ['IP_SE_3_-_2022_Antennas_0']: THREE.Mesh;
  }
  materials: {
    MicSpeaker: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Camera_GRAY: THREE.MeshStandardMaterial;
    Camera_RED: THREE.MeshStandardMaterial;
    Bezel_BLACK: THREE.MeshStandardMaterial;
    Body_RED: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    Apple_Logo: THREE.MeshStandardMaterial;
    Sensor: THREE.MeshStandardMaterial;
    Camera_BLACK: THREE.MeshStandardMaterial;
    Camera_GLASS: THREE.MeshStandardMaterial;
    Frame_RED: THREE.MeshStandardMaterial;
    Camera_GLOSS: THREE.MeshStandardMaterial;
    Wallpaper: THREE.MeshStandardMaterial;
    Camera_LENS: THREE.MeshStandardMaterial;
    GRAY: THREE.MeshStandardMaterial;
    BLACK: THREE.MeshStandardMaterial;
    Antennas: THREE.MeshStandardMaterial;
  }
}

function IPhoneSE3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
      '/iPhoneSE3/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}
               scale={0.01}
        >
          <group
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
          >
            <mesh
                geometry={nodes['IP_SE_3_-_2022_MicSpeaker_0'].geometry}
                material={materials.MicSpeaker}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Flash_0'].geometry}
                material={materials.Flash}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Camera_GRAY_0'].geometry}
                material={materials.Camera_GRAY}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Camera_RED_0'].geometry}
                material={materials.Camera_RED}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Bezel_BLACK_0'].geometry}
                material={materials.Bezel_BLACK}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Body_RED_0'].geometry}
                material={materials.Body_RED}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Body_0'].geometry}
                material={materials.Body}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Apple_Logo_0'].geometry}
                material={materials.Apple_Logo}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Sensor_0'].geometry}
                material={materials.Sensor}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Camera_BLACK_0'].geometry}
                material={materials.Camera_BLACK}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Camera_GLASS_0'].geometry}
                material={materials.Camera_GLASS}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Frame_RED_0'].geometry}
                material={materials.Frame_RED}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Camera_GLOSS__0'].geometry}
                material={materials.Camera_GLOSS}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Wallpaper_0'].geometry}
                material={materials.Wallpaper}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Camera_LENS_0'].geometry}
                material={materials.Camera_LENS}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_GRAY_0'].geometry}
                material={materials.GRAY}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_BLACK_0'].geometry}
                material={materials.BLACK}
            />
            <mesh
                geometry={nodes['IP_SE_3_-_2022_Antennas_0'].geometry}
                material={materials.Antennas}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/iPhoneSE3/scene.gltf');

export default IPhoneSE3;
