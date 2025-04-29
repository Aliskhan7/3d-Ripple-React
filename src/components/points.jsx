import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import circleImg from "../assets/circle.png";
import { useMemo } from "react";

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);

  let positions = useMemo(() => {
    let positions = [];

    return new Float32Array(positions);
  }, []);

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
