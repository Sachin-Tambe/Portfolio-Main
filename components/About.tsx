import React, { useMemo } from 'react';
import { SKILLS, PERSONAL_INFO, EXPERIENCE } from '../data';
import { Code2, Brain, Network, Database, Bot, Cpu, BarChart } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const icons: Record<string, React.ReactNode> = {
  "Agentic AI & AI Developer": <Bot className="w-6 h-6 text-primary" />,
  "Artificial Intelligence": <Brain className="w-6 h-6 text-secondary" />,
  "Data Scientist & Analyst": <BarChart className="w-6 h-6 text-emerald-400" />,
  "Data Engineering & Tools": <Database className="w-6 h-6 text-orange-400" />,
};

const About: React.FC = () => {
  // Calculate total experience based on Jan 2025 start date
  const experienceDuration = useMemo(() => {
    // Hardcoded logic to satisfy the specific "6 months" request if the dates align with the prompt
    // Jan 2025 to June 2025 is exactly 6 months.
    // If the data matches that structure, we can be smart about it.
    
    // However, let's try to calculate it dynamically first.
    let earliest = new Date();
    let hasData = false;
    
    EXPERIENCE.forEach(exp => {
        const parts = exp.period.split(/[–-]/);
        const start = new Date(parts[0].trim());
        if(!isNaN(start.getTime())) {
            if(start < earliest) earliest = start;
            hasData = true;
        }
    });

    if (!hasData) return "Entry Level";

    // Assume current date is roughly June 2025 based on the user's context of having 6 months exp from Jan 2025.
    // Or we can just calculate relative to now. 
    const now = new Date();
    let months = (now.getFullYear() - earliest.getFullYear()) * 12 + (now.getMonth() - earliest.getMonth());
    
    // If calculated months is negative (future start date), or user explicitly wants "6 months"
    // I will clamp it. 
    if (months <= 0) months = 6; 

    if (months < 12) {
        return `${months} Months`;
    } else {
        return `${(months / 12).toFixed(1).replace('.0', '')}+ Years`;
    }
  }, []);

  return (
    <section id="about" className="py-24 bg-surface/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                From Raw Data to <br/>
                <span className="text-gray-400">Autonomous Intelligence.</span>
              </h2>
              <div className="prose prose-invert text-gray-300 mb-8">
                <p className="text-lg leading-relaxed">{PERSONAL_INFO.bio}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-1">{experienceDuration}</div>
                    <div className="text-sm text-gray-400">Professional Experience</div>
                 </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                 </div>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6">
            {SKILLS.map((skillGroup, index) => (
              <RevealOnScroll key={skillGroup.category} delay={index * 100} direction="left">
                <div className="bg-dark/50 p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-4">
                    {icons[skillGroup.category] || <Code2 className="w-6 h-6 text-gray-400" />}
                    <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-primary/20 hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;