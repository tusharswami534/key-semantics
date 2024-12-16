import React from 'react'

const CommonHeading = ({heading ,customClassName}) => {
  return (
   <h2 className={`leading-225 text-blue-zodiac text-custom-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold ${customClassName}`}>{heading}</h2>
  )
}

export default CommonHeading
