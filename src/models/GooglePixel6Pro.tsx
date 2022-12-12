/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Screen_Screen_0: THREE.Mesh;
    ['BackBody_Back(top)_0']: THREE.Mesh;
    ['BackBody_Back(Bottom_0']: THREE.Mesh;
    CircleCam_CamGray_0: THREE.Mesh;
    Sensor2_Sensor_0: THREE.Mesh;
    RecCam_CamGray_0: THREE.Mesh;
    RecCam_CamGlass_0: THREE.Mesh;
    Sensor_Sensor001_0: THREE.Mesh;
    Flash_Flash_0: THREE.Mesh;
    Mic_Mic2_0: THREE.Mesh;
    Mic_Mic_0: THREE.Mesh;
    Frontcam_CamGray_0: THREE.Mesh;
    Frontcam_CamGlass_0: THREE.Mesh;
    Bezel_Bezel_0: THREE.Mesh;
    Bezel_Mic_0: THREE.Mesh;
    Buttons_Frame_0: THREE.Mesh;
    Lens3_Lens_0: THREE.Mesh;
    CircleCam2_CamGray_0: THREE.Mesh;
    Lens1_Lens_0: THREE.Mesh;
    Lens2_Lens_0: THREE.Mesh;
    Lens_Lens_0: THREE.Mesh;
    BackBody001_Logo_0: THREE.Mesh;
    Frame_Frame_0: THREE.Mesh;
    Frame_CamModuleBlack_0: THREE.Mesh;
    Frame_CamModule_0: THREE.Mesh;
    Frame_Mic_0: THREE.Mesh;
    Frame_Antennas_0: THREE.Mesh;
    Frame_CamGlass_0: THREE.Mesh;
  }
  materials: {
    Screen: THREE.MeshStandardMaterial;
    Backtop: THREE.MeshStandardMaterial;
    BackBottom: THREE.MeshStandardMaterial;
    CamGray: THREE.MeshStandardMaterial;
    Sensor: THREE.MeshStandardMaterial;
    CamGlass: THREE.MeshStandardMaterial;
    ['Sensor.001']: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Mic2: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    Logo: THREE.MeshStandardMaterial;
    CamModuleBlack: THREE.MeshStandardMaterial;
    CamModule: THREE.MeshStandardMaterial;
    Antennas: THREE.MeshStandardMaterial;
  }
}

function GooglePixel6Pro(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/pixel6Pro/google_pixel_6_pro.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.8} position={[0, 1, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Screen_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes['BackBody_Back(top)_0'].geometry} material={materials.Backtop} />
            <mesh geometry={nodes['BackBody_Back(Bottom_0'].geometry} material={materials.BackBottom} />
            <mesh geometry={nodes.CircleCam_CamGray_0.geometry} material={materials.CamGray} />
            <mesh geometry={nodes.Sensor2_Sensor_0.geometry} material={materials.Sensor} />
            <mesh geometry={nodes.RecCam_CamGray_0.geometry} material={materials.CamGray} />
            <mesh geometry={nodes.RecCam_CamGlass_0.geometry} material={materials.CamGlass} />
            <mesh geometry={nodes.Sensor_Sensor001_0.geometry} material={materials['Sensor.001']} />
            <mesh geometry={nodes.Flash_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.Mic_Mic2_0.geometry} material={materials.Mic2} />
            <mesh geometry={nodes.Mic_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Frontcam_CamGray_0.geometry} material={materials.CamGray} />
            <mesh geometry={nodes.Frontcam_CamGlass_0.geometry} material={materials.CamGlass} />
            <mesh geometry={nodes.Bezel_Bezel_0.geometry} material={materials.Bezel} />
            <mesh geometry={nodes.Bezel_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Buttons_Frame_0.geometry} material={materials.Frame} />
            <mesh geometry={nodes.Lens3_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.CircleCam2_CamGray_0.geometry} material={materials.CamGray} />
            <mesh geometry={nodes.Lens1_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Lens2_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Lens_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.BackBody001_Logo_0.geometry} material={materials.Logo} />
            <mesh geometry={nodes.Frame_Frame_0.geometry} material={materials.Frame} />
            <mesh geometry={nodes.Frame_CamModuleBlack_0.geometry} material={materials.CamModuleBlack} />
            <mesh geometry={nodes.Frame_CamModule_0.geometry} material={materials.CamModule} />
            <mesh geometry={nodes.Frame_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Frame_Antennas_0.geometry} material={materials.Antennas} />
            <mesh geometry={nodes.Frame_CamGlass_0.geometry} material={materials.CamGlass} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/pixel6Pro/google_pixel_6_pro.glb');

export default GooglePixel6Pro;
