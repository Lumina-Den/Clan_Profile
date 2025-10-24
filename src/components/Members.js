import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Members = () => {
  const members = [
    {
      name: "Vishal",
      role: "Captain Basher",
      skills: ["Python", "Java", "Data", "AI/ML"],
      achievements: ["ICPC Finalist", "Google Code Jam Top 100"],
      avatar: "AC"
    },
    {
      name: "Ajisha,
      role: "Captain Basher",
      skills: ["Java", "C++", "Algorithms", "System Design"],
      achievements: ["Codeforces Master", "Meta Hackathon Winner"],
      avatar: "SK"
    },
    {
      name: "Marcus Johnson",
      role: "Project Manager",
      skills: ["Node.js", "MongoDB", "DevOps", "Cloud"],
      achievements: ["AWS Certified", "Open Source Contributor"],
      avatar: "MJ"
    },
    {
      name: "Elena Rodriguez",
      role: "UI/UX Designer",
      skills: ["React", "TypeScript", "Design Systems", "Figma"],
      achievements: ["Design Award Winner", "Frontend Mentor"],
      avatar: "ER"
    },
    {
      name: "David Park",
      role: "Algorithm Specialist",
      skills: ["C++", "Data Structures", "Competitive Programming"],
      achievements: ["IOI Silver Medal", "TopCoder Red"],
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "Full Stack Developer",
      skills: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      achievements: ["Hackathon Champion", "Tech Blogger"],
      avatar: "LW"
    }
  ];

  return (
    <section id="members" className="py-20 bg-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our Elite Team
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-cyber p-6 rounded-xl hover:border-hot-pink/60 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-hot-pink rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <span className="text-2xl font-cyber font-bold text-dark-charcoal">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="text-xl font-cyber font-bold text-neon-blue">{member.name}</h3>
                <p className="text-hot-pink font-medium">{member.role}</p>
              </div>

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

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Ready to join our elite team of developers?
          </p>
          <Link
            to="/join"
            className="btn-neon px-8 py-4 text-lg font-semibold inline-block"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Members;