import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/mechanical-keyboard-tenkeyless/model.gltf'
  );

  const groupRef = useRef();

  // Define variables for animation parameters
  const amplitude = 0.1;
  const frequency = 0.4;
  const time = useRef(0);

  // Update position of mesh on each frame
  useFrame(({ mouse }) => {
    const z = mouse.x * 0.13;
    groupRef.current.rotation.z = -z;

    // Calculate new y position using sine wave function
    const anim_y = Math.sin(time.current * frequency) * amplitude;

    // Update mesh position
    groupRef.current.position.y = anim_y;

    // Increment time variable
    time.current += 0.1;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Case.geometry} material={nodes.Case.material} position={[0.59, 0, 0]} />
      <mesh geometry={nodes.Keyboard_cable.geometry} material={nodes.Keyboard_cable.material} position={[0.59, 0, 0]} />
      <mesh geometry={nodes.Keycaps.geometry} material={materials['Keycap material']} position={[0.59, 0, 0]} />
    </group>
  );
}
