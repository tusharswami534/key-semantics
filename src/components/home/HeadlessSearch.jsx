import React from "react";
import CommonSection from "../../common/CommonSection";
import { HEADLESS_LIST } from "../../utils/helper";

const HeadlessSearch = () => {
  return (
   <CommonSection className={'py-[74px] max-lg:py-[70px] max-md:py-16 max-sm:py-10 max-xl:px-3 max-lg:px-4 max-md:px-5'} heading={'Headless federated search'} list={HEADLESS_LIST} imgSrc={'./assets/images/webp/headless-search.webp'} button={'Get a demo'} />
  );
};

export default HeadlessSearch;
