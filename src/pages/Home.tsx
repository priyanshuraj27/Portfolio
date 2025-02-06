import React from 'react';
import { motion } from 'framer-motion';
import { RGBName } from '../components/RGBName';
import { Terminal, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex items-center gap-2 text-xl text-purple-400 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Terminal className="w-6 h-6" />
        <span>Generative AI Developer</span>
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <RGBName name="Raghu Nandan" />

      <motion.p
        className="mt-8 text-xl text-gray-400 max-w-2xl text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Crafting the future of AI-powered applications with creative solutions and cutting-edge technology.
      </motion.p>

      <motion.div
        className="mt-12 flex gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {/* Use NavLink for navigation */}
        <NavLink
          to="/projects"
          className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          View Projects
        </NavLink>

        <NavLink
          to="/contact"
          className="px-8 py-3 rounded-full border border-purple-600 hover:bg-purple-600/10 transition-colors"
        >
          Contact Me
        </NavLink>
      </motion.div>
    </motion.div>
  );
};
