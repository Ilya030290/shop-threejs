import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

import Ethereum from '../../models/Ethereum';

export default function SpinnerViewer() {
  return (
    <div className='h-64'>
      <Canvas dpr={[1, 2]}>
        <Stage>
          <Suspense fallback={null}>
            <Ethereum />
          </Suspense>
        </Stage>
        <OrbitControls autoRotate autoRotateSpeed={20.0} enableZoom={false} enableRotate={false} enablePan={false}/>
      </Canvas>
    </div>
  );
}
