import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Current Education */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">IIIT Vadodara</h3>
                  <p className="text-blue-400 font-semibold">B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={20} />
                <span>2023 – 2027</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              Currently pursuing Bachelor of Technology in Computer Science at Indian Institute of Information Technology Vadodara. 
              Focusing on advanced algorithms, machine learning, computer vision, and full-stack development.
            </p>
          </div>

          {/* High School Education */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Class 12</h4>
                  <p className="text-green-400 font-semibold">83%</p>
                </div>
              </div>
              <p className="text-gray-300">
                Completed higher secondary education with strong performance in mathematics and science subjects.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Class 10</h4>
                  <p className="text-yellow-400 font-semibold">94%</p>
                </div>
              </div>
              <p className="text-gray-300">
                Achieved excellent results in secondary education with outstanding performance across all subjects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
