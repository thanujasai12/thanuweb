import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience & Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-indigo-600" />
              <h3 className="text-xl font-bold">Internships</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">SYMBIOSYS</h4>
                <p className="text-gray-600">MAY 2024 - JULY 2024</p>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Successfully completed an internship focusing on asset management</li>
                  <li>Developed and implemented strategies to optimize processes</li>
                  <li>Collaborated with team members on system improvements</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">ExcelR (APSCHE)</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Completed comprehensive full-stack development internship</li>
                  <li>Developed and maintained web applications</li>
                  <li>Utilized various programming languages and frameworks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-indigo-600" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">VIGNAN'S INSTITUTE OF ENGINEERING FOR WOMEN</h4>
                <p className="text-gray-600">2022 - 2026</p>
                <p>B.TECH in Computer Science and Engineering (Specialized in AI)</p>
                <p>CGPA: 8.0 (Till 2-2)</p>
              </div>
              
              <div>
                <h4 className="font-semibold">SRI VISWA JUNIOR COLLEGE</h4>
                <p className="text-gray-600">2019 - 2021</p>
                <p>Senior Secondary Education - Maths-Physics-Chemistry</p>
                <p>CGPA: 8.71</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;