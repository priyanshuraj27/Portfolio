import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Database } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Expertise in developing and training machine learning models with focus in NLP and Autoregressive Models'
    },
    {
      icon: Cpu,
      title: 'AI Model Optimization',
      description: 'Specialized in optimizing and fine-tuning large language models (LLMs) for domain-specific tasks, leveraging expertise from real-world applications in NLP and deep learning.'
    },
    {
      icon: Database,
      title: 'Minimal Backend',
      description: 'Connecting frontend applications with backend using Python frameworks like FastAPI, Django, and Flask for hosting AI models and building scalable APIs.'
    }
  ];

  return (
    <motion.div
      className="min-h-screen p-8 pt-16 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-gradient"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.p 
        className="text-xl text-gray-400 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm a passionate AI developer focused on creating innovative solutions that bridge the gap between cutting-edge AI technology and real-world applications. With expertise in both AI development and software engineering, I bring a unique perspective to every project.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <skill.icon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
