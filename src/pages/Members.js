import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Members = () => {
  const members = [
    {
      name: "Vishal",
      role: "Captain Bash",
      skills: ["Python", "JavaScript", "React", "AI/ML"],
      achievements: ["ICPC Finalist", "Google Code Jam Top 100"],
      avatar: "/vishal.png", // Changed to image path
      bio: "Passionate about algorithmic problem solving and mentoring the next generation of developers.",
      portfolio: "https://personal-portfolio-vishal.vercel.app/",
      github: "https://github.com/Vishal-46",
      linkedin: "https://www.linkedin.com/in/vishaln24/"
    },
    {
      name: "Ajisha",
      role: "Captain Bash",
      skills: ["Java", "C++", "Algorithms", "System Design"],
      achievements: ["Codeforces Master", "Meta Hackathon Winner"],
      avatar: "/Ajisha.png", // Keep as text for now, can be replaced when image is available
      bio: "Expert in competitive programming with a focus on optimization and scalable system architecture.",
      portfolio: "https://ajisha-codes.dev",
      github: "https://github.com/ajisha",
      linkedin: "https://linkedin.com/in/ajisha-coder"
    },
    
    {
      name: "Infance Tony",
      role: "Senior Basher",
      skills: ["React", "TypeScript", "Design Systems", "Figma"],
      achievements: ["Design Award Winner", "Frontend Mentor"],
      avatar: "/InfanceTony.png", // Keep as text for now, can be replaced when image is available
      bio: "Creates beautiful, accessible interfaces that enhance user experience and developer productivity.",
      portfolio: "https://infance-design.dev",
      github: "https://github.com/infancetony",
      linkedin: "https://linkedin.com/in/infance-tony"
    },
    {
      name: "Moun Sando Falin",
      role: "Algorithm Specialist",
      skills: ["C++", "Data Structures", "Competitive Programming"],
      achievements: ["IOI Silver Medal", "TopCoder Red"],
      avatar: "/Falin.jpeg", // Keep as text for now, can be replaced when image is available
      bio: "Specializes in advanced algorithms and data structures for competitive programming excellence.",
      portfolio: "https://moun-algorithms.dev",
      github: "https://github.com/mounsando",
      linkedin: "https://linkedin.com/in/moun-sando-falin"
    },
    {
      name: "Jenish",
      role: "Full Stack Developer",
      skills: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      achievements: ["Hackathon Champion", "Tech Blogger"],
      avatar: "JH", // Keep as text for now, can be replaced when image is available
      bio: "Full-stack expertise with a passion for clean code and innovative web technologies.",
      portfolio: "https://jenish-fullstack.dev",
      github: "https://github.com/jenish",
      linkedin: "https://linkedin.com/in/jenish-dev"
    },
    {
      name: "Hamdhan Hussain",
      role: "Mobile Developer",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      achievements: ["App Store Featured", "Mobile Innovation Award"],
      avatar: "HH", // Keep as text for now, can be replaced when image is available
      bio: "Crafts exceptional mobile experiences across platforms with cutting-edge technologies.",
      portfolio: "https://hamdhan-mobile.dev",
      github: "https://github.com/hamdhan",
      linkedin: "https://linkedin.com/in/hamdhan-hussain"
    },
    {
      name: "Abin",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "AN", // Keep as text for now, can be replaced when image is available
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://abin-datascience.dev",
      github: "https://github.com/abin",
      linkedin: "https://linkedin.com/in/abin-data"
    }
    ,
    {
      name: "Aparna",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "AS", // Keep as text for now, can be replaced when image is available
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://aparna-ml.dev",
      github: "https://github.com/aparna",
      linkedin: "https://linkedin.com/in/aparna-scientist"
    }
    ,
    {
      name: "Akshaya Libin Sibcy",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "ALS", // Keep as text for now, can be replaced when image is available
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://akshaya-ai.dev",
      github: "https://github.com/akshayasibcy",
      linkedin: "https://linkedin.com/in/akshaya-libin"
    }
    ,
    {
      name: "Nithisha",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "NA", // Keep as text for now, can be replaced when image is available
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://nithisha-analytics.dev",
      github: "https://github.com/nithisha",
      linkedin: "https://linkedin.com/in/nithisha-data"
    }
  ];

  const leadership = members.slice(0, 2);
  const teamMembers = members.slice(2);

  return (
    <div className="min-h-screen bg-dark-charcoal pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Elite Team
        </motion.h1>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-cyber font-bold text-neon-blue mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-cyber p-8 rounded-xl hover:border-hot-pink/60 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse overflow-hidden">
                    {member.avatar.startsWith('/') ? (
                      <img
                        src={member.avatar}
                        alt={`${member.name} Avatar`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-3xl font-cyber font-bold text-dark-charcoal">
                        {member.avatar}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-cyber font-bold text-neon-blue">{member.name}</h3>
                  <p className="text-hot-pink font-medium text-lg">{member.role}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neon-green mb-2">SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyber-gray border border-neon-blue/30 rounded-full text-xs text-neon-blue"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neon-green mb-2">ACHIEVEMENTS</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-hot-pink rounded-full mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio & Social Links */}
                <div className="border-t border-neon-blue/20 pt-4">
                  <div className="flex justify-center space-x-4">
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-neon-blue/20 rounded-full hover:bg-neon-blue/40 transition-all duration-300 group"
                        title="Portfolio"
                      >
                        <GlobeAltIcon className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300 group"
                        title="GitHub"
                      >
                        <svg className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300 group"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-hot-pink mb-12 text-center">Core Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-cyber p-8 rounded-xl hover:border-neon-green/60 transition-all duration-300 group aspect-square flex flex-col"
              >
                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse overflow-hidden">
                    {member.avatar.startsWith('/') ? (
                      <img
                        src={member.avatar}
                        alt={`${member.name} Avatar`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-2xl font-cyber font-bold text-dark-charcoal">
                        {member.avatar}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-cyber font-bold text-neon-green text-center">{member.name}</h3>
                  <p className="text-neon-blue font-medium text-base">{member.role}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center flex-grow">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neon-green mb-2">SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyber-gray border border-neon-green/30 rounded-full text-xs text-neon-green"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neon-green mb-2">ACHIEVEMENTS</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-hot-pink rounded-full mr-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio & Social Links */}
                <div className="border-t border-neon-green/20 pt-4 mt-auto">
                  <div className="flex justify-center space-x-3">
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 bg-neon-green/20 rounded-full hover:bg-neon-green/40 transition-all duration-300 group"
                        title="Portfolio"
                      >
                        <GlobeAltIcon className="w-4 h-4 text-neon-green group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300 group"
                        title="GitHub"
                      >
                        <svg className="w-4 h-4 text-gray-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300 group"
                        title="LinkedIn"
                      >
                        <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default Members;