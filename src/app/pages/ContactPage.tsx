import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';
import { GeneralContactForm } from '../components/forms/GeneralContactForm';

export function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@dreamsguider.com', 'support@dreamsguider.com'],
      color: 'text-[#007BFF]',
      bgColor: 'bg-[#007BFF]/10',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9373346490', '+91 7058357655'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['DreamsGuider office,loni maharashtra'],
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
  ];

  const departments = [
    {
      name: 'Software Development',
      email: 'software@dreamsguider.com',
      description: 'For project inquiries and custom software development',
    },
    {
      name: 'Education & Training',
      email: 'education@dreamsguider.com',
      description: 'For course enrollment and training programs',
    },
    {
      name: 'Digital Advertising',
      email: 'advertising@dreamsguider.com',
      description: 'For marketing services and advertising campaigns',
    },
    {
      name: 'Technical Support',
      email: 'support@dreamsguider.com',
      description: 'For technical assistance and customer support',
    },
  ];

  const quickLinks = [
    { name: 'Software Services', href: '/software' },
    { name: 'Education Programs', href: '/education' },
    { name: 'Advertising Services', href: '/advertising' },
    { name: 'All Courses', href: '/courses' },
  ];

  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <SEO
        title="Contact Us - Get in Touch with DreamsGuider"
        description="Contact DreamsGuider for software development, education programs, or digital advertising services. We're here to help transform your business and career."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or ready to start your project? We're here to help. 
              Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#007BFF]/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-[#007BFF]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
                  </div>
                  <p className="text-gray-400">
                    Fill out the form below and we'll respond to your inquiry as soon as possible.
                  </p>
                </div>
                <GeneralContactForm />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Department Contacts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept) => (
                    <div key={dept.name} className="pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-white mb-1">{dept.name}</h4>
                      <p className="text-sm text-gray-400 mb-2">{dept.description}</p>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-[#007BFF] hover:text-[#0056b3] transition-colors"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-gray-300 hover:text-[#007BFF] transition-colors"
                    >
                      → {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[#007BFF]/20 to-purple-500/20 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Follow us on social media for the latest updates, tech insights, and success stories.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/dreamsguider/"
                    className="w-10 h-10 bg-white/10 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <span className="text-white text-sm font-semibold">Li</span>
                  </a>
                 
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <span className="text-white text-sm font-semibold">Fb</span>
                  </a>
                  <a
                    href="https://www.instagram.com/dreamsguideredu?igsh=MXBxeTAybW5oNjBhZg%3D%3D&utm_source=qr"
                    className="w-10 h-10 bg-white/10 hover:bg-[#007BFF] rounded-lg flex items-center justify-center transition-colors"
                  >
                    <span className="text-white text-sm font-semibold">Ig</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
{/* Map Section */}
<section className="py-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <MapPin className="h-16 w-16 text-[#007BFF] mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Visit Our Office
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're located in the heart of Loni, Maharashtra. Visit us to
          discuss your project in person or explore our facilities.
        </p>
      </div>

      {/* Responsive Google Map */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.1464936571742!2d74.46878717375154!3d19.578223636016997!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcf763f7fb15bb%3A0x37edf8feceacde5e!2sDreamsGuider.com!5e0!3m2!1sen!2sin!4v1770373457843!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  </div>
</section>


      {/* FAQ Teaser */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Check out our FAQ section for quick answers to common questions, or reach out directly 
              using the form above.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">General Inquiries</h3>
                <p className="text-sm text-gray-400">Response within 24 hours</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Technical Support</h3>
                <p className="text-sm text-gray-400">Response within 4-6 hours</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Urgent Matters</h3>
                <p className="text-sm text-gray-400">Call us directly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
