// import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <figure key={index} className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center rounded-full h-[120px] w-[120px] bg-white relative">
            <img className="h-20" src={technology.icon} alt="" />
          </div>
          <figcaption className="text-white font-bold text-lg">{technology.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};

// export default SectionWrapper(Tech, "");
export default Tech;
