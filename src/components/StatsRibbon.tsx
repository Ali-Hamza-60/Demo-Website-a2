import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Star, Crown, Zap, TrendingUp, Globe } from 'lucide-react';

const ribbonItems = [
  { icon: Award, text: 'Ranked #1 Event Management Brand in Doha' },
  { icon: Star, text: '45+ Five-Star Corporate Reviews' },
  { icon: Crown, text: 'Luxury Corporate & Gala Specialist' },
  { icon: Zap, text: 'Premium Event Technology & Production' },
  { icon: TrendingUp, text: '200+ Successful Events Delivered' },
  { icon: Globe, text: 'Serving Qatar\'s Elite Since 2016' },
];

const stats = [
  { value: '200+', label: 'Events Executed', suffix: '' },
  { value: '45+', label: 'Five-Star Reviews', suffix: '' },
  { value: '8+', label: 'Years of Excellence', suffix: '' },
  { value: '100%', label: 'Client Satisfaction', suffix: '' },
];

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-2"
      >
        {value}
      </motion.div>
      <div className="font-body text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-[#9A8F7E]">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsRibbon() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Scrolling Ribbon */}
      <div className="relative overflow-hidden bg-[#D32F2F] py-3.5 border-y border-[#D32F2F]/50">
        <div className="ribbon-track">
          {[...ribbonItems, ...ribbonItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 flex-shrink-0"
            >
              <item.icon size={14} className="text-white/80 flex-shrink-0" />
              <span className="font-body text-xs sm:text-sm font-semibold text-white tracking-widest uppercase whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-white/40 mx-2 text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-[#0d0d0d] py-20 sm:py-28">
        {/* Decorative BG Element */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #D32F2F 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="ornament justify-center mb-5">
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
                Our Achievements
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Defining Luxury Events{' '}
              <span className="gradient-text">in Qatar</span>
            </h2>
            <p className="font-body text-[#9A8F7E] mt-4 max-w-xl mx-auto leading-relaxed">
              A legacy built on excellence, precision, and an unwavering commitment to creating experiences that transcend expectations.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.12} />
            ))}
          </div>

          {/* Divider ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 divider-red"
          />

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <blockquote className="font-heading text-xl sm:text-2xl italic text-[#C9A84C] max-w-2xl mx-auto leading-relaxed">
              "Every event we create is a masterpiece — crafted with passion, executed with precision."
            </blockquote>
            <div className="mt-4 font-body text-sm text-[#5a5048] tracking-[0.15em] uppercase">— Red Pepper Events, Doha</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
