/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: maycianni (https://sketchfab.com/maycianni)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bubble-island-ee89a1e7a74f4a8491a70053766abe12
Title: Bubble Island
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import bubble from '../assets/3D/bubble.glb'
import { a } from '@react-spring/three'

const Bubble = ({ isRotating, setIsRotating, ...props }) => {

  const { nodes, materials } = useGLTF(bubble)
  const bubbleRef = useRef()
  const { gl, viewport } = useThree()
  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95

  const handlePointerDown = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)

    const clientX = e.touches ? e.touches[0].clientX : e.clientX

    lastX.current = clientX
  }

  const handlePointerUp = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)

    
  }

  const handlePointerMove = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX

      const delta = (clientX - lastX.current) / viewport.width

      bubbleRef.current.rotation.y += delta * 0.01 * Math.PI
      lastX.current = clientX
      rotationSpeed.current = delta * 0.01 * Math.PI
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true)
      bubbleRef.current.rotation.y += 0.01 * Math.PI
    }
    else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true)
      bubbleRef.current.rotation.y -= 0.01 * Math.PI
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }
    } else {
      const rotation = bubbleRef.current.rotation.y

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
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

    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      canvas.addEventListener('pointerdown', handlePointerDown)
      canvas.addEventListener('pointerup', handlePointerUp)
      canvas.addEventListener('pointermove', handlePointerMove)
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={bubbleRef} {...props}>
      <mesh
        geometry={nodes.esfera_vidro_0.geometry}
        material={materials.vidro}
        position={[0, 0.304, 0]}
        scale={13.833}
      />
      <mesh
        geometry={nodes.solo_solo1_0.geometry}
        material={materials.solo1}
        position={[0, -0.07, 0]}
        scale={[0.775, 1, 0.775]}
      />
      <mesh
        geometry={nodes.planta_planta1_0.geometry}
        material={materials.planta1}
        position={[0, 1.632, 0]}
        rotation={[-0.036, 0, 0]}
        scale={[0.219, 0.274, 0.179]}
      />
      <mesh
        geometry={nodes.Rock25_pedras_0.geometry}
        material={materials.pedras}
      />
      <mesh
        geometry={nodes.Rock25_pedras_0_1.geometry}
        material={materials.pedras}
      />
      <mesh
        geometry={nodes.Rock25_pedras_0_2.geometry}
        material={materials.pedras}
      />
      <mesh
        geometry={nodes.mar1_mar_0.geometry}
        material={materials.material}
        position={[0, 0.304, 0]}
        scale={[0.977, 1, 0.977]}
      />
    </a.group>
  )
}

useGLTF.preload('/bubble_island.glb')

export default Bubble