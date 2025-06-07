import React from 'react';
import { personalConfig } from '../config/Personal';

const About: React.FC = () => {
  const { about, name, email, location } = personalConfig;
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <img
                  src={about.image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold">{about.yearsOfExperience}+ Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="inline-block mb-6">
              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">About Me</h2>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>
            
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Name:</span> {name}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Email:</span> {email}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Location:</span> {location}
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Availability:</span> {about.availability}
                </p>
              </div>
            </div>
            
            <a
              href={about.resumeUrl}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block transition-colors"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;