import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ClimateStat } from '../../utils/types';

interface StatBoxProps {
  stat: ClimateStat;
  large?: boolean;
}

const StatBox: React.FC<StatBoxProps> = ({ stat, large = false }) => {
  const { name, value, unit, trend, updated, source } = stat;

  const trendIcon = 
    trend === 'up' ? <TrendingUp size={large ? 20 : 16} className="text-error" /> :
    trend === 'down' ? <TrendingDown size={large ? 20 : 16} className="text-success" /> :
    <Minus size={large ? 20 : 16} className="text-warning" />;

  const trendColor =
    trend === 'up' ? 'text-error' :
    trend === 'down' ? 'text-success' :
    'text-warning';

  return (
    <div className={`stat-box group transition-all duration-300 hover:shadow-medium ${large ? 'p-6' : 'p-4'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`font-medium text-gray-500 ${large ? 'text-base' : 'text-sm'}`}>{name}</h3>
          <div className="flex items-end mt-1">
            <span className={`font-bold ${large ? 'text-4xl' : 'text-2xl'}`}>{value}</span>
            <span className={`ml-1 ${large ? 'text-lg' : 'text-base'} ${trendColor}`}>{unit}</span>
          </div>
        </div>
        <div className={`flex items-center ${trendColor} rounded-full p-1 bg-gray-50`}>
          {trendIcon}
        </div>
      </div>
      
      <div className={`mt-4 text-xs text-gray-500 ${large ? 'flex justify-between' : ''}`}>
        <span className="block">Last updated: {updated}</span>
        <span className="block">Source: {source}</span>
      </div>
      
      {large && stat.description && (
        <p className="mt-4 text-sm text-gray-600">{stat.description}</p>
      )}
    </div>
  );
};

export default StatBox;