import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Multi-Modal-RAG',
      description: 'This project enables question answering on documents, videos, and images. Users can upload PDFs, DOCX files, images, or YouTube videos to query specific information using advanced language models.',
      tags: ['Streamlit', 'Langchain', 'MistralAI', 'FAISS','Deepseek-r1-Distill-llama-70b'],
      image: 'https://developer-blogs.nvidia.com/wp-content/uploads/2024/03/multi-modal-rag-featured.jpg'
    },
    {
      title: 'GraphRAG with short term Memory',
      description: 'This project combines Neo4j, HuggingFace embeddings, and Google Gemini AI for intelligent Q&A. Using graph-based retrieval, conversational memory, and Cypher queries, it delivers context-aware responses with LangChain and Gradio. 🚀',
      tags: ['Langchain', 'Neo4j', 'Hugggingface Spaces', 'Gemini-2.0-Flash'],
      image: 'https://dist.neo4j.com/wp-content/uploads/20240715102206/graph-creation-1.png'
    },
    {
      title: 'Built and pre-trained custom GPT-2 from scratch',
      description: 'Prompts users to enter their basic queries , doubts ',
      tags: ['python', 'pytorch'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aagsJBmXDC8z9y8S6MnYeIPIz16cZz9rqsxsZXOfQkcmxBLuPBZpAc5IHZnttyyQqhw&usqp=CAU'
    },
    {
      title: 'RAG applications with cloud vector Databases',
      description: 'A project demonstrating cloud-based  Generation techniques to improve real-time knowledge retrieval.',
      tags: ['Qdrant','AstraDB','Langchain'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_OoKECJy1dtdM6h3Mguiz3nW7V0psl-4Kp5NsweQX-XPPmxbpeYmKmZvUXCX0tuZ9rM&usqp=CAU'
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
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <img 
              src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  Code
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
