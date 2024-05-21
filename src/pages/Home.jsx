import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Planet from '../models/Planet'
import HomeInfo from '../components/HomeInfo'

const Home = () => {

  // used to control whether rotation animation is active
  const [isRotating, setIsRotating] = useState(false)
  // used to keep track of the current stage in the component's lifecycle
  const [currentStage, setCurrentStage] = useState(1)

  // it adjusts the scale position and rotation of the image or 3D based on the screen size
  const adjustHobbitForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]

    // If the window width is less than 768 pixels
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [hobbitScale, hobbitPosition, hobbitRotation] = adjustHobbitForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-black ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near:0.1, far:1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={10} />
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={1} />
          <Sky isRotating={isRotating} />
          <Bird />
          <Planet
            position = { hobbitPosition }
            scale = { hobbitScale }
            rotation = { hobbitRotation }
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
