/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

const modelPath = '/spinner/spinner.glb';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['default']: THREE.MeshStandardMaterial;
  };
};

export default function Ethereum(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(modelPath) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.default} />
      </group>
    </group>
  );
}

useGLTF.preload(modelPath);
