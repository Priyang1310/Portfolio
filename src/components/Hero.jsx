import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Priyang</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack web
            <br className="sm:hidden " /> applications according to your needs
          </p>
        </div>

        <div className="absolute xs:bottom-30 bottom-10 w-10 left-1/2 flex items-center justify-center z-10">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0], //0 to 24 px and 24 px to 0 i.e. it will go up side till 24 px
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1 "
              />
            </div>
          </a>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
