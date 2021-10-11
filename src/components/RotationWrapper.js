import { useFrame } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export default function RotationWrapper(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const group = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    group.current.rotation.y = THREE.MathUtils.degToRad((props.scroll.current * 360) / 1)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
          {props.children}
      </group>
    </group>
  )
}
