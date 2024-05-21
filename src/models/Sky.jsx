import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import skyScene from '../assets/3D/sky.glb'

export function Sky({ isRotating }) {

  // renders the 3D 
  const sky = useGLTF(skyScene)

  // reference
  const skyRef = useRef()

  // delta: time elapsed since the last frame
  // ensure the animation run smoothly regardless of the frame rate
  useFrame((_, delta) => {
    if (isRotating) {
      // the rotation of the 3D around the y axis is updated
      skyRef.current.rotation.y += 0.25 * delta
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky