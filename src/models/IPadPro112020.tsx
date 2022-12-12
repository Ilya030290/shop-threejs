/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_37: THREE.Mesh;
  }
  materials: {
    ['case']: THREE.MeshStandardMaterial;
    Apple_logo: THREE.MeshStandardMaterial;
    part_of_camera: THREE.MeshStandardMaterial;
    part_of_camera2: THREE.MeshStandardMaterial;
    camera_glass: THREE.MeshStandardMaterial;
    camera_rings: THREE.MeshStandardMaterial;
    screen_ftame: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    background: THREE.MeshStandardMaterial;
    light_glass: THREE.MeshStandardMaterial;
    speaker: THREE.MeshStandardMaterial;
    Apple_Pencil_connector: THREE.MeshStandardMaterial;
    connector: THREE.MeshStandardMaterial;
    part_of_frontal_camera: THREE.MeshStandardMaterial;
    sensors: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    camera_lens: THREE.MeshStandardMaterial;
    LiDAR: THREE.MeshStandardMaterial;
    material_18: THREE.MeshStandardMaterial;
    doc_station: THREE.MeshStandardMaterial;
    connector2: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    screen_glass: THREE.MeshStandardMaterial;
    light: THREE.MeshStandardMaterial;
    ['mic.001']: THREE.MeshStandardMaterial;
    LTE1: THREE.MeshStandardMaterial;
    contacts: THREE.MeshStandardMaterial;
    frontal_camera_lens: THREE.MeshStandardMaterial;
    Apple_Pencil: THREE.MeshStandardMaterial;
  }
}

function IPadPro112020(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/iPadPro112020/ipad_pro_4th_generation_2020__apple_pencil.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, Math.PI, 0]}>
              <group name="Empty003_10" position={[-0.14, 0, 0]} scale={0.85} />
              <group name="Apple_iPad_Pro_0" position={[0, 0, 0]} scale={0.01}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['case']} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['case']} />
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials['case']} />
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['case']} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['case']} />
                <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Apple_logo} />
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.part_of_camera} />
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.part_of_camera2} />
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.camera_glass} />
                <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.camera_rings} />
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.screen_ftame} />
                <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.glass} />
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.background} />
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.light_glass} />
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.speaker} />
                <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Apple_Pencil_connector} />
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.connector} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.part_of_frontal_camera} />
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.sensors} />
                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.material} />
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.camera_lens} />
                <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.LiDAR} />
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.material_18} />
                <mesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.doc_station} />
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.connector2} />
                <mesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.screen} />
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.screen_glass} />
                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.light} />
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials['mic.001']} />
                <mesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.LTE1} />
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.contacts} />
                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.frontal_camera_lens} />
              </group>
              <group name="Apple_Pencil_1" position={[-1.12, 0, 0]} scale={0.01}>
                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.Apple_Pencil} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/iPadPro112020/ipad_pro_4th_generation_2020__apple_pencil.glb');

export default IPadPro112020;
