import React from 'react';
import { Trophy, Medal, Users, Palette, Volleyball } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Google Girls Hackathon Semifinalist",
      description: "Among the top semifinalists, competing with 500+ participants",
      date: "February 2025",
      icon: Trophy,
      gradient: "from-pink-500 to-rose-500",
      category: "Competition"
    },
    {
      title: "IIITV Hackathon - 2nd Prize Winner",
      description: "Won for SkillSync project among 30+ teams",
      date: "April 2025",
      icon: Medal,
      gradient: "from-yellow-500 to-orange-500",
      category: "Hackathon"
    },
    {
      title: "Sketching Competition - First Prize",
      description: "Won inter-college sketching competition",
      date: "March 2024",
      icon: Palette,
      gradient: "from-purple-500 to-indigo-500",
      category: "Art"
    },
    {
      title: "Volleyball Tournament Winner",
      description: "Contributed to inter-college tournament victory",
      date: "February 2025",
      icon: Volleyball,
      gradient: "from-green-500 to-teal-500",
      category: "Sports"
    },
    {
      title: "GDSC Member",
      description: "Active member of Google Developer Student Clubs",
      date: "Ongoing",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      category: "Community"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for excellence in technology competitions, creative arts, and community involvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-slate-500">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center`}>
                  <achievement.icon size={24} className="text-white" />
                </div>
                <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded-full">
                  {achievement.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 mb-3 leading-relaxed text-sm">{achievement.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Extracurricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
              <h4 className="text-xl font-semibold text-white mb-2">Art & Dance Club Member</h4>
              <p className="text-gray-300">Performed in events with 200+ attendees, showcasing creative talents and stage presence.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
              <h4 className="text-xl font-semibold text-white mb-2">Leadership & Collaboration</h4>
              <p className="text-gray-300">Experience in guiding project teams and ensuring efficient teamwork in various initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
