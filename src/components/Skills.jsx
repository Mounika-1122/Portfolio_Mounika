import React from 'react'
import Progess from './Progess'

function Skills() {
  return (
    <div className=" mt-24 flex flex-col justify-center items-center mx-auto">
       <h2 className="text-white text-4xl font-bold mb-5">My Skills</h2>
       <div className='flex flex-row justify-between w-[60%] mx-auto mt-3'>
            <Progess progressPercentage={80} skill={"Python"} />
            <Progess progressPercentage={95} skill={"HTML"} />
       </div>

       <div className='flex flex-row justify-between w-[60%] mx-auto mt-6'>
            <Progess progressPercentage={40} skill={"JavaScript"} />
            <Progess progressPercentage={85} skill={"CSS"} />
       </div>
        
       <div className='flex flex-row justify-between w-[60%] mx-auto mt-6'>
            <Progess progressPercentage={30} skill={"Reactjs"} />
            <Progess progressPercentage={20} skill={"Figma"} />
       </div>

    </div>
  )
}

export default Skills
