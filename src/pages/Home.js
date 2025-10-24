import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ target, suffix = '+', duration = 1500, className = '' }) => {
  const ref = useRef();
  const [value, setValue] = useState(0);
  useEffect(() => {
    let observer;
    let rafId;

    function startCount() {
      const start = performance.now();
      const from = 0;
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (target - from) * progress);
        setValue(current);
        if (progress < 1) rafId = requestAnimationFrame(step);
      }
      rafId = requestAnimationFrame(step);
    }

    if (ref.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCount();
            observer.disconnect();
          }
        });
      }, { threshold: 0.4 });
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  return (
    <div ref={ref} className={className}>
      {value}{suffix}
    </div>
  );
};

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const achievements = [
    { number: 10, suffix: '+', label: 'Active Members', emoji: '👥' },
    { number: 20, suffix: '+', label: 'Completed Projects', emoji: '💼' },
    { number: 5, suffix: '+', label: 'Events Hosted', emoji: '📅' },
  ];

  const featured = [
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
      title: 'Luminous Engine',
      desc: 'A cross-platform toolkit we built to speed up prototyping and community projects.'
    },
    {
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop',
      title: 'Lightwave UI',
      desc: 'An accessible UI kit inspired by neon aesthetics and practical components.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      title: 'Clan Tournament',
      desc: 'Our flagship event that brought members together for friendly competition and learning.'
    }
  ];

  const team = [
    { name: 'Aiko', role: 'Leader' },
    { name: 'Ravi', role: 'Developer' },
    { name: 'Maya', role: 'Designer' }
  ];

  return (
    <div className="min-h-screen bg-hero-gradient-extended text-white">
      {/* HERO */}
      <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mx-auto w-64 h-64 flex items-center justify-center mb-6">
              <img
                src="/lumina-transparent.png"
                alt="Lumina Logo"
                className="w-48 h-48 object-contain logo-transparent"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/lumina.png'; }}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold hero-title mb-2">LUMINA</h1>
            <p className="motto-text text-2xl sm:text-3xl md:text-4xl text-gray-100/95 mb-4">Tanoshinagara manabu</p>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">A creative community within <span className="text-transparent bg-gradient-to-r from-neon-blue via-hot-pink to-neon-green bg-clip-text font-bold text-xl font-cyber">Byte Bash Blitz</span> dedicated to innovation and teamwork.</p>
            <button onClick={() => scrollToSection('about')} className="btn-neon px-8 py-3 rounded-md">Explore More</button>
          </motion.div>
        </div>
      </header>

                    {/* ABOUT */}
  <section id="about" className="py-16 bg-hero-gradient-extended">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-cyber font-bold mb-4">About Lumina Clan</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-300 leading-relaxed mb-6">
            Lumina Clan stands for creativity, collaboration, and courage. We’re a team that thrives on innovation and unity, lighting up our community through meaningful projects and shared goals.
          </motion.p>
          <motion.div className="flex justify-center gap-6 text-2xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="bg-cyber-gray px-4 py-2 rounded-full">💡 Creativity</span>
            <span className="bg-cyber-gray px-4 py-2 rounded-full">🤝 Unity</span>
            <span className="bg-cyber-gray px-4 py-2 rounded-full">🔥 Passion</span>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="card-cyber p-8 rounded-xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-neon-blue mb-3">Vision</h3>
            <p className="text-gray-300">To lead with light — empowering every member to grow, create, and shine within our community.</p>
          </motion.div>
          <motion.div className="card-cyber p-8 rounded-xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-neon-green mb-3">Mission</h3>
            <p className="text-gray-300">To inspire innovation, teamwork, and leadership through every project and event we take on.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-cyber font-bold text-hot-pink mb-8">Lumina in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <motion.div key={a.label} className="card-cyber p-4 rounded-xl text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="text-3xl mb-2">{a.emoji}</div>
                <div className="text-4xl font-extrabold text-neon-blue mb-1">
                  <Counter target={a.number} suffix={a.suffix} />
                </div>
                <div className="text-gray-300">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;