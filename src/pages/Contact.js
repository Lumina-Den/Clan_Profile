import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "vishalmurugan006@gmail.com",
      link: "vishalmurugan006@gmail.com",
      description: "General inquiries and partnerships"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      details: "CFI hall, Stella Mary's College of Engineering",
      link: null,
      description: "Kanyakumari"
    },
    {
      icon: PhoneIcon,
      title: "Discord",
      details: "Join our community server",
      link: "https://discord.gg/lumina",
      description: "Real-time chat and support"
    },
    {
      icon: ClockIcon,
      title: "Community Hours",
      details: "Active daily on Discord",
      link: null,
      description: "Response time: within 24 hours"
    }
  ];

  const faqItems = [
    {
      question: "How can I join LUMINA?",
      answer: "Visit our Join Us page to fill out the application form. We review applications on a rolling basis."
    },
    {
      question: "What programming languages do you focus on?",
      answer: "We work with various languages including Python, JavaScript, Java, C++, and more. We focus on problem-solving skills rather than specific languages."
    },
    {
      question: "Do you offer mentorship programs?",
      answer: "Yes! All members get paired with experienced mentors and have access to our senior developers for guidance."
    },
    {
      question: "Are there any membership fees?",
      answer: "LUMINA membership is completely free. We believe in making quality education and mentorship accessible to everyone."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-charcoal pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In Touch
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about LUMINA? Want to collaborate on a project? 
            Or just want to say hello? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-cyber font-bold text-neon-blue mb-8">
                Let's Connect
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card-cyber p-6 rounded-xl hover:border-neon-blue/60 transition-all duration-300 h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-dark-charcoal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-cyber font-bold text-neon-green mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-neon-blue transition-colors duration-300 font-medium break-all"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-white font-medium break-all">{info.details}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex-grow" />
                    <p className="text-gray-400 text-sm mt-4">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-cyber p-8 rounded-xl"
          >
            <h2 className="text-3xl font-cyber font-bold text-neon-blue mb-6">
              Send us a Message
            </h2>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-neon-green/10 border border-neon-green rounded-lg"
              >
                <p className="text-neon-green font-semibold">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neon-green mb-2">
                    Name *
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
                    Email *
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
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership Question</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="technical">Technical Support</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neon-green mb-2">
                  Subject *
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
                  Message *
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-center text-hot-pink mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="card-cyber p-6 rounded-xl"
              >
                <h3 className="text-lg font-cyber font-bold text-neon-green mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center card-cyber p-8 rounded-xl border-neon-blue/30"
        >
          <h3 className="text-2xl font-cyber font-bold text-neon-blue mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-gray-300 mb-6">
            Don't wait – start your journey with LUMINA today and be part of something extraordinary.
          </p>
          <a
            href="/join"
            className="btn-neon px-8 py-4 text-lg font-semibold inline-block"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
