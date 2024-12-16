import React from 'react'

const CustomButton = ({commonButton}) => {
  return (
    <button className='py-3 px-4 relative rounded-[48px] border group border-blue-zodiac border-solid text-sm overflow-hidden'>
        <span className='flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-zodiac h-0 w-0 group-hover:h-full transition-all duration-500 rounded-[px] group-hover:w-full'></span>
        <span className='relative z-10 group-hover:text-white transition-all duration-500'>{commonButton}</span>    
    </button>
  )
}

export default CustomButton
