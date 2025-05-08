import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, BookOpen, BarChart3 } from 'lucide-react';
import ProgressBar from '../components/ui/ProgressBar';
import BadgeCard from '../components/ui/BadgeCard';
import { modules } from '../data/moduleData';
import { quizzes } from '../data/quizData';
import { Module, Badge, UserProgress } from '../utils/types';

// Mock user data - In a real app, this would come from a backend
const mockBadges: Badge[] = [
  {
    id: 'climate-rookie',
    name: 'Climate Rookie',
    description: 'Completed your first module',
    image: 'https://img.icons8.com/fluency/96/globe-earth.png',
    earnedOn: '2025-05-01',
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Scored 100% on a quiz',
    image: 'https://img.icons8.com/fluency/96/test-passed.png',
    earnedOn: '2025-05-03',
  },
  {
    id: 'science-explorer',
    name: 'Science Explorer',
    description: 'Completed 3 modules',
    image: 'https://img.icons8.com/fluency/96/microscope.png',
  },
  {
    id: 'climate-hero',
    name: 'Climate Hero',
    description: 'Completed all modules',
    image: 'https://img.icons8.com/fluency/96/protect.png',
  },
];

// Mock progress data
const mockProgress: UserProgress = {
  completedModules: ['greenhouse-effect', 'carbon-cycle'],
  quizScores: {
    'greenhouse-effect': 90,
    'carbon-cycle': 75,
  },
  badges: mockBadges,
  totalPoints: 165,
};

