import React from 'react';
import { Code, Globe, Wrench, Brain } from 'lucide-react';
import Scene3D from './Scene3D';
import Skills3D from './Skills3D';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['C++', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'MATLAB'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      gradient: 'from-green-500 to-teal-500',
      skills: ['React.js', 'Next.js', 'Flask API', 'OpenCV'],
    },
    {
      title: 'Technologies & Tools',
      icon: Wrench,
      gradient: 'from-purple-500 to-indigo-500',
      skills: ['Firebase', 'VS Code', 'LaTeX', 'Git'],
    },
    {
      title: 'Core Concepts',
      icon: Brain,
      gradient: 'from-pink-500 to-rose-500',
      skills: ['Machine Learning', 'Computer Vision', 'Algorithms & DSA', 'DBMS', 'OOP', 'Generative AI'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Scene3D>
          <Skills3D />
        </Scene3D>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            A comprehensive snapshot of my technical expertise and tools I work with.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/70 border border-slate-700 rounded-2xl p-8 shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <ul className="grid grid-cols-2 gap-3 text-gray-200 text-base">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="bg-slate-700/50 py-2 px-3 rounded-lg hover:bg-slate-600 transition">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
