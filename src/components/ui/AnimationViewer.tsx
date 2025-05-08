import React from 'react';

interface AnimationViewerProps {
  imageSrc: string;
  alt: string;
  caption?: string;
}

const AnimationViewer: React.FC<AnimationViewerProps> = ({ 
  imageSrc, 
  alt,
  caption
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-soft my-6">
      <div className="bg-gray-50 flex items-center justify-center p-4 h-64 md:h-80 lg:h-96">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="max-w-full max-h-full object-contain animate-float"
        />
      </div>
      {caption && (
        <div className="bg-white p-3 text-sm text-gray-600 text-center border-t">
          {caption}
        </div>
      )}
    </div>
  );
};

export default AnimationViewer;