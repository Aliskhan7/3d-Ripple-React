import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Points from "./points.jsx";
import CameraControls from "./camera-controls.jsx";

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}
export default AnimationCanvas;
