import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, EyeIcon, StarIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "CodeCollab Platform",
      description: "Real-time collaborative coding platform with integrated video chat and code execution.",
      tech: ["React", "Node.js", "Socket.io", "Docker"],
      status: "Live",
      github: "https://github.com/lumina/codecollab",
      demo: "https://codecollab.lumina.dev",
      stars: 234,
      contributors: ["Alex Chen", "Sarah Kim", "Marcus Johnson"]
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web app for visualizing sorting and graph algorithms with step-by-step animations.",
      tech: ["Vue.js", "D3.js", "TypeScript", "Tailwind"],
      status: "In Development",
      github: "https://github.com/lumina/algo-viz",
      demo: null,
      stars: 156,
      contributors: ["Elena Rodriguez", "David Park"]
    },
    {
      title: "AI Code Reviewer",
      description: "Machine learning model that provides intelligent code review suggestions and bug detection.",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      status: "Beta",
      github: "https://github.com/lumina/ai-reviewer",
      demo: "https://ai-reviewer.lumina.dev",
      stars: 89,
      contributors: ["Lisa Wang", "Alex Chen"]
    },
    {
      title: "Competitive Programming Tracker",
      description: "Dashboard to track progress across multiple competitive programming platforms.",
      tech: ["Next.js", "MongoDB", "Chart.js", "Vercel"],
      status: "Live",
      github: "https://github.com/lumina/cp-tracker",
      demo: "https://cp-tracker.lumina.dev",
      stars: 312,
      contributors: ["David Park", "Sarah Kim", "Marcus Johnson"]
    },
    {
      title: "Open Source Contribution Bot",
      description: "Automated bot that finds good first issues and helps newcomers contribute to open source.",
      tech: ["Python", "GitHub API", "Discord.py", "Redis"],
      status: "Live",
      github: "https://github.com/lumina/contrib-bot",
      demo: null,
      stars: 445,
      contributors: ["Marcus Johnson", "Lisa Wang"]
    },
    {
      title: "Code Snippet Manager",
      description: "Personal code snippet library with tagging, search, and sharing capabilities.",
      tech: ["React Native", "Firebase", "Expo", "TypeScript"],
      status: "In Development",
      github: "https://github.com/lumina/snippet-manager",
      demo: null,
      stars: 67,
      contributors: ["Elena Rodriguez", "Alex Chen"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-neon-green text-dark-charcoal';
      case 'Beta': return 'bg-neon-blue text-dark-charcoal';
      case 'In Development': return 'bg-hot-pink text-dark-charcoal';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-cyber p-6 rounded-xl hover:border-neon-green/60 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-cyber font-bold text-neon-blue group-hover:text-neon-green transition-colors duration-300">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

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
                  <div className="text-gray-400 text-sm">
                    {project.contributors.length} contributors
                  </div>
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
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Explore all our projects on GitHub
          </p>
          <a
            href="https://github.com/lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon px-8 py-4 text-lg font-semibold inline-block"
          >
            Visit Our GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;