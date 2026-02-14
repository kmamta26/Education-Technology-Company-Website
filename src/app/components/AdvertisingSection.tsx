import { Target, TrendingUp, Search, Share2, BarChart3, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function AdvertisingSection() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your organic rankings and drive qualified traffic to your website.',
    },
    {
      icon: Target,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns across Google Ads, Facebook, and LinkedIn.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience on social platforms.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track ROI and optimize campaigns with comprehensive analytics.',
    },
    {
      icon: TrendingUp,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your target audience.',
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Maximize conversions with A/B testing and user experience improvements.',
    },
  ];

  return (
    <section id="advertising" className="py-24 bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0B]/95">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6">
              <Zap className="h-4 w-4 text-pink-400" />
              <span className="text-sm text-pink-400 font-semibold">Digital Advertising</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Grow Your Business Online
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Strategic digital marketing solutions to increase visibility, drive traffic, and boost revenue
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a href="#contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
            >
              Start Your Campaign
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
