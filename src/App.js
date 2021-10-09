import React, { Suspense, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import Model from './models/Model';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)}% loaded...</Html>
}

function App() {
  return (
    <div className="App">
      <div id="canvas-container" style={{height: '100vh', width: '100vw'}}>
        <Canvas
          shadows>
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            <Model rotation={[0, 0, 0]}/>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
