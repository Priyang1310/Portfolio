import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
