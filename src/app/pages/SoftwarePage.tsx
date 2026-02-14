import { motion } from 'motion/react';
import { Code, Smartphone, Globe, Database, Cloud, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SoftwareInquiryForm } from '../components/forms/SoftwareInquiryForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function SoftwarePage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for scalable business solutions.',
      features: ['Responsive Design', 'Progressive Web Apps', 'Real-time Features', 'API Integration'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
    },
    {
      icon: Database,
      title: 'Enterprise Software',
      description: 'Robust enterprise solutions including CRM, ERP, and custom business management systems tailored to your needs.',
      features: ['Custom ERP/CRM', 'Workflow Automation', 'Data Analytics', 'Integration Services'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud-native applications and migration services leveraging AWS, Azure, and Google Cloud platforms.',
      features: ['Cloud Migration', 'Microservices', 'Serverless Architecture', 'DevOps & CI/CD'],
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'RESTful and GraphQL API development for seamless integration between systems and third-party services.',
      features: ['REST API', 'GraphQL', 'API Documentation', 'Third-party Integration'],
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Comprehensive security audits, ongoing maintenance, and support to keep your applications secure and up-to-date.',
      features: ['Security Audits', 'Regular Updates', '24/7 Support', 'Performance Monitoring'],
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment gateway integration',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MDI3NzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive patient management and appointment scheduling system',
      image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDMyODYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['Angular', 'Java', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzM4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React Native', 'Node.js', 'Firebase', 'Biometric'],
    },
  ];

  const benefits = [
    'Expert development team with 10+ years experience',
    'Agile development methodology for faster delivery',
    'Scalable and maintainable code architecture',
    'Regular progress updates and transparent communication',
    'Post-launch support and maintenance',
    'Competitive pricing with flexible payment terms',
  ];

  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <SEO
        title="Software Development Services - Custom Solutions"
        description="Professional software development services including web applications, mobile apps, enterprise software, and cloud solutions. Transform your business with custom technology."
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
              Custom Software Development Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with cutting-edge software solutions tailored to your unique needs. 
              From web and mobile applications to enterprise systems, we bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#inquiry-form" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-4 rounded-lg text-lg font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Software Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive development services to power your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#007BFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#007BFF]/10"
                >
                  <div className="w-14 h-14 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-[#007BFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#007BFF] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gradient-to-b from-transparent to-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Showcasing our expertise through successful client projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#007BFF]/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose DreamsGuider for Software Development?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We combine technical expertise with business understanding to deliver software solutions 
                that drive real results for your organization.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#007BFF] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvZGluZ3xlbnwxfHx8fDE3NzAzNjAxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Software Development Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#007BFF] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">100+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your Software Project
              </h2>
              <p className="text-lg text-gray-400">
                Fill out the form below and our software development team will contact you within 24 hours 
                to discuss your project requirements and provide a customized solution.
              </p>
            </div>
            <SoftwareInquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
