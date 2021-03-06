/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

import ModelPath from './Keyboard.gltf';

export default function Keyboard(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(ModelPath)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.NovelKeys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.Lime}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials.Grape}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_3.geometry}
        material={materials.Blueberry}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_4.geometry}
        material={materials.Lemon}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_5.geometry}
        material={materials.Strawberry}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_6.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload(ModelPath)
