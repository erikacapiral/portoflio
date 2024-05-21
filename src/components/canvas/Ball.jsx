// responsible for rendering a canvas from react three fiber and drei

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../BallLoader";

const Ball = (props) => {

  // useTexture: hook from react three drei
  // load a texture from the URL (props.imgUrl)
  // [decal]: array of each URL
  const [decal] = useTexture([props.imgUrl]);

  return (
    // makes the content float
    <Float>
      <ambientLight intensity={0.5} /> {/* illuminates all objects, how strong the light should be */}
      <directionalLight position={[0, 0, 0.05]} /> {/* direction of the light: horizontal (0), vertical (0), and  yung tagilid ng light (0.5)*/}
      <mesh castShadow receiveShadow scale={2.75}> {/* triangular polygon mesh with shadows and the scale of the mesh, takes care of how to show the balls */}
        <icosahedronGeometry args={[1, 1]} /> {/* generate icosahedron geometry, yung madaming triangle, radius (1, yung laki) and detail (1, yung dami ng triangle) */}
        {/* uses to define the appearance of the ball */}
        <meshStandardMaterial
          color='#DDDDDD'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* the images in the ball, position (center), rotation of 2 full circles around the x-axis (2 * Math.PI), no rotation in the y-axis (0), and a rotation of approximately 6.25 radians around the z-axis */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    // where 3D rendering happens, frame loop will only happen when necessary,  device pixel ratio  
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* handle loading state (Suspense: it shows a fallback while content is loading ), BallLoader.jsx */}
      <Suspense fallback={<CanvasLoader />}>
        {/* allows the user to interact with the ball, it makes the camera to rotate */}
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} /> 
      </Suspense>
      {/* ensures everything is loaded */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
