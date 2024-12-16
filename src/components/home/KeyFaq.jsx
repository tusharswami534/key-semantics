import React, { useState } from "react";
import CommonHeading from "../../common/CommonHeading";
import { KEY_FAQ_HEADING_LIST, KEY_FAQ_LIST } from "../../utils/helper";

const KeyFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="container w-full flex max-lg:flex-wrap gap-12 relative mx-auto">
                <div>
                    <img
                        className="max-w-[600px] sticky top-0"
                        src="./assets/images/png/key-faq-image.png"
                        alt="key-faq-image"
                    />
                </div>
                <div>
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
                    <div className="max-w-[522px]">
                        {KEY_FAQ_LIST.map((obj, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="flex justify-between w-full items-center text-lg text-blue-zodiac leading-175 font-medium"
                                >
                                    {obj.heading}
                                    <img src="./assets/images/svg/arrow-icon.svg" alt="arrow-icon" />
                                </button>
                                <div
                                    className={`flex flex-col overflow-hidden transition-[max-height] duration-700 ease-linear ${
                                        openIndex === i ? "max-h-[1000px]" : "max-h-0"
                                    }`}
                                >
                                    <p>{obj.descriptionOne}</p>
                                    <p>{obj.descriptionTwo}</p>
                                    <div className="flex gap-4">
                                        <img src={obj.imageOne} alt="faq" />
                                        <img src={obj.imageTwo} alt="faq" />
                                    </div>
                                    <p>{obj.descriptionThree}</p>
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
