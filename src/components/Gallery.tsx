import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';

// For gallery items without real images, we use rich gradient backgrounds with overlaid content
const galleryItems = [
  {
    key: 'g1',
    src: gallery1,
    gradient: null,
    title: 'Corporate Gala Dinner',
    category: 'Corporate',
    size: 'tall',
    icon: '🥂',
  },
  {
    key: 'g2',
    src: gallery2,
    gradient: null,
    title: 'Luxury Wedding Reception',
    category: 'Wedding',
    size: 'wide',
    icon: '💍',
  },
  {
    key: 'g3',
    src: null,
    gradient: 'radial-gradient(ellipse at 30% 40%, #2d1010 0%, #1a0808 40%, #0d0606 100%)',
    title: 'Product Launch Event',
    category: 'Corporate',
    size: 'normal',
    icon: '🚀',
  },
  {
    key: 'g4',
    src: null,
    gradient: 'radial-gradient(ellipse at 70% 30%, #0a1428 0%, #061020 40%, #040810 100%)',
    title: 'Premium Exhibition Stand',
    category: 'Exhibition',
    size: 'normal',
    icon: '🏛️',
  },
  {
    key: 'g5',
    src: null,
    gradient: 'radial-gradient(ellipse at 50% 70%, #1a0d00 0%, #120900 40%, #080600 100%)',
    title: 'Outdoor Gala Night',
    category: 'Gala',
    size: 'wide',
    icon: '✨',
  },
  {
    key: 'g6',
    src: null,
    gradient: 'radial-gradient(ellipse at 20% 50%, #140028 0%, #0a0014 40%, #050010 100%)',
    title: 'Premium AV Production',
    category: 'Production',
    size: 'tall',
    icon: '🎛️',
  },
];

type GalleryItem = typeof galleryItems[0];

function GalleryItem({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (item: GalleryItem) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const sizeClasses = item.size === 'tall' ? 'row-span-2' : item.size === 'wide' ? 'col-span-2 sm:col-span-1 lg:col-span-2' : '';
  const minH = item.size === 'tall' ? '400px' : '280px';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer group ${sizeClasses}`}
      style={{ minHeight: minH }}
      onClick={() => onOpen(item)}
    >
      {/* Background — image or gradient */}
      {item.src ? (
        <img
          src={item.src}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ background: item.gradient || '#111' }}
        >
          {/* Decorative elements for gradient cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl sm:text-8xl opacity-10 select-none">{item.icon}</div>
          </div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(rgba(211,47,47,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(211,47,47,0.8) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          {/* Orb glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#D32F2F]/20 rounded-full blur-3xl" />
        </div>
      )}

      {/* Scale on hover wrapper */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#D32F2F]/80 backdrop-blur-sm text-white text-[10px] font-semibold font-body tracking-widest uppercase px-3 py-1.5 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Zoom Icon */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-9 h-9 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
          <ZoomIn size={15} className="text-white" />
        </div>
      </div>

      {/* Overlay */}
      <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading text-lg font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h3>
          <div className="h-0.5 w-0 group-hover:w-10 bg-[#D32F2F] transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative py-24 sm:py-32 bg-[#080808]">
      {/* Background accent top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#D32F2F]/50 to-transparent" />

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
              Our Portfolio
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Immersive Event{' '}
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="font-body text-[#9A8F7E] max-w-xl mx-auto leading-relaxed">
            A curated showcase of our most iconic events — from intimate luxury weddings to large-scale corporate productions across Doha and beyond.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.key} item={item} index={i} onOpen={setLightbox} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shimmer bg-[#D32F2F] text-white font-semibold font-body px-8 py-3.5 rounded-full glow-red-hover transition-all duration-300 text-sm"
            whileHover={{ scale: 1.05, backgroundColor: '#E53935' }}
            whileTap={{ scale: 0.97 }}
          >
            Plan Your Event With Us →
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.src ? (
              <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto max-h-[80vh] object-cover" />
            ) : (
              <div
                className="w-full h-[60vh] flex items-center justify-center"
                style={{ background: lightbox.gradient || '#111' }}
              >
                <div className="text-center">
                  <div className="text-8xl mb-4">{lightbox.icon}</div>
                  <p className="font-body text-[#9A8F7E] text-sm">Event Photography Coming Soon</p>
                </div>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="font-heading text-xl font-bold text-white">{lightbox.title}</h3>
              <span className="font-body text-xs text-[#D32F2F] tracking-widest uppercase">{lightbox.category}</span>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
