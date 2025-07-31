import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiPhpFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { motion } from "motion/react";
import { MdOpacity } from "react-icons/md";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 my-20 text-center text-4xl pb-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5}}
        className="my-20 text-center text-4xl">
        Tecnologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconsVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-600 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-600 p-4"
        >
          <RiNodejsFill className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-600 p-4"
        >
          <RiPhpFill className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-600 p-4"
        >
          <RiHtml5Fill className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconsVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-600 p-4"
        >
          <RiCss3Fill className="text-7xl text-blue-800" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-gray-600 p-4"
        >
          <RiGithubFill className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
