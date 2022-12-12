/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Micro_2_Camera_micro_0: THREE.Mesh;
    Flash_2_Camera_Flash_glass_0: THREE.Mesh;
    Flash_2_Body_metall_0: THREE.Mesh;
    Flash_2_Camera_Flash_0: THREE.Mesh;
    Camera_3_Body_metall_0: THREE.Mesh;
    Camera_3_Screen_black_plastic_0: THREE.Mesh;
    Camera_3_Camera_screen_0: THREE.Mesh;
    Camera_1_2_Body_metall_0: THREE.Mesh;
    Camera_1_2_Screen_black_plastic_0: THREE.Mesh;
    Camera_1_2_Camera_screen_0: THREE.Mesh;
    Camera_2_3_Body_metall_0: THREE.Mesh;
    Camera_2_3_Screen_black_plastic_0: THREE.Mesh;
    Camera_2_3_Camera_screen_0: THREE.Mesh;
    Cylinder_2_2_Camera_micro_0: THREE.Mesh;
    Screen_new_clean_2_Screen_0: THREE.Mesh;
    Screen_new_clean_2_Screen_black_plastic_0: THREE.Mesh;
    Screen_new_clean_2_Screen_black_camera_0: THREE.Mesh;
    Glass_Screen_2_Glass_0: THREE.Mesh;
    Back_cameras_2_Back_plastic_0: THREE.Mesh;
    Back_cameras_glass_2_Glass_0: THREE.Mesh;
    Body_clean_2_Body_metall_0: THREE.Mesh;
    Body_clean_2_Body_metall_roughness_0: THREE.Mesh;
    Body_clean_2_Camera_micro_0: THREE.Mesh;
    Body_clean_2_Body_micro_0: THREE.Mesh;
  };
  materials: {
    Camera_micro: THREE.MeshStandardMaterial;
    Camera_Flash_glass: THREE.MeshStandardMaterial;
    Body_metall: THREE.MeshStandardMaterial;
    Camera_Flash: THREE.MeshStandardMaterial;
    Screen_black_plastic: THREE.MeshStandardMaterial;
    Camera_screen: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Screen_black_camera: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    Back_plastic: THREE.MeshStandardMaterial;
    Body_metall_roughness: THREE.MeshStandardMaterial;
    Body_micro: THREE.MeshStandardMaterial;
  };
};

function IPhone14Pro(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/iPhone14Pro/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}
               scale={0.017}
        >
          <group
            position={[42.17, 64.58, 127.6]}
            rotation={[-Math.PI, 1.31, 3.1]}
          />
          <group
            position={[190.72, 36.63, 367.65]}
            rotation={[-Math.PI, 1.15, -3.12]}
          />
          <group position={[25.32, 77.21, -7.39]}>
            <group position={[-16.34, -18.51, 0.41]}>
              <mesh
                geometry={nodes.Micro_2_Camera_micro_0.geometry}
                material={materials.Camera_micro}
              />
            </group>
            <group position={[-16.14, 18.16, -0.22]}>
              <mesh
                geometry={nodes.Flash_2_Camera_Flash_glass_0.geometry}
                material={materials.Camera_Flash_glass}
              />
              <mesh
                geometry={nodes.Flash_2_Body_metall_0.geometry}
                material={materials.Body_metall}
              />
              <mesh
                geometry={nodes.Flash_2_Camera_Flash_0.geometry}
                material={materials.Camera_Flash}
              />
            </group>
            <group position={[-16.48, -0.2, -1.21]}>
              <mesh
                geometry={nodes.Camera_3_Body_metall_0.geometry}
                material={materials.Body_metall}
              />
              <mesh
                geometry={nodes.Camera_3_Screen_black_plastic_0.geometry}
                material={materials.Screen_black_plastic}
              />
              <mesh
                geometry={nodes.Camera_3_Camera_screen_0.geometry}
                material={materials.Camera_screen}
              />
            </group>
            <group position={[7.61, 12.32, -1.21]}>
              <mesh
                geometry={nodes.Camera_1_2_Body_metall_0.geometry}
                material={materials.Body_metall}
              />
              <mesh
                geometry={nodes.Camera_1_2_Screen_black_plastic_0.geometry}
                material={materials.Screen_black_plastic}
              />
              <mesh
                geometry={nodes.Camera_1_2_Camera_screen_0.geometry}
                material={materials.Camera_screen}
              />
            </group>
            <group position={[7.61, -11.67, -1.21]}>
              <mesh
                geometry={nodes.Camera_2_3_Body_metall_0.geometry}
                material={materials.Body_metall}
              />
              <mesh
                geometry={nodes.Camera_2_3_Screen_black_plastic_0.geometry}
                material={materials.Screen_black_plastic}
              />
              <mesh
                geometry={nodes.Camera_2_3_Camera_screen_0.geometry}
                material={materials.Camera_screen}
              />
            </group>
            <group position={[-24.35, -13.36, 0.41]}>
              <mesh
                geometry={nodes.Cylinder_2_2_Camera_micro_0.geometry}
                material={materials.Camera_micro}
              />
            </group>
          </group>
          <group position={[0, 0, 4.72]}>
            <mesh
              geometry={nodes.Screen_new_clean_2_Screen_0.geometry}
              material={materials.Screen}
            />
            <mesh
              geometry={
                nodes.Screen_new_clean_2_Screen_black_plastic_0.geometry
              }
              material={materials.Screen_black_plastic}
            />
            <mesh
              geometry={nodes.Screen_new_clean_2_Screen_black_camera_0.geometry}
              material={materials.Screen_black_camera}
            />
          </group>
          <group position={[0, 0, 4.96]}>
            <mesh
              geometry={nodes.Glass_Screen_2_Glass_0.geometry}
              material={materials.Glass}
            />
          </group>
          <group position={[0, 0, -4.88]}>
            <mesh
              geometry={nodes.Back_cameras_2_Back_plastic_0.geometry}
              material={materials.Back_plastic}
            />
          </group>
          <group position={[0, 0, -4.88]}>
            <mesh
              geometry={nodes.Back_cameras_glass_2_Glass_0.geometry}
              material={materials.Glass}
            />
          </group>
          <group position={[0, 0, -10.16]}>
            <mesh
              geometry={nodes.Body_clean_2_Body_metall_0.geometry}
              material={materials.Body_metall}
            />
            <mesh
              geometry={nodes.Body_clean_2_Body_metall_roughness_0.geometry}
              material={materials.Body_metall_roughness}
            />
            <mesh
              geometry={nodes.Body_clean_2_Camera_micro_0.geometry}
              material={materials.Camera_micro}
            />
            <mesh
              geometry={nodes.Body_clean_2_Body_micro_0.geometry}
              material={materials.Body_micro}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/iPhone14Pro/scene.gltf');

export default IPhone14Pro;
