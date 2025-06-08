import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  github: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Bodha IAS',
      description: 'It is a comprehensive learning platform designed to help IAS aspirants prepare effectively through structured courses, practice tests, and expert guidance.',
      image: "Public/images/Bodhasoft_2025-06-07 131412.jpg.png",
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 2,
      title: 'Bodha TR',
      description: 'It is a skill-building app designed to help users prepare for technical interviews through curated practice questions and mock tests. A master tech interview skill application',
      image: 'Public/images/Bodhasoft_2025-06-07 131412.jpg.png',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'Frontend',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      title: 'WorkShop Area',
      description: ' WorkShop Area is an interactive platform where users can engage in hands-on coding sessions, live challenges, and peer learning to enhance practical development skills.',
      image: 'Public/images/Bodhasoft_2025-06-07 131412.jpg.png',
      technologies: ['TypeScript', 'D3.js', 'Express'],
      category: 'Website',
      link: 'https://bodhasoft.in/',
      github: 'https://github.com',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather forecasting application with location search and animated visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['React Native', 'OpenWeather API'],
      category: 'Mobile',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 5,
      title: 'Social Media API',
      description: 'A RESTful API for a social media platform with authentication and data validation.',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Backend',
      link: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with a modern design.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Website',
      link: 'https://example.com',
      github: 'https://github.com',
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'Data Visualization'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one has been an opportunity to learn and grow as a developer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;