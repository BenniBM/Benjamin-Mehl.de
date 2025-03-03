import { Canvas } from '@react-three/fiber';
import Keyboard from './Keyboard';
import { useEffect, useState } from 'react';

export default function ThreeKeyboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Canvas className="!h-[30vh] md:!h-[70vh] " camera={{ position: [0, 0, isMobile ? 2.8 : 3.4] }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-5, 3, 2]} intensity={1.5} castShadow />
      <spotLight position={[-3, 2, 1]} angle={0.3} penumbra={0.8} intensity={0.8} />
      <Keyboard position={[0, 1, isMobile ? -0.2 : 0]} rotation={[0.5, -0.15, 0]} />
    </Canvas>
  );
}
