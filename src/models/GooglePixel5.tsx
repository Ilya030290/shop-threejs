/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_53: THREE.Mesh;
  }
  materials: {
    material_0: THREE.MeshStandardMaterial;
    Back: THREE.MeshStandardMaterial;
    Cport: THREE.MeshStandardMaterial;
    ['backcam.001']: THREE.MeshStandardMaterial;
    BackCam_Light: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    Light: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    ['Glass.001']: THREE.MeshStandardMaterial;
    FrontGlass: THREE.MeshStandardMaterial;
    Speaker: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
    backcam: THREE.MeshStandardMaterial;
    Front: THREE.MeshStandardMaterial;
    ['Cport.001']: THREE.MeshStandardMaterial;
  }
}

function GooglePixel5(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF(
    '/pixel5/google_pixel_5.glb'
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.3}>
            <group position={[0.32, -0.15, -1.07]} rotation={[-Math.PI / 2, 0, 0]} scale={1.05}>
              <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
            </group>
            <group position={[0.63, -0.08, -0.86]} rotation={[-1.38, 0, -Math.PI / 2]}>
              <mesh geometry={nodes.Object_7.geometry} material={materials.Back} />
            </group>
            <group position={[0.63, -0.08, -0.49]} rotation={[-1.38, 0, -Math.PI / 2]}>
              <mesh geometry={nodes.Object_9.geometry} material={materials.Back} />
            </group>
            <group position={[-0.61, -0.08, 0.25]} rotation={[-1.38, 0, -Math.PI / 2]} scale={0.89}>
              <mesh geometry={nodes.Object_11.geometry} material={materials.Back} />
            </group>
            <group position={[-0.04, -0.1, 1.09]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Object_13.geometry} material={materials.Cport} />
            </group>
            <group position={[0.44, -0.1, -1.19]} scale={0.07}>
              <mesh geometry={nodes.Object_15.geometry} material={materials['backcam.001']} />
            </group>
            <group position={[0.63, -0.08, 0.25]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0.84, 0.84, 0.87]}>
              <mesh geometry={nodes.Object_17.geometry} material={materials.Back} />
            </group>
            <group position={[0.2, -0.1, -1.19]} scale={0.07}>
              <mesh geometry={nodes.Object_19.geometry} material={materials['backcam.001']} />
            </group>
            <group position={[0.32, -0.13, -1.32]} scale={0.07}>
              <mesh geometry={nodes.Object_21.geometry} material={materials.BackCam_Light} />
              <mesh geometry={nodes.Object_22.geometry} material={materials.Glass} />
              <mesh geometry={nodes.Object_23.geometry} material={materials.Light} />
            </group>
            <group position={[-0.01, -0.09, 0.54]} rotation={[Math.PI, -1.42, Math.PI]} scale={0.07}>
              <mesh geometry={nodes.Object_25.geometry} material={materials.metal} />
            </group>
            <group position={[-0.47, -0.01, -1.35]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.02, 0.02, 0.01]}>
              <mesh geometry={nodes.Object_29.geometry} material={materials['Glass.001']} />
            </group>
            <group position={[0.44, -0.13, -1.19]} rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
              <mesh geometry={nodes.Object_31.geometry} material={materials['Glass.001']} />
            </group>
            <group position={[0.2, -0.13, -1.19]} rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
              <mesh geometry={nodes.Object_33.geometry} material={materials['Glass.001']} />
            </group>
            <group position={[0, 0, -0.19]}>
              <mesh geometry={nodes.Object_35.geometry} material={materials.FrontGlass} />
            </group>
            <group position={[0, 0, -0.19]}>
              <mesh geometry={nodes.Object_37.geometry} material={materials.Back} />
              <mesh geometry={nodes.Object_38.geometry} material={materials.Speaker} />
            </group>
            <group position={[0, 0, -0.19]}>
              <mesh geometry={nodes.Object_40.geometry} material={materials.Display} />
              <mesh geometry={nodes.Object_41.geometry} material={materials.backcam} />
            </group>
            <group position={[0, 0, -0.19]}>
              <mesh geometry={nodes.Object_43.geometry} material={materials.Front} />
            </group>
            <group position={[0, 0, -0.19]}>
              <mesh geometry={nodes.Object_45.geometry} material={materials.Glass} />
            </group>
            <group position={[0.32, -0.16, -1.19]}>
              <mesh geometry={nodes.Object_47.geometry} material={materials.Front} />
            </group>
            <group position={[0.32, -0.15, -1.19]} scale={0.23}>
              <mesh geometry={nodes.Object_49.geometry} material={materials.backcam} />
            </group>
            <group position={[0.32, -0.16, -1.19]}>
              <mesh geometry={nodes.Object_51.geometry} material={materials.Glass} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/pixel5/google_pixel_5.glb');

export default GooglePixel5;
