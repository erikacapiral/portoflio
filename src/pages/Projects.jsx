import React, { useRef } from 'react'
import { projects } from '../constants'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'

const Single = ({project}) => {
  return (
    <section className='my-10'>
      <div className='max-w-[1366px] mx-auto flex items-center justify-center gap-50'>
        <div className='flex-1 h-full'>
          <img src={project.img} alt="" className='w-full h-full' />
        </div>
        <motion.div className='flex-1 flex flex-col justify-center gap-30 ml-10'>
          <h2 className='text-3xl text-center text-white font-bold'>{project.title}</h2>
          <h3 className='text-[white] mt-3 font-bold'>Project Overview:</h3>
          <p className='text-slate-500'>{project.description}</p>
          <h3 className='text-[white] mt-3 font-bold'>Project Details:</h3>
          <ul className='mt-5 list-disc ml-5 space-y-2 text-slate-500'>
            {project.points.map((point, index) => (
              <li 
                key={`experience-points-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
          <h3 className='text-white mt-3 font-bold'>Key Features:</h3>
          <ul className='mt-5 list-disc ml-5 space-y-2 text-slate-500'>
            {project.features.map((point, index) => (
              <li 
                key={`experience-points-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

const Projects = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section className='max-container h-full snap-y scroll-smooth snap-center'>
      <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug text-white'>
        Featured
        <span className='text-[#2D3A5A] font-semibold drop-shadow'>
          {" "}
          Works
        </span>{" "}
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p>
          My projects were all made from scratch and have been purely created and design by me.
        </p>
      </div>

      <div className='relative' ref={ref}>
        <div className='sticky top-0 left-0 pt-[50px] text-[36px] overflow-hidden'>
          {/* <h1>Featured Works</h1> */}
          <motion.div style={{ scaleX }} className='h-[10px] bg-white mb-5'></motion.div>
        </div>
        {projects.map((project) => (
          <Single project={project} key={project.id} />
        ))}
      </div>


    </section>
  )
}

export default Projects
