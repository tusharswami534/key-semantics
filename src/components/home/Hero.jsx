import React from 'react';


const Hero = () => {
  return (
    <div className='bg-hero-image bg-cover bg-center bg-no-repeat lg:min-h-[900px] max-xl:px-3 max-lg:px-4 max-md:px-5'>
      <div className='container items-center flex justify-between mx-auto pt-12 max-lg:pt-10 max-md:pt-8 max-sm:pt-6'>
        <a href="/">
          <img className='max-w-[248px] max-md:max-w-[200px] max-sm:max-w-[160px] w-full' src="./assets/images/png/logo-web 2.png" alt="logo" />
        </a>
        <button className='py-3 px-4 max-md:py-2 max-md:px-3 rounded-[48px] border border-blue-zodiac border-solid'>
        Request a demo
        </button>
      </div>
      <div className='xl:pt-[198px] flex flex-col justify-center items-center max-lg:py-12 max-md:py-10 '>
          <h1 className='text-custom-6xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-center max-w-[666px] mx-auto text-blue-zodiac'>AI-Powered Search as a Service</h1>
          <p className='mt-10 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base leading-130 max-md:mt-8 max-sm:mt-5 text-blue-zodiac text-center font-medium'>Unlock your content with KeySemantics.</p>
          <button className='py-5 px-8 rounded-[48px] text-white bg-blue-zodiac max-md:py-4 max-md:px-6 mt-12 max-lg:mt-10 max-md:mt-8 max-sm:mt-6 text-base'>
          Get started
          </button>
      </div>
    </div>
  );
};

export default Hero;
