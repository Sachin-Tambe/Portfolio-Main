import React, { useMemo } from 'react';
import { EXPERIENCE } from '../data';
import { Briefcase } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Experience: React.FC = () => {
  // Sort experience: Present dates first, then descending by date
  const sortedExperience = useMemo(() => {
    return [...EXPERIENCE].sort((a, b) => {
      const getEndDate = (period: string) => {
        const lowerPeriod = period.toLowerCase();
        if (lowerPeriod.includes('present') || lowerPeriod.includes('current')) {
          return new Date().getTime(); // Future date ensures it's first
        }
        
        // Extract the second date part (after the hyphen/dash)
        // Supports "Jan 2025 - Jun 2025" or "Jan 2025 – Jun 2025"
        const parts = period.split(/[-–]/); 
        const endDateStr = parts[parts.length - 1].trim();
        const date = new Date(endDateStr);
        
        // Handle invalid date parsing gracefully
        return isNaN(date.getTime()) ? 0 : date.getTime();
      };

      return getEndDate(b.period) - getEndDate(a.period);
    });
  }, []);

  return (
    <section id="experience" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">
            Professional Journey
          </h2>
        </RevealOnScroll>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {sortedExperience.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-5 h-5" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <RevealOnScroll direction={index % 2 === 0 ? 'right' : 'left'} delay={index * 100}>
                  <div className="bg-surface p-6 rounded-xl border border-white/10 shadow-lg hover:border-primary/40 transition-all duration-300 hover:shadow-primary/10 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                      <time className="text-sm font-medium text-primary/80">{exp.period}</time>
                    </div>
                    <div className="text-secondary font-medium mb-3">{exp.company}</div>
                    <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;