import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Full Stack Developer with AI',
      company: 'Bodhasoft.',
      location: 'Remote',
      period: 'April 2024 - Present',
      description: [
        'Developed full- stack applications using modern technologies for frontend and backend.',
        'Integrated AI models to enable intelligent features and data-driven automation',
        'Created scalable, high-performance systems with a focus on smart user experiences',
      ],
      technologies: ['React', 'TensorFlow', 'Open AI APIs', 'Chatbots'],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Bodhasoft',
      location: 'Remote',
      period: 'Jan 2024 - April 2024',
      description: [
        'Developed and maintained multiple web applications using React and Node.js',
        'Collaborated with UX designers to implement responsive designs and animations',
        'Optimized database queries that improved application performance by 35%',
      ],
      technologies: ['Java', 'Python', 'MongoDB', 'Spring Boot'],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Bodhasoft.',
      location: 'Remote',
      period: 'Mar 2023 - Dec 2023',
      description: [
        'Created responsive web designs for clients in various industries',
        'Integrated third-party APIs and payment gateways',
        'Participated in agile development processes and sprint planning',
      ],
      technologies: ['JavaScript', 'Next.js', 'React', 'Bootstrap'],
    },
    {
      id: 4,
      title: 'Web Development Intern',
      company: 'Bodhasoft.',
      location: 'Remote',
      period: 'July 2022 - Mar 2023',
      description: [
        'Assisted in developing company website and marketing materials',
        'Learned modern web development practices and frameworks',
        'Participated in team meetings and contributed to project planning',
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'TypeScript','React'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey through various roles and companies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:translate-x-px"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{exp.title}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">{exp.period}</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 transform -translate-x-1/2 md:-translate-x-3"></div>
                
                {/* Spacer for opposite side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;