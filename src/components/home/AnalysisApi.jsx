import React from 'react'
import Lottie from "react-lottie-player";
import InfographyKey from '../../lottie/infography-key.json'
import Mobile from '../../lottie/mobile.json'

const AnalysisApi = () => {
  return (
    <div className="analytics-section pb-[74px]">
         <Lottie className="w-full analytics-api max-lg:hidden" loop animationData={InfographyKey} play />
         <Lottie className="w-full analytics-api lg:hidden" loop animationData={Mobile} play />
    </div>
  )
}

export default AnalysisApi
