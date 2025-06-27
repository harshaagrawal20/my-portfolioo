
import React from 'react';
import { ExternalLink, Github, Trophy, Eye, Brain, Gamepad2, Heart, Palette } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SkillSync",
      subtitle: "Hackathon Winner - 2nd Prize",
      description: "Comprehensive AI interview platform featuring posture detection, resume analysis, and quiz modules. Won among 50+ teams at IIITV Hackathon.",
      tech: ["AI/ML", "Computer Vision", "React", "Python"],
      icon: Trophy,
      gradient: "from-yellow-400 to-orange-500",
      date: "April 2025"
    },
    {
      title: "SignLearn",
      subtitle: "Educational Platform",
      description: "Interactive learning website for deaf/mute primary students featuring sign language tutorials using OpenCV and educational games with real-time feedback.",
      tech: ["OpenCV", "Python", "Web Development", "Computer Vision"],
      icon: Eye,
      gradient: "from-green-400 to-blue-500",
      date: "March 2024"
    },
    {
      title: "Health Symptoms Prediction",
      subtitle: "Machine Learning Project",
      description: "Achieved good accuracy in predicting health conditions using machine learning algorithms and data analysis techniques.",
      tech: ["Machine Learning", "Python", "Data Analysis", "Healthcare"],
      icon: Heart,
      gradient: "from-red-400 to-pink-500",
      date: "March 2025"
    },
    {
      title: "AirDraw Canvas",
      subtitle: "Computer Vision Application",
      description: "Developed an air drawing application that tracks finger movements in 3D space using OpenCV and MediaPipe, with 90% gesture recognition accuracy.",
      tech: ["OpenCV", "MediaPipe", "Python", "Computer Vision"],
      icon: Palette,
      gradient: "from-purple-400 to-indigo-500",
      date: "March 2025"
    },
    {
      title: "2048 Game Development",
      subtitle: "MATLAB Implementation",
      description: "Built a MATLAB-based 2048 game, optimizing matrix operations (15% faster). Enhanced input validation to prevent errors.",
      tech: ["MATLAB", "Game Development", "Optimization", "Algorithms"],
      icon: Gamepad2,
      gradient: "from-cyan-400 to-teal-500",
      date: "April 2025"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI, machine learning, computer vision, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-slate-500">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-400">{project.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-400 font-semibold mb-3">{project.subtitle}</p>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                
                
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
