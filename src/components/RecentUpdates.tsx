import React from 'react';
import { Calendar } from 'lucide-react';

const RecentUpdates = () => {
  const updates = [
    {
      date: "March 2024",
      title: "Won Hackathon at TECHRITZ 2024",
      description: "Successfully participated and won in the hackathon conducted by Vignan Institute of Engineering for Women."
    },
    {
      date: "February 2024",
      title: "Organized Drones Technology Workshop",
      description: "Successfully conducted a workshop on drone technology as part of the GDSC Chapter, engaging students in hands-on learning."
    },
    {
      date: "January 2024",
      title: "Google Cloud Study Jams",
      description: "Organized a month-long event for 170+ students, achieving Tier 1 status across India within two weeks."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {updates.map((update, index) => (
        <div 
          key={index} 
          className="relative pl-8 pb-8 group"
        >
          {index !== updates.length - 1 && (
            <div className="absolute left-3 top-5 h-full w-0.5 bg-indigo-200"></div>
          )}
          <div className="absolute left-0 top-5 w-6 h-6 rounded-full bg-indigo-600 group-hover:bg-indigo-700 transition-colors"></div>
          
          <div className="bg-white rounded-lg p-6 ml-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">{update.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{update.title}</h3>
            <p className="text-gray-600">{update.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdates;