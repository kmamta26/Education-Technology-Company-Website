import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#0B0B0B] to-[#007BFF]/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#007BFF] rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#007BFF] rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/30 mb-8">
            <Sparkles className="h-4 w-4 text-[#007BFF]" />
            <span className="text-sm text-gray-300">India's Leading Education & Tech Platform</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Career with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00a8ff]">
              Expert-Led Training
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Master cutting-edge technologies with industry experts. Get hands-on experience 
            with real-world projects and launch your dream career in tech.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/education">
              <Button 
                size="lg"
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-6 text-lg group"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10 px-8 py-6 text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: '10,000+', label: 'Students Trained' },
              { value: '95%', label: 'Placement Rate' },
              { value: '50+', label: 'Industry Experts' },
              { value: '15+', label: 'Course Programs' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#007BFF] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
    </section>
  );
}