import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import './Experience.css';

export default function Experience() {
  return (
        <Canvas
            className="canvas"
            colorManagement
            camera={{ position: [0, 0, 120], fov: 70 }}
            onCreated={({ gl }) => {
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.outputEncoding = THREE.sRGBEncoding;
            }}
        >
            <mesh>
                <icosahedronGeometry args={[10, 0]} />
                <meshStandardMaterial color="hotpink" flatShading />
            </mesh>
            <OrbitControls />
        </Canvas>
  );
}
