import React from 'react'
import { DATA_SECURITY_LIST } from '../../utils/helper'
import CommonSection from '../../common/CommonSection'

const DataSecurity = () => {
  return (
    <CommonSection className={'pt-[74px] max-lg:pt-[70px] max-md:pt-16 max-sm:pt-10 pb-[164px] max-lg:pb-40 max-md:pb-32 max-sm:pb-20 max-xl:px-3 max-lg:px-4 max-md:px-5'} customClassName={'flex-row-reverse'} heading={'Data Security and Hosting'} imgSrc={'./assets/images/webp/data-security.webp'} list={DATA_SECURITY_LIST} button={'Get a demo'} />
  )
}

export default DataSecurity
