import { CheckCircle, Users, BookOpen, Briefcase, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustSection() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Students Enrolled',
      description: 'Join thousands who transformed their careers',
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Average Rating',
      description: 'Rated by our successful graduates',
    },
    {
      icon: Briefcase,
      value: '95%',
      label: 'Placement Rate',
      description: 'Students placed in top companies',
    },
    {
      icon: BookOpen,
      value: '15+',
      label: 'Course Programs',
      description: 'Comprehensive tech training portfolio',
    },
  ];

  const highlights = [
    {
      title: 'Industry Expert Mentors',
      description: 'Learn from professionals working at Fortune 500 companies with hands-on industry experience.',
    },
    {
      title: 'Job-Ready Curriculum',
      description: 'Updated course content aligned with current industry standards and emerging technologies.',
    },
    {
      title: 'Lifetime Access',
      description: 'Get lifetime access to course materials, updates, and our growing learning community.',
    },
    {
      title: 'Career Assistance',
      description: 'Comprehensive placement support including resume building, mock interviews, and job referrals.',
    },
    {
      title: 'Flexible Learning',
      description: 'Learn at your own pace with recorded sessions, live classes, and personalized mentorship.',
    },
    {
      title: 'Project Portfolio',
      description: 'Build a strong portfolio with real-world projects to showcase to potential employers.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0B0B] to-[#0B0B0B]/95">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Thousands of Students
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join India's most trusted education platform with proven track record of success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-[#007BFF]/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#007BFF]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[#007BFF]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-[#007BFF]/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-[#007BFF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
