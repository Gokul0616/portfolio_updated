import React from 'react';
import { skills } from '../mock';
import { Card, CardContent } from './ui/card';
import { Code2, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', icon: Code2, skills: skills.frontend, color: 'cyan' },
    { title: 'Backend', icon: Database, skills: skills.backend, color: 'blue' },
    { title: 'Other Tools', icon: Wrench, skills: skills.other, color: 'purple' },
  ];

  const getColorClass = (color) => {
    const colors = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400'
    };
    return colors[color] || 'text-cyan-400';
  };

  const getProgressColor = (color) => {
    const colors = {
      cyan: 'bg-cyan-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500'
    };
    return colors[color] || 'bg-cyan-500';
  };

  return (
    <section id="skills" className="relative py-12 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <Card key={idx} className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <IconComponent className={getColorClass(category.color)} size={28} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                          <span className={`${getColorClass(category.color)} font-semibold text-sm`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`${getProgressColor(category.color)} h-full rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;