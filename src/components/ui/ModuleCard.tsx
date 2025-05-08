import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { Module } from '../../utils/types';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const { id, title, level, image, description, progress } = module;

  const levelColor = 
    level === 'Beginner' ? 'bg-secondary-100 text-secondary-700' :
    level === 'Intermediate' ? 'bg-accent-100 text-accent-700' : 
    'bg-primary-100 text-primary-700';

  return (
    <div className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColor}`}>
            {level}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <ProgressBar value={progress} />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span className="flex items-center">
              <Clock size={12} className="mr-1" />
              {progress > 0 ? 'Continue Learning' : 'Start Learning'}
            </span>
            <span>{progress}% Complete</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            to={`/module/${id}`} 
            className="btn-primary py-2 flex-1 text-center text-sm"
          >
            Start Module
          </Link>
          {progress > 0 && (
            <Link 
              to={`/quiz/${id}`} 
              className="btn-secondary py-2 flex-1 text-center text-sm"
            >
              Take Quiz
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;