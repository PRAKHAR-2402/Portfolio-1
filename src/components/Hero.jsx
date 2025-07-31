import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-16 lg:mb-36">
      <div className="flex flex-col lg:flex-row flex-wrap">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4">
            <h1 className="text-5xl lg:text-8xl font-thin tracking-tight text-white mt-8 lg:mt-16 mb-4">
              Prakhar Gupta
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="text-white my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
          <img
            src={profilePic}
            alt="Prakhar Gupta"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
