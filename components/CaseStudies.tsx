import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { RevealOnScroll } from './RevealOnScroll';
import { CheckCircle2, Github, ExternalLink, Lightbulb, Target, Rocket } from 'lucide-react';

const formatWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-emerald-400 font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="case-studies" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Case <span className="text-primary">Studies</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A deep dive into complex problems I've solved using autonomous agents and predictive modeling.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {CASE_STUDIES.map((cs, index) => (
              <RevealOnScroll key={cs.id} delay={index * 100} direction="right">
                <button
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                    activeTab === index 
                      ? 'bg-primary/10 border-primary shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <h3 className={`text-lg font-bold mb-1 transition-colors ${activeTab === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {cs.title}
                  </h3>
                  <p className={`text-sm transition-colors ${activeTab === index ? 'text-primary/80' : 'text-gray-500 group-hover:text-gray-400'}`}>
                    {cs.subtitle}
                  </p>
                </button>
              </RevealOnScroll>
            ))}
          </div>

          <div className="lg:col-span-8">
            <RevealOnScroll key={CASE_STUDIES[activeTab].id} direction="left">
              <div className="bg-surface/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="h-64 relative overflow-hidden">
                   <img 
                    src={CASE_STUDIES[activeTab].image} 
                    alt={CASE_STUDIES[activeTab].title}
                    className="w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-8 flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest border border-primary/30">
                        Deep Dive
                      </span>
                      <div className="flex gap-4 ml-4">
                        {CASE_STUDIES[activeTab].github && (
                          <a 
                            href={CASE_STUDIES[activeTab].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-200 hover:text-white transition-colors hover:underline decoration-primary underline-offset-4"
                          >
                            <Github className="w-4 h-4 mr-2" /> Code
                          </a>
                        )}
                        {CASE_STUDIES[activeTab].link && (
                          <a 
                            href={CASE_STUDIES[activeTab].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-gray-200 hover:text-white transition-colors hover:underline decoration-primary underline-offset-4"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                          </a>
                        )}
                      </div>
                   </div>
                </div>

                <div className="p-8 md:p-12 space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Target className="w-5 h-5" />
                        <h4 className="font-bold uppercase tracking-wider text-sm">The Challenge</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {CASE_STUDIES[activeTab].challenge}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <Lightbulb className="w-5 h-5" />
                        <h4 className="font-bold uppercase tracking-wider text-sm">The Solution</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {CASE_STUDIES[activeTab].solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 mb-6">
                      <Rocket className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-sm">Key Results</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      {CASE_STUDIES[activeTab].results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-400/30 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-gray-200">{formatWithBold(result)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;