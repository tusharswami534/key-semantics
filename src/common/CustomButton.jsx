import React from 'react'

const CustomButton = ({commonButton}) => {
  return (
    <button className='py-[11px] px-[14.5px] relative rounded-[48px] border group hover:scale-125 transition-all duration-500 border-blue-zodiac border-solid text-sm overflow-hidden'>{commonButton}</button>
  )
}

export default CustomButton
