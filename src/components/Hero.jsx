import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-5 lg:pb-16 lg:mb-10">
      <div className=" flex flex-col lg:flex-row flex-wrap items-center justify-center">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="flex flex-col items-center px-3 text-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl lg:text-6xl font-thin tracking-tight text-white mt-2 lg:mt-16 mb-10"
            >
              Hi! I'm Prakhar Gupta
            </motion.h1>
           <motion.div
  variants={container(0.5)}
  initial="hidden"
  animate="visible"
>
  <TypeAnimation
    sequence={[
      'Aspiring Full Stack Developer', 4000,
      'Full Stack Enthusiast', 4000,
      'Tech Explorer 🚀', 4000,
    ]}
    wrapper="span"
    speed={20}
    repeat={Infinity}
    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
  />
</motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-white my-2 max-w-xl py-2 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
