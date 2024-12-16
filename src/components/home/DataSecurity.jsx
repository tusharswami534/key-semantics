import React from 'react'
import { DATA_SECURITY_LIST } from '../../utils/helper'
import DataSecurityProps from '../../common/DataSecurityProps'

const DataSecurity = () => {
  return (
    <DataSecurityProps Headings={'Data Security and Hosting'} imageSrc={'./assets/images/png/data-security.png'} list={DATA_SECURITY_LIST} btn={'Get a demo'} />
  )
}

export default DataSecurity
