"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


 
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-16">
        <div className="col-span-7 place-self-center">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    Hello, Im{" "}
  </span>
  <br></br>
  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sahar',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Video Editor',
        1000,
        'software Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
</h1>

          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
          I am full stack developer experience of 1 year.i learn to enjoy tailwind nd next js.

          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] rounded-full px-5 py-2" >

              Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          {/* Move the Image component here for desktop */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/heroo-image.jpg"
              alt="My Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;