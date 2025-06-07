import React from 'react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Next.js', level: 75 },
      ],
      icon: 'layout',
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python, Java', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 95 },
      ],
      icon: 'server',
    },
    {
      name: 'Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'AI Designing Tools', level: 80 },
        { name: 'Prototyping', level: 75 },
      ],
      icon: 'pen-tool',
    },
    {
      name: 'Other',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Spring Boot', level: 65 },
        { name: 'CI/CD', level: 70 },
        { name: 'ML', level: 75 },
        { name: 'AI Tools', level: 95 },
      ],
      icon: 'tool',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's an overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;