import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const Members = () => {
  const members = [
    {
      name: "Vishal",
      role: "Captain Basher",
      skills: ["Python", "JavaScript", "React", "AI/ML"],
      achievements: ["ICPC Finalist", "Google Code Jam Top 100"],
      avatar: "/vishal.png",
      bio: "Passionate about algorithmic problem solving and mentoring the next generation of developers.",
      portfolio: "https://personal-portfolio-vishal.vercel.app/",
      github: "https://github.com/Vishal-46",
      linkedin: "https://www.linkedin.com/in/vishaln24/"
    },
    {
      name: "Ajisha",
      role: "Captain Basher",
      skills: ["Java", "C++", "Algorithms", "System Design"],
      achievements: ["Codeforces Master", "Meta Hackathon Winner"],
      avatar: "/Ajisha.png", 
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
      avatar: "/InfanceTony.png", 
      bio: "Creates beautiful, accessible interfaces that enhance user experience and developer productivity.",
      portfolio: "https://infance-design.dev",
      github: "https://github.com/infancetony",
      linkedin: "https://linkedin.com/in/infance-tony"
    },
    {
      name: "Moun Sando Falin",
      role: "Pre-Senior Basher",
      skills: ["C++", "Data Structures", "Competitive Programming"],
      achievements: ["IOI Silver Medal", "TopCoder Red"],
      avatar: "/Falin.jpeg", 
      bio: "Specializes in advanced algorithms and data structures for competitive programming excellence.",
      portfolio: "https://moun-algorithms.dev",
      github: "https://github.com/mounsando",
      linkedin: "https://linkedin.com/in/moun-sando-falin"
    },
    {
      name: "Jenish",
      role: "Pre-Senior Basher",
      skills: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      achievements: ["Hackathon Champion", "Tech Blogger"],
      avatar: "/jenish.png", 
      bio: "Full-stack expertise with a passion for clean code and innovative web technologies.",
      portfolio: "https://jenish-fullstack.dev",
      github: "https://github.com/jenish",
      linkedin: "https://linkedin.com/in/jenish-dev"
    },
    {
      name: "Hamdhan Hussain",
      role: "Pre-Senior Basher",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      achievements: ["App Store Featured", "Mobile Innovation Award"],
      avatar: "/HamdhanHussian.png", 
      bio: "Crafts exceptional mobile experiences across platforms with cutting-edge technologies.",
      portfolio: "https://hamdhan-mobile.dev",
      github: "https://github.com/hamdhan",
      linkedin: "https://linkedin.com/in/hamdhan-hussain"
    },
    {
      name: "Abin",
      role: "Pre-Senior Basher",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "/Abin.png", 
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://abin-datascience.dev",
      github: "https://github.com/abin",
      linkedin: "https://linkedin.com/in/abin-data"
    },
    {
      name: "Aparna",
      role: "Junior Basher",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "/Aparna.png", 
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://aparna-ml.dev",
      github: "https://github.com/aparna",
      linkedin: "https://linkedin.com/in/aparna-scientist"
    },
    {
      name: "Akshaya Libin Sibcy",
      role: "Junior Basher",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "/Akshaya.png", 
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://akshaya-ai.dev",
      github: "https://github.com/akshayasibcy",
      linkedin: "https://linkedin.com/in/akshaya-libin"
    },
    {
      name: "Nithisha",
      role: "Junior Basher",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "/Nithisha.png", 
      bio: "Transforms data into insights using machine learning and advanced statistical methods.",
      portfolio: "https://nithisha-analytics.dev",
      github: "https://github.com/nithisha",
      linkedin: "https://linkedin.com/in/nithisha-data"
    }
  ];

  const captainBashers = members.slice(0, 2); // Captain Bashers - Leadership
  const seniorBasher = members.slice(2, 3); // Senior Basher - Tony
  const preSeniorBashers = members.slice(3, 7); // Pre-Senior Bashers - 3rd year experienced
  const juniorBashers = members.slice(7); // Junior Bashers - 2nd year advancing

  // Animation variants for different categories
  const captainVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
    hover: { scale: 1.05, rotateY: 5, boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)" }
  };

  const seniorVariants = {
    hidden: { opacity: 0, x: -100, rotate: -5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
    hover: { scale: 1.02, rotate: 2, boxShadow: "0 15px 30px rgba(255, 20, 147, 0.4)" }
  };

  const preSeniorVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { y: -8, scale: 1.02, boxShadow: "0 20px 35px rgba(34, 197, 94, 0.3)" }
  };

  const juniorVariants = {
    hidden: { opacity: 0, rotateX: 60, scale: 0.8 },
    visible: { opacity: 1, rotateX: 0, scale: 1 },
    hover: { rotateX: -3, scale: 1.02, boxShadow: "0 18px 32px rgba(168, 85, 247, 0.3)" }
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
          Our Elite Team
        </motion.h1>

        {/* Captain Bashers - Leadership */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-neon-blue mb-12 text-center">Captain Bashers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {captainBashers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={captainVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.8, delay: index * 0.3, type: "spring", stiffness: 200 }}
                className="relative card-cyber p-8 rounded-xl border-2 border-neon-blue/50 bg-gradient-to-br from-dark-charcoal via-cyber-gray to-dark-charcoal group perspective-1000"
                style={{
                  background: "linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,20,147,0.1) 100%)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue via-hot-pink to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute inset-[2px] rounded-xl bg-dark-charcoal"></div>
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex flex-col items-center mb-6">
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center mb-4 overflow-hidden relative"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-hot-pink animate-spin-slow rounded-full opacity-50"></div>
                      {member.avatar.startsWith('/') ? (
                        <img
                          src={member.avatar}
                          alt={`${member.name} Avatar`}
                          className="w-full h-full object-cover rounded-full relative z-10"
                        />
                      ) : (
                        <span className="text-3xl font-cyber font-bold text-dark-charcoal relative z-10">
                          {member.avatar}
                        </span>
                      )}
                    </motion.div>
                    <h3 className="text-2xl font-cyber font-bold text-neon-blue">{member.name}</h3>
                    <p className="text-hot-pink font-medium text-lg">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">{member.bio}</p>

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
                        <motion.a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-neon-blue/20 rounded-full hover:bg-neon-blue/40 transition-all duration-300 group"
                          title="Portfolio"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <GlobeAltIcon className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300 group"
                          title="GitHub"
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300 group"
                          title="LinkedIn"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Senior Basher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-hot-pink mb-12 text-center">Senior Basher</h2>
          <div className="max-w-3xl mx-auto">
            {seniorBasher.map((member, index) => (
              <motion.div
                key={member.name}
                variants={seniorVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.6, delay: 0.2, type: "spring", damping: 15 }}
                className="card-cyber p-6 rounded-xl border border-hot-pink/50 bg-gradient-to-br from-hot-pink/10 via-cyber-gray/80 to-hot-pink/5 group relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex flex-col items-center md:items-start">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-r from-hot-pink to-neon-blue rounded-full flex items-center justify-center mb-3 overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: -8 }}
                    >
                      {member.avatar.startsWith('/') ? (
                        <img src={member.avatar} alt={`${member.name} Avatar`} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-2xl font-cyber font-bold text-dark-charcoal">{member.avatar}</span>
                      )}
                    </motion.div>
                    <h3 className="text-xl font-cyber font-bold text-hot-pink">{member.name}</h3>
                    <p className="text-neon-blue font-medium">{member.role}</p>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-hot-pink mb-2 uppercase">Skills</h4>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {member.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-cyber-gray border border-hot-pink/40 rounded-full text-xs text-hot-pink">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-hot-pink mb-2 uppercase">Achievements</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement) => (
                          <li key={achievement} className="text-xs text-gray-300 flex items-center justify-center md:justify-start">
                            <span className="w-1.5 h-1.5 bg-hot-pink rounded-full mr-2"></span>{achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-center md:justify-start space-x-3 pt-3 border-t border-hot-pink/20">
                      {member.portfolio && (
                        <motion.a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-hot-pink/20 rounded-full hover:bg-hot-pink/40 transition-all duration-300" whileHover={{ scale: 1.2, rotate: 10 }}>
                          <GlobeAltIcon className="w-4 h-4 text-hot-pink" />
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300" whileHover={{ scale: 1.2, rotate: -10 }}>
                          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300" whileHover={{ scale: 1.2, rotate: 10 }}>
                          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pre-Senior Bashers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-green-400 mb-12 text-center">Pre-Senior Bashers</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {preSeniorBashers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={preSeniorVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="card-cyber p-5 rounded-xl border border-green-400/50 bg-gradient-to-br from-green-400/10 via-cyber-gray/80 to-green-400/5 group relative"
              >
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col items-center mb-4">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-3 overflow-hidden"
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.avatar.startsWith('/') ? (
                        <img src={member.avatar} alt={`${member.name} Avatar`} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-xl font-cyber font-bold text-dark-charcoal">{member.avatar}</span>
                      )}
                    </motion.div>
                    <h3 className="text-lg font-cyber font-bold text-green-400 text-center">{member.name}</h3>
                    <p className="text-emerald-300 font-medium text-sm">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-xs leading-relaxed mb-3 text-center flex-grow">{member.bio}</p>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-green-400 mb-1 uppercase">Skills</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-cyber-gray border border-green-400/40 rounded text-xs text-green-400">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-green-400 mb-1 uppercase">Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement) => (
                        <li key={achievement} className="text-xs text-gray-300 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>{achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-green-400/20 pt-3 mt-auto">
                    <div className="flex justify-center space-x-2">
                      {member.portfolio && (
                        <motion.a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 bg-green-400/20 rounded-full hover:bg-green-400/40 transition-all duration-300" whileHover={{ scale: 1.2, y: -3 }}>
                          <GlobeAltIcon className="w-3.5 h-3.5 text-green-400" />
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300" whileHover={{ scale: 1.2, y: -3 }}>
                          <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-7 h-7 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300" whileHover={{ scale: 1.2, y: -3 }}>
                          <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Junior Bashers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-purple-400 mb-12 text-center">Junior Bashers</h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {juniorBashers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={juniorVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 80 }}
                className="card-cyber p-4 rounded-xl border border-purple-400/50 bg-gradient-to-t from-purple-400/10 via-cyber-gray/80 to-purple-400/5 group relative"
              >
                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-3">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full flex items-center justify-center mb-2 overflow-hidden"
                      whileHover={{ rotateY: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      {member.avatar.startsWith('/') ? (
                        <img src={member.avatar} alt={`${member.name} Avatar`} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-lg font-cyber font-bold text-dark-charcoal">{member.avatar}</span>
                      )}
                    </motion.div>
                    <h3 className="text-base font-cyber font-bold text-purple-400 text-center">{member.name}</h3>
                    <p className="text-violet-300 font-medium text-xs">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-xs leading-relaxed mb-3 text-center">{member.bio}</p>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-purple-400 mb-1 uppercase">Skills</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 bg-cyber-gray border border-purple-400/40 rounded text-xs text-purple-400">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-purple-400 mb-1 uppercase">Achievements</h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement) => (
                        <li key={achievement} className="text-xs text-gray-300 flex items-center justify-center">
                          <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>{achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-purple-400/20 pt-2">
                    <div className="flex justify-center space-x-2">
                      {member.portfolio && (
                        <motion.a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 bg-purple-400/20 rounded-full hover:bg-purple-400/40 transition-all duration-300" whileHover={{ scale: 1.3, rotateZ: 15 }}>
                          <GlobeAltIcon className="w-3 h-3 text-purple-400" />
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 bg-gray-600/20 rounded-full hover:bg-gray-600/40 transition-all duration-300" whileHover={{ scale: 1.3, rotateZ: -15 }}>
                          <svg className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        </motion.a>
                      )}
                      {member.linkedin && (
                        <motion.a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 bg-blue-600/20 rounded-full hover:bg-blue-600/40 transition-all duration-300" whileHover={{ scale: 1.3, rotateZ: 15 }}>
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-hot-pink to-neon-green rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-dark-charcoal border border-neon-blue/50 rounded-lg p-8">
              <p className="text-2xl text-gray-300 mb-6 font-cyber">
                Ready to join our <span className="text-neon-blue">elite team</span> of developers?
              </p>
              <Link
                to="/join"
                className="btn-neon px-8 py-4 text-lg font-semibold inline-block transform hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Members;