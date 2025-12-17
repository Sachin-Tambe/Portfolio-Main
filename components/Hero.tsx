import React, { useState, useEffect } from 'react';
import { Terminal, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  // Updated roles to match the requested profile
  const toRotate = [ 
    "Agentic AI Systems", 
    "Autonomous Workflows", 
    "Data Science Solutions", 
    "Predictive Analytics",
    "Generative AI Models"
  ];
  
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    } else {
        setDelta(100);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 backdrop-blur-sm">
          <Terminal className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Data Analyst • AI Engineer • Agentic AI</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
          Turning Data into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-pulse-slow">
             Intelligent Action
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 min-h-[60px] md:min-h-[auto]">
          Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. 
          <br className="hidden md:block"/> Specializing in <span className="text-primary font-bold">{text}</span>
          <span className="border-r-2 border-primary animate-pulse ml-1"></span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="relative overflow-hidden group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
             <span className="relative z-10 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" /> View Projects
             </span>
             <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
          <a href={PERSONAL_INFO.resumeUrl} download className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all backdrop-blur-sm group hover:border-white/40">
            <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;