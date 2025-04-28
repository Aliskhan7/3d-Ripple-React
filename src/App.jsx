import { Suspense } from "react";
import AnimationCanvas from "./components/animate-canvas.jsx";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
