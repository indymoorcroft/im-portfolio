import { projects } from "@/data";

import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of{" "}
        <span className="dark:text-indigo-500 text-indigo-800">
          recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center lg:justify-start justify-center p-4 gap-y-4 gap-x-12 mt-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
