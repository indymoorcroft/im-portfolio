import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { portfolioIcons, socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[60px] md:mb-1 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          I’m always open to new{" "}
          <span className="text-indigo-500">opportunities</span> and{" "}
          <span className="text-indigo-500">collaborations</span>
        </h1>
        <p className="text-white-200 md:mt-10 md:my-0 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:indigo.moorcroft@gmail.com" target="_blank">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col justify-center items-center md:items-start mt-12 md:mt-16 gap-y-2">
        <div>
          <a
            href={"https://github.com/indymoorcroft/im-portfolio"}
            target="_blank"
            className="flex flex-row items-center justify-center"
          >
            <p className="flex md:text-base text-sm md:font-normal font-light text-indigo-500 mr-2">
              Portfolio Repository
            </p>
            <img src="/git.svg" alt="github logo" />
          </a>
        </div>

        <div className="flex items-center justify-center mb-1 ml-[10%] md:ml-0">
          <div className="mr-2 md:text-base text-sm md:font-normal font-light">
            <p>Portfolio built with: </p>
          </div>
          {portfolioIcons.map((icon, index) => (
            <div
              key={icon}
              className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{ transform: `translateX(-${5 * index * 2}px)` }}
            >
              <img src={icon} alt={icon} className="p-2" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
          Copyright © 2024 Indigo Moorcroft
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={link} target="_blank">
                <img src={img} alt={img} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
