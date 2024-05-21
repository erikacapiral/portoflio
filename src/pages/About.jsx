import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiences, technologies } from '../constants'
import 'react-vertical-timeline-component/style.min.css'
import BallCanvas from '../components/canvas/Ball'

const ExperienceCard = ({ experience }) => {
  return (
    // timeline
    <VerticalTimelineElement
    contentStyle={{
      background: '#121B3A',
      color: '#FFF'
    }}
    contentArrowStyle={{
      borderRight: '7px solid #232631',
    }}
    date={experience.date}
    iconStyle={{background: "#DDDDDD"}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon} 
          alt={experience.school}
          className='w-[80%] h-[80%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li 
          key={`experience-points-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  )
}

const About = () => {
  return (
    <section className='max-container'>
      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p className='text-lg'>
          I am a software engineer intern in FullSuite and currently enrolled and graduating in Pangasinan State University Urdaneta City Campus.
        </p>
      </div>
      <div className='mt-20 flex flex-col mb-20'>
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug text-[#2D3A5A]'>
          What I have
          <span className='text-white font-semibold drop-shadow'>
            {" "}
            learned
          </span>{" "}
        </h1>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug text-white'>
        My
        <span className='text-[#2D3A5A] font-semibold drop-shadow'>
          {" "}
          skills
        </span>{" "}
      </h1>

      {/* list of icons that represents my skills */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* map of technologies that I use */}
      {technologies.map((technology) => (
        <div 
          className='w-28 h-28'
          key={technology.name}
        >
          {/* Ball Canvas component that gets the ball shape for the technologies */}
          <BallCanvas icon={technology.icon}/>
        </div>
        ))}
      </div>
    </section>
  )
}

export default About
