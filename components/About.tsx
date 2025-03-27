import { techStack } from "@/data";
import React from "react";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about" className="relative">
      <h1 className="heading">
        About <span className="dark:text-indigo-500 text-indigo-800">me</span>
      </h1>
      <div className="flex flex-col items-start justify-center p-8 gap-x-24 gap-y-8 mt-4 dark:bg-black-100  dark:border-white/[0.1] bg-indigo-200 border-black/[0.1] rounded-lg border">
        <p className="md:text-2xl sm:text-base">
          Thank you for visiting my portfolio!
        </p>
        <p className="md:text-2xl sm:text-base">
          Throughout my career, I&apos;ve been driven by an interest in
          supporting people and organisations to thrive in changing
          environments.
        </p>
        <p className="md:text-2xl sm:text-base">
          Two years ago, my manager gave me the seemingly insignificant task of
          coding email signatures. It's not dramatic to say that this small task
          changed the trajectory of my life. From that first day of exploring
          basic HTML and CSS to now building dynamic full-stack applications, I
          have discovered a genuine joy for the creativity of building code as
          well as a deep curiosity and excitement for the constant learning
          process associated with it.
        </p>
        <p className="md:text-2xl sm:text-base">
          With experience in both collaborative and independent projects,
          I&apos;m excited to continue growing as a developer and to contribute
          to projects that solve meaningful problems.
        </p>
      </div>
      <div className="flex flex-col items-start justify-center p-8 gap-x-24 gap-y-8 mt-10 dark:bg-black-100  dark:border-white/[0.1] bg-indigo-200 border-black/[0.1] rounded-lg border">
        {techStack.map((item) => (
          <TechStack key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default About;