const ProgressPage: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>(mockProgress);
  const [moduleProgress, setModuleProgress] = useState<Module[]>([]);
  
  useEffect(() => {
    // Update module progress data
    const updatedModules = modules.map(module => {
      const isCompleted = userProgress.completedModules.includes(module.id);
      const quizScore = userProgress.quizScores[module.id] || 0;
      
      // Calculate progress percentage
      let progress = 0;
      if (isCompleted) {
        progress = 100;
      } else if (quizScore > 0) {
        // If they've taken the quiz but not completed, set progress based on score
        progress = Math.min(90, quizScore); // Max 90% if only quiz taken
      } else {
        // Mock some random progress
        progress = module.id === 'greenhouse-effect' ? 60 : 
                  module.id === 'carbon-cycle' ? 40 : 
                  module.id === 'climate-impacts' ? 20 : 0;
      }
      
      return {
        ...module,
        progress,
      };
    });
    
    setModuleProgress(updatedModules);
  }, [userProgress]);

  const overallProgress = () => {
    const totalModules = modules.length;
    const completedModules = userProgress.completedModules.length;
    return Math.round((completedModules / totalModules) * 100);
  };
  
  const averageQuizScore = () => {
    const scores = Object.values(userProgress.quizScores);
    if (scores.length === 0) return 0;
    
    const sum = scores.reduce((total, score) => total + score, 0);
    return Math.round(sum / scores.length);
  };
  
  const totalTimeSpent = () => {
    // In a real app, this would come from actual tracking data
    // Mocking time spent based on progress
    return `${userProgress.completedModules.length * 25 + 10} minutes`;
  };
  
  return (
    <div className="bg-neutral-background min-h-screen pt-20 pb-16">
      <div className="container-custom py-8">
        <Link 
          to="/" 
          className="flex items-center text-primary hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Summary */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h1 className="text-2xl font-bold mb-4">Your Learning Progress</h1>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-semibold">{overallProgress()}%</span>
                </div>
                <ProgressBar value={overallProgress()} height={10} />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center text-primary mb-1">
                    <BookOpen size={16} className="mr-1" />
                    <span className="text-sm font-medium">Modules Completed</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {userProgress.completedModules.length}/{modules.length}
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center text-secondary mb-1">
                    <BarChart3 size={16} className="mr-1" />
                    <span className="text-sm font-medium">Avg. Quiz Score</span>
                  </div>
                  <p className="text-2xl font-bold">{averageQuizScore()}%</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center text-accent mb-1">
                    <Award size={16} className="mr-1" />
                    <span className="text-sm font-medium">Total Points</span>
                  </div>
                  <p className="text-2xl font-bold">{userProgress.totalPoints}</p>
                </div>
              </div>
            </div>
            
            {/* Module Progress */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-4">Module Progress</h2>
              
              <div className="space-y-4">
                {moduleProgress.map((module) => (
                  <div key={module.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-soft transition-shadow">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{module.title}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        module.level === 'Beginner' ? 'bg-secondary-100 text-secondary-700' :
                        module.level === 'Intermediate' ? 'bg-accent-100 text-accent-700' : 
                        'bg-primary-100 text-primary-700'
                      }`}>
                        {module.level}
                      </span>
                    </div>
                    
                    <ProgressBar value={module.progress} className="mb-2" />
                    
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{module.progress}% Complete</span>
                      
                      {userProgress.quizScores[module.id] ? (
                        <span className="text-primary">
                          Quiz Score: {userProgress.quizScores[module.id]}%
                        </span>
                      ) : (
                        <span>Quiz not taken</span>
                      )}
                    </div>
                    
                    <div className="mt-3 flex space-x-3">
                      <Link 
                        to={`/module/${module.id}`}
                        className="text-sm text-primary hover:text-primary-600 font-medium"
                      >
                        {module.progress > 0 ? 'Continue' : 'Start'} Module
                      </Link>
                      
                      {module.progress >= 50 && (
                        <Link 
                          to={`/quiz/${module.id}`}
                          className="text-sm text-secondary hover:text-secondary-600 font-medium"
                        >
                          {userProgress.quizScores[module.id] ? 'Retake' : 'Take'} Quiz
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {userProgress.badges.map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Stats</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Time Spent Learning</span>
                  <span className="font-medium">{totalTimeSpent()}</span>
                </div>
                
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Quizzes Completed</span>
                  <span className="font-medium">{Object.keys(userProgress.quizScores).length}/{quizzes.length}</span>
                </div>
                
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Highest Quiz Score</span>
                  <span className="font-medium">
                    {Object.values(userProgress.quizScores).length > 0
                      ? `${Math.max(...Object.values(userProgress.quizScores))}%`
                      : 'No quizzes taken'}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Badges Earned</span>
                  <span className="font-medium">
                    {userProgress.badges.filter(b => b.earnedOn).length}/{userProgress.badges.length}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Recommendations */}
            <div className="bg-secondary-50 rounded-xl shadow-soft p-6 border border-secondary-100">
              <h2 className="text-xl font-semibold mb-2 text-secondary-900">Recommended Next Steps</h2>
              <p className="text-sm text-secondary-800 mb-4">
                Based on your progress, here's what we suggest you focus on next:
              </p>
              
              <ul className="space-y-2">
                {moduleProgress.find(m => m.id === 'climate-impacts' && m.progress < 50) && (
                  <li className="flex items-start">
                    <span className="bg-secondary-100 p-1 rounded-full text-secondary-700 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">Start the <Link to="/module/climate-impacts" className="text-secondary-700 font-medium hover:underline">Climate Impacts</Link> module</span>
                  </li>
                )}
                
                {userProgress.quizScores['greenhouse-effect'] === undefined && moduleProgress.find(m => m.id === 'greenhouse-effect' && m.progress >= 50) && (
                  <li className="flex items-start">
                    <span className="bg-secondary-100 p-1 rounded-full text-secondary-700 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">Take the <Link to="/quiz/greenhouse-effect" className="text-secondary-700 font-medium hover:underline">Greenhouse Effect</Link> quiz</span>
                  </li>
                )}
                
                {moduleProgress.find(m => m.id === 'carbon-cycle' && m.progress > 0 && m.progress < 100) && (
                  <li className="flex items-start">
                    <span className="bg-secondary-100 p-1 rounded-full text-secondary-700 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">Continue the <Link to="/module/carbon-cycle" className="text-secondary-700 font-medium hover:underline">Carbon Cycle</Link> module</span>
                  </li>
                )}
                
                {userProgress.quizScores['carbon-cycle'] && userProgress.quizScores['carbon-cycle'] < 80 && (
                  <li className="flex items-start">
                    <span className="bg-secondary-100 p-1 rounded-full text-secondary-700 mr-2 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">Retake the <Link to="/quiz/carbon-cycle" className="text-secondary-700 font-medium hover:underline">Carbon Cycle</Link> quiz to improve your score</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;