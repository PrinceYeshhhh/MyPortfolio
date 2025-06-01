import React from 'react';
import { Play, Info } from 'lucide-react';
import { ContentItem } from '../types/content';

interface HeroProps {
  content: ContentItem;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <div 
      className="relative h-[70vh] md:h-[95vh] flex items-end"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${content.backdropUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-12 pb-16 md:pb-24 relative z-20">
        <div className="max-w-lg">
          {/* Logo */}
          {content.titleLogo ? (
            <img 
              src={content.titleLogo} 
              alt={content.title} 
              className="w-full max-w-sm mb-6"
            />
          ) : (
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.title}</h1>
          )}
          
          {/* Metadata */}
          <div className="flex items-center space-x-4 mb-4 text-sm">
            <span className="text-netflix-red font-semibold">New</span>
            <span>{content.year}</span>
            <span className="border border-gray-600 px-2">{content.maturityRating}</span>
            <span>{content.duration}</span>
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg mb-6">{content.description}</p>
          
          {/* Buttons */}
          <div className="flex space-x-3">
            <button className="flex items-center bg-white text-black py-2 px-6 rounded font-medium hover:bg-gray-200 transition-colors">
              <Play className="mr-2" size={20} />
              Play
            </button>
            <button className="flex items-center bg-gray-600/80 text-white py-2 px-6 rounded font-medium hover:bg-gray-700 transition-colors">
              <Info className="mr-2" size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;