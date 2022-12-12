/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene = ( { model }: any) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ fov: 70, position: [0, 0, 5] }}>
        <OrbitControls minDistance={4.5}/>
        <hemisphereLight intensity={0.35} />
        <hemisphereLight intensity={0.55} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.2}
          penumbra={1}
          intensity={2}
        />
        <spotLight
            position={[-10, -10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
        />
        <Suspense fallback={null}>
          { model }
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
