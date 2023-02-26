import { Canvas } from '@react-three/fiber';
import { OrbitControls, CameraControls } from '@react-three/drei';
import Keyboard from './Keyboard';

export default function ThreeKeyboard() {
  return (
    <Canvas style={{ height: '50vh' }} camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Keyboard position={[0, 0, 0]} rotation={[0.5, -0.15, 0]} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
