import { useRef, useEffect } from 'react'
// render the 3D model
import birdScene from '../assets/3D/bird.glb'
// animations and loading GLTF files
import { useAnimations, useGLTF } from '@react-three/drei'
// update components on each frame
import { useFrame } from '@react-three/fiber'

const Bird = () => {

    // load the 3D image
    const { scene, animations } = useGLTF(birdScene)

    // create the reference for the mesh
    const birdRef = useRef()

    // extract the actions of the 3D
    const { actions } = useAnimations(animations, birdRef)

    // plays the action of the 3D
    useEffect(() => {
        actions['Armature.002|Armature.002Action'].play()
    }, [])

    // update the position and rotation of the 3D
    // clock: tracks elapsed time, camera: perspective
    useFrame(({clock, camera}) => {

        // updates vertical position, it makes the bird move up and down smoothly
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        // check whether the bird has moved too far to the right or left of the camera's position
        // if yes it rotates the bird to face the opposite direction
        // Math.PI = 180 degrees
        if (birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            birdRef.current.rotation.y = 0
        }

        if (birdRef.current.rotation.y === 0) {
            // update the bird's horizontal (x) and depth (z) positions, moves it diagonally across the scene
            birdRef.current.position.x += 0.01
            birdRef.current.position.z -= 0.01
        } else {
            birdRef.current.position.z -= 0.01
            birdRef.current.position.x += 0.01
        }
    })

    return (
        <mesh 
            position={[-5, 2, 1]} 
            scale={[0.05, 0.05, 0.05]}
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird
