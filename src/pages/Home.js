import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hot-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo and Title */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <div className="w-56 h-56 mx-auto mb-1 relative">
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
                    filter: 'brightness(0) saturate(100%) invert(50%) sepia(96%) saturate(6238%) hue-rotate(180deg) brightness(101%) contrast(101%)'
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
              className="font-cyber text-6xl md:text-8xl font-bold text-glow"
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
              Byte Bash Blitz
            </motion.p>
          </div>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-neon-blue text-glow"
          >
            "Empowering Innovation, One Line at a Time"
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Join our elite coding community where passion meets innovation.
            We're building the future through competitive programming, cutting-edge projects, and collaborative learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              to="/join"
              className="btn-neon px-8 py-4 text-lg font-semibold"
            >
              Join Our Clan
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 text-lg font-semibold border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-dark-charcoal transition-all duration-300"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-cyber font-bold text-neon-blue">10+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cyber font-bold text-hot-pink">15+</div>
              <div className="text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cyber font-bold text-neon-green">45+</div>
              <div className="text-gray-400">Competitions Won</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 opacity-30 animate-float">
          <div className="font-mono text-neon-green">&lt;/&gt;</div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-30 animate-float delay-1000">
          <div className="font-mono text-hot-pink">{ }</div>
        </div>
      </div>
    </div>
  );
};

export default Home;