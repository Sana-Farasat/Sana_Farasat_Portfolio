import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div
      className="text-cyan-700 dark:text-cyan-500 
      text-lg sm:text-2xl md:text-3xl lg:text-4xl 
      text-center sm:text-left 
      font-semibold font-mono
      mt-4"
    >
      <Typewriter
        options={{
          strings: [
            "I build web apps using Next.js & Tailwind CSS",
            "Expert in AI integration for web apps",
            "Specialized in Spec-Driven Development",
          ],
          autoStart: true,
          loop: true,
          delay: 45,
          deleteSpeed: 25,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
