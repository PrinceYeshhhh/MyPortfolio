import React from 'react';
import { Layout, Server, PenTool, PenTool as Tool } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  icon: string;
}

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-6 h-6" />;
      case 'server':
        return <Server className="w-6 h-6" />;
      case 'pen-tool':
        return <PenTool className="w-6 h-6" />;
      case 'tool':
        return <Tool className="w-6 h-6" />;
      default:
        return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 group">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
          {getIcon(category.icon)}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out group-hover:from-blue-600 group-hover:to-blue-700" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;