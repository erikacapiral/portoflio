/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: cmzw (https://sketchfab.com/cmzw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70
Title: Stylized planet
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import planet from '../assets/3D/planet.glb'
import { a } from '@react-spring/three'
// import { useAnimations, Gltf } from '@react-three/drei'

const Planet = ({ isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props }) => {
  
    const { nodes, materials } = useGLTF(planet)
    const planetRef = useRef()
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
    
          planetRef.current.rotation.y += delta * 0.01 * Math.PI
          lastX.current = clientX
          rotationSpeed.current = delta * 0.01 * Math.PI
        }
      }
    
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          if (!isRotating) setIsRotating(true)
          planetRef.current.rotation.y += 0.01 * Math.PI
            rotationSpeed.current = 0.07
        }
        else if (e.key === 'ArrowRight') {
          if (!isRotating) setIsRotating(true)
          planetRef.current.rotation.y -= 0.05 * Math.PI
            rotationSpeed = -0.7
        }
      }
    
      const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          setIsRotating(false)
        }
      }
    
      const handleTouchStart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
      
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
      }
      
      const handleTouchEnd = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
      }
      
      const handleTouchMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
      
        if (isRotating) {
          const clientX = e.touches ? e.touches[0].clientX : e.clientX;
          const delta = (clientX - lastX.current) / viewport.width;
      
          planetRef.current.rotation.y += delta * 0.01 * Math.PI;
          lastX.current = clientX;
          rotationSpeed.current = delta * 0.01 * Math.PI;
        }
      }
    
      useFrame(() => {
        // If not rotating, apply damping to slow down the rotation (smoothly)
        if (!isRotating) {
          // Apply damping factor
          rotationSpeed.current *= dampingFactor;
    
          // Stop rotation when speed is very small
          if (Math.abs(rotationSpeed.current) < 0.001) {
            rotationSpeed.current = 0;
          }
    
          planetRef.current.rotation.y += rotationSpeed.current;
        } else {
          // When rotating, determine the current stage based on planet's orientation
          const rotation = planetRef.current.rotation.y;
    
          /**
           * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
           * The goal is to ensure that the rotation value remains within a specific range to
           * prevent potential issues with very large or negative rotation values.
           *  Here's a step-by-step explanation of what this code does:
           *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
           *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
           *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
           *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
           *     This is done to ensure that the value remains positive and within the range of
           *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
           *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
           *     modulo operation to the value obtained in step 2. This step guarantees that the value
           *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
           *     circle in radians.
           */
          const normalizedRotation =
            ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    
          // Set the current stage based on the planet's orientation
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
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchend", handleTouchEnd);
        canvas.addEventListener("touchmove", handleTouchMove);
    
        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchend", handleTouchEnd);
            canvas.removeEventListener("touchmove", handleTouchMove);
        }
    
      }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

    //   const { scene, animations } = useGLTF(planetScene)
    //   const { actions } = useAnimations(animations, )

    //   useEffect(() => {
    //     actions['Animations'].play()
    //   })
  
  return (
    <a.group ref={planetRef} {...props}>
      <group name="Sketchfab_Scene" scale={23}>
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Clouds}
                />
              </group>
              <group name="Planet_2">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.Planet}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

useGLTF.preload('/stylized_planet.glb')

export default Planet