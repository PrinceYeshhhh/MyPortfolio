import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { ContentItem } from '../types/content';

interface ContentCardProps {
  content: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="netflix-card flex-shrink-0 w-[175px] md:w-[230px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <img 
        src={content.posterUrl} 
        alt={content.title} 
        className="w-full h-auto object-cover rounded"
      />
      
      {/* Hover Details */}
      {isHovered && (
        <div className="absolute inset-0 bg-netflix-black/80 rounded p-3 flex flex-col">
          <div className="flex-grow">
            {/* Preview Image */}
            <img 
              src={content.posterUrl} 
              alt={content.title} 
              className="w-full h-32 object-cover rounded mb-2"
            />
            
            {/* Action Buttons */}
            <div className="flex justify-between mb-2">
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Play size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-700/70 text-white flex items-center justify-center border-2 border-gray-400 hover:border-white transition-colors">
                  <Plus size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-700/70 text-white flex items-center justify-center border-2 border-gray-400 hover:border-white transition-colors">
                  <ThumbsUp size={16} />
                </button>
              </div>
              <button className="w-8 h-8 rounded-full bg-gray-700/70 text-white flex items-center justify-center border-2 border-gray-400 hover:border-white transition-colors">
                <ChevronDown size={16} />
              </button>
            </div>
            
            {/* Metadata */}
            <div className="text-xs flex items-center space-x-2 mb-1">
              <span className="text-green-500 font-bold">{content.match}% Match</span>
              <span className="border border-gray-600 px-1">{content.maturityRating}</span>
              <span>{content.duration}</span>
            </div>
            
            {/* Genres */}
            <div className="text-xs flex flex-wrap">
              {content.genres.map((genre, index) => (
                <React.Fragment key={genre}>
                  <span>{genre}</span>
                  {index < content.genres.length - 1 && <span className="mx-1">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;