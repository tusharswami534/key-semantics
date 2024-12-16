import React from "react";
import CommonHeading from "../../common/CommonHeading";
import { KEY_SEMANTICS_CARD_LIST } from "../../utils/helper";
import Lottie from "react-lottie-player";

const KeySemanticsCard = () => {
  return (
    <div className="pt-24 max-xl:px-4">
      <div className="text-center">
        <CommonHeading Heading={"How does KeySemantics work?"} />
      </div>

      <div className="max-w-[1026px] justify-center max-lg:gap-16 max-md:gap-12 max-sm:gap-8 mx-auto flex flex-wrap gap-24">
        {KEY_SEMANTICS_CARD_LIST.map((item, i) => (
          <div className="flex flex-col max-w-[278px]" key={i}>
            <Lottie className="w-full max-w-[278px] " loop animationData={item.lottie} play />
            <p className="text-center leading-175 mt-6 text-blue-zodiac">{item.description}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default KeySemanticsCard;
