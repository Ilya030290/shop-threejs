/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    CameraModule_CamFrame_0: THREE.Mesh;
    CameraModule_CamFrame2_0: THREE.Mesh;
    CameraModule_CamBackground_0: THREE.Mesh;
    CameraModule_CamGlass_0: THREE.Mesh;
    Camera_LensFrame_0: THREE.Mesh;
    Camera_LensBlack_0: THREE.Mesh;
    Camera_LensGray_0: THREE.Mesh;
    MicFlash_MicFlashBody_0: THREE.Mesh;
    MicFlash_Mic_0: THREE.Mesh;
    MicFlash_Flash_0: THREE.Mesh;
    Lens1_Lens_0: THREE.Mesh;
    Lens2_Lens_0: THREE.Mesh;
    PenCharge_Stripe_0: THREE.Mesh;
    Screen_Wallpaper_0: THREE.Mesh;
    Lens3_Lens_0: THREE.Mesh;
    Lens4_Lens_0: THREE.Mesh;
    Button_Body_0: THREE.Mesh;
    PenBody_PenBody_0: THREE.Mesh;
    PenBody_PenTip_0: THREE.Mesh;
    SamsungLogo_Text_0: THREE.Mesh;
    akg_Text_0: THREE.Mesh;
    Body_Mic_0: THREE.Mesh;
    Body_Body_0: THREE.Mesh;
    Body_Bezel_0: THREE.Mesh;
    Body_Body2_0: THREE.Mesh;
    Body_LensGray_0: THREE.Mesh;
    Body_Antenna_0: THREE.Mesh;
    Body_Body3_0: THREE.Mesh;
    Body_CamGlass_0: THREE.Mesh;
  }
  materials: {
    CamFrame: THREE.MeshStandardMaterial;
    CamFrame2: THREE.MeshStandardMaterial;
    CamBackground: THREE.MeshStandardMaterial;
    CamGlass: THREE.MeshStandardMaterial;
    LensFrame: THREE.MeshStandardMaterial;
    LensBlack: THREE.MeshStandardMaterial;
    LensGray: THREE.MeshStandardMaterial;
    MicFlashBody: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Flash: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    Stripe: THREE.MeshStandardMaterial;
    Wallpaper: THREE.MeshStandardMaterial;
    Body: THREE.MeshStandardMaterial;
    PenBody: THREE.MeshStandardMaterial;
    PenTip: THREE.MeshStandardMaterial;
    Text: THREE.MeshStandardMaterial;
    Bezel: THREE.MeshStandardMaterial;
    Body2: THREE.MeshStandardMaterial;
    Antenna: THREE.MeshStandardMaterial;
    Body3: THREE.MeshStandardMaterial;
  }
}

function SamsungGalaxyTabS8Ultra(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/galaxyTabS8Ultra/galaxy_tab_s8_ultra.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.8}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1} position={[0, -1.5, 0]}>
            <mesh geometry={nodes.CameraModule_CamFrame_0.geometry} material={materials.CamFrame} />
            <mesh geometry={nodes.CameraModule_CamFrame2_0.geometry} material={materials.CamFrame2} />
            <mesh geometry={nodes.CameraModule_CamBackground_0.geometry} material={materials.CamBackground} />
            <mesh geometry={nodes.CameraModule_CamGlass_0.geometry} material={materials.CamGlass} />
            <mesh geometry={nodes.Camera_LensFrame_0.geometry} material={materials.LensFrame} />
            <mesh geometry={nodes.Camera_LensBlack_0.geometry} material={materials.LensBlack} />
            <mesh geometry={nodes.Camera_LensGray_0.geometry} material={materials.LensGray} />
            <mesh geometry={nodes.MicFlash_MicFlashBody_0.geometry} material={materials.MicFlashBody} />
            <mesh geometry={nodes.MicFlash_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.MicFlash_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.Lens1_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Lens2_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.PenCharge_Stripe_0.geometry} material={materials.Stripe} />
            <mesh geometry={nodes.Screen_Wallpaper_0.geometry} material={materials.Wallpaper} />
            <mesh geometry={nodes.Lens3_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Lens4_Lens_0.geometry} material={materials.Lens} />
            <mesh geometry={nodes.Button_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.PenBody_PenBody_0.geometry} material={materials.PenBody} />
            <mesh geometry={nodes.PenBody_PenTip_0.geometry} material={materials.PenTip} />
            <mesh geometry={nodes.SamsungLogo_Text_0.geometry} material={materials.Text} />
            <mesh geometry={nodes.akg_Text_0.geometry} material={materials.Text} />
            <mesh geometry={nodes.Body_Mic_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Body_Body_0.geometry} material={materials.Body} />
            <mesh geometry={nodes.Body_Bezel_0.geometry} material={materials.Bezel} />
            <mesh geometry={nodes.Body_Body2_0.geometry} material={materials.Body2} />
            <mesh geometry={nodes.Body_LensGray_0.geometry} material={materials.LensGray} />
            <mesh geometry={nodes.Body_Antenna_0.geometry} material={materials.Antenna} />
            <mesh geometry={nodes.Body_Body3_0.geometry} material={materials.Body3} />
            <mesh geometry={nodes.Body_CamGlass_0.geometry} material={materials.CamGlass} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/galaxyTabS8Ultra/galaxy_tab_s8_ultra.glb');

export default SamsungGalaxyTabS8Ultra;
