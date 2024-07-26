import React from 'react'

function Progess({progressPercentage,skill}) {
  return (
    <div className='flex flex-col w-[35%]' >
       <div className=' flex flex-row justify-between mb-2'>
           <p className='text-white'>{skill}</p>
           <p className='text-white'>{progressPercentage}%</p>
        </div>
        <div className='h-3 w-full bg-[#242222] rounded'>
            <div style={{ width: `${progressPercentage}%`}}
                className={`h-full rounded bg-[#00ABF0]`}>
            </div>
        </div>
    </div>
  )
}

export default Progess
