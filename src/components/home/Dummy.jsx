import React from 'react'
import DataSecurityProps from '../../common/DataSecurityProps'
import { DATA_SECURITY_LIST } from '../../utils/helper'

const Dummy = () => {
  return (
    <div>
        <DataSecurityProps Headings={'Data Security and Hosting'} imageSrc={'./assets/images/png/data-security.png'} list={DATA_SECURITY_LIST} buttno={'Get a demo'} />
    </div>
  )
}

export default Dummy
