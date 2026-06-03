import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+974 3311 9957',
    href: 'tel:+97433119957',
    color: '#D32F2F',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@redpepperevents.qa',
    href: 'mailto:info@redpepperevents.qa',
    color: '#C9A84C',
  },
  {
    icon: MapPin,
    label: 'Our Office',
    value: 'Office No. 05, First Floor, Building 112, Zone 56, Street 451, Doha, Qatar',
    href: 'https://maps.google.com',
    color: '#D32F2F',
  },
];

const socialLinks = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/redpepperevents',
    gradient: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/redpepperevents',
    gradient: 'from-[#0077B5] to-[#005885]',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@redpepperevents',
    gradient: 'from-[#FF0000] to-[#CC0000]',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/97433119957',
    gradient: 'from-[#25D366] to-[#128C7E]',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

const services = [
  'Corporate Events',
  'Luxury Weddings',
  'Gala Dinners',
  'Product Launches',
  'Exhibition Design',
  'Event Technology',
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
      {/* Background decorative */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D32F2F]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="ornament justify-center mb-5">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C]">
              Get In Touch
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Let's Create Something{' '}
            <span className="gradient-text-red">Extraordinary</span>
          </h2>
          <p className="font-body text-[#9A8F7E] max-w-xl mx-auto leading-relaxed">
            Ready to elevate your next event? Our team of luxury event experts in Doha is ready to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-white mb-6">Contact Information</h3>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 p-4 bg-[#0f0f0f] border border-white/5 rounded-xl hover:border-[#D32F2F]/30 transition-all duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${info.color}15`,
                      border: `1px solid ${info.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="font-body text-xs text-[#5a5048] tracking-wider uppercase mb-1">{info.label}</div>
                    <div className="font-body text-sm text-[#c8bfb0] group-hover:text-white transition-colors duration-200 leading-relaxed">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/97433119957"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-3 w-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold font-body px-5 py-4 rounded-xl hover:bg-[#25D366]/20 transition-all duration-300 text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp — +974 3311 9957
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-4"
            >
              <p className="font-body text-xs text-[#5a5048] tracking-[0.2em] uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="group w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 hover:scale-110 transition-all duration-300 overflow-hidden relative text-[#9A8F7E] hover:text-white"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <span className="relative z-10 transition-colors duration-300">{social.svg}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 sm:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={60} className="text-[#D32F2F] mb-5 mx-auto" />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Message Received!
                </h3>
                <p className="font-body text-[#9A8F7E] leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours to discuss your event vision.
                </p>
                <div className="mt-6 font-body text-sm text-[#C9A84C]">— Red Pepper Events Team</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-white mb-6">
                  Book a Consultation
                </h3>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-[#7a7060] tracking-wider uppercase mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="input-luxury w-full px-4 py-3 rounded-xl font-body text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-[#7a7060] tracking-wider uppercase mb-2 block">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+974 XXXX XXXX"
                      className="input-luxury w-full px-4 py-3 rounded-xl font-body text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs text-[#7a7060] tracking-wider uppercase mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input-luxury w-full px-4 py-3 rounded-xl font-body text-sm"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="font-body text-xs text-[#7a7060] tracking-wider uppercase mb-2 block">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-luxury w-full px-4 py-3 rounded-xl font-body text-sm cursor-pointer"
                  >
                    <option value="" className="bg-[#0f0f0f]">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#0f0f0f]">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs text-[#7a7060] tracking-wider uppercase mb-2 block">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your event vision, date, guest count, and any special requirements..."
                    rows={4}
                    className="input-luxury w-full px-4 py-3 rounded-xl font-body text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-[#D32F2F] text-white font-semibold font-body px-8 py-4 rounded-xl btn-shimmer glow-red-hover transition-all duration-300 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={!loading ? { scale: 1.02, backgroundColor: '#E53935' } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Consultation Request
                    </>
                  )}
                </motion.button>

                <p className="font-body text-xs text-[#5a5048] text-center">
                  By submitting, you agree to be contacted by Red Pepper Events. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
