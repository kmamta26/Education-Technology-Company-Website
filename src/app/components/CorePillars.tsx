import { Code, GraduationCap, Megaphone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function CorePillars() {
  const pillars = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions, web and mobile applications, and enterprise-grade development services for businesses of all sizes.',
      link: '/software',
      external: false,
      gradient: 'from-purple-500/20 to-blue-500/20',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Industry-relevant courses in AI, Full Stack, Data Science, and Cloud Computing with expert mentorship and placement support.',
      link: '/education',
      external: false,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-[#007BFF]/10',
      iconColor: 'text-[#007BFF]',
    },
    {
      icon: Megaphone,
      title: 'Digital Advertising',
      description: 'Strategic digital marketing, SEO, social media management, and performance advertising to grow your business online.',
      link: '/advertising',
      external: false,
      gradient: 'from-pink-500/20 to-orange-500/20',
      iconBg: 'bg-pink-500/10',
      iconColor: 'text-pink-400',
    },
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0B]/95">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your technology and career advancement needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-full bg-gradient-to-br ${pillar.gradient} rounded-2xl p-8 border border-white/10 hover:border-[#007BFF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007BFF]/10`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${pillar.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${pillar.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{pillar.description}</p>

                  {/* Link */}
                  {pillar.external ? (
                    <a
                      href={pillar.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        className="text-[#007BFF] hover:text-[#0056b3] hover:bg-[#007BFF]/10 p-0 h-auto group/btn"
                      >
                        Learn More
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={pillar.link}>
                      <Button
                        variant="ghost"
                        className="text-[#007BFF] hover:text-[#0056b3] hover:bg-[#007BFF]/10 p-0 h-auto group/btn"
                      >
                        Learn More
                        <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}