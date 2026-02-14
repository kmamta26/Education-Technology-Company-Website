import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Code,
  Database,
  Cpu,
  Cloud
} from 'lucide-react';
import { motion } from 'motion/react';

export function CoursesPage() {
  const courses = [
    {
      id: 'ai',
      icon: Brain,
      title: 'Generative AI & Machine Learning',
      description: 'Master AI technologies including ChatGPT, LLMs, prompt engineering, and build intelligent applications.',
      duration: '6 Months',
      students: '2,500+',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDI4MjY1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        'Natural Language Processing',
        'Deep Learning & Neural Networks',
        'Generative AI Applications',
        'Real-world AI Projects',
      ],
    },
    {
      id: 'fullstack',
      icon: Code,
      title: 'Full Stack Development',
      description: 'Become a complete developer with expertise in React, Node.js, databases, and modern DevOps practices.',
      duration: '8 Months',
      students: '3,200+',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZWR1Y2F0aW9uJTIwY29kaW5nfGVufDF8fHx8MTc3MDM1NzQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        'Frontend: React, Next.js, TypeScript',
        'Backend: Node.js, Express, APIs',
        'Database: MongoDB, PostgreSQL',
        'Deployment & Cloud Services',
      ],
    },
    {
      id: 'datascience',
      icon: Database,
      title: 'Data Science & Analytics',
      description: 'Learn Python, statistics, machine learning, and data visualization to become a data scientist.',
      duration: '7 Months',
      students: '1,800+',
      level: 'Beginner to Advanced',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzAyOTc5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        'Python & R Programming',
        'Statistical Analysis & Modeling',
        'Machine Learning Algorithms',
        'Data Visualization & BI Tools',
      ],
    },
    {
      id: 'embedded',
      icon: Cpu,
      title: 'Embedded Systems & IoT',
      description: 'Master embedded programming, microcontrollers, and IoT applications for connected devices.',
      duration: '6 Months',
      students: '1,200+',
      level: 'Intermediate to Advanced',
      image: 'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzcwMzU3NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        'C/C++ for Embedded Systems',
        'Microcontroller Programming',
        'IoT Protocols & Communication',
        'Hardware-Software Integration',
      ],
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Computing & DevOps',
      description: 'Learn AWS, Azure, Docker, Kubernetes, and CI/CD pipelines to become a cloud expert.',
      duration: '5 Months',
      students: '2,100+',
      level: 'Intermediate to Advanced',
      image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMzM4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        'AWS & Azure Cloud Platforms',
        'Docker & Containerization',
        'Kubernetes Orchestration',
        'CI/CD & Infrastructure as Code',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <SEO 
        title="Courses - Expert-Led Tech Training Programs"
        description="Explore our comprehensive courses: Generative AI, Full Stack Development, Data Science, Embedded Systems & Cloud Computing. Start your tech career today."
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#007BFF] rounded-full blur-[128px] opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00a8ff]">Course Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Industry-relevant courses designed to transform you into a job-ready professional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={course.id}
                  id={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative group rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/20 to-transparent z-10" />
                      <ImageWithFallback
                        src={course.image}
                        alt={course.title}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <div className="w-16 h-16 bg-[#007BFF]/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {course.title}
                        </h2>
                        <p className="text-lg text-gray-400">{course.description}</p>
                      </div>

                      {/* Course Info */}
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                          <Clock className="h-4 w-4 text-[#007BFF]" />
                          <span className="text-sm text-gray-300">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                          <Users className="h-4 w-4 text-[#007BFF]" />
                          <span className="text-sm text-gray-300">{course.students} Enrolled</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                          <Award className="h-4 w-4 text-[#007BFF]" />
                          <span className="text-sm text-gray-300">{course.level}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {course.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/#contact">
                          <Button className="bg-[#007BFF] hover:bg-[#0056b3] text-white group">
                            Enroll Now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button variant="outline" className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF]/10">
                          Download Syllabus
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-[#007BFF]/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Decide Which Course to Choose?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Talk to our career advisors and get personalized course recommendations
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-[#007BFF] hover:bg-[#0056b3] text-white">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}