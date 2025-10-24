import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attraction: '',
    goals: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Lumina Clan application submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', attraction: '', goals: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-gray to-dark-charcoal pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Join the Lumina Clan
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lumina is a proud clan within the larger <strong className="text-neon-blue">Byte-Bash-Blitz</strong> community. 
            We are a close-knit group of innovators and creators. If you're ready to build, learn, and shine, you've found your home.
          </p>
          <p className="mt-4 text-2xl font-cyber text-hot-pink tracking-widest">
            "Tanoshinagara manabu"
          </p>
          <p className="text-lg text-gray-400">
            (Learning while having fun)
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div className="card-cyber p-8 rounded-xl">
            <h2 className="text-3xl font-cyber font-bold text-neon-blue mb-8">
              Tell Us About You
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  What attracts you to the Lumina clan? *
                </label>
                <textarea
                  name="attraction"
                  value={formData.attraction}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us what caught your eye..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  What do you hope to create or learn with us? *
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe your goals and aspirations..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full btn-neon px-8 py-3 text-lg font-semibold"
                >
                  Apply to Join Lumina
                </button>
              </div>
            </form>
          </div>

          {/* Community Info */}
          <div className="space-y-8">
            <div className="card-cyber p-8 rounded-xl flex flex-col items-center">
                <img 
                    src="/lupfp.png" 
                    alt="Lumina Clan" 
                    className="w-48 h-48 object-cover rounded-full mb-6 opacity-80 border-4 border-neon-blue/50"
                />
            </div>
            <div className="card-cyber p-8 rounded-xl border-hot-pink/30">
              <h3 className="text-2xl font-cyber font-bold text-hot-pink mb-6">
                About Our Community
              </h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  The <strong className="font-bold text-white">Byte-Bash-Blitz</strong> community, led by Dr. Pon. Parthiban at Stella Mary's College of Engineering, is a dynamic hub designed to forge the next generation of tech innovators. It’s a place to learn the latest technologies, compete in exciting challenges, and transform your passion into impactful, real-world projects.
                </p>
                <p>
                  Within this amazing ecosystem is the <strong className="font-bold text-white">Lumina Clan</strong>—a collaborative and supportive family where you can truly shine. We focus on holistic growth, providing a space where you can develop not only your technical abilities but also crucial soft skills like teamwork, communication, and leadership. As a member of Lumina, you get all the benefits of the main community, plus exclusive access to our clan's unique projects, dedicated mentorship, and special events.
                </p>
              </div>
            </div>
            <div className="text-center card-cyber p-8 rounded-xl border-neon-green/30">
              <h3 className="text-xl font-cyber font-bold text-neon-green mb-4">
                Explore the Community
              </h3>
              <p className="text-gray-300 mb-6">
                Check out the official handbook and join the main Discord to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://basher-handbook.notion.site/2-Getting-Started-38af3b3a0466448d90bcd2ecc5fd575f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Community Handbook
                </a>
                <a
                  href="https://discord.gg/Z4cwxuMU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-charcoal rounded-lg font-semibold transition-all duration-300"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default JoinUs;
