import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Zap, Volume2, Camera, Monitor, Lightbulb } from 'lucide-react';

const techItems = [
  {
    icon: Monitor,
    title: 'LED Video Walls',
    description: 'High-resolution LED panels for stunning visual displays at any scale.',
  },
  {
    icon: Lightbulb,
    title: 'Cinematic Lighting',
    description: 'Dynamic moving heads, uplighting rigs, and custom lighting programming.',
  },
  {
    icon: Volume2,
    title: 'Pro Audio Systems',
    description: 'Crystal-clear sound engineering with premium line arrays and subwoofers.',
  },
  {
    icon: Camera,
    title: 'Event Videography',
    description: 'Cinematic multi-camera production with live streaming capabilities.',
  },
  {
    icon: Cpu,
    title: 'Flight Case Systems',
    description: 'Custom flight case rigs with integrated power, AV, and control systems.',
  },
  {
    icon: Zap,
    title: 'Special FX',
    description: 'Cold sparks, CO₂ jets, laser shows, and confetti cannons.',
  },
];

export default function FlightCase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="flight-case" ref={ref} className="relative py-24 sm:py-32 bg-[#0B0B0B] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D32F2F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="ornament mb-5" style={{ justifyContent: 'flex-start' }}>
                <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
                  Event Technology
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Flight Case{' '}
                <span className="gradient-text-red">Production</span>
                <br />
                <span className="gradient-text">& Premium AV</span>
              </h2>
              <p className="font-body text-[#9A8F7E] leading-relaxed mb-6">
                Our state-of-the-art flight case production unit is the backbone of every world-class event we produce. We deploy premium audio, visual, and lighting technology that transforms ordinary spaces into extraordinary stages.
              </p>
              <p className="font-body text-[#7a7060] leading-relaxed mb-8 text-sm">
                Trusted by Qatar's most prestigious brands, our technical team operates with military-grade precision — every cable run, every light cue, every audio mix executed flawlessly.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Premium Equipment', 'Expert Technicians', '24/7 Support', 'On-Time Setup'].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-medium text-[#C9A84C] border border-[#C9A84C]/30 bg-[#C9A84C]/5 px-3 py-1.5 rounded-full tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-shimmer bg-[#D32F2F] text-white font-semibold font-body px-7 py-3.5 rounded-full glow-red-hover transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05, backgroundColor: '#E53935' }}
                whileTap={{ scale: 0.97 }}
              >
                Get Technical Consultation →
              </motion.button>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group card-hover bg-[#0f0f0f] rounded-xl p-5 cursor-default"
                >
                  <div className="w-10 h-10 bg-[#D32F2F]/10 border border-[#D32F2F]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#D32F2F]/20 group-hover:border-[#D32F2F]/40 transition-all duration-300">
                    <Icon size={18} className="text-[#D32F2F]" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white mb-1.5 group-hover:text-[#D32F2F] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs text-[#5a5048] leading-relaxed group-hover:text-[#7a7060] transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0f0f0f] border border-[#D32F2F]/10 rounded-2xl p-6 sm:p-8"
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Ready to Elevate Your Event?
            </h3>
            <p className="font-body text-sm text-[#7a7060]">
              Our technical team is available 24/7 to plan your production needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://wa.me/97433119957"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-semibold font-body px-6 py-3 rounded-full text-sm hover:bg-[#22c05e] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+97433119957"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold font-body px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              +974 3311 9957
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
