import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/mechanical-keyboard-tenkeyless/model.gltf'
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Case.geometry} material={nodes.Case.material} position={[0.59, 0, 0]} />
      <mesh geometry={nodes.Keyboard_cable.geometry} material={nodes.Keyboard_cable.material} position={[0.59, 0, 0]} />
      <mesh geometry={nodes.Keycaps.geometry} material={materials['Keycap material']} position={[0.59, 0, 0]} />
    </group>
  );
}
