import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalConfig } from '../config/Personal';

const Hero: React.FC = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const { name } = personalConfig;
  
  useEffect(() => {
    const titles = ["Frontend Developer","Backend Developer", "UI/UX Designer"," AI Tools Expert", "Problem Solver"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentTitle.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentTitle.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30 dark:opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 dark:text-gray-700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            I'm a <span ref={typingTextRef} className="text-blue-600 dark:text-blue-400"></span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I build exceptional digital experiences that are beautiful,
            functional, and user-centered. Let's work together to create
            something amazing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;