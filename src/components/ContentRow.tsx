import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';
import { ContentItem } from '../types/content';

interface ContentRowProps {
  title: string;
  content: ContentItem[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, content }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      setIsScrolling(true);
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
      
      // Check scroll position after animation
      setTimeout(() => {
        if (rowRef.current) {
          setShowLeftArrow(rowRef.current.scrollLeft > 0);
          setShowRightArrow(
            rowRef.current.scrollLeft < 
            rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
          );
          setIsScrolling(false);
        }
      }, 500);
    }
  };
  
  const handleScroll = () => {
    if (rowRef.current && !isScrolling) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0);
      setShowRightArrow(
        rowRef.current.scrollLeft < 
        rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
      );
    }
  };

  return (
    <div className="content-row">
      <h2 className="content-row-title">{title}</h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button 
            className="absolute left-0 top-0 bottom-0 z-10 bg-black/50 hover:bg-black/80 transition-colors px-2 h-full flex items-center justify-center opacity-0 group-hover:opacity-100"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={40} />
          </button>
        )}
        
        {/* Content Slider */}
        <div 
          ref={rowRef}
          className="flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-12"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {content.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
        
        {/* Right Arrow */}
        {showRightArrow && (
          <button 
            className="absolute right-0 top-0 bottom-0 z-10 bg-black/50 hover:bg-black/80 transition-colors px-2 h-full flex items-center justify-center opacity-0 group-hover:opacity-100"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;