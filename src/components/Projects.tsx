import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "License Recognition Project - VerifyIt!",
      description: "An innovative license recognition system for verification purposes.",
      link: "https://lnkd.in/g9_wmdqi",
      tech: ["Python", "Computer Vision", "Machine Learning"],
    },
    {
      title: "Asset Management System",
      description: "Python-based system to efficiently track and manage company assets including equipment, hardware, and software. Features automated tracking, performance monitoring, and maintenance scheduling.",
      tech: ["Python", "Database", "UI/UX", "Barcode Scanning"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;