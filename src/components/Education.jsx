import { motion } from "motion/react";
import { EDUCATION } from "../constants"
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <p>{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="md-2 font-semibold">
                <span className="text-purple-100">{education.title}</span>
              </h6>
              <p className="mb-4 mt-2 text-neutral-400">{education.address}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
