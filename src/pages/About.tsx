import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Learn more about our mission and values
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 transition-colors duration-200">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Story
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We started with a simple idea: to create beautiful, functional, and
          user-friendly web applications that make a difference. Our journey
          began with a passion for technology and design, and we continue to
          push the boundaries of what's possible on the web.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Today, we're proud to offer solutions that combine cutting-edge
          technology with intuitive design, helping businesses and individuals
          achieve their goals online.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To create innovative web solutions that empower users and businesses
            to achieve their full potential online.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To be the leading provider of modern, accessible, and performant web
            applications that make a positive impact.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Our Values
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Innovation, quality, user experience, and continuous improvement
            drive everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
