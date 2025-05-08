import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CloudRain, ThermometerSun, Droplets } from 'lucide-react';
import ModuleCard from '../components/ui/ModuleCard';
import StatBox from '../components/ui/StatBox';
import { modules } from '../data/moduleData';
import { climateStats } from '../data/climateLiveData';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modulesRef = useRef<HTMLDivElement>(null);

  // Get featured stats for the home page
  const featuredStats = [
    climateStats.find(stat => stat.id === 'co2-level'),
    climateStats.find(stat => stat.id === 'sea-level'),
    climateStats.find(stat => stat.id === 'global-temp')
  ].filter(Boolean);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (modulesRef.current) {
      observer.observe(modulesRef.current);
    }

    return () => {
      if (modulesRef.current) {
        observer.unobserve(modulesRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Understand Climate Change,<br />One Module at a Time.
              </h1>
              <p className="text-primary-100 text-lg max-w-lg">
                Our interactive educational platform makes climate science accessible with engaging modules, 
                real-time data, and interactive quizzes.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="#modules" 
                  className="btn-accent"
                >
                  Start Learning
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <Link 
                  to="/about" 
                  className="btn bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                >
                  About Climate Change 101
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-md rotate-3 transform hover:rotate-0 transition-transform duration-300">
                  <div className="flex space-x-3 mb-4">
                    <div className="w-3 h-3 bg-error rounded-full" />
                    <div className="w-3 h-3 bg-warning rounded-full" />
                    <div className="w-3 h-3 bg-success rounded-full" />
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 h-8 rounded-md w-full" />
                    <div className="bg-white/10 h-24 rounded-md w-full" />
                    <div className="bg-white/10 h-8 rounded-md w-3/4" />
                    <div className="bg-primary-300/30 h-10 rounded-md w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Climate Stats Preview */}
        <div className="container-custom mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredStats.map(stat => stat && (
              <StatBox key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section 
        ref={modulesRef}
        id="modules" 
        className="py-16 md:py-24 scroll-mt-20"
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Learning Modules</h2>
              <p className="text-gray-600 max-w-2xl">
                Explore our curated modules covering essential climate change topics, from basic concepts to solutions.
              </p>
            </div>
            <Link 
              to="/progress" 
              className="mt-4 md:mt-0 flex items-center text-primary hover:text-primary-600 font-medium"
            >
              View Your Progress
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines engaging content, real-time data, and interactive learning to make climate science accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <BookmarkIcon className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Engaging modules with visual aids, animations, and step-by-step explanations to make complex concepts simple.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                <Droplets className="text-secondary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Data</h3>
              <p className="text-gray-600">
                Connect with up-to-date climate statistics sourced from leading scientific institutions worldwide.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                <ThermometerSun className="text-accent-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Track your learning journey, earn achievement badges, and measure your understanding with interactive quizzes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become Climate Literate?</h2>
          <p className="text-secondary-100 text-lg max-w-2xl mx-auto mb-8">
            Start your journey today and join thousands of learners understanding the science behind climate change and solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#modules" className="btn-accent">
              Start Learning Now
            </a>
            <Link to="/about" className="btn bg-white text-secondary-600 hover:bg-gray-100">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom icon component
const BookmarkIcon: React.FC<{ className?: string; size: number }> = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default Home;