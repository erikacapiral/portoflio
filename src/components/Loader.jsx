import React from 'react'
import { Html } from '@react-three/drei'

// design of the loader for the image or 3D image in the Home page
const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
          <div className='w-20 h-20 border-2 border-opacity-20 border-[#2D3A5A] border-t-[#2D3A5A] rounded-full animate-spin' />
      </div>
    </Html>
  )
}

export default Loader
