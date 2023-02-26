import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Keyboard from './Keyboard';

export default function ThreeTest() {
  return (
    <Canvas style={{ height: '50vh' }} camera={{ position: [2, 3, 5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Keyboard position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
