interface Props {
  title: string;
  iconLists: string[];
}

const TechStack = ({ title, iconLists }: Props) => {
  return (
    <div>
      <div>
        <p className="font-semibold md:text-2xl sm:text-base mb-1">{title}</p>
      </div>
      <div className="flex flex-wrap items-center justify-start py-2">
        {iconLists.map((icon, index) => (
          <div key={`${icon}-${index}`}>
            <img
              src={icon}
              alt={icon}
              className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mr-2 mt-1 p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
