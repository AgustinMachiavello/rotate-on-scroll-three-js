import React, { useRef } from 'react';

export default function Cube(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color='red'/>
          </mesh>
      </group>
    </group>
  )
}
