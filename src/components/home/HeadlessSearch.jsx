import React from "react";
import HeadlessSearchProps from "../../common/HeadlessSearchProps";
import { HEADLESS_LIST } from "../../utils/helper";

const HeadlessSearch = () => {
  return (
   <HeadlessSearchProps Heading={'Headless federated search'} list={HEADLESS_LIST} imgSrc={'./assets/images/png/headless-search.png'} button={'Get a demo'} />
  );
};

export default HeadlessSearch;
