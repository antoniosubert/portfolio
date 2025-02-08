import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
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
          Radno iskustvo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Moja profesionalna putovanja i dostignuća
        </p>
      </motion.div>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Agent tehničke podrške
              </h2>
              <p className="text-lg text-indigo-600 dark:text-indigo-400">
                Hrvatski Telekom d.d.
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              14/10/2024 - Trenutno
            </p>
          </div>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              • Pružao tehničku podršku korisnicima vezanu uz telekomunikacijske
              usluge.
            </p>
            <p>
              • Rješavao tehničke incidente i osiguravao visoku razinu
              zadovoljstva korisnika.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Frontend Developer (praksa)
              </h2>
              <p className="text-lg text-indigo-600 dark:text-indigo-400">
                Data Mir d.o.o.
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              01/04/2022 - 07/05/2024
            </p>
          </div>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              • Razvijao i održavao web-aplikacije koristeći React.js,
              TypeScript, i Next.js tehnologije.
            </p>
            <p>
              • Integrirao usluge trećih strana za poboljšanje funkcionalnosti
              aplikacija i korisničkog iskustva.
            </p>
            <p>
              • Korištenjem MUI sam kreirao vizualno privlačna i responzivna
              sučelja.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
