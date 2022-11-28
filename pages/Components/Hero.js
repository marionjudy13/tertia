import React from "react";

function Hero() {
  return (
    <header class="flex flex-wrap absolute top-[92.5px] align-middle text-center justify-center items-center w-full bg-tertia-bg bg-cover bg-center bg-no-repeat py-20 px-10 sm:py-32 lg:px-14 lg:py-40">
      <div class="flex flex-wrap justify-center max-w-xl sm:max-w-3xl xl:max-w-7xl">
        <img
          src="/tertia-logo-white.png"
          class="w-60 sm:w-72 lg:w-80 xl:w-96 mb-10 xl:mb-14"
        />
        <h1 class="text-white font-bold text-3xl sm:text-4xl lg:text-5xl lg:leading-[3.25rem] xl:text-6xl xl:leading-[4.25rem]">
          Tertia is a peer-led adventure and challenge-based support group for
          female-identifying survivors of emotional, physical, and sexual abuse.
        </h1>
      </div>
    </header>
  );
}

export default Hero;
