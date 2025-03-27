import { FaLocationArrow } from "react-icons/fa6";

interface Props {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  gitLink: string;
  webLink?: string;
}

const ProjectCard = ({
  id,
  title,
  des,
  img,
  iconLists,
  gitLink,
  webLink,
}: Props) => {
  return (
    <div
      key={id}
      className="h-[22rem] w-[100%] flex flex-col items-start justify-center border dark:border-white/[0.1] border-black/[0.3] rounded-lg md:w-[30%] md:h-[26rem]"
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
            target="_blank"
            className="flex flex-row items-center justify-center"
          >
            <p className="flex lg:text-xl md:text-xs text-sm dark:text-indigo-500 text-indigo-800 mr-1">
              Repository
            </p>

            <img src="/github.svg" alt="github logo" />
          </a>
        </div>
        {webLink ? (
          <div>
            <a
              href={webLink}
              target="_blank"
              className="flex flex-row items-center justify-center"
            >
              <p className="flex lg:text-xl md:text-xs text-sm dark:text-indigo-500 text-indigo-800">
                Live Site
              </p>
              <FaLocationArrow className="ms-2" color="#CBACF9" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
