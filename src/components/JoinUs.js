import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    experience: '',
    motivation: '',
    portfolio: ''
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
    console.log('Form submitted:', formData);
  };

  const requirements = [
    "Passion for coding and continuous learning",
    "Basic knowledge of at least one programming language",
    "Willingness to collaborate and help others",
    "Commitment to attend regular meetings and events",
    "Open to feedback and constructive criticism"
  ];

  const benefits = [
    "Access to exclusive workshops and masterclasses",
    "Mentorship from experienced developers",
    "Collaborative project opportunities",
    "Networking with industry professionals",
    "Priority access to internship opportunities",
    "Certificate of completion for programs"
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-b from-cyber-gray to-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Join LUMINA
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements & Benefits */}
          <div className="space-y-8">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card-cyber p-8 rounded-xl"
            >
              <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
                Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckIcon className="w-5 h-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-cyber p-8 rounded-xl border-hot-pink/30"
            >
              <h3 className="text-2xl font-cyber font-bold text-hot-pink mb-6">
                What You'll Get
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckIcon className="w-5 h-5 text-hot-pink mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-cyber font-bold text-neon-green mb-4">
                Connect With Us
              </h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://discord.gg/lumina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Join Discord
                </a>
                <a
                  href="https://github.com/lumina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-charcoal rounded-lg font-semibold transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-cyber p-8 rounded-xl"
          >
            <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
              Application Form
            </h3>
            
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
                  Programming Skills *
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="e.g., JavaScript, Python, React, Node.js"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Why do you want to join LUMINA? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your motivation and goals..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Portfolio/GitHub (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="https://github.com/yourusername"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-neon py-4 text-lg font-semibold"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;