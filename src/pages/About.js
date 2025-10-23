import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const About = () => {
  const aboutCards = [
    {
      icon: ClockIcon,
      title: "Our History",
      description: "Founded by passionate developers who believe in the power of collaborative coding and continuous learning. Born from late-night coding sessions and a shared vision of excellence."
    },
    {
      icon: EyeIcon,
      title: "Vision",
      description: "To create a thriving ecosystem where developers push boundaries and build innovative solutions together. We envision a future shaped by our collective code."
    },
    {
      icon: HeartIcon,
      title: "Core Values",
      description: "Innovation, collaboration, continuous learning, and excellence in competitive programming. We foster growth through mentorship and shared knowledge."
    }
  ];

  const focusAreas = [
    "Competitive Programming",
    "Algorithm Challenges",
    "Web Development",
    "Mobile Applications",
    "AI & Machine Learning",
    "Open Source Projects"
  ];

  const achievements = [
    { number: "50+", label: "Active Members", color: "text-neon-blue" },
    { number: "25+", label: "Completed Projects", color: "text-hot-pink" },
    { number: "100+", label: "Competitions Won", color: "text-neon-green" },
    { number: "15+", label: "Industry Partners", color: "text-neon-blue" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-charcoal to-cyber-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About LUMINA
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            LUMINA represents the pinnacle of collaborative coding excellence. We are more than just a clan – 
            we are a community of innovators, problem-solvers, and digital architects building tomorrow's technology today.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-cyber p-8 rounded-xl hover:border-neon-blue/60 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <card.icon className="w-8 h-8 text-dark-charcoal" />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-neon-blue">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-cyber font-bold text-center text-hot-pink mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center card-cyber p-6 rounded-xl"
              >
                <div className={`text-4xl font-cyber font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-green mb-8">Our Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-3 bg-cyber-gray border border-neon-green/50 rounded-full text-neon-green font-medium hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="card-cyber p-12 rounded-xl text-center border-neon-blue/30"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-blue mb-6">Our Mission</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            To cultivate a generation of exceptional developers who don't just write code, but craft solutions 
            that transform industries and improve lives. Through rigorous training, collaborative projects, 
            and unwavering support, we prepare our members to lead the technological revolution.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;