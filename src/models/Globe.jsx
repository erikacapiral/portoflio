/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Loïc Norgeot (https://sketchfab.com/norgeotloic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earthquakes-2000-to-2019-894ad84ceb8b444a91fbc05f20530bcd
Title: Earthquakes - 2000 to 2019
*/

import React, { useEffect, useRef } from 'react'
// render 3D
import { useGLTF } from '@react-three/drei'
// update components in each frame, access three.js context
import { useFrame, useThree } from '@react-three/fiber'
import globe from '../assets/3D/globe.glb'
// animate components
import { a } from '@react-spring/three'

// spread props
const Globe = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {

  // render 3D, contain the nodes of the loaded model and materials used in the model
  const { nodes, materials } = useGLTF(globe)

  // reference
  const globeRef = useRef()

  // access to WebGl, viewport size and aspect ratio
  const { gl, viewport } = useThree()

  //  track the last position of the mouse or touch event
  const lastX = useRef(0)

  // control speed of rotation
  const rotationSpeed = useRef(0)

  // reduce the speed of movement, create smoothness
  const dampingFactor = 0.95

  // when the user presses down the mouse button or touches the screen
  const handlePointerDown = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)

    // pointer
    const clientX = e.touches ? e.touches[0].clientX : e.clientX

    lastX.current = clientX
  }

  // when the user releases the mouse button or lifts their finger from the screen
  const handlePointerUp = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)
  }

  // when the user moves the mouse or their finger while pressing down
  const handlePointerMove = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX

      const delta = (clientX - lastX.current) / viewport.width

      globeRef.current.rotation.y += delta * 0.01 * Math.PI
      lastX.current = clientX
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  // when the user presses a key on the keyboard
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true)
      globeRef.current.rotation.y += 0.01 * Math.PI
        rotationSpeed.current = 0.07
    }
    else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true)
      globeRef.current.rotation.y -= 0.05 * Math.PI
        rotationSpeed = -0.7
    }
  }

  // when the user releases a key on the keyboard.
  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }

  // updates the rotation of the globe mesh (rotating or not)
  useFrame(() => {
    if (!isRotating) {
      // gradually reduce the rotation speed if not rotating
      // multiply rotation speed by the dampingFactor (less than 1)
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      globeRef.current.rotation.y += rotationSpeed.current;
    } else {

      //  calculates the current rotation of the globe
      const rotation = globeRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // determines which stage or section of the globe is currently facing forward
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {

    // interactions of the user
    const canvas = gl.domElement

    // mouse
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    
    // keyboard
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={globeRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
        <points geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} />
      </group>
    </a.group>
  )
}

useGLTF.preload('/earthquakes_-_2000_to_2019.glb')

export default Globe