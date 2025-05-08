import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  height?: number;
  showLabel?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  height = 6,
  showLabel = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max(0, value), max) / max * 100;
  
  let barColor = 'bg-primary-500';
  if (percentage < 33) {
    barColor = 'bg-error';
  } else if (percentage < 66) {
    barColor = 'bg-warning';
  } else if (percentage >= 66) {
    barColor = 'bg-success';
  }

  return (
    <div className={`${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{`Progress`}</span>
          <span className="text-sm font-medium text-gray-700">{`${percentage.toFixed(0)}%`}</span>
        </div>
      )}
      <div 
        className="w-full bg-gray-200 rounded-full overflow-hidden" 
        style={{ height: `${height}px` }}
      >
        <div 
          className={`${barColor} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%`, height: '100%' }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;