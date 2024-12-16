import React from 'react'
import CommonHeading from '../../common/CommonHeading'
import CustomButton from '../../common/CustomButton'
import { DATA_SECURITY_LIST } from '../../utils/helper'

const DataSecurity = () => {
  return (
    <div className="py-[74px] max-xl:px-4">
      <div className="container flex max-lg:flex-col gap-12 items-center mx-auto">
      <img className="max-w-[600px] w-full" src="./assets/images/png/data-security.png" alt="headless" />
        <div className="max-w-[552px] ">
         <CommonHeading Heading={'Data Security and Hosting'}/>
          <div className="ml-6 max-w-[522px]">
            <ul className="list-disc text-blue-zodiac">
              {DATA_SECURITY_LIST.map((item) => (
                <li className="text-base leading-175">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 max-md:mt-4">
             <CustomButton commonButton={"Get a demo"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataSecurity
