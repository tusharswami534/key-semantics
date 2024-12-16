import React from 'react'

const DataSecurityProps = ({Headings , imageSrc ,list , btn}) => {
  return (
    <div className="py-[74px] max-xl:px-4">
    <div className="container flex max-lg:flex-col gap-12 items-center mx-auto">
    <img className="max-w-[600px] w-full" src={imageSrc} alt="headless" />
      <div className="max-w-[552px] ">
       <h2 className='leading-225 text-blue-zodiac text-custom-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold' >{Headings}</h2>
        <div className="ml-6 max-w-[522px]">
          <ul className="list-disc text-blue-zodiac">
            {list.map((item) => (
              <li className="text-base leading-175">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 max-md:mt-4">
           <button className='py-3 px-4 relative rounded-[48px] border hover:scale-125 transition-all duration-500 border-blue-zodiac border-solid text-sm overflow-hidden '>{btn}</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DataSecurityProps
