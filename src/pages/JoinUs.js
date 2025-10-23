import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, UserGroupIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    year: '',
    skills: '',
    experience: '',
    motivation: '',
    portfolio: '',
    availability: '',
    referral: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const requirements = [
    "Passion for coding and continuous learning",
    "Basic knowledge of at least one programming language",
    "Willingness to collaborate and help others",
    "Commitment to attend regular meetings and events",
    "Open to feedback and constructive criticism",
    "Available for at least 10 hours per week"
  ];

  const benefits = [
    "Access to exclusive workshops and masterclasses",
    "Mentorship from experienced developers",
    "Collaborative project opportunities",
    "Networking with industry professionals",
    "Priority access to internship opportunities",
    "Certificate of completion for programs",
    "Free access to premium development tools",
    "Participation in hackathons and competitions"
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Fill out our comprehensive application form",
      icon: UserGroupIcon
    },
    {
      step: 2,
      title: "Technical Assessment",
      description: "Complete a coding challenge in your preferred language",
      icon: AcademicCapIcon
    },
    {
      step: 3,
      title: "Interview & Onboarding",
      description: "Meet the team and start your LUMINA journey",
      icon: TrophyIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-gray to-dark-charcoal pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Join LUMINA
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to take your coding skills to the next level? Join our elite community of developers 
            and be part of something extraordinary.
          </p>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-cyber font-bold text-center text-neon-blue mb-12">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {applicationProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center card-cyber p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-dark-charcoal" />
                </div>
                <div className="text-2xl font-cyber font-bold text-neon-blue mb-2">
                  Step {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements & Benefits */}
          <div className="space-y-8">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center card-cyber p-8 rounded-xl border-neon-green/30"
            >
              <h3 className="text-xl font-cyber font-bold text-neon-green mb-4">
                Connect With Us First
              </h3>
              <p className="text-gray-300 mb-6">
                Join our community channels to get a feel for our culture before applying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-cyber p-8 rounded-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-cyber font-bold text-neon-blue">
                Application Form
              </h3>
              <div className="text-sm text-gray-400">
                Step {currentStep} of {totalSteps}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step <= currentStep
                        ? 'bg-neon-blue text-dark-charcoal'
                        : 'bg-cyber-gray text-gray-400 border border-gray-600'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="w-full bg-cyber-gray rounded-full h-2">
                <div
                  className="bg-neon-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neon-green mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neon-green mb-2">
                        University/Institution
                      </label>
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                        placeholder="Your university or company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neon-green mb-2">
                      Academic Year / Experience Level
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select your level</option>
                      <option value="freshman">Freshman / Beginner</option>
                      <option value="sophomore">Sophomore / 1-2 years</option>
                      <option value="junior">Junior / 2-3 years</option>
                      <option value="senior">Senior / 3+ years</option>
                      <option value="graduate">Graduate / Professional</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Technical Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
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
                      placeholder="e.g., JavaScript, Python, React, Node.js, C++"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neon-green mb-2">
                      Experience Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neon-green mb-2">
                      Portfolio/GitHub *
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neon-green mb-2">
                      Weekly Availability *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select availability</option>
                      <option value="5-10">5-10 hours per week</option>
                      <option value="10-15">10-15 hours per week</option>
                      <option value="15-20">15-20 hours per week</option>
                      <option value="20+">20+ hours per week</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Motivation and Final Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neon-green mb-2">
                      Why do you want to join LUMINA? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your motivation, goals, and what you hope to achieve with LUMINA..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neon-green mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cyber-gray border border-neon-blue/30 rounded-lg text-white focus:border-neon-blue focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="friend">Friend/Current Member</option>
                      <option value="social">Social Media</option>
                      <option value="university">University/School</option>
                      <option value="event">Event/Workshop</option>
                      <option value="website">Website/Search</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-500 text-gray-400 hover:border-gray-400 hover:text-gray-300 transition-all duration-300 rounded font-semibold"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-3 bg-neon-blue text-dark-charcoal hover:bg-neon-blue/80 transition-all duration-300 rounded font-semibold"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto btn-neon px-8 py-3 text-lg font-semibold"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;