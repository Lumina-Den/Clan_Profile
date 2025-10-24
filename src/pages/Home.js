import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClockIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

const Home = () => {
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo and Title */}
          <div className="space-y-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <div className="w-56 h-56 mx-auto relative">
                <img
                  src="/lumina.png"
                  alt="LUMINA Logo"
                  className="w-full h-full object-contain relative z-10"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 45px rgba(0, 255, 255, 0.2))'
                  }}
                />
                {/* Additional glow layers for enhanced effect */}
                <img
                  src="/lumina.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain opacity-30 blur-sm"
                  style={{
                    filter: 'brightness(0) saturate(80%) invert(50%) sepia(96%) saturate(6238%) hue-rotate(180deg) brightness(101%) contrast(101%)'
                  }}
                />
                <img
                  src="/lumina.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain opacity-20 blur-md"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(50%) sepia(96%) saturate(6238%) hue-rotate(180deg) brightness(101%) contrast(101%)'
                  }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-cyber text-6xl md:text-7xl font-bold text-glow"
            >
              <span className="bg-gradient-to-r from-neon-blue via-hot-pink to-neon-green bg-clip-text text-transparent">
                LUMINA
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 font-light"
            >
              <p className="mt-4 text-2xl font-cyber text-hot-pink tracking-widest">
                        "Tanoshinagara manabu"
            </p>
            <p className="text-lg text-gray-400">
                        (Learning while having fun)
            </p>
            </motion.p>
          </div>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-neon-blue text-glow"
          >
            {/*texts here*/}
          </motion.p>

      

          {/* Quick Stats */}
          
        </motion.div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 opacity-30 animate-float">
          <div className="font-mono text-neon-green">&lt;/&gt;</div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-30 animate-float delay-1000">
          <div className="font-mono text-hot-pink">{ }</div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-transparent to-cyber-gray/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* About Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
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
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-cyber font-bold text-center text-hot-pink mb-12">Our Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-3xl font-cyber font-bold text-neon-green mb-8">Our Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {focusAreas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
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
      </section>
      
    </div>
  );
  
};

export default Home;