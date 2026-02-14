import { motion } from 'motion/react';
import { Search, Share2, Mail, BarChart3, Palette, Megaphone, CheckCircle2, ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { SEO } from '../components/SEO';
import { AdvertisingConsultationForm } from '../components/forms/AdvertisingConsultationForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ClientLogoSlider } from '../components/ClientLogoSlider';


export function AdvertisingPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO & Content Marketing',
      description: 'Improve your organic search rankings and drive quality traffic with data-driven SEO strategies and compelling content.',
      features: ['Technical SEO Audit', 'Keyword Research & Strategy', 'Content Creation & Optimization', 'Link Building Campaigns'],
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build and engage your audience across all major platforms with strategic content and community management.',
      features: ['Content Calendar Planning', 'Platform Management', 'Community Engagement', 'Influencer Partnerships'],
    },
    {
      icon: Megaphone,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize your ROI with targeted PPC campaigns on Google Ads, Facebook Ads, and other advertising platforms.',
      features: ['Campaign Strategy & Setup', 'Ad Copy & Creative Design', 'Bid Management', 'A/B Testing & Optimization'],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and boost conversions with personalized email campaigns and automated workflows.',
      features: ['Email Campaign Design', 'List Segmentation', 'Automation Workflows', 'Performance Analytics'],
    },
    {
      icon: Palette,
      title: 'Brand Strategy & Design',
      description: 'Create a compelling brand identity that resonates with your target audience and stands out in the market.',
      features: ['Brand Identity Development', 'Logo & Visual Design', 'Brand Guidelines', 'Marketing Collateral'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make informed decisions with comprehensive analytics, tracking, and detailed performance reports.',
      features: ['Google Analytics Setup', 'Custom Dashboard Creation', 'Conversion Tracking', 'Monthly Reports'],
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹15,000',
      period: '/month',
      description: 'Perfect for small businesses getting started with digital marketing',
      features: [
        'Social Media Management (2 platforms)',
        'Basic SEO optimization',
        'Monthly content calendar',
        'Email marketing setup',
        'Monthly performance report',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹25,000',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale their online presence',
      features: [
        'Social Media Management (4 platforms)',
        'Advanced SEO & content marketing',
        'PPC campaign management',
        'Email marketing campaigns',
        'Bi-weekly strategy calls',
        'Advanced analytics & reporting',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solutions for established businesses and enterprises',
      features: [
        'Full-service digital marketing',
        'Dedicated account manager',
        'Custom strategy & execution',
        'Multi-channel campaigns',
        'Weekly reporting & optimization',
        'Priority support',
      ],
      popular: false,
    },
  ];

  const results = [
    { metric: '300%', label: 'Average ROI Increase' },
    { metric: '2.5M+', label: 'Impressions Generated' },
    { metric: '85%', label: 'Lead Quality Improvement' },
    { metric: '150+', label: 'Happy Clients' },
  ];

  const benefits = [
    'Proven track record with 150+ successful campaigns',
    'Data-driven strategies for measurable results',
    'Transparent reporting and regular updates',
    'Dedicated account manager for personalized service',
    'Multi-channel expertise across all platforms',
    'Competitive pricing with flexible contracts',
  ];

  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <SEO
        title="Digital Advertising Services - Grow Your Business Online"
        description="Professional digital marketing services including SEO, social media, PPC, email marketing, and brand strategy. Drive growth with data-driven advertising."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Scale Your Business with Strategic Digital Advertising
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your online presence and drive measurable growth with our comprehensive digital marketing 
              services. From SEO to social media, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#consultation-form" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
                >
                  Get Free Consultation
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500 mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-400">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Advertising Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to amplify your brand and drive conversions
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
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                >
                  <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-pink-400 mr-2 flex-shrink-0" />
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


      {/* Our Advertisement Clients */}
<section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Our Advertisement Clients
      </h2>
      <p className="text-gray-400">
        Brands that trust us to grow their digital presence
      </p>
    </div>
  </div>
  <ClientLogoSlider/>
</section>


      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your Growth Plan
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Flexible packages designed to meet your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/5 border rounded-2xl p-8 ${
                  pkg.popular
                    ? 'border-pink-500 shadow-xl shadow-pink-500/20 scale-105'
                    : 'border-white/10 hover:border-pink-500/50'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">{pkg.period}</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#consultation-form" className="block">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular
                        ? 'bg-pink-500 hover:bg-pink-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    Get Started
                  </button>
                </a>
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
                Why Partner with DreamsGuider?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We're not just another marketing agency. We're your growth partner, committed to delivering 
                measurable results through innovative strategies and transparent communication.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-pink-400 mr-3 flex-shrink-0 mt-0.5" />
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
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 rounded-2xl p-6">
                <Target className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Targeted</h3>
                <p className="text-gray-400 text-sm">Reach the right audience with precision targeting</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 rounded-2xl p-6">
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                <p className="text-gray-400 text-sm">Scale your business with proven strategies</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 rounded-2xl p-6">
                <BarChart3 className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Data-Driven</h3>
                <p className="text-gray-400 text-sm">Make informed decisions with analytics</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-white/10 rounded-2xl p-6">
                <Zap className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Fast Results</h3>
                <p className="text-gray-400 text-sm">See impact quickly with agile execution</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real results from real businesses we've helped grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzcwMzYwMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="E-commerce Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">E-Commerce Success</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Increased online sales by 450% through targeted PPC and social media campaigns
                </p>
                <div className="text-pink-400 font-semibold">+450% Revenue Growth</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NzAyNzY5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Brand Awareness"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Brand Awareness</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Built a strong social presence generating 2M+ impressions in 6 months
                </p>
                <div className="text-pink-400 font-semibold">2M+ Impressions</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMzU1MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="SEO Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">SEO Domination</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Achieved 300% increase in organic traffic with strategic SEO optimization
                </p>
                <div className="text-pink-400 font-semibold">+300% Organic Traffic</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="py-20">
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
                Get Your Free Marketing Consultation
              </h2>
              <p className="text-lg text-gray-400">
                Ready to grow your business? Fill out the form below and our advertising experts will contact you 
                within 24 hours to schedule a free consultation and discuss your marketing goals.
              </p>
            </div>
            <AdvertisingConsultationForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
