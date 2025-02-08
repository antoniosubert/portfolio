import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

interface EducationDetails {
  title: string;
  school: string;
  period: string;
  details: string[];
  logo: string;
}

const Home: React.FC = () => {
  const [selectedEducation, setSelectedEducation] =
    useState<EducationDetails | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const educationData: EducationDetails[] = [
    {
      title: "Prvostupnik (baccalaureus) inženjer računarstva",
      school: "Veleučilište u Virovitici",
      period: "2019 - 2023",
      logo: "vsmti-logo.png",
      details: [
        "Primjena matematičkih modela u programskom inženjerstvu",
        "Osnove ICT tehnologija i operacijskih sustava (Windows/Linux/Unix)",
        "Prilagodljivost novim tehnologijama",
        "Specifikacija i opisivanje procesa iz realnog svijeta formalnim metodama",
        "Procjena optimalne programske tehnologije za rješavanje problema",
        "Poznavanje računalnih mreža i baza podataka",
        "Izrada i upravljanje tehničkom dokumentacijom",
        "Razvoj web i mobilnih aplikacija",
        "Pohrana podataka u Cloud rješenja",
      ],
    },
    {
      title: "Računalni tehničar",
      school: "Tehnička škola Daruvar",
      period: "2014 - 2018",
      logo: "tsd-logo.jpg",
      details: [
        "Stekao tehničko znanje u elektronici i računalstvu",
        "Naučio osnove sistemskog i serverskog održavanja",
        "Razvio vještine programiranja kroz praktične projekte",
        "Instalacija i održavanje serverskih sustava",
        "Poznavanje tehničkog crtanja, osnove elektronike i mikroelektronike",
        "Upravljanje računalnim mrežama i poznavanje osnovnih komunikacijskih protokola",
        "Upoznavanje s osnovama programiranja u Pythonu kroz praktične projekte i laboratorijske vježbe",
        "Razvoj jednostavnih aplikacija i skripti za automatizaciju zadataka",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="profile-photo.jpg"
            alt="Antonio Šubert"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Antonio Šubert
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Frontend Developer
              </p>
              <a
                href="https://github.com/antoniosubert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <span>Pakrac, Hrvatska</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-500" />
                <a
                  href="mailto:schubert.antonio11@gmail.com"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  schubert.antonio11@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-gray-500" />
                <a
                  href="https://github.com/antoniosubert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  github.com/antoniosubert
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-500" />
                <span>(+385) 993513202</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            O meni
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Frontend Developer s iskustvom u razvoju skalabilnih web-aplikacija
            koristeći moderne tehnologije. Stručan u React.js, TypeScript, i
            Next.js, s dokazanim iskustvom u integraciji API-ja i korištenju
            alata poput MUI Material za stvaranje responzivnih i profesionalnih
            korisničkih sučelja.
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Obrazovanje
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.title}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm cursor-pointer"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedEducation(edu)}
              >
                <div className="flex items-center gap-4 mb-4">
                  {!imageError[edu.logo] ? (
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-16 h-16 object-contain bg-white rounded-lg p-1"
                      onError={() =>
                        setImageError((prev) => ({ ...prev, [edu.logo]: true }))
                      }
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg">
                      <span className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                        {edu.school.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEducation && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEducation(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  {!imageError[selectedEducation.logo] ? (
                    <img
                      src={selectedEducation.logo}
                      alt={selectedEducation.school}
                      className="w-24 h-24 object-contain bg-white rounded-lg p-2"
                      onError={() =>
                        setImageError((prev) => ({
                          ...prev,
                          [selectedEducation.logo]: true,
                        }))
                      }
                    />
                  ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-lg">
                      <span className="text-3xl font-semibold text-gray-500 dark:text-gray-400">
                        {selectedEducation.school.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {selectedEducation.title}
                    </h3>
                    <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-1">
                      {selectedEducation.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedEducation.period}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {selectedEducation.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      • {detail}
                    </motion.li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedEducation(null)}
                  className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Zatvori
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
