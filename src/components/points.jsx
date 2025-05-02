import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import circleImg from "../assets/circle.png";
import { useCallback, useMemo, useRef, useState } from "react";

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();
  const [t, setT] = useState(0);

  const f = 0.002;
  const a = 3;
  const graph = useCallback(
    (x, z, time) => {
      return Math.sin(f * (x ** 2 + z ** 2 + time)) * a;
    },
    [f, a]
  );

  const count = 100;
  const sep = 3;
  const positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z, t);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph, t]);

  useFrame(() => {
    setT(prev => prev + 15);

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z, t);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}
export default Points;
