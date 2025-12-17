import React from 'react';
import { PROJECTS } from '../data';
import { Github, ExternalLink } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A selection of agentic systems and ML applications I've engineered.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div className="group relative bg-dark rounded-xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-primary/50 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/10">
                {/* Image & Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative bg-dark">
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-primary/90 border border-white/5 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto border-t border-white/5 pt-4">
                    {project.github && (
                      <a href={project.github} className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">
                        <Github className="w-4 h-4 mr-2" /> Code
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
