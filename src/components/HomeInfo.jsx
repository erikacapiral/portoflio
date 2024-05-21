import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets'

// the boxes in the home page, gets 3 props (text, link, btn)
const InfoBox = ({ text, link, btnText }) => (
    <div className='mx-5 relative flex text-white flex-col gap-3 max-w-2xl bg-[#121B3A] pt-4 pb-12 px-8 rounded-lg'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='bg-white py-3 px-6 rounded-lg text-[#121B3A] text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3'>
            {btnText}
            <img src={arrow} alt="arrow" className='bg-neo-brutalism-blue w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center bg-[#121B3A] py-4 px-8 text-white mx-5 rounded-lg'>
            Hi, I am <span className='font-semibold'>Erika</span> ❤️
            <br />
            A software engineer intern in FullSuite
        </h1>
    ),
    2: (
        <InfoBox
            text="From Pangasinan State University Urdaneta City Campus"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Wanna know more about what I do?"
            link="/projects"
            btnText="Portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Let's start a project together!"
            link="/contact"
            btnText="Contact me"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
