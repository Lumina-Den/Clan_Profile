import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, EyeIcon, StarIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "CodeCollab Platform",
      description: "Real-time collaborative coding platform with integrated video chat and code execution.",
      tech: ["React", "Node.js", "Socket.io", "Docker"],
      category: "Web Development",
      status: "Live",
      github: "https://github.com/lumina/codecollab",
      demo: "https://codecollab.lumina.dev",
      stars: 234,
      forks: 45,
      contributors: ["Alex Chen", "Sarah Kim", "Marcus Johnson"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web app for visualizing sorting and graph algorithms with step-by-step animations.",
      tech: ["Vue.js", "D3.js", "TypeScript", "Tailwind"],
      category: "Educational",
      status: "In Development",
      github: "https://github.com/lumina/algo-viz",
      demo: null,
      stars: 156,
      forks: 32,
      contributors: ["Elena Rodriguez", "David Park"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    },
    {
      title: "AI Code Reviewer",
      description: "Machine learning model that provides intelligent code review suggestions and bug detection.",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      category: "AI/ML",
      status: "Beta",
      github: "https://github.com/lumina/ai-reviewer",
      demo: "https://ai-reviewer.lumina.dev",
      stars: 89,
      forks: 23,
      contributors: ["Lisa Wang", "Alex Chen"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      title: "Competitive Programming Tracker",
      description: "Dashboard to track progress across multiple competitive programming platforms.",
      tech: ["Next.js", "MongoDB", "Chart.js", "Vercel"],
      category: "Web Development",
      status: "Live",
      github: "https://github.com/lumina/cp-tracker",
      demo: "https://cp-tracker.lumina.dev",
      stars: 312,
      forks: 67,
      contributors: ["David Park", "Sarah Kim", "Marcus Johnson"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Open Source Contribution Bot",
      description: "Automated bot that finds good first issues and helps newcomers contribute to open source.",
      tech: ["Python", "GitHub API", "Discord.py", "Redis"],
      category: "Automation",
      status: "Live",
      github: "https://github.com/lumina/contrib-bot",
      demo: null,
      stars: 445,
      forks: 89,
      contributors: ["Marcus Johnson", "Lisa Wang"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      title: "Code Snippet Manager",
      description: "Personal code snippet library with tagging, search, and sharing capabilities.",
      tech: ["React Native", "Firebase", "Expo", "TypeScript"],
      category: "Mobile",
      status: "In Development",
      github: "https://github.com/lumina/snippet-manager",
      demo: null,
      stars: 67,
      forks: 15,
      contributors: ["Elena Rodriguez", "Alex Chen"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop"
    }
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Mobile', 'Educational', 'Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-neon-green text-dark-charcoal';
      case 'Beta': return 'bg-neon-blue text-dark-charcoal';
      case 'In Development': return 'bg-hot-pink text-dark-charcoal';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-dark-charcoal pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Projects
        </motion.h1>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center card-cyber p-6 rounded-xl">
            <div className="text-3xl font-cyber font-bold text-neon-blue mb-2">25+</div>
            <div className="text-gray-300">Total Projects</div>
          </div>
          <div className="text-center card-cyber p-6 rounded-xl">
            <div className="text-3xl font-cyber font-bold text-hot-pink mb-2">1.2K+</div>
            <div className="text-gray-300">GitHub Stars</div>
          </div>
          <div className="text-center card-cyber p-6 rounded-xl">
            <div className="text-3xl font-cyber font-bold text-neon-green mb-2">300+</div>
            <div className="text-gray-300">Forks</div>
          </div>
          <div className="text-center card-cyber p-6 rounded-xl">
            <div className="text-3xl font-cyber font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Contributors</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 bg-cyber-gray p-2 rounded-full border border-neon-blue/30">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-neon-blue text-dark-charcoal'
                    : 'text-neon-blue hover:bg-neon-blue/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-cyber rounded-xl overflow-hidden hover:border-neon-green/60 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-dark-charcoal/80 border border-neon-blue/50 rounded-full text-xs text-neon-blue">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <h3 className="text-xl font-cyber font-bold text-neon-blue group-hover:text-neon-green transition-colors duration-300 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-cyber-gray border border-neon-blue/30 rounded text-xs text-neon-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-yellow-400">
                      <StarIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <ArrowPathIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.forks}</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {project.contributors.length} contributors
                  </div>
                </div>

                {/* Contributors */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Contributors:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.contributors.map((contributor) => (
                      <span
                        key={contributor}
                        className="text-xs text-hot-pink bg-hot-pink/10 px-2 py-1 rounded"
                      >
                        {contributor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-charcoal transition-all duration-300 rounded text-sm font-semibold flex-1 justify-center"
                  >
                    <CodeBracketIcon className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 border border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-dark-charcoal transition-all duration-300 rounded text-sm font-semibold flex-1 justify-center"
                    >
                      <EyeIcon className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center card-cyber p-12 rounded-xl border-neon-blue/30"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-blue mb-4">
            Explore All Our Projects
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out our complete portfolio on GitHub and contribute to open source projects that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/lumina"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-8 py-4 text-lg font-semibold inline-block"
            >
              Visit Our GitHub
            </a>
            <a
              href="/join"
              className="px-8 py-4 text-lg font-semibold border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-dark-charcoal transition-all duration-300 inline-block"
            >
              Join Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;