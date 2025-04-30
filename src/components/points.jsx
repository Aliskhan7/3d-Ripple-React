import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import circleImg from "../assets/circle.png";
import { useCallback, useMemo } from "react";

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);

  let t = 0;
  let f = 0.002;
  let a = 3;

  const graph = useCallback(
    (x, z) => {
      return Math.sin(f * (x ** 2 + z ** t)) * a;
    },
    [t, f, a],
  );

  const count = 100;
  const sep = 3;
  let positions = useMemo(() => {
    let positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttrebute
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        ></bufferAttrebute>
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        trasparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}
export default Points;
