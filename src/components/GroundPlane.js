import React from "react";

export default function GroundPlane(props) {
    return (
        <group {...props}>
            <mesh receiveShadow >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" transparent opacity={0.4}/>
            </mesh>
        </group>
    );
}