import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Multi-layer dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-transparent to-[#0B0B0B]/80" />
      </motion.div>

      {/* Animated Floating Orbs */}
      <div className="orb w-96 h-96 top-1/4 left-[-10%] bg-[#D32F2F]/20" style={{ animationDelay: '0s' }} />
      <div className="orb w-64 h-64 bottom-1/4 right-[-5%] bg-[#D32F2F]/15" style={{ animationDelay: '3s', animationDuration: '10s' }} />
      <div className="orb w-48 h-48 top-1/2 right-1/3 bg-[#C9A84C]/10" style={{ animationDelay: '1.5s', animationDuration: '12s' }} />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(211,47,47,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(211,47,47,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/30 text-[#D32F2F] text-xs font-semibold font-body tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full animate-pulse" />
          Doha's Premier Event Management
          <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"
          >
            We Craft
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight gradient-text"
          >
            Extraordinary
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"
          >
            Experiences
            <span className="gradient-text-red"> in Qatar</span>
          </motion.h1>
        </div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-base sm:text-lg lg:text-xl text-[#9A8F7E] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From iconic corporate galas to bespoke luxury weddings — Red Pepper Events transforms visions into{' '}
          <span className="text-[#C9A84C] font-medium">unforgettable moments</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            onClick={scrollToGallery}
            className="group flex items-center gap-3 bg-[#D32F2F] text-white font-semibold font-body px-8 py-4 rounded-full btn-shimmer glow-red transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05, backgroundColor: '#E53935' }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={16} className="fill-current" />
            View Corporate Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            onClick={scrollToContact}
            className="group flex items-center gap-3 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold font-body px-8 py-4 rounded-full hover:bg-[#C9A84C]/10 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05, borderColor: 'rgba(201,168,76,0.8)' }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Stats mini row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {[
            { num: '200+', label: 'Events Executed' },
            { num: '45+', label: '5-Star Reviews' },
            { num: '8+', label: 'Years in Qatar' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl font-bold gradient-text">{s.num}</div>
              <div className="font-body text-xs text-[#9A8F7E] tracking-wider uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#9A8F7E] hover:text-[#D32F2F] transition-colors cursor-pointer group"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="group-hover:text-[#D32F2F]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
