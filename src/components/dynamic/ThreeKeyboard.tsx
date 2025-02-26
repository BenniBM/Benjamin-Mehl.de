import { Canvas } from '@react-three/fiber';
import Keyboard from './Keyboard';

export default function ThreeKeyboard() {
  return (
    <Canvas style={{ height: '36vw' }} camera={{ position: [0, 0, 3.4] }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Keyboard position={[0, 0, 0]} rotation={[0.5, -0.15, 0]} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
