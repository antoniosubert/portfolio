import React from "react";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Antonio Šubert. Sva prava pridržana.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/antoniosubert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:schubert.antonio11@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:+38599351202"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Telefon"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
