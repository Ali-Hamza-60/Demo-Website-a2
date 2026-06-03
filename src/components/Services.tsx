import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Heart, Cpu, LayoutDashboard, ArrowUpRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Corporate Events &',
    titleSpan: 'Product Launches',
    description:
      'We orchestrate high-impact corporate experiences — from executive conferences and annual galas to brand product launches that command attention and drive results.',
    features: ['Executive Conferences', 'Product Unveilings', 'Annual Corporate Galas', 'Award Ceremonies'],
    gradient: 'from-[#D32F2F]/20 to-[#D32F2F]/5',
    accentColor: '#D32F2F',
    tag: 'Corporate',
    delay: 0,
  },
  {
    icon: Heart,
    title: 'Luxury Weddings &',
    titleSpan: 'Gala Dinners',
    description:
      'Immersive luxury wedding experiences and gala dinners crafted with unmatched elegance. Every detail — from bespoke florals to fine dining — curated to perfection.',
    features: ['Bespoke Weddings', 'Gala Dinners', 'Royal Receptions', 'Honeymoon Styling'],
    gradient: 'from-[#C9A84C]/20 to-[#C9A84C]/5',
    accentColor: '#C9A84C',
    tag: 'Luxury',
    delay: 0.1,
  },
  {
    icon: Cpu,
    title: 'Event Technology &',
    titleSpan: 'Premium Lighting',
    description:
      'Cutting-edge event production featuring flight case systems, premium LED technology, sound engineering, and cinematic lighting design that transforms any venue.',
    features: ['Flight Case Production', 'LED Wall Systems', 'Pro Sound Engineering', 'Cinematic Lighting'],
    gradient: 'from-[#D32F2F]/20 to-[#C9A84C]/10',
    accentColor: '#D32F2F',
    tag: 'Production',
    delay: 0.2,
  },
  {
    icon: LayoutDashboard,
    title: 'Exhibition Stand &',
    titleSpan: 'Stage Designing',
    description:
      'Award-winning exhibition stand design and stage production. We build immersive brand worlds that captivate audiences and elevate your brand presence at any scale.',
    features: ['Custom Exhibition Stands', 'Stage Architecture', 'Brand Environment', 'Trade Show Booths'],
    gradient: 'from-[#C9A84C]/20 to-[#D32F2F]/10',
    accentColor: '#C9A84C',
    tag: 'Design',
    delay: 0.3,
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: service.delay, ease: [0.22, 1, 0.36, 1] }}
      className="group card-hover relative rounded-2xl overflow-hidden bg-[#0f0f0f] cursor-pointer"
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${service.accentColor}, transparent 70%)`
        }}
      />

      <div className="relative z-10 p-7 sm:p-8">
        {/* Tag */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="font-body text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border"
            style={{
              color: service.accentColor,
              borderColor: `${service.accentColor}40`,
              background: `${service.accentColor}10`
            }}
          >
            {service.tag}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
            style={{ background: `${service.accentColor}20`, color: service.accentColor }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${service.accentColor}20, ${service.accentColor}05)`,
            border: `1px solid ${service.accentColor}25`
          }}
        >
          <Icon size={24} style={{ color: service.accentColor }} />
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight mb-1">
          {service.title}
        </h3>
        <h3
          className="font-heading text-xl sm:text-2xl font-bold leading-tight mb-4"
          style={{ color: service.accentColor }}
        >
          {service.titleSpan}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-[#7a7060] leading-relaxed mb-6 group-hover:text-[#9A8F7E] transition-colors duration-300">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 font-body text-xs text-[#9A8F7E]">
              <Sparkles size={12} style={{ color: service.accentColor }} className="flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: `linear-gradient(90deg, ${service.accentColor}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative py-24 sm:py-32 bg-[#0B0B0B]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(211,47,47,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(211,47,47,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="ornament justify-center mb-5">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
              What We Do
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Our Premium{' '}
            <span className="gradient-text-red">Services</span>
          </h2>
          <p className="font-body text-[#9A8F7E] max-w-xl mx-auto leading-relaxed">
            Comprehensive event solutions delivered by Qatar's most trusted event management experts — built for brands that demand nothing but the best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-body text-[#7a7060] text-sm mb-5">
            Not sure which service fits your vision?
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shimmer bg-transparent border border-[#D32F2F]/50 text-[#D32F2F] font-semibold font-body px-8 py-3 rounded-full hover:bg-[#D32F2F]/10 transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05, borderColor: 'rgba(211,47,47,0.9)' }}
            whileTap={{ scale: 0.97 }}
          >
            Request a Custom Proposal →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
