import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Sparkles, Share2 } from 'lucide-react';
import ProgressBar from '../components/ui/ProgressBar';
import StatBox from '../components/ui/StatBox';
import AnimationViewer from '../components/ui/AnimationViewer';
import { modules } from '../data/moduleData';
import { climateStats } from '../data/climateLiveData';
import { Module, ClimateStat } from '../utils/types';
import ReactMarkdown from 'react-markdown';

interface ModulePageProps {}

const ModulePage: React.FC<ModulePageProps> = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const [module, setModule] = useState<Module | null>(null);
  const [relatedStats, setRelatedStats] = useState<ClimateStat[]>([]);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (moduleId) {
      const foundModule = modules.find(m => m.id === moduleId);
      
      if (foundModule) {
        setModule(foundModule);
        setProgress(foundModule.progress);
        
        // Find related stats
        if (foundModule.stats && foundModule.stats.length > 0) {
          const stats = foundModule.stats
            .map(statRef => climateStats.find(s => s.id === statRef.statId))
            .filter(Boolean) as ClimateStat[];
          
          setRelatedStats(stats);
        }
      }
    }
  }, [moduleId]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollPosition / (docHeight - windowHeight)) * 100;
      
      // Update progress if greater than current progress
      if (scrollPercentage > progress && scrollPercentage <= 100) {
        setProgress(Math.min(Math.round(scrollPercentage), 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [progress]);
  
  if (!module) {
    return (
      <div className="container-custom py-24 text-center">
        <h2 className="text-2xl font-semibold">Module not found</h2>
        <p className="mt-4 text-gray-600">
          The module you're looking for doesn't seem to exist.
        </p>
        <Link to="/" className="btn-primary mt-6 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }
  
  // Mock image for the animation viewer
  const moduleImages = {
    'greenhouse-effect': 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    'carbon-cycle': 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    'climate-impacts': 'https://images.pexels.com/photos/1694642/pexels-photo-1694642.jpeg',
    'climate-solutions': 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg'
  };

  // Get image based on module ID
  const moduleImage = moduleImages[module.id as keyof typeof moduleImages] || module.image;
  
  return (
    <div className="bg-neutral-background pb-16">
      {/* Module Header */}
      <div className="bg-primary-500 text-white py-10 md:py-16">
        <div className="container-custom">
          <Link 
            to="/" 
            className="flex items-center text-primary-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to All Modules
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="flex items-center mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full 
                  ${module.level === 'Beginner' ? 'bg-secondary-200 text-secondary-800' : 
                    module.level === 'Intermediate' ? 'bg-accent-200 text-accent-800' : 
                    'bg-primary-200 text-primary-800'}`}
                >
                  {module.level}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h1>
              <p className="text-primary-100 md:text-lg max-w-2xl">
                {module.description}
              </p>
            </div>
            
            <div className="flex flex-col md:items-end space-y-3 md:min-w-64">
              <div className="w-full md:max-w-xs bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Your Progress</span>
                  <span className="text-sm font-medium">{progress}%</span>
                </div>
                <ProgressBar value={progress} height={8} />
                
                <div className="mt-4 flex space-x-2">
                  <Link 
                    to={`/quiz/${module.id}`} 
                    className={`btn text-sm py-2 flex-1 text-center ${
                      progress >= 70 
                        ? 'bg-accent text-white hover:bg-accent-600' 
                        : 'bg-white/10 text-white/60 cursor-not-allowed'
                    }`}
                    onClick={e => progress < 70 && e.preventDefault()}
                  >
                    <Sparkles size={16} className="mr-1" />
                    Take Quiz
                  </Link>
                  
                  <button className="btn bg-white/10 text-white hover:bg-white/20 text-sm py-2 px-3">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="md:col-span-2">
            {/* Module Content */}
            <div className="bg-white rounded-xl shadow-soft p-8">
              <div className="prose prose-lg max-w-none">
                <AnimationViewer 
                  imageSrc={moduleImage} 
                  alt={module.title}
                  caption={`Visualization of ${module.title.toLowerCase()}`}
                />
                
                {module.content && (
                  <ReactMarkdown className="markdown-content">
                    {module.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
            
            {/* Navigation and Actions */}
            <div className="mt-8 flex flex-wrap justify-between gap-4">
              <Link 
                to="/" 
                className="btn bg-white shadow-soft hover:shadow-medium text-neutral-text"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Modules
              </Link>
              
              {progress >= 70 && (
                <Link 
                  to={`/quiz/${module.id}`}
                  className="btn-accent"
                >
                  Take Quiz
                  <Sparkles size={18} className="ml-2" />
                </Link>
              )}
            </div>
          </div>
          
          {/* Sidebar - 1/3 width */}
          <div className="space-y-6">
            {/* Live Data Box */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <div className="flex items-center mb-4">
                <BookOpen size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-semibold">Related Climate Data</h3>
              </div>
              
              <div className="space-y-4">
                {relatedStats.length > 0 ? (
                  relatedStats.map((stat) => (
                    <StatBox key={stat.id} stat={stat} large />
                  ))
                ) : (
                  <p className="text-gray-500">No related data available for this module.</p>
                )}
              </div>
            </div>
            
            {/* More Resources */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://climate.nasa.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-600 transition-colors"
                  >
                    <span className="bg-primary-50 p-1.5 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                    NASA Climate Change Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ipcc.ch/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-600 transition-colors"
                  >
                    <span className="bg-primary-50 p-1.5 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                    IPCC Reports and Research
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.un.org/en/climatechange" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-600 transition-colors"
                  >
                    <span className="bg-primary-50 p-1.5 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                    UN Climate Action Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;