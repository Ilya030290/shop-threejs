/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';

import { Cube } from '../../../../models/Cube';

const CubeComponent = () => (

  <div className="w-96 h-128 max-lg:w-72 max-sm:w-60 max-lg:h-96 max-sm:h-72">
    <Canvas camera={{ fov: 70, position: [0, 0, 5] }}>
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[10, 5, 10]}
        angle={0.2}
        penumbra={1}
        intensity={2}
      />
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
      <ContactShadows position={[0.14, -1.7, 0]} blur={2.5} far={10} />
    </Canvas>
  </div>
);


export default CubeComponent;
