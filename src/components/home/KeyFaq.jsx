import React, { useState } from "react";
import CommonHeading from "../../common/CommonHeading";
import { KEY_FAQ_HEADING_LIST, KEY_FAQ_LIST } from "../../utils/helper";

const KeyFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-[81px] max-lg:pt-20 max-md:py-16 max-sm:py-10 bg-ghost-white pb-[74px] max-lg:pb-[70px] ">
            <div className="container max-xl:px-4 max-lg:justify-center  w-full flex max-lg:flex-wrap gap-12 max-xl:gap-8 relative mx-auto">
                <div>
                    <img
                        className="max-w-[600px] w-full lg:sticky top-0"
                        src="./assets/images/png/key-faq-image.png"
                        alt="key-faq-image"
                    />
                </div>
                <div className="key-faq-heading">
                    <CommonHeading Heading={"Key Q&A"} />
                    <div className="ml-4">
                        <ul className="list-disc max-w-[522px]">
                            {KEY_FAQ_HEADING_LIST.map((item, idx) => (
                                <li key={idx} className="leading-175 text-blue-zodiac">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:max-w-[522px] mt-4 max-md:mt-2">
                        {KEY_FAQ_LIST.map((obj, i) => (
                            <div className="border-t border-b-[0.5px] border-solid border-silver" key={i}>
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="flex justify-between py-4 w-full items-center text-lg text-blue-zodiac leading-175 font-medium"
                                >
                                    {obj.heading}
                                    <img className={` transition-all duration-500 ${openIndex === i ? "rotate-180" : "rotate-0"}`} src="./assets/images/svg/arrow-icon.svg" alt="arrow-icon" />
                                </button>
                                <div
                                    className={`flex flex-col overflow-hidden transition-[max-height] duration-500 ease-linear ${
                                        openIndex === i ? "max-h-[400px]" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-base leading-175 text-blue-zodiac">{obj.descriptionOne}</p>
                                    <p className="text-base leading-175 text-blue-zodiac mt-2 max-md:mt-1">{obj.descriptionTwo}</p>
                                    <div className="flex gap-4 max-sm:justify-center">
                                        <img className="max-sm:max-w-[150px]" src={obj.imageOne} alt="faq" />
                                        <img className="max-sm:max-w-[150px]" src={obj.imageTwo} alt="faq" />
                                    </div>
                                    <p className="text-base leading-175 text-blue-zodiac my-4 max-md:my-2">{obj.descriptionThree}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFaq;
