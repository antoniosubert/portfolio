import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig, validateEmailConfig } from "../config/email";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(emailConfig.publicKey || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    if (!validateEmailConfig()) {
      setSubmitStatus({
        type: "error",
        message:
          "EmailJS configuration is missing. Please check your environment variables.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        form.current!,
        emailConfig.publicKey!
      );

      if (result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Poruka je uspješno poslana! Javit ću vam se uskoro.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error: any) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          error?.text ||
          "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          Kontakt
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Javite mi se za suradnju ili pitanja
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Kontakt informacije
          </h2>
          <div className="space-y-4">
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Lokacija
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Matice hrvatske 1/6
                <br />
                34550, Pakrac, Hrvatska
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Email
              </h3>
              <a
                href="mailto:schubert.antonio11@gmail.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                schubert.antonio11@gmail.com
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                GitHub
              </h3>
              <a
                href="https://github.com/antoniosubert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                github.com/antoniosubert
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Telefon
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                (+385) 99351202
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Pošaljite poruku
          </h2>
          <AnimatePresence>
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mb-4 p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-100"
                    : "bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-100"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Ime
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Poruka
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors"
                required
              ></motion.textarea>
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Slanje..." : "Pošalji poruku"}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
