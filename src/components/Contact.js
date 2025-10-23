import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "hello@lumina.dev",
      link: "mailto:hello@lumina.dev"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      details: "Tech Hub, Innovation District",
      link: null
    },
    {
      icon: PhoneIcon,
      title: "Discord",
      details: "Join our community server",
      link: "https://discord.gg/lumina"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Have questions about LUMINA? Want to collaborate on a project? 
                Or just want to say hello? We'd love to hear from you!
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-dark-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-cyber font-bold text-neon-green">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
            >
              <h4 className="font-cyber font-bold text-hot-pink mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/lumina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-gray border border-neon-blue/30 rounded-full flex items-center justify-center hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <span className="text-neon-blue font-bold">G</span>
                </a>
                <a
                  href="https://discord.gg/lumina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-gray border border-neon-blue/30 rounded-full flex items-center justify-center hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <span className="text-neon-blue font-bold">D</span>
                </a>
                <a
                  href="https://twitter.com/lumina_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyber-gray border border-neon-blue/30 rounded-full flex items-center justify-center hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                >
                  <span className="text-neon-blue font-bold">T</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-cyber p-8 rounded-xl"
          >
            <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neon-green mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neon-green mb-2">
                    Email
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
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-neon py-4 text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-neon-blue/20"
        >
          <p className="text-gray-400">
            © 2024 LUMINA - Byte Bash Blitz. Built with passion by our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;