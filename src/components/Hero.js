import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);
    const particles = [];
    const PARTICLE_COUNT = Math.max(30, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 20000));

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 1 + Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          hue: 180 + Math.random() * 120,
        });
      }
    }

    function resize() {
      width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
      height = (canvas.height = canvas.offsetHeight * devicePixelRatio);
      ctx.scale(devicePixelRatio, devicePixelRatio);
      initParticles();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle gradient overlay
      const g = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      g.addColorStop(0, 'rgba(10, 10, 30, 0.2)');
      g.addColorStop(0.5, 'rgba(30, 10, 40, 0.12)');
      g.addColorStop(1, 'rgba(10, 30, 40, 0.08)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = canvas.offsetWidth + 10;
        if (p.x > canvas.offsetWidth + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.offsetHeight + 10;
        if (p.y > canvas.offsetHeight + 10) p.y = -10;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        gradient.addColorStop(0, `hsla(${p.hue},100%,70%,0.9)`);
        gradient.addColorStop(0.4, `hsla(${p.hue},80%,60%,0.25)`);
        gradient.addColorStop(1, `hsla(${p.hue},60%,40%,0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // optional subtle connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(200,220,255,${(120 - dist) / 500})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    let raf = null;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    initParticles();
    loop();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Canvas particle background */}
      <canvas ref={canvasRef} id="hero-canvas" className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* subtle animated gradient layers */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60 mix-blend-screen z-0" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 flex items-center justify-center rounded-3xl bg-gradient-to-br from-neon-blue to-hot-pink shadow-[0_10px_40px_rgba(255,80,160,0.12)]">
              <span className="text-4xl font-bold text-dark-charcoal">L</span>
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-extrabold"
            >
              <span className="block">LUMINA CLAN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-tagline text-base sm:text-lg md:text-xl text-gray-200/90"
            >
              Forged in Light. United in Spirit.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto text-md sm:text-lg text-gray-300 leading-relaxed"
          >
            We celebrate skill, teamwork, and the bright energy that drives our community. Join events,
            showcase projects, and grow with a clan that carries light into every match.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button
              onClick={() => scrollToSection('join')}
              className="btn-neon px-8 py-4 text-lg font-semibold"
              aria-label="Join the Clan"
            >
              Join the Clan
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 text-lg font-semibold border-2 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-dark-charcoal transition-all duration-300 rounded-md"
            >
              Explore Our Legacy
            </button>
          </motion.div>

          <div className="mt-6 text-sm text-gray-400">A proud clan of the [Community Name]</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;