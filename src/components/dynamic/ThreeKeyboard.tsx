import { Canvas } from '@react-three/fiber';
import Keyboard from './Keyboard';

export default function ThreeKeyboard() {
  return (
    <Canvas style={{ height: '36vw' }} camera={{ position: [0, 0, 3.4] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-5, 3, 2]} intensity={1.5} castShadow />
      <spotLight position={[-3, 2, 1]} angle={0.3} penumbra={0.8} intensity={0.8} />
      <Keyboard position={[0, 0, 0]} rotation={[0.5, -0.15, 0]} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
}
