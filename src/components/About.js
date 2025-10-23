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

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-charcoal to-cyber-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About LUMINA
        </motion.h2>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-cyber font-bold text-hot-pink mb-8">Our Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-6 py-3 bg-cyber-gray border border-neon-green/50 rounded-full text-neon-green font-medium hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300 cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;