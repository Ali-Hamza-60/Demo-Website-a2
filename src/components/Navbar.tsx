import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Flight Case', href: '#flight-case' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActiveLink(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3 shadow-lg shadow-black/50' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Logo Icon */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 bg-[#D32F2F] rounded-lg rotate-12 group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 6 6 6 9c0 4 3 6 6 9 3-3 6-5 6-9 0-3-2-7-6-7z" fill="white" opacity="0.9"/>
                  <circle cx="12" cy="9" r="2.5" fill="#D32F2F"/>
                </svg>
              </div>
            </div>
            {/* Logo Text */}
            <div className="text-left">
              <div className="font-heading text-lg font-bold leading-tight text-white tracking-wide">
                Red Pepper
              </div>
              <div className="text-[10px] font-body font-medium tracking-[0.25em] text-[#C9A84C] uppercase leading-tight">
                Events
              </div>
            </div>
          </motion.button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeLink === link.href
                      ? 'text-[#D32F2F]'
                      : 'text-[#c8bfb0] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Book Consultation CTA */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              className="hidden md:flex items-center gap-2 bg-[#D32F2F] text-white text-sm font-semibold font-body px-5 py-2.5 rounded-full btn-shimmer glow-red-hover transition-all duration-300 border border-[#D32F2F]/50"
              whileHover={{ scale: 1.05, backgroundColor: '#E53935' }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={14} />
              Book Consultation
            </motion.button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden glass border-t border-[#D32F2F]/10 mt-2"
            >
              <ul className="px-6 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="w-full text-left font-body text-sm font-medium text-[#c8bfb0] hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full flex-shrink-0" />
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="w-full mt-2 flex items-center justify-center gap-2 bg-[#D32F2F] text-white text-sm font-semibold font-body px-5 py-3 rounded-xl btn-shimmer"
                  >
                    <Phone size={14} />
                    Book Consultation
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
