/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    camera_module2_camera2_0: THREE.Mesh;
    camera1_camera1_0: THREE.Mesh;
    ['camera1_camera1(2)_0']: THREE.Mesh;
    camera2_camera2_0: THREE.Mesh;
    LiDar_LiDar_0: THREE.Mesh;
    camera1001_camera1_0: THREE.Mesh;
    ['camera1001_camera1(2)_0']: THREE.Mesh;
    camera_cameraframe_and_logo_0: THREE.Mesh;
    camera_glass_0: THREE.Mesh;
    camera_module2001_camera2001_0: THREE.Mesh;
    camera_module2001_Camera_Flash_0: THREE.Mesh;
    camera_module2001_Mic_0: THREE.Mesh;
    camera_module_Body_0: THREE.Mesh;
    camera_module_glass_0: THREE.Mesh;
    Apple_logo_cameraframe_and_logo_0: THREE.Mesh;
    Connector__0: THREE.Mesh;
    Front_camera_front_camera_0: THREE.Mesh;
    ['Front_camera_camera1(2)_0']: THREE.Mesh;
    Front_camera_glass_0: THREE.Mesh;
    Speakers_Mic_0: THREE.Mesh;
    Speakers_Body_0: THREE.Mesh;
    power_button_Body_0: THREE.Mesh;
    Volume_button_Body_0: THREE.Mesh;
    Apple_logo001_apple_pencil001_0: THREE.Mesh;
    Text_apple_pencil001_0: THREE.Mesh;
    Apple_Pencil_apple_pencil_0: THREE.Mesh;
    Line_Line_0: THREE.Mesh;
    iPad_Pro_2020_Body_0: THREE.Mesh;
    iPad_Pro_2020_screen_0: THREE.Mesh;
    iPad_Pro_2020_bezel_0: THREE.Mesh;
  }
  materials: {
    camera2: THREE.MeshStandardMaterial;
    camera1: THREE.MeshStandardMaterial;
    camera12: THREE.MeshStandardMaterial;
    LiDar: THREE.MeshStandardMaterial;
    cameraframe_and_logo: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    ['camera2.001']: THREE.MeshStandardMaterial;
    Camera_Flash: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    material_12: THREE.MeshStandardMaterial;
    front_camera: THREE.MeshStandardMaterial;
    ['apple_pencil.001']: THREE.MeshStandardMaterial;
    apple_pencil: THREE.MeshStandardMaterial;
    Line: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    bezel: THREE.MeshStandardMaterial;
  }
}

function IPadPro11(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
      '/iPadPro11/scene.gltf'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
              position={[0, -1.8, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={4.5}
          >
            <mesh
                geometry={nodes.camera_module2_camera2_0.geometry}
                material={materials.camera2}
            />
            <mesh
                geometry={nodes.camera1_camera1_0.geometry}
                material={materials.camera1}
            />
            <mesh
                geometry={nodes['camera1_camera1(2)_0'].geometry}
                material={materials.camera12}
            />
            <mesh
                geometry={nodes.camera2_camera2_0.geometry}
                material={materials.camera2}
            />
            <mesh
                geometry={nodes.LiDar_LiDar_0.geometry}
                material={materials.LiDar}
            />
            <mesh
                geometry={nodes.camera1001_camera1_0.geometry}
                material={materials.camera1}
            />
            <mesh
                geometry={nodes['camera1001_camera1(2)_0'].geometry}
                material={materials.camera12}
            />
            <mesh
                geometry={nodes.camera_cameraframe_and_logo_0.geometry}
                material={materials.cameraframe_and_logo}
            />
            <mesh
                geometry={nodes.camera_glass_0.geometry}
                material={materials.glass}
            />
            <mesh
                geometry={nodes.camera_module2001_camera2001_0.geometry}
                material={materials['camera2.001']}
            />
            <mesh
                geometry={nodes.camera_module2001_Camera_Flash_0.geometry}
                material={materials.Camera_Flash}
            />
            <mesh
                geometry={nodes.camera_module2001_Mic_0.geometry}
                material={materials.material}
            />
            <mesh
                geometry={nodes.camera_module_Body_0.geometry}
                material={materials.Body}
            />
            <mesh
                geometry={nodes.camera_module_glass_0.geometry}
                material={materials.glass}
            />
            <mesh
                geometry={nodes.Apple_logo_cameraframe_and_logo_0.geometry}
                material={materials.cameraframe_and_logo}
            />
            <mesh
                geometry={nodes.Connector__0.geometry}
                material={materials.material_12}
            />
            <mesh
                geometry={nodes.Front_camera_front_camera_0.geometry}
                material={materials.front_camera}
            />
            <mesh
                geometry={nodes['Front_camera_camera1(2)_0'].geometry}
                material={materials.camera12}
            />
            <mesh
                geometry={nodes.Front_camera_glass_0.geometry}
                material={materials.glass}
            />
            <mesh
                geometry={nodes.Speakers_Mic_0.geometry}
                material={materials.material}
            />
            <mesh
                geometry={nodes.Speakers_Body_0.geometry}
                material={materials.Body}
            />
            <mesh
                geometry={nodes.power_button_Body_0.geometry}
                material={materials.Body}
            />
            <mesh
                geometry={nodes.Volume_button_Body_0.geometry}
                material={materials.Body}
            />
            <mesh
                geometry={nodes.Apple_logo001_apple_pencil001_0.geometry}
                material={materials['apple_pencil.001']}
            />
            <mesh
                geometry={nodes.Text_apple_pencil001_0.geometry}
                material={materials['apple_pencil.001']}
            />
            <mesh
                geometry={nodes.Apple_Pencil_apple_pencil_0.geometry}
                material={materials.apple_pencil}
            />
            <group
                position={[0, 0.02, 0.77]}
                rotation={[Math.PI / 2, 0, 0]}
            >
              <mesh
                  geometry={nodes.Line_Line_0.geometry}
                  material={materials.Line}
              />
            </group>
            <mesh
                geometry={nodes.iPad_Pro_2020_Body_0.geometry}
                material={materials.Body}
            />
            <mesh
                geometry={nodes.iPad_Pro_2020_screen_0.geometry}
                material={materials.screen}
            />
            <mesh
                geometry={nodes.iPad_Pro_2020_bezel_0.geometry}
                material={materials.bezel}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/iPadPro11/scene.gltf');

export default IPadPro11;
