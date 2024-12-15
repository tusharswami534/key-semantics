import React from 'react'

const CustomButton = ({commonButton}) => {
  return (
    <button className='py-3 px-4 rounded-[48px] border border-blue-zodiac border-solid text-sm'>
        {commonButton}    
    </button>
  )
}

export default CustomButton
