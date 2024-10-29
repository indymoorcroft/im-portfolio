import { techStack } from "@/data";
import React from "react";

const About = () => {
  return (
    <section id="about" className="relative">
      <h1 className="heading">
        About <span className="text-purple">me</span>
      </h1>
      <div className="flex flex-col items-start justify-center p-8 gap-x-24 gap-y-8 mt-10 bg-black-100 rounded-lg border border-white/[0.1]">
        <p className="md:text-2xl sm:text-base">
          Thank you for visiting my portfolio!
        </p>
        <p className="md:text-2xl sm:text-base">
          Throughout my career, I've been motivated by a genuine desire to make
          a positive impact on the world.
        </p>
        <p className="md:text-2xl sm:text-base">
          My journey into software development began with a love for
          problem-solving and a curiosity about how things work. Over time, I’ve
          developed a solid foundation in various programming languages and
          frameworks, and I’m always learning more!
        </p>
        <p className="md:text-2xl sm:text-base">
          With experience in both collaborative and independent projects, I’m
          excited to continue growing as a developer and to contribute to
          projects that solve meaningful problems.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center p-8 gap-x-24 gap-y-8 mt-10 bg-black-100 rounded-lg border border-white/[0.1]">
        {techStack.map(({ id, title, iconLists }) => (
          <div key={id}>
            <div>
              <p className="font-semibold md:text-2xl sm:text-base mb-1">
                {title}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start py-2">
              {iconLists.map((icon, index) => (
                <div id={index.toString()}>
                  <img
                    src={icon}
                    alt={icon}
                    className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mr-2 p-1"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
