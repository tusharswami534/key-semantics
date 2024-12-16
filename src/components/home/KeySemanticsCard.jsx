import React from 'react'
import CommonHeading from '../../common/CommonHeading'
import { KEY_SEMANTICS_CARD_LIST } from '../../utils/helper'
import Lottie from 'react-lottie'

const KeySemanticsCard = () => {
  return (
    <div>
        <div>
            <CommonHeading Heading={'How does KeySemantics work?'}/>
        </div>
        <div className='max-w-[1026px] mx-auto flex flex-wrap gap-24'>
                {KEY_SEMANTICS_CARD_LIST.map((item, i) => (
                    <div className='flex flex-col' key={i}>
                        <Lottie animationData={item.lottie} />
                    </div>
                ))}
        </div>
    </div>
  )
}

export default KeySemanticsCard
