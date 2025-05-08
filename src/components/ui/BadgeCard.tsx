import React from 'react';
import { Badge } from '../../utils/types';

interface BadgeCardProps {
  badge: Badge;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ badge }) => {
  const { name, description, image, earnedOn } = badge;
  const isEarned = !!earnedOn;

  return (
    <div className={`card p-5 text-center transition-all ${isEarned ? 'opacity-100' : 'opacity-50 grayscale'}`}>
      <div className="relative inline-block mx-auto mb-3">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isEarned ? 'bg-accent-100' : 'bg-gray-100'}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 object-contain"
          />
        </div>
        {isEarned && (
          <div className="absolute bottom-0 right-0 bg-success text-white p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-gray-500 mb-2">{description}</p>
      {isEarned ? (
        <div className="text-xs text-success font-medium">
          Earned on {new Date(earnedOn).toLocaleDateString()}
        </div>
      ) : (
        <div className="text-xs text-gray-400">
          Not yet earned
        </div>
      )}
    </div>
  );
};

export default BadgeCard;