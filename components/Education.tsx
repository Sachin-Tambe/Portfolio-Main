import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-dark relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">
            Education & Certifications
            </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <RevealOnScroll direction="right">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
              </div>
              
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-white/10 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-primary group-hover:bg-primary transition-colors"></div>
                  <div className="bg-surface/50 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all">
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>{edu.period}</span>
                    </div>
                    {edu.description && (
                        <p className="text-gray-400 mt-3 text-sm">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Certifications Column */}
          <RevealOnScroll direction="left" delay={200}>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="grid gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="group flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/40 transition-all">
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary mr-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white group-hover:text-secondary transition-colors">{cert.name}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Education;
