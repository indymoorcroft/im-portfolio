import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ModeToggle } from "./ModeToggle";

const Hero = () => {
  return (
    <div className="pb-10 pt-16">
      <div className="w-full h-screen dark:bg-black-100 bg-gray-300 dark:bg-grid-white/[0.03] bg-grid-black/[0.175] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-end relative">
        <ModeToggle />
      </div>
      <div className="flex justify-center relative my-10 md:my-14 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-indigo-950 max-w-80">
            Driven by code, designed for impact
          </h2>
          <TextGenerateEffect
            words="Building Experiences from Front to Back"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 md:my-2 text-sm md:text-lg lg:text-2xl">
            Hi 👋 I&apos;m Indy, a full-stack software developer based in
            London, UK
          </p>
          <a href="#projects">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
