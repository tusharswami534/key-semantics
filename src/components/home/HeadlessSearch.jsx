import React from "react";
import CommonHeading from "../../common/CommonHeading";
import { HEADLESS_LIST } from "../../utils/helper";
import CustomButton from '../../common/CustomButton'

const HeadlessSearch = () => {
  return (
    <div className="py-[74px] max-xl:px-4">
      <div className="container max-lg:flex-col-reverse flex gap-12 items-center mx-auto">
        <div className="max-w-[552px] ">
          <CommonHeading Heading={"Headless federated search"} />
          <div className="ml-6 max-w-[522px]">
            <ul className="list-disc text-blue-zodiac">
              {HEADLESS_LIST.map((item) => (
                <li className="text-base leading-175">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 max-md:mt-4">
              <CustomButton commonButton={"Get a demo"} />
          </div>
        </div>
        <img className="max-w-[600px] w-full" src="./assets/images/png/headless-search.png" alt="headless" />
      </div>
    </div>
  );
};

export default HeadlessSearch;
