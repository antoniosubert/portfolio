import React from "react";
import { motion } from "framer-motion";

const Volunteering: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Volontiranje
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Doprinos zajednici i društveno koristan rad
        </p>
      </motion.div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Udruga roditelja djece i osoba s posebnim potrebama "LATICA"
              </h2>
              <p className="text-lg text-indigo-600 dark:text-indigo-400">
                Volonter
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              09/2023 - Trenutno
            </p>
          </div>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              • Organizacija i sudjelovanje u aktivnostima podrške djeci s
              posebnim potrebama.
            </p>
            <p>
              • Uključivanje u različite aktivnosti podrške zajednici i
              inkluzije.
            </p>
            <p>• Pomoć u organizaciji društvenih događanja i radionica.</p>
            <p>• Podrška u svakodnevnim aktivnostima i učenju.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Udruga slijepih Pakrac-Lipik
              </h2>
              <p className="text-lg text-indigo-600 dark:text-indigo-400">
                Volonter
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              06/2020 - 06/2021
            </p>
          </div>
          <div className="space-y-3 text-gray-600 dark:text-gray-300">
            <p>
              • Pomagao u organizaciji i vođenju radionica za slijepe i
              slabovidne osobe.
            </p>
            <p>
              • Razvijao i implementirao aktivnosti podrške članovima udruge.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Volunteering;
