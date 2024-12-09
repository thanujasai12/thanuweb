import React from 'react';
import { Code, Brain, Users } from 'lucide-react';

const Skills = () => {
  const technicalSkills = ['JAVA', 'PYTHON', 'HTML', 'CSS'];
  const softSkills = [
    'Communication',
    'Problem Solving',
    'Critical Thinking',
    'Team Work',
    'Analysis',
    'Time Management'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-indigo-600" />
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="bg-white px-4 py-2 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-indigo-600" />
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-white px-4 py-2 rounded-full shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;