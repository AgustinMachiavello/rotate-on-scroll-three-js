/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Rabbit.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.Bunny} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Skateboard}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Rabbit.gltf')
