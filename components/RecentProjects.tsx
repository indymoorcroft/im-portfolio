import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of <span className="text-indigo-400">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-12 gap-y-8 mt-4">
        {projects.map(
          ({ id, title, des, img, iconLists, gitLink, webLink }) => (
            <div
              key={id}
              className="h-[22rem] w-[100%] flex flex-col items-start justify-center border border-white/[0.1] rounded-lg md:w-[30%] md:h-[28rem]"
            >
              <div className="w-[90%] mb-5 mt-3 ml-[5%]">
                <img src={img} alt={title} className="rounded-xl" />
              </div>

              <div className="flex items-center justify-center mb-3 ml-[5%]">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <img src={icon} alt={icon} className="p-2" />
                  </div>
                ))}
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 ml-[5%]">
                {title}
              </h1>

              <p className="lg:text-lg lg:font-normal font-light text-xs line-clamp-2 w-[90%] my-2 ml-[5%]">
                {des}
              </p>
              <div className="flex justify-between items-center w-[90%] mb-2 ml-[5%]">
                <div>
                  <a
                    href={gitLink}
                    className="flex flex-row items-center justify-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-indigo-500 mr-1">
                      Repository
                    </p>
                    <img src="/git.svg" alt="github logo" />
                  </a>
                </div>
                {webLink ? (
                  <div>
                    <a
                      href={webLink}
                      className="flex flex-row items-center justify-center"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-indigo-400">
                        Live Site
                      </p>
                      <FaLocationArrow className="ms-2" color="#CBACF9" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
