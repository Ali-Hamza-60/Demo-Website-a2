import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    'Corporate Events',
    'Luxury Weddings',
    'Gala Dinners',
    'Product Launches',
    'Exhibition Stands',
    'Flight Case Production',
  ],
  Company: [
    'About Us',
    'Our Team',
    'Gallery',
    'Testimonials',
    'Careers',
    'Contact Us',
  ],
};

const socialIcons = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/redpepperevents',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/redpepperevents',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@redpepperevents',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/97433119957',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Top accent line */}
      <div className="divider-red" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 bg-[#D32F2F] rounded-lg rotate-12" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8 2 6 6 6 9c0 4 3 6 6 9 3-3 6-5 6-9 0-3-2-7-6-7z" fill="white" opacity="0.9"/>
                    <circle cx="12" cy="9" r="2.5" fill="#D32F2F"/>
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-heading text-lg font-bold text-white tracking-wide">Red Pepper</div>
                <div className="text-[10px] font-body font-medium tracking-[0.25em] text-[#C9A84C] uppercase">Events</div>
              </div>
            </div>

            <p className="font-body text-sm text-[#5a5048] leading-relaxed max-w-xs mb-6">
              Qatar's premier event management company — crafting extraordinary corporate events, luxury weddings, and premium productions in Doha since 2016.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-3 mb-7">
              <a href="tel:+97433119957" className="flex items-center gap-3 text-[#9A8F7E] hover:text-white transition-colors group">
                <Phone size={14} className="text-[#D32F2F] flex-shrink-0" />
                <span className="font-body text-sm group-hover:text-[#D32F2F] transition-colors">+974 3311 9957</span>
              </a>
              <a href="mailto:info@redpepperevents.qa" className="flex items-center gap-3 text-[#9A8F7E] hover:text-white transition-colors group">
                <Mail size={14} className="text-[#D32F2F] flex-shrink-0" />
                <span className="font-body text-sm">info@redpepperevents.qa</span>
              </a>
              <div className="flex items-start gap-3 text-[#9A8F7E]">
                <MapPin size={14} className="text-[#D32F2F] flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm leading-relaxed">
                  Office No. 05, First Floor, Building 112,<br />
                  Zone 56, Street 451, Doha, Qatar
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-[#7a7060] hover:text-white hover:border-[#D32F2F]/50 hover:bg-[#D32F2F]/10 transition-all duration-300"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading text-sm font-bold text-white tracking-wide mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const map: Record<string, string> = {
                          'About Us': '#about', 'Our Team': '#about', 'Gallery': '#gallery',
                          'Testimonials': '#about', 'Careers': '#contact', 'Contact Us': '#contact',
                          'Corporate Events': '#services', 'Luxury Weddings': '#services',
                          'Gala Dinners': '#services', 'Product Launches': '#services',
                          'Exhibition Stands': '#services', 'Flight Case Production': '#flight-case',
                        };
                        const target = map[link] || '#home';
                        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-body text-sm text-[#5a5048] hover:text-[#D32F2F] transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold Divider */}
        <div className="divider-gold mt-14 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#3a3228] text-center sm:text-left">
            © {new Date().getFullYear()} Red Pepper Events. All rights reserved. | Doha, Qatar
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-[#3a3228]">Privacy Policy</span>
            <span className="text-[#3a3228]">·</span>
            <span className="font-body text-xs text-[#3a3228]">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, backgroundColor: '#E53935' }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#D32F2F] text-white rounded-full flex items-center justify-center shadow-lg glow-red transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        title="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
