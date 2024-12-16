import React, { useState } from "react";
import swal from 'sweetalert';

const KeySemanticsWorkForm = () => {
  const formData = {
    name: "",
    email: "",
    company: "",
    number: "",
  };

  const [value, setValue] = useState(formData);
  const [error, setError] = useState(false);
  const changeHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.company !== "" &&
      value.number !== ""
    ) {
      setValue(formData);
      setError(false);
      console.log(value);
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to leave this page?",
        icon: "success",
        dangerMode: true,
      });
    }
  };
  return (
    <div className=" bg-blue-zodiac max-lg:px-4">
      <div className="max-w-[1440px] mx-auto relative py-24 max-lg:py-20 max-md:py-16 max-sm:py-10">
      <img src="./assets/images/webp/open-bracket.webp" alt="open-bracket" className="absolute top-0 left-[120px] max-lg:hidden" />
      <img src="./assets/images/webp/close-bracket.webp" alt="open-bracket" className="absolute bottom-0 right-[120px] max-lg:hidden" />
      <div className="container">
        <h2 className="leading-225 text-white text-custom-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-center font-bold">
          How does KeySemantics work?
        </h2>
        <p className="text-center text-white leading-175 text-base">
          Request a demo for your team and let us show you how KeySemantics can
          help your company
        </p>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={changeHandler}
          action=""
          className="max-w-[406px] mt-16 mx-auto flex justify-center items-center flex-col  "
        >
          <input
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            type="text"
            placeholder="Name"
            className="px-3 placeholder:text-moody-blue text-moody-blue outline-none border-transparent py-4 rounded-[48px] w-[320px] !bg-[#24254B] mx-auto"
          />
          <p className="text-red-800 font-bold text-left">
            {error && !value.name && "Name is required"}
          </p>
          <input
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
            type="email"
            placeholder="Email"
            className="px-3 placeholder:text-moody-blue text-moody-blue mt-2 outline-none border-transparent py-4 rounded-[48px] w-[320px] !bg-[#24254B] mx-auto"
          />
          <p className="text-red-800 font-bold text-left">
            {error && !value.email && "Email is required"}
          </p>
          <input
            value={value.company}
            onChange={(e) => setValue({ ...value, company: e.target.value })}
            type="text"
            placeholder="Company"
            className="px-3 placeholder:text-moody-blue text-moody-blue mt-2 outline-none border-transparent py-4 rounded-[48px] w-[320px] !bg-[#24254B] mx-auto"
          />
          <p className="text-red-800 font-bold text-left">
            {error && !value.company && "Company is required"}
          </p>
          <input
            value={value.number}
            onChange={(e) => setValue({ ...value, number: e.target.value })}
            type="number"
            placeholder="Phone (optional)"
            className="px-3 placeholder:text-moody-blue text-moody-blue mt-2 outline-none border-transparent py-4 rounded-[48px] w-[320px] !bg-[#24254B] mx-auto"
          />
          <p className="text-red-800 font-bold text-left">
            {error && !value.number && "Number is required"}
          </p>
          <p className="text-center text-moody-blue text-[10px] leading-130 mt-4 mb-6">
            By submitting my contact information I agree to the KeySemantics
            Privacy Policy
          </p>
          <button
            type="submit"
            className="py-4 px-8 rounded-[48px] text-sm text-white bg-picton-blue font-medium"
          >
            Request a demo
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default KeySemanticsWorkForm;
