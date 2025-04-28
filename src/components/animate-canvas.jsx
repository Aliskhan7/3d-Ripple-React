import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import Points from "./points.jsx";

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 74 }}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
}
export default AnimationCanvas;
