import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiWebpack,
  SiJest,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGearFill } from "react-icons/bs";

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const technologies = {
    frontend: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      {
        name: "Next.js",
        icon: <TbBrandNextjs className="text-gray-800 dark:text-white" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-800 dark:text-white" />,
      },
      {
        name: "RESTful APIs",
        icon: <FaCode className="text-gray-600 dark:text-gray-300" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
    tools: [
      {
        name: "Git / GitHub",
        icon: <FaGithub className="text-gray-800 dark:text-white" />,
      },
      {
        name: "VS Code",
        icon: <FaLaptopCode className="text-[#007ACC]" />,
      },
      { name: "Webpack", icon: <SiWebpack className="text-[#8DD6F9]" /> },
      { name: "Jest", icon: <SiJest className="text-[#C21325]" /> },
      {
        name: "CI/CD",
        icon: <BsGearFill className="text-gray-600 dark:text-gray-300" />,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Vještine
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Tehnologije i alati koje koristim u svom radu
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaReact className="text-2xl text-[#61DAFB]" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Frontend Development
            </h2>
          </div>
          <ul className="space-y-4">
            {technologies.frontend.map((tech, index) => (
              <motion.li
                key={tech.name}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaDatabase className="text-2xl text-[#47A248]" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Backend Development
            </h2>
          </div>
          <ul className="space-y-4">
            {technologies.backend.map((tech, index) => (
              <motion.li
                key={tech.name}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaTools className="text-2xl text-gray-600 dark:text-gray-300" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Tools & Others
            </h2>
          </div>
          <ul className="space-y-4">
            {technologies.tools.map((tech, index) => (
              <motion.li
                key={tech.name}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
