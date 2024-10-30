import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

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
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:indigo.moorcroft@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-12 md:mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
          Copyright © 2024 Indigo Moorcroft
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={link}>
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
