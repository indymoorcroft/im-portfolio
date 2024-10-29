import { projects } from "@/data";
import { PinContainer } from "./ui/3D-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-12 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, gitLink, webLink }) => (
            <div
              key={id}
              className="h-[30rem] w-[30%] flex flex-col items-start justify-center border border-white/[0.1] rounded-lg"
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
                <div className="flex flex-row items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Repository
                  </p>
                  <img src="/git.svg" alt="github logo" />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Live Site
                  </p>
                  <FaLocationArrow className="ms-2" color="#CBACF9" />
                </div>
              </div>
              {/* <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
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
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div> */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;

{
  /* <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
  {projects.map(({ id, title, des, img, iconLists, link }) => (
    <div
      key={id}
      className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw]"
    >
      <PinContainer title={link} href={link}>
      <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[30vh] h-[20vh] mb-10">
        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
          <img src="/bg.png" alt="bg-img" />
        </div>
        <img src={img} alt={title} className="z-10 absolute bottom-0" />
      </div>
      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
        {title}
      </h1>

      <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
        {des}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
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
        <div className="flex justify-center items-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </div>
      </PinContainer>
    </div>
  ))}
</div> */
}
