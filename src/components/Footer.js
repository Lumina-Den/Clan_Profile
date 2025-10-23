import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Members', href: '/members' },
      { name: 'Projects', href: '/projects' }
    ],
    'Community': [
      { name: 'Events', href: '/events' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Join Us', href: '/join' },
      { name: 'Contact', href: '/contact' }
    ],
    'Resources': [
      { name: 'GitHub', href: 'https://github.com/lumina', external: true },
      { name: 'Discord', href: 'https://discord.gg/lumina', external: true },
      { name: 'Documentation', href: '#', external: true },
      { name: 'Blog', href: '#', external: true }
    ]
  };

  return (
    <footer className="bg-cyber-gray border-t border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                <img 
                  src="/lumina.png" 
                  alt="LUMINA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-cyber text-xl font-bold text-neon-blue">LUMINA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering innovation through collaborative coding and competitive programming excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/lumina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cyber-gray border border-neon-blue/30 rounded-full flex items-center justify-center hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
              >
                <span className="text-neon-blue text-xs font-bold">G</span>
              </a>
              <a
                href="https://discord.gg/lumina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cyber-gray border border-neon-blue/30 rounded-full flex items-center justify-center hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
              >
                <span className="text-neon-blue text-xs font-bold">D</span>
              </a>
              <a
                href="https://twitter.com/lumina_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-cyber-gray border border-neon-blue/30 rounded-full flex items-center justify-center hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
              >
                <span className="text-neon-blue text-xs font-bold">T</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-cyber font-bold text-neon-green mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-blue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} LUMINA - Byte Bash Blitz. Built with passion by our community.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
              Code of Conduct
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;