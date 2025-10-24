import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Members = () => {
  // Leadership team (Captain Bashers)
  const leadership = [
    {
      name: "Vishal",
      role: "Captain Basher",
      skills: ["Python", "Java", "Data Science", "AI/ML"],
      achievements: ["ICPC Finalist", "Google Code Jam Top 100", "Tech Lead @ Major Corp"],
      avatar: "V",
      portfolio: "https://vishal-portfolio.dev",
      github: "https://github.com/vishal"
    },
    {
      name: "Ajisha",
      role: "Captain Basher", 
      skills: ["Java", "C++", "Algorithms", "System Design"],
      achievements: ["Codeforces Master", "Meta Hackathon Winner", "Open Source Maintainer"],
      avatar: "A",
      portfolio: "https://ajisha-dev.com",
      linkedin: "https://linkedin.com/in/ajisha"
    }
  ];

  // Senior developers
  const seniorBashers = [
    {
      name: "Marcus Johnson",
      role: "Senior Basher",
      skills: ["Node.js", "MongoDB", "DevOps", "Cloud Architecture"],
      achievements: ["AWS Solutions Architect", "Kubernetes Expert", "DevOps Pioneer"],
      avatar: "M",
      github: "https://github.com/marcus"
    },
    {
      name: "Elena Rodriguez", 
      role: "Senior Basher",
      skills: ["React", "TypeScript", "System Design", "Microservices"],
      achievements: ["Senior Full Stack Engineer", "Tech Conference Speaker", "Mentor"],
      avatar: "E",
      portfolio: "https://elena-codes.dev"
    }
  ];

  // Core development team
  const coreDevelopers = [
    {
      name: "David Park",
      role: "Core Developer",
      skills: ["C++", "Data Structures", "Competitive Programming", "Algorithms"],
      achievements: ["IOI Silver Medal", "TopCoder Red", "Algorithm Contest Winner"],
      avatar: "D"
    },
    {
      name: "Lisa Wang",
      role: "Core Developer", 
      skills: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      achievements: ["Hackathon Champion", "Tech Blogger", "Full Stack Expert"],
      avatar: "L"
    },
    {
      name: "Alex Chen",
      role: "Core Developer",
      skills: ["React Native", "Flutter", "Mobile Development", "UI/UX"],
      achievements: ["Mobile App Expert", "Design System Creator", "User Experience Advocate"],
      avatar: "A"
    }
  ];

  // Data science team
  const dataScientists = [
    {
      name: "Sarah Kim",
      role: "Data Scientist",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
      achievements: ["ML Research Published", "Data Visualization Expert", "AI Innovation Award"],
      avatar: "S"
    },
    {
      name: "Robert Taylor",
      role: "Data Scientist",
      skills: ["R", "Statistics", "Big Data", "Predictive Modeling"],
      achievements: ["Data Science Certification", "Research Analyst", "Statistical Modeling Expert"],
      avatar: "R"
    }
  ];

  // Animation variants for different categories
  const captainVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100,
        duration: 1.2 
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 10,
      rotateX: 5,
      transition: { duration: 0.3 }
    }
  };

  const seniorVariants = {
    hidden: { opacity: 0, x: -100, rotateZ: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateZ: 0,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 120,
        duration: 0.8 
      }
    },
    hover: {
      x: 10,
      rotateZ: 2,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const coreVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 150,
        duration: 0.6 
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const dataVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: 45 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        damping: 18, 
        stiffness: 80,
        duration: 1.0 
      }
    },
    hover: {
      rotate: -2,
      scale: 1.04,
      transition: { duration: 0.3 }
    }
  };

  const MemberCard = ({ member, variants, categoryColor, index }) => (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      custom={index}
      className={`
        relative perspective-1000 wireframe-glow
        bg-gradient-to-br from-cyber-gray/80 to-cyber-gray/60 
        border-2 border-${categoryColor}/30 rounded-xl p-6 
        backdrop-blur-sm transition-all duration-300 
        hover:border-${categoryColor} hover:shadow-2xl
        group overflow-hidden
      `}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: `0 10px 30px rgba(0, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
      }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10 animate-pulse-neon">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className={`border border-${categoryColor}/20`} />
          ))}
        </div>
      </div>

      {/* Avatar section */}
      <div className="relative flex flex-col items-center mb-6 z-10">
        <motion.div 
          className={`
            w-20 h-20 rounded-full flex items-center justify-center mb-4 
            bg-gradient-to-r from-${categoryColor} to-hot-pink
            shadow-lg transform-gpu group-hover:animate-spin-slow
          `}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl font-cyber font-bold text-dark-charcoal">
            {member.avatar}
          </span>
        </motion.div>
        
        <h3 className={`text-2xl font-cyber font-bold text-${categoryColor} mb-1`}>
          {member.name}
        </h3>
        <p className="text-hot-pink font-medium text-lg uppercase tracking-wider">
          {member.role}
        </p>
      </div>

      {/* Skills section */}
      <div className="mb-4 relative z-10">
        <h4 className="text-lg font-semibold text-neon-green mb-2 uppercase tracking-wide">
          Core Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: skillIndex * 0.1 }}
              className={`
                px-3 py-1 rounded-full text-md font-medium
                bg-${categoryColor}/20 border border-${categoryColor}/50 
                text-${categoryColor} backdrop-blur-sm
                hover:bg-${categoryColor}/30 transition-all duration-200
              `}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Achievements section */}
      <div className="mb-4 relative z-10">
        <h4 className="text-lg font-semibold text-neon-green mb-2 uppercase tracking-wide">
          Key Achievements
        </h4>
        <ul className="space-y-1">
          {member.achievements.map((achievement, achieveIndex) => (
            <motion.li 
              key={achievement} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: achieveIndex * 0.1 }}
              className="text-lg text-gray-300 flex items-center"
            >
              <span className={`w-2 h-2 bg-${categoryColor} rounded-full mr-2 animate-pulse`}></span>
              {achievement}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Social links */}
      {(member.portfolio || member.github || member.linkedin) && (
        <div className="flex justify-center space-x-3 mt-4 relative z-10">
          {member.portfolio && (
            <motion.a
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`p-2 rounded-full bg-${categoryColor}/20 border border-${categoryColor}/50 hover:bg-${categoryColor}/30 transition-all duration-200`}
            >
              <span className="text-lg">🌐</span>
            </motion.a>
          )}
          {member.github && (
            <motion.a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className={`p-2 rounded-full bg-${categoryColor}/20 border border-${categoryColor}/50 hover:bg-${categoryColor}/30 transition-all duration-200`}
            >
              <span className="text-lg">📱</span>
            </motion.a>
          )}
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`p-2 rounded-full bg-${categoryColor}/20 border border-${categoryColor}/50 hover:bg-${categoryColor}/30 transition-all duration-200`}
            >
              <span className="text-lg">💼</span>
            </motion.a>
          )}
        </div>
      )}

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-${categoryColor} rounded-full`}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${80 - i * 10}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-dark-charcoal to-cyber-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Elite Team
        </motion.h2>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-blue text-center mb-8 text-glow">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <MemberCard 
                key={member.name}
                member={member} 
                variants={captainVariants}
                categoryColor="neon-blue"
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Senior Bashers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-cyber font-bold text-hot-pink text-center mb-8 text-glow">
            Senior Bashers
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seniorBashers.map((member, index) => (
              <MemberCard 
                key={member.name}
                member={member} 
                variants={seniorVariants}
                categoryColor="hot-pink"
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Core Developers Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-green text-center mb-8 text-glow">
            Core Developers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreDevelopers.map((member, index) => (
              <MemberCard 
                key={member.name}
                member={member} 
                variants={coreVariants}
                categoryColor="neon-green"
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Data Scientists Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-cyber font-bold text-purple-400 text-center mb-8 text-glow">
            Data Scientists
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dataScientists.map((member, index) => (
              <MemberCard 
                key={member.name}
                member={member} 
                variants={dataVariants}
                categoryColor="purple-400"
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
    </section>
  );
};

export default Members;
