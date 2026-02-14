import { motion } from 'motion/react';
import { Brain, Code, Database, Cpu, Cloud, GraduationCap, Users, Award, TrendingUp, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { EducationEnrollmentForm } from '../components/forms/EducationEnrollmentForm';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function EducationPage() {
  const courses = [
    {
      id: 'ai',
      icon: Brain,
      title: 'Generative AI & Machine Learning',
      description: 'Master AI technologies including ChatGPT, LLMs, prompt engineering, and build intelligent applications.',
      duration: '6 Months',
      students: '2,500+',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDI4MjY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Natural Language Processing', 'Deep Learning & Neural Networks', 'Generative AI Applications', 'Real-world AI Projects'],
    },
    {
      id: 'fullstack',
      icon: Code,
      title: 'Full Stack Development',
      description: 'Become a complete developer with expertise in React, Node.js, databases, and modern DevOps practices.',
      duration: '8 Months',
      students: '3,200+',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZWR1Y2F0aW9uJTIwY29kaW5nfGVufDF8fHx8MTc3MDM1NzQ4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Frontend: React, Next.js, TypeScript', 'Backend: Node.js, Express, APIs', 'Database: MongoDB, PostgreSQL', 'Deployment & Cloud Services'],
    },
    {
      id: 'datascience',
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Learn Python, statistics, machine learning, and data visualization to become a data scientist.',
      duration: '7 Months',
      students: '1,800+',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzAyOTc5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['Python & R Programming', 'Statistical Analysis & Modeling', 'Machine Learning Algorithms', 'Data Visualization & BI Tools'],
    },
    {
      id: 'embedded',
      icon: Cpu,
      title: 'Embedded Systems & IoT',
      description: 'Master embedded programming, microcontrollers, and IoT applications for connected devices.',
      duration: '6 Months',
      students: '1,200+',
      level: 'Intermediate to Advanced',
      image: 'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzcwMzU3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['C/C++ for Embedded Systems', 'Microcontroller Programming', 'IoT Protocols & Communication', 'Hardware-Software Integration'],
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Computing & DevOps',
      description: 'Learn AWS, Azure, Docker, Kubernetes, and CI/CD pipelines to become a cloud expert.',
      duration: '5 Months',
      students: '2,100+',
      level: 'Intermediate to Advanced',
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMzM4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      highlights: ['AWS & Azure Cloud Platforms', 'Docker & Containerization', 'Kubernetes Orchestration', 'CI/CD & Infrastructure as Code'],
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Students Trained' },
    { value: '95%', label: 'Placement Rate' },
    { value: '500+', label: 'Hiring Partners' },
    { value: '₹8.5L', label: 'Average Package' },
  ];

  const benefits = [
    'Industry-expert instructors with 10+ years experience',
    'Live interactive classes with hands-on projects',
    'Lifetime access to course materials and recordings',
    'One-on-one mentorship and career guidance',
    'Interview preparation and soft skills training',
    '100% placement assistance with top companies',
  ];

  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <SEO
        title="Education & Training Programs - Career-Driven Courses"
        description="Transform your career with industry-leading courses in AI, Full Stack Development, Data Science, Cloud Computing, and Embedded Systems. 95% placement rate."
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
              Transform Your Career with Expert Training
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Master in-demand tech skills with our comprehensive courses designed by industry experts. 
              Get job-ready with hands-on projects and 100% placement support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#enrollment-form" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#007BFF] hover:bg-[#0056b3] text-white px-8 py-4 rounded-lg text-lg font-semibold"
                >
                  Enroll Now
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </motion.button>
              </a>
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-white/20"
                >
                  View All Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#007BFF] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Featured Courses
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Industry-relevant courses designed to make you job-ready in high-demand tech fields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#007BFF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#007BFF]/10"
                >
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-[#007BFF]" />
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{course.description}</p>
                    <div className="space-y-2 mb-4">
                      {course.highlights.slice(0, 3).map((highlight) => (
                        <div key={highlight} className="flex items-start text-sm text-gray-300">
                          <CheckCircle2 className="h-4 w-4 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-sm text-gray-400">{course.students} enrolled</span>
                      <span className="text-sm text-[#007BFF] font-medium">{course.level}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold border border-white/20"
              >
                View All Courses
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Learn with DreamsGuider?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We don't just teach—we transform. Our comprehensive approach combines technical expertise 
                with career development to ensure your success in the tech industry.
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
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-[#007BFF]/20 to-purple-500/20 border border-white/10 rounded-2xl p-6">
                <GraduationCap className="h-12 w-12 text-[#007BFF] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Expert Mentors</h3>
                <p className="text-gray-400 text-sm">Learn from industry professionals with real-world experience</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 rounded-2xl p-6">
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Live Classes</h3>
                <p className="text-gray-400 text-sm">Interactive sessions with real-time doubt resolution</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-white/10 rounded-2xl p-6">
                <Award className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Certification</h3>
                <p className="text-gray-400 text-sm">Industry-recognized certificates to boost your resume</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-[#007BFF]/20 border border-white/10 rounded-2xl p-6">
                <TrendingUp className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Placement</h3>
                <p className="text-gray-400 text-sm">Dedicated support to land your dream tech job</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section id="enrollment-form" className="py-20">
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
                Begin Your Learning Journey
              </h2>
              <p className="text-lg text-gray-400">
                Fill out the enrollment form below and our admissions team will contact you within 24 hours 
                to guide you through the next steps and answer any questions.
              </p>
            </div>
            <EducationEnrollmentForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
