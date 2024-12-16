import React from 'react'

const CommonSection = ({heading , list , imgSrc , button , customClassName , className}) => {
  return (
     <div className={`bg-ghost-white ${className}`}>
      <div className={`container max-lg:flex-col-reverse flex gap-12 max-lg:gap-10 max-md:gap-8 max-sm:gap-6 items-center mx-auto ${customClassName}`}>
        <div className="max-w-[552px] ">
        <h2 className='leading-225 text-blue-zodiac text-custom-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold max-lg:text-center' >{heading}</h2>
          <div className="ml-6 max-w-[552px]">
            <ul className="list-disc text-blue-zodiac">
              {list.map((item , i) => (
                <li key={i} className="text-base leading-175">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 max-md:mt-4 max-lg:flex max-lg:justify-center">
          <button className='py-[11px] px-[14.5px] relative rounded-[48px] border hover:scale-125 transition-all duration-500 border-blue-zodiac border-solid text-sm overflow-hidden '>{button}</button>
          </div>
        </div>
        <img className="max-w-[600px] w-full" src={imgSrc} alt="images" />
      </div>
    </div>
  )
}

export default CommonSection
