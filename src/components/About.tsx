import React from 'react';
import { Code2, Brain, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Strong algorithmic thinking and optimization skills"
    },
    {
      icon: Brain,
      title: "AI Enthusiast", 
      description: "Passionate about machine learning and computer vision"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experienced in hackathons and collaborative projects"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adaptable to new technologies and frameworks"
    }
  ];

  return (
<section className="w-full max-w-7xl mx-auto py-20 px-4 bg-slate-900">
      {/* Contact Icons Row */}
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a dedicated Computer Science student at IIIT Vadodara, passionate about creating innovative solutions 
          through technology. With a strong foundation in algorithms, machine learning, and full-stack development, 
          I love turning ideas into reality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              <item.icon size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;