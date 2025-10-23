import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Members = () => {
  const members = [
    {
      name: "Alex Chen",
      role: "Clan Leader",
      skills: ["Python", "JavaScript", "React", "AI/ML"],
      achievements: ["ICPC Finalist", "Google Code Jam Top 100"],
      avatar: "AC",
      bio: "Passionate about algorithmic problem solving and mentoring the next generation of developers."
    },
    {
      name: "Sarah Kim",
      role: "Technical Lead",
      skills: ["Java", "C++", "Algorithms", "System Design"],
      achievements: ["Codeforces Master", "Meta Hackathon Winner"],
      avatar: "SK",
      bio: "Expert in competitive programming with a focus on optimization and scalable system architecture."
    },
    {
      name: "Marcus Johnson",
      role: "Project Manager",
      skills: ["Node.js", "MongoDB", "DevOps", "Cloud"],
      achievements: ["AWS Certified", "Open Source Contributor"],
      avatar: "MJ",
      bio: "Bridges the gap between development and deployment with expertise in modern DevOps practices."
    },
    {
      name: "Elena Rodriguez",
      role: "UI/UX Designer",
      skills: ["React", "TypeScript", "Design Systems", "Figma"],
      achievements: ["Design Award Winner", "Frontend Mentor"],
      avatar: "ER",
      bio: "Creates beautiful, accessible interfaces that enhance user experience and developer productivity."
    },
    {
      name: "David Park",
      role: "Algorithm Specialist",
      skills: ["C++", "Data Structures", "Competitive Programming"],
      achievements: ["IOI Silver Medal", "TopCoder Red"],
      avatar: "DP",
      bio: "Specializes in advanced algorithms and data structures for competitive programming excellence."
    },
    {
      name: "Lisa Wang",
      role: "Full Stack Developer",
      skills: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      achievements: ["Hackathon Champion", "Tech Blogger"],
      avatar: "LW",
      bio: "Full-stack expertise with a passion for clean code and innovative web technologies."
    },
    {
      name: "Ryan Thompson",
      role: "Mobile Developer",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      achievements: ["App Store Featured", "Mobile Innovation Award"],
      avatar: "RT",
      bio: "Crafts exceptional mobile experiences across platforms with cutting-edge technologies."
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML"],
      achievements: ["Kaggle Expert", "Research Publication"],
      avatar: "PP",
      bio: "Transforms data into insights using machine learning and advanced statistical methods."
    }
  ];

  const leadership = members.slice(0, 3);
  const teamMembers = members.slice(3);

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
          <h2 className="text-3xl font-cyber font-bold text-neon-blue mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="w-24 h-24 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <span className="text-3xl font-cyber font-bold text-dark-charcoal">
                      {member.avatar}
                    </span>
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
                <div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-cyber p-6 rounded-xl hover:border-neon-green/60 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center mb-3 group-hover:animate-pulse">
                    <span className="text-xl font-cyber font-bold text-dark-charcoal">
                      {member.avatar}
                    </span>
                  </div>
                  <h3 className="text-lg font-cyber font-bold text-neon-green">{member.name}</h3>
                  <p className="text-neon-blue font-medium text-sm">{member.role}</p>
                </div>

                {/* Skills */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyber-gray border border-neon-green/30 rounded text-xs text-neon-green"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{member.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Achievement */}
                <div className="text-center">
                  <span className="text-xs text-hot-pink bg-hot-pink/10 px-2 py-1 rounded">
                    {member.achievements[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center card-cyber p-12 rounded-xl border-neon-blue/30"
        >
          <h3 className="text-3xl font-cyber font-bold text-neon-blue mb-4">
            Ready to Join Our Elite Team?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate developers who share our vision of excellence and innovation.
          </p>
          <Link
            to="/join"
            className="btn-neon px-8 py-4 text-lg font-semibold inline-block"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Members;