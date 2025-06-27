
import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Building2 size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ernst & Young (EY)</h3>
                  <p className="text-blue-400 font-semibold">IT Professional</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={20} />
                <span>May 2025 – Present</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Working in the IT field at EY, enhancing my technical skills, collaborating with diverse teams, 
              and gaining practical experience in solving technology challenges in a professional environment. 
              This role has strengthened my ability to work in enterprise-level projects and understand 
              real-world business technology needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
